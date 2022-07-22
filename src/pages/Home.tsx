import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
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
          <IonTitle>{name}</IonTitle>
        </div>     
        <div>
          
        <</div>  
      
     
      </IonContent>
    </IonPage>
  );
};

export default Home;
