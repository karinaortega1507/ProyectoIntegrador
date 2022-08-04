import { IonButton, IonButtons, IonContent, IonHeader, IonLabel, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import './RutaProceso.css';

const RutaProceso: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div>
          <IonButtons slot="start">
            <IonMenuButton color="secondary" />
            <IonLabel className="text-title">Ruta del proceso</IonLabel>
          </IonButtons>
        </div> 
       <div className="ion-padding">
       <div>
        <IonButton fill="clear" className="img-denuncia"><img src="assets/icon/denuncia-icon.png" alt=""/></IonButton>
        <IonText className="img-denuncia-txt">Denuncia</IonText>
        </div>
        <div>
        <img className="img-curva" src="assets/icon/camino-curva.png" alt="" />
        </div>
        <div>
        <IonText className="img-asistencia-txt">Asistencia Ambulatoria</IonText>
        <IonButton fill="clear" className="img-ambulancia"><img src="assets/icon/ambulancia-icon.png" alt=""/></IonButton>
        </div>
        <div>
        <img className="img-curva1" src="assets/icon/camino-curva1.png" alt="" />
        </div>
        <div>
          <IonText className="img-admision-txt">Admisión a trámites</IonText>
          <img className="img-recep-denuncia" src="assets/icon/recep-denuncia.png" alt="" />
        </div>
        <div>
        <img className="img-curva2" src="assets/icon/camino-curva2.png" alt="" />
        </div>
        <div>
          <img className="img-proteccion" src="assets/icon/proteccion.png" alt="" />
          <IonText className="img-proteccion-txt">Medidas de Protección</IonText>
        </div>
        <div className="vector-position">
          <img className="img-vector" src="assets/icon/Vector.png" alt=""/>
          <IonButton className="img-mapa" routerLink="/ruta-del-proceso" fill="clear"> <img src="assets/icon/mapa.png" alt=""/></IonButton>
        </div>
       </div>
      </IonContent>
    </IonPage>
  );
};

export default RutaProceso;