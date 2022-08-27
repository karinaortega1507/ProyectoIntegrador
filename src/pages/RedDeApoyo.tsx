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
  const API_URL = "http://localhost:3000/contactos";
  //const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [isSent, setIsSent] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [areUsers, setAreUsers] = useState<boolean>();
  const [id, setId] = useState<string>();
  const [state, setState] = React.useState({
    contactos: [],
  });
  const { reset } = useForm();

  const authAxios = axios.create({
    baseURL: API_URL,
  });
  useIonViewDidEnter(async () => {
    try {
      //fetch and get CONTACTS
      const result = await authAxios.get(API_URL);
      console.log(result.data);
      setState({ contactos: result.data });
      console.log("result: " + result.data.length);
      if (result.data.length === 0) setAreUsers(false);
      else setAreUsers(true);
    } catch (error) {
      console.log(error);
    }
  });
  const eliminarContacto = (id: string) => {
    axios
      .delete(API_URL + "/" + id)
      .then((response) => {
        if (response.data) {
          setMessage("¡Tu contacto se ha eliminado correctamente!");
          console.log(response.data);
          setIsSent(true);
        }
        history.push("/redDeApoyo");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  useEffect(() => {}, [state]);

  const list = state.contactos.map((user: IRedDeApoyoData) => {
    const link = `/editar-contactos/${user.id}`;
    return (
      <IonCard key={user.id}>
        <IonItem>
          <IonLabel>
            {user.nombres} {user.apellidos}{" "}
          </IonLabel>
          <IonButton routerLink={link} fill="outline" slot="end">
            <IonIcon icon={createOutline}></IonIcon>
          </IonButton>
          <IonButton
            onClick={() => {
              setId(user.id);
              eliminarContacto(user.id);
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
            <b>Teléfono:</b> {user.telefono}
          </p>
          <p>
            <b>Dirección:</b> {user.direccion}
          </p>
          <p>
            <b>Ciudad:</b> {user.ciudad}
          </p>
          <p>
            <b>Vínculo:</b> {user.vinculo}
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

/**
  const EditarContacto = (user: IRedDeApoyoData) => {
    presentAlert({
      header: "Editar contacto",
      buttons: ["OK"],
      inputs: [
        {
          value: `${user.nombre}`,
          handler: (value) => {
            setNombre(value);
            console.log(nombre);
          },
        },
        {
          value: `${user.apellidos}`,
          attributes: {
            maxlength: 8,
          },
          handler: (value) => {
            setApellido(value);
            console.log(apellido);
          },
        },
        {
          value: `${user.telefono}`,
          attributes: {
            maxlength: 10,
          },
          handler: (value) => {
            setTelefono(value);
            console.log(telefono);
          },
        },
        {
          value: `${user.direccion}`,
          handler: (value) => {
            setDireccion(value);
            console.log(direccion);
          },
        },
        {
          value: `${user.ciudad}`,
          handler: (value) => {
            setCiudad(value);
            console.log(ciudad);
          },
        },
        {
          value: `${user.parentesco}`,
          handler: (value) => {
            setParentesco(JSON.stringify(value));
            console.log(parentesco);
          },
        },
      ],
    });
  }; 
  
  onClick={() => {
              eliminarContacto();
            }}*/
/**
 *
 */
