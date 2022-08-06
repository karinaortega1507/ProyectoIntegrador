import { IonButtons, IonContent, IonHeader, IonLabel, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import './Ayuda.css';

const Ayuda: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
     
      <IonContent className="ion-padding">
      <div>
          <IonButtons slot="start">
            <IonMenuButton color="secondary" />
            <IonLabel className="text-title">Ayuda</IonLabel>
          </IonButtons>       
        </div> 
        <IonLabel className="uso-app ion-text-center" color="primary">Uso de la aplicación</IonLabel>
        <p><b><IonText>1. Conectar por bluetooth la cadena.</IonText></b></p> 
        <p><b><IonText>2. En el menu en la opcion dispositivo se visualizará la conexión.</IonText> </b></p>
        <p><b><IonText>3.  En el menu en la opcion seguimiento del proceso judicial.</IonText></b></p>
        <p><b><IonText>4.  En el menu en la opcion información se encuentra tips preventivos.</IonText></b></p>
      </IonContent>
    </IonPage>
  );
};

export default Ayuda;