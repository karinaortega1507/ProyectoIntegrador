import {
  IonButtons,
  IonContent,
  IonHeader,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

const Home: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <IonContent color="secondary" className="ion-padding ion-text-center">
        <div>
          <IonButtons slot="start">
            <IonMenuButton color="tertiary" />
          </IonButtons>
        </div>
        <IonRouterLink href="/informacion">
          <div className="container">
            <div className="icon-info">
              <img className="img-icon-home" src="/assets/icon/info.png" />
            </div>
          </div>
          <div className="container">
            <IonLabel className="txt-info">Información</IonLabel>
            <IonLabel className="info-content">
              Conoce el comportamiento de un hombre agresivo y solicita medidas
              de protección en caso de necesitarlo.
            </IonLabel>
          </div>
        </IonRouterLink>
        <IonRouterLink href="/seguimiento">
          <div className="icon-seg">
            <img className="img-icon-home" src="/assets/icon/track.png" />
          </div>
          <div className="container">
            <IonLabel className="txt-seg">Seguimiento</IonLabel>
            <IonLabel className="seg-content">
              Señala la etapa del proceso en la que te encuentras y realiza el
              respectivo seguimiento.
            </IonLabel>
          </div>
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Home;
