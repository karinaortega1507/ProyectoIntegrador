import { IonButton, IonButtons, IonContent, IonLabel, IonMenuButton, IonPage } from '@ionic/react';
import { useParams } from 'react-router';
import './Dispositivo.css';

const Dispositivo: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

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
        <p className="text">Por favor conectarse vía Bluetooth al dispositivo XIAO BLE SENSE</p>
        </div>
        <div className="button-conect">
          <IonButton expand="block" fill="outline">Conectar</IonButton>
        </div>
        <div>
          
        </div>
        
      </IonContent>
    </IonPage>
  );
};

export default Dispositivo;