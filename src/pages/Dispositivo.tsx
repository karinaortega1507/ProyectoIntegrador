import {
  IonButton,
  IonButtons,
  IonContent,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonToast,
  useIonLoading,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Dispositivo.css";
import { BLE } from "@awesome-cordova-plugins/ble";
import axios from "axios";

/**const battery = await BleClient.read(device.deviceId, BATTERY_SERVICE, BATTERY_CHARACTERISTIC);
    console.log('battery level', battery.getUint8(0)); */

const Dispositivo: React.FC = () => {
  const API_TWILIO = "https://app-femicide.herokuapp.com/api/alerta";
  const { name } = useParams<{ name: string }>();
  const [showToast, setShowToast] = useState(false);
  const [present, onDidDismiss] = useIonLoading();
  const [isConected, setIsConected] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("conectado") == "true") {
      setIsConected(true);
    }
  }, [showToast]);

  const handleOnConnect = () => {
    try {
      BLE.connect("85:50:FE:89:F2:59:D6:1B");
      setShowToast(true);
      localStorage.setItem("conectado", "true");
    } catch (error) {
      console.error(error);
    }
  };

  const alertRed = () => {
    const idUser = localStorage.getItem("userId");
    axios
      .post(API_TWILIO + "/" + idUser)
      .then((response) => {
        if (response.data) {
          console.log("¡Tu alerta se ha enviado correctamente!");
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  //Listener
  const onData = (buffer: Uint8Array) => {
    // Decode the ArrayBuffer into a typed Array based on the data you expect
    var data = new Uint8Array(buffer);
    //llamada a la API de twilio
    alertRed();
    alert("Button state changed to " + data[0]);
  };
  BLE.startNotification("85:50:FE:89:F2:59:D6:1B", "FF10", "FF11").subscribe(
    (buffer) => {
      onData(buffer);
    }
  );
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div>
          <IonButtons slot="start">
            <IonMenuButton color="secondary" />
            <IonLabel className="text-title">Dispositivo</IonLabel>
          </IonButtons>
        </div>
        <div>
          {!isConected ? (
            <>
              <p className="text">
                Por favor conectarse vía Bluetooth al dispositivo XIAO BLE SENSE
              </p>
              <IonButton
                onClick={() => {
                  present({
                    message: "Conectando...",
                    duration: 3000,
                    spinner: "circles",
                  });
                  handleOnConnect();
                }}
                shape="round"
                className="button-conect"
                expand="block"
                fill="outline"
              >
                Conectar
              </IonButton>
            </>
          ) : (
            <>
              <br />
              <br />
              <IonButton expand="block" fill="solid">
                Conectado
              </IonButton>
            </>
          )}
        </div>

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          color="medium"
          message="Conectado a XIAO BLE SENSE"
          duration={1000}
        />
      </IonContent>
    </IonPage>
  );
};

export default Dispositivo;
