import {
  IonAlert,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import axios from "axios";
import { useParams } from "react-router";
import "./AgregarContactos.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useHistory } from "react-router";
import IRedDeApoyoData from "../types/red_apoyo_data.type";

const AgregarContactos: React.FC = () => {
  const API_URL = "http://localhost:3000/contactos";
  //const API_URL = "https://apis-femicides.herokuapp.com/api/v1/redapoyos";
  const [isSent, setIsSent] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const idUsuario = localStorage.getItem("userId");
  console.log("idUsuario ", idUsuario);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IRedDeApoyoData>();

  const onSubmit = (data: IRedDeApoyoData) => {
    console.log("data " + data);
    if (idUsuario != null) data.idUsuario = idUsuario;
    else console.log("idUsiario es null o no se ha asignado");
    axios
      .post(API_URL, data)
      .then((response) => {
        if (response.data) {
          setMessage("¡Tu contacto se ha guardado correctamente!");
          console.log(response.data);
          setIsSent(true);
          reset();
          history.push("/redDeApoyo");
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    //*/ // alert(JSON.stringify(data, null, 2));
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonAlert
          isOpen={isSent}
          onDidDismiss={() => setIsSent(false)}
          header={"Contacto registrado"}
          message={message}
          buttons={["ok"]}
        />
        <div>
          <IonButtons slot="start">
            <IonMenuButton color="secondary" />
            <IonLabel className="text-title">Agregar Contactos</IonLabel>
          </IonButtons>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Nombres</IonLabel>
                  <IonInput
                    type="text"
                    {...register("nombres", {
                      required: "Un nombre es requerido",
                    })}
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Apellidos</IonLabel>
                  <IonInput
                    type="text"
                    {...register("apellidos", {
                      required: "Un apellido es requerido",
                    })}
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Teléfono</IonLabel>
                  <IonInput
                    type="text"
                    {...register("celular", {
                      required: "Un número de teléfono es requerido",
                    })}
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Dirección</IonLabel>
                  <IonInput type="text" {...register("direccion")}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Ciudad</IonLabel>
                  <IonInput type="text" {...register("ciudad")}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Vínculo</IonLabel>
                  <IonInput
                    type="text"
                    {...register("parentesco", {
                      required: "Un vínculo es requerido",
                    })}
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="ion-text-center ion-margin-top">
                <IonButton
                  expand="block"
                  fill="solid"
                  shape="round"
                  type="submit"
                >
                  Guardar
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default AgregarContactos;
