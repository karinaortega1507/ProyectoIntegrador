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


const AgregarContactos: React.FC = () => {
  const API_URL = "http://localhost:3000/contactos";
  const [isSent, setIsSent] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const history = useHistory();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //const onSubmit = (data: any) => console.log(data);
  const onSubmit = (data: any) => {
    console.log(data);
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
                    {...register("nombre", {
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
                    {...register("telefono", {
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
                  <IonLabel position="floating">Parentesco</IonLabel>
                  <IonInput
                    type="text"
                    {...register("parentesco", {
                      required: "Un parentesco es requerido",
                    })}
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="ion-text-center ion-margin-top">
                <IonButton shape="round" fill="outline" type="submit">
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
