import {
  IonAlert,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  useIonAlert,
  useIonViewDidEnter,
} from "@ionic/react";
import axios from "axios";
import { closeOutline, createOutline } from "ionicons/icons";
import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import IRedDeApoyoData from "../types/red_apoyo_data.type";
import "./RedDeApoyo.css";

const RedDeApoyo: React.FC = () => {
  //const API_URL = "http://localhost:3000/contactos";
  const API_URL = "https://apis-femicides.herokuapp.com/api/v1/usuarios/";
  const history = useHistory();
  const [isSent, setIsSent] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [areUsers, setAreUsers] = useState<boolean>();
  const [idContact, setIdContact] = useState<string>();
  const userId = localStorage.getItem("userId");
  const [state, setState] = React.useState({
    contactos: [],
  });
  const { reset } = useForm();

  const authAxios = axios.create({
    baseURL: API_URL,
  });
  useIonViewDidEnter(async () => {
    try {
      //fetch and get CONTACTS of user
      
      const result = await authAxios.get(API_URL + userId +"/redapoyos" );
      //const result = await authAxios.get(API_URL);
      console.log(result.data);
      setState({ contactos: result.data });
      console.log("result: " + result.data.length);
      if (result.data.length === 0) setAreUsers(false);
      else setAreUsers(true);
    } catch (error) {
      console.log(error);
    }
  });
  const eliminarContacto = (idContact: string) => {
    axios
      .delete(API_URL + userId +"/redapoyos/" + idContact)
      .then((response) => {
        console.log(response);
        if (response) {
          setMessage("¡Tu contacto se ha eliminado correctamente!");
          setIsSent(true);
        }
        history.push("/redDeApoyo");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  useEffect(() => {}, [state]);

  const list = state.contactos.map((contact: IRedDeApoyoData) => {
    const link = `/editar-contactos/${contact.id}`;
    return (
      <IonCard key={contact.id}>
        <IonItem>
          <IonLabel>
            {contact.nombres} {contact.apellidos}{" "}
          </IonLabel>
          <IonButton routerLink={link} fill="outline" slot="end">
            <IonIcon icon={createOutline}></IonIcon>
          </IonButton>
          <IonButton
            onClick={() => {
              setIdContact(contact.id);
              eliminarContacto(contact.id);
            }}
            color="danger"
            fill="outline"
            slot="end"
          >
            <IonIcon icon={closeOutline}></IonIcon>
          </IonButton>
        </IonItem>
        <IonCardContent>
          <p>
            <b>Teléfono:</b> {contact.celular}
          </p>
          <p>
            <b>Dirección:</b> {contact.direccion}
          </p>
          <p>
            <b>Ciudad:</b> {contact.ciudad}
          </p>
          <p>
            <b>Vínculo:</b> {contact.parentesco}
          </p>
        </IonCardContent>
      </IonCard>
    );
  });

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonAlert
          isOpen={isSent}
          onDidDismiss={() => setIsSent(false)}
          header={"Contacto eliminado"}
          message={message}
          buttons={["ok"]}
        />
        <div>
          <IonButtons slot="start">
            <IonMenuButton color="secondary" />
            <IonLabel className="text-title-red">Red de Apoyo</IonLabel>
          </IonButtons>
        </div>
        {areUsers ? (
          <React.Fragment>
            {list}
            <div>
              <IonButton
                routerLink="/agregar-contactos"
                expand="block"
                fill="solid"
              >
                Agregar
              </IonButton>
            </div>
          </React.Fragment>
        ) : (
          <div>
            <IonButton
              routerLink="/agregar-contactos"
              expand="block"
              fill="solid"
              shape="round"
            >
              Agregar
            </IonButton>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default RedDeApoyo;
