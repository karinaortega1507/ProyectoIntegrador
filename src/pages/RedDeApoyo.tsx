import { IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonIcon, IonItem, IonLabel, IonMenuButton, IonPage } from '@ionic/react';
import { closeOutline, createOutline } from 'ionicons/icons';
import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import IRedDeApoyoData from "../types/red_apoyo_data.type"
import './RedDeApoyo.css';

const listUsers= [
  {
    id: "121211",
    nombre: "San",
    apellidos: "Pérez",
    ciudad: "Gye",
    direccion: "Florida", 
    parentesco: "ninguno"
  },
  {
    id: "121212",
    nombre: "Luis",
    apellidos: "Pérez",
    ciudad: "Gye",
    direccion: "Florida", 
    parentesco: "hermano"
  },
  {
    id: "121213",
    nombre: "José",
    apellidos: "Pérez",
    ciudad: "Gye",
    direccion: "Florida", 
    parentesco: "hijo"
  }
];

const RedDeApoyo: React.FC = () => {
  const [areUsers, setAreUsers] = useState<boolean>(true);
  const list = listUsers.map((user: IRedDeApoyoData) => {
    return(
        <IonCard key={user.id}>
        <IonItem>
            <IonLabel>{user.nombre} {user.apellidos} </IonLabel>
            <IonButton fill="outline" slot="end"><IonIcon icon={createOutline}></IonIcon></IonButton>
            <IonButton color = "danger" fill="outline" slot="end"><IonIcon icon={closeOutline}></IonIcon></IonButton>
        </IonItem>
        <IonCardContent>
          <p><b>Dirección:</b> {user.direccion}</p> 
          <p><b>Ciudad:</b> {user.ciudad}</p>
          <p><b>Parentesco:</b>  {user.parentesco}</p>
        </IonCardContent>      
      </IonCard>      
    )
  })

  return (
    <IonPage>
      <IonContent className="ion-padding">
      <div>
          <IonButtons slot="start" >
            <IonMenuButton color="secondary" />
            <IonLabel className="text-title">Red de Apoyo</IonLabel>
          </IonButtons>
        </div> 
        {areUsers ? (
          <React.Fragment>
              {list}     
            <div>
              <IonButton routerLink="/agregar-contactos" expand="block" fill="solid">Agregar</IonButton>
            </div>
          </React.Fragment>
              
          ) : (
            <div>
              <IonButton routerLink="/agregar-contactos" expand="block" fill="solid">Agregar</IonButton>
            </div>
          )}
        
      </IonContent>
    </IonPage>
  );
};

export default RedDeApoyo;

function EditarContacto(): any {
  throw new Error('Function not implemented.');
}
function EliminarContacto(): any {
  throw new Error('Function not implemented.');
}