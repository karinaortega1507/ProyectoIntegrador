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
        <IonLabel className="text-seg" color ="primary" >SEGUIMIENTO</IonLabel>
        </div>
        <div className="container">
          <img className="img-seg" src="assets/icon/seguimiento-portada.png" alt=""/>
        </div>
        <div className="container">
          <IonButton routerLink="/seguimiento-proceso" className="button-process" expand="block" fill="solid" shape="round" >Proceso en curso</IonButton>
        </div>

        <div className="vector">
          <img className="vector-img" src="assets/icon/Vector.png" alt=""/>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Seguimiento;
/**className="vector" */