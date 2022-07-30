import { IonButtons, IonContent, IonLabel, IonMenuButton, IonPage } from '@ionic/react';
import { useParams } from 'react-router';
import './MedidaProteccion.css';

const MedidaProteccion: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div>
          <IonButtons slot="start">
            <IonMenuButton color="secondary" />
            <IonLabel className="text-title">Medidas de Protección</IonLabel>
          </IonButtons>
        </div>    
       <div className="card-1" >     
          <img className="img-icon" src="assets/icon/no.png" alt=""></img>
          <p className="text-content">Prohibición del agresor de acercase a la víctima o de realizar actos de persecución o de intimidación en cualquier lugar donde este se encuentre.</p>
        </div>
        <div className="card-2" >     
          <img className="img-icon" src="assets/icon/prohibido.png" alt=""></img>
          <p className="text-content">Prohibición del agresor de realizar actos de persecución o de intimidación la víctima o miembros del núcleo familiar por sí mismo o a través de terceros.</p>
        </div>
        <div className="card-3" >     
          <img className="img-icon" src="assets/icon/boleta.png" alt=""></img>
          <p className="text-content">Extensión de una boleta de auxilio a favor de la víctima y/o de miembros del núcleo familiar.</p>
        </div>
        <div className="card-4" >     
          <img className="img-icon" src="assets/icon/fuera.png" alt=""></img>
          <p className="text-content">Orden de salida de la persona procesada de la vivienda o morada, si la convivencia implica un riesgo para la seguridad física, 
psíquica o sexual de la víctima.</p>
        </div>
        <div className="card-5" >     
          <img className="img-icon" src="assets/icon/domicilio.png"    alt=""></img>
          <p className="text-content">Reintegro de la víctima a su domicilio y salida simultanea de la persona procesada cuando se trate de una vivienda común.</p>
        </div>
      
        
       
        
        
      </IonContent>
       
    </IonPage>
  );
};

export default MedidaProteccion;
/** */