import {
  IonCard,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonGrid,
  IonIcon,
  IonLabel,
  IonPage,
  IonRow,
} from "@ionic/react";
import { chevronForwardOutline } from "ionicons/icons";

import "./Splash.css";

const Splash: React.FC = () => {
  let toRender;

  if (localStorage.getItem("userId") != null) {
    toRender = (
      <IonFab color="primary" vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton routerLink="/home">
          <IonIcon icon={chevronForwardOutline} />
        </IonFabButton>
      </IonFab>
    );
  } else {
    toRender = (
      <IonFab color="primary" vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton routerLink="/login">
          <IonIcon icon={chevronForwardOutline} />
        </IonFabButton>
      </IonFab>
    );
  }

  return (
    <IonPage scroll-y="false">
      <IonContent>
        {toRender}
        <IonGrid>
          <IonRow className="ion-text-center">
            <IonLabel className="yanapaway ">Yanapaway</IonLabel>
          </IonRow>
          <IonRow>
            <img className="img-center" src="assets/woman.png" />
            <IonLabel className="usa-tu-voz texto"> Usa tu voz </IonLabel>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Splash;
/**className <IonFab color="primary" vertical="bottom" horizontal="end" slot="fixed"></IonFab>
            <IonFabButton routerLink="/login">
              <IonIcon icon={chevronForwardOutline} />
            </IonFabButton>
             </IonFab> 
              {isDataAvailable ? (
                  ) : (
            <IonFab
              color="primary"
              vertical="bottom"
              horizontal="end"
              slot="fixed"
            >
              <IonFabButton routerLink="/login">
                <IonIcon icon={chevronForwardOutline} />
              </IonFabButton>
            </IonFab>
          )}
             */
