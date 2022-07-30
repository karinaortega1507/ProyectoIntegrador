import { IonButton, IonButtons, IonContent, IonHeader, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import './Seguimiento.css';

const Seguimiento: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
     
      <IonContent className="ion-padding">
      <div>
          <IonButtons slot="start">
            <IonMenuButton color="secondary" />
          </IonButtons>
        </div> 
        <div className="ion-text-center">
        <IonLabel className="ion-text-md-{modifier} text-seg" color ="primary" >SEGUIMIENTO</IonLabel>
        </div>
        <div>
          <img className="img-seg" src="assets/icon/seguimiento-portada.png" alt=""/>
        </div>
        <div className="button-process">
          <IonButton expand="block" fill="solid">Proceso en curso</IonButton>
        </div>

        <div>
          <img className="vector" src="assets/icon/Vector.png" alt=""/>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Seguimiento;