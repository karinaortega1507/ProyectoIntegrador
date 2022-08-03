
import { IonContent, IonFab, IonFabButton, IonFabList, IonIcon, IonLabel, IonPage } from '@ionic/react';
import { settings, logoVimeo, chevronForwardOutline } from 'ionicons/icons';
//import { useParams } from 'react-router';
//import ExploreContainer from '../components/ExploreContainer';
import './Splash.css';

const Splash: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
      <div className="container">
        <IonLabel className="yanapaway"> Yanapaway </IonLabel>
      </div>
      <div >
       <img className="img-center" src="assets/woman.png"/> 
      </div>
      <div className="container">
        <IonLabel className="usa-tu-voz"> Usa tu voz </IonLabel>
      </div>
      <IonFab  color = "primary" vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton routerLink="/home">
            <IonIcon icon={chevronForwardOutline} /> 
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Splash;
