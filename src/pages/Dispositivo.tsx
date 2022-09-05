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
const idUsuaria= localStorage.getItem('userId');
const Dispositivo: React.FC = () => {
  const API_TWILIO = `https://apis-femicides.herokuapp.com/api/v1/usuario/${idUsuaria}/envios/sms`;
  const API_TWILIO_WS = `https://apis-femicides.herokuapp.com/api/v1/usuario/${idUsuaria}/envios/whatsapp`;
  const API_TWILIO_CALL = `https://apis-femicides.herokuapp.com/api/v1/usuario/call`;
  const { name } = useParams<{ name: string }>();
  const [showToast, setShowToast] = useState(false);
  //const [showToastAlarm, setShowToastAlarm] = useState(false);
  const [present, onDidDismiss] = useIonLoading();
  const [isConected, setIsConected] = useState(false);
  

  useEffect(() => {
   // BLE.scan([],5).subscribe((result)=>{
   //   console.log(result);
   //});
   BLE.isConnected('D6:C9:72:53:68:90').then(
    () => { 
      console.log('connected'); 
      try {           
        BLE.startNotification("D6:C9:72:53:68:90", "2de12833-2ff8-427c-a1c1-d8a31a8f6732", "d071047f-988f-4710-a81f-0bcc54c53c7a").subscribe(
          (buffer) => {
            console.log("Buffer ",buffer);
            console.log("buffer length",buffer[0].byteLength);
            if (buffer[0].byteLength === 5) {
              console.log("Alerta enviada");
              //alertRedMsm();
              //alertRedWs();
              alertRedCall();
          }
        });
        
      } catch (error) {
        console.log(error);
        
      }

    },
    () => { console.log('not connected'); }
  );
 
    
}, [isConected]);
const handleOnConnect = () => {
  BLE.scan([],5).subscribe((devices)=> {
    console.log(devices);
  });
  try {
    BLE.connect("D6:C9:72:53:68:90").subscribe((peripheral) => {
      console.log("peripheral",peripheral); 
      if(peripheral){
        setShowToast(true);
        localStorage.setItem("conectado", "true");
        setIsConected(true);
      }
    });
  } catch (error) {
    console.error(error);
  }
};

const alertRedMsm = () => {
  axios
    .post(API_TWILIO)
    .then((response) => {
      if (response.data) {
        console.log("¡Tu alerta se ha enviado correctamente!");
        console.log("respuesta de SMS",response.data);
        //setShowToastAlarm(true);
      }
    })
    .catch((error) => {
      console.log(error.response.data);
    });
};
const alertRedWs = () => {
  axios
    .post(API_TWILIO_WS)
    .then((response) => {
      if (response.data) {
        console.log("¡Tu alerta se ha enviado correctamente!");
        console.log("respuesta de WS",response.data);
        //setShowToastAlarm(true);
      }
    })
    .catch((error) => {
      console.log(error.response.data);
    });
};

const alertRedCall = () => {
  axios
    .get(API_TWILIO_CALL)
    .then((response) => {
      if (response.data) {
        console.log("¡Tu alerta se ha enviado correctamente!");
        console.log("respuesta de llamada",response.data);
        //setShowToastAlarm(true);
      }
    })
    .catch((error) => {
      console.log(error.response.data);
    });
};

  
  
  return (
    <IonPage>
      <IonContent className="ion-padding">
      <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          color="medium"
          message="Conectado a XIAO BLE SENSE"
          duration={1000}
        />
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
              <IonButton expand="block" fill="solid" shape="round">
                Conectado
              </IonButton>
            </>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Dispositivo;
/**<IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          color="medium"
          message="Conectado a XIAO BLE SENSE"
          duration={1000}
        /> */
/*  useEffect(() => {
    if (localStorage.getItem("conectado") == "true") {
      setIsConected(true);
    }
  }, [showToast]);*/