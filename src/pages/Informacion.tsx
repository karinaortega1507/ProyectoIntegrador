import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonImg, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import './Informacion.css';

const Informacion: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div>
          <IonButtons slot="start">
            <IonMenuButton color="secondary" />
            <IonLabel className="text-title">Información</IonLabel>
          </IonButtons>
          
        </div>     
        <IonCard routerLink = "/comportamiento-agresivo" className="color-content">
        <IonImg src="assets/images/violencia-genero.jpg"></IonImg>
          <IonCardHeader>
            <IonCardSubtitle className="ion-text-center" color="primary">Comportamientos de un hombre agresivo</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent className="color-text-card">
          ¡Infórmate!
          Existe un gran número de variables y características de comportamiento y de índole psicológico, que puede trazar el perfil de un hombre agresivo.
      </IonCardContent>
        </IonCard>
        <IonCard routerLink = "/medidas-proteccion" className="color-content">
        <IonImg src="assets/images/medida de proteccion.jpg"></IonImg>
          <IonCardHeader>
            <IonCardSubtitle className="ion-text-center" color="primary">Medidas de protección</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent className="color-text-card">
          La intervención en los casos de riesgo amerita la implementación inmediata de acciones de protección y
            de coordinación con otras instituciones que son parte del sistema de protección de derechos.
      </IonCardContent>
        </IonCard>
      
     
      </IonContent>
    </IonPage>
  );
};

export default Informacion;

/**  */