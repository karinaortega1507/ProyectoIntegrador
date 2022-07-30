import { IonButtons, IonContent, IonHeader, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import './Configuracion.css';

const Configuracion: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
     
      <IonContent className="ion-padding">
      <div>
          <IonButtons slot="start">
            <IonMenuButton color="secondary" />
            <IonLabel className="text-title">Configuración</IonLabel>
          </IonButtons>
          
        </div> 
      </IonContent>
    </IonPage>
  );
};

export default Configuracion;