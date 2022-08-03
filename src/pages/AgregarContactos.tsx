import { IonButton, IonButtons, IonContent, IonLabel, IonMenuButton, IonPage } from '@ionic/react';
import { useParams } from 'react-router';
import './AgregarContactos.css';

const AgregarContactos: React.FC = () => {

  return (
    <IonPage>
     
      <IonContent className="ion-padding">
        <div>
          <IonButtons slot="start">
            <IonMenuButton color="secondary" />
            <IonLabel className="text-title">Agregar Contactos</IonLabel>
          </IonButtons>
        </div> 
        
        
      </IonContent>
    </IonPage>
  );
};

export default AgregarContactos;