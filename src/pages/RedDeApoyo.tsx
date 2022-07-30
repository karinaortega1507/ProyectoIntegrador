import { IonButton, IonButtons, IonContent, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { closeOutline, createOutline } from 'ionicons/icons';
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
  const [areUsers, setAreUsers] = useState<boolean>(false);
  

  
  
  const list = listUsers.map((user: IRedDeApoyoData) => {
    return(
      <IonList key={user.id}>
      <IonItem >
        <IonLabel className="ion-text-justify">
          <p><a className="color-text-p"><b>Nombre: </b></a><a className="color-text-p">{user.nombre}</a></p>
          <p><a className="color-text-p"><b>Apellidos: </b></a><a className="color-text-p">{user.apellidos}</a></p>
          <p><a className="color-text-p"><b>Ciudad: </b></a><a className="color-text-p">{user.ciudad}</a></p>
          <p><a className="color-text-p"><b>Dirección: </b></a><a className="color-text-p">{user.direccion}</a></p>
          <p><a className="color-text-p"><b>Parentesco: </b></a><a className="color-text-p">{user.parentesco}</a></p>
        </IonLabel>
        <IonButton className="ion-text-right" color="primary" onClick={() => EditarContacto()}>
              <IonIcon icon={createOutline}></IonIcon>
          </IonButton>
          <IonButton className="ion-text-right" color="danger" onClick={() => EliminarContacto()}>
              <IonIcon icon={closeOutline}></IonIcon>
            </IonButton>
      </IonItem>
      
      
    </IonList>
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
          list         
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
