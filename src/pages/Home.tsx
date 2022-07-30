import { IonButtons, IonContent, IonHeader, IonLabel, IonMenuButton, IonPage, IonRouterLink, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
     
      <IonContent color= "secondary" className="ion-padding">
        <div>
          <IonButtons slot="start">
            <IonMenuButton color="tertiary" />
          </IonButtons>
        </div>  
        <IonRouterLink href="/informacion">
          <div className="informacion">
            <img className = "img-icon-home" src="/assets/icon/info.png"/>  
          </div>  
          <IonLabel className ="txt-info">Información</IonLabel>
          <IonLabel className ="txt-info-desc">Conoce el comportamiento de un hombre agresivo y solicita medidas de protección en caso de necesitarlo.</IonLabel>
        </IonRouterLink>   
        <IonRouterLink href="/seguimiento">
        <div className="seguimiento">
          <img className = "img-icon-home" src="/assets/icon/track.png"/>  
        </div>  
        <IonLabel className ="txt-seg">Seguimiento</IonLabel>
        <IonLabel className ="txt-seg-desc">Señala la etapa del proceso en la que te encuentras y realiza el respectivo seguimiento.</IonLabel>
        </IonRouterLink>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
