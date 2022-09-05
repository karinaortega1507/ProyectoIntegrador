import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonLabel, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { checkmarkDoneCircleOutline, idCardOutline } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './RutaProceso.css';

const RutaProceso: React.FC = () => {

  const { id } = useParams<{ id: string; }>();
  const [denuncia, setDenuncia] = useState(false);
  const [ambulatoria, setAmbulatoria] = useState(false);
  const [proteccion, setProteccion] = useState(false);
  const [proceso, setProceso] = useState(false);
  console.log("estapa actual" + id)
  useEffect(() => {
    if (id ==="1" || id ==="2"){
      setDenuncia(true);
    }
    if (id ==="3"){
      setAmbulatoria(true);
    }
    if (id ==="4"){
      setProteccion(true);
    }
    if (id ==="5"){
      setProteccion(true);
    }
  
  }, [])
  
  
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
        {!denuncia ?
        <IonButton fill="clear" className="img-denuncia"><img src="assets/icon/denuncia-icon.png" alt=""/></IonButton>:
        <IonButton fill="clear" className="img-denuncia"><img src="assets/icon/denuncia-select.png" alt=""/><IonIcon icon ={checkmarkDoneCircleOutline}></IonIcon></IonButton>}
        <IonText className="img-denuncia-txt">Denuncia</IonText>
        </div>
        <div>
        <img className="img-curva" src="assets/icon/camino-curva.png" alt="" />
        </div>
        <div>
        <IonText className="img-asistencia-txt">Asistencia Ambulatoria</IonText>
        {!ambulatoria?<IonButton fill="clear" className="img-ambulancia"><img src="assets/icon/ambulancia-icon.png" alt=""/></IonButton>:
        <IonButton fill="clear" className="img-ambulancia"><img src="assets/icon/ambulancia-select.png" alt=""/></IonButton>}
        </div>
        <div>
        <img className="img-curva1" src="assets/icon/camino-curva2.png" alt="" />
        </div>
        <div>
          <IonText className="img-admision-txt">Admisión a trámites</IonText>
          {!proteccion? <img className="img-recep-denuncia" src="assets/icon/recep-denuncia.png" alt="" />:
          <img className="img-recep-denuncia" src="assets/icon/recep-select.png" alt="" />}
          
        </div>
        <div>
        <img className="img-curva2" src="assets/icon/camino-curva2.png" alt="" />
        </div>
        <div>
          {!proceso ?<img className="img-proteccion" src="assets/icon/proteccion.png" alt="" />:
          <img className="img-proteccion" src="assets/icon/proteccion-select.png" alt="" />}
          
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