import { IonButton, IonButtons, IonChip, IonContent, IonLabel, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { useParams } from 'react-router';
import './SeguimientoProceso.css';

const SeguimientoProceso: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const[escrita, setEscrita] = useState<boolean>(false);
  const[verbal, setVerbal] = useState<boolean>(false);
  const[ambulatoriaSi, setAmbulatoriaSi] = useState<boolean>(false);
  const[ambulatoriaNo, setAmbulatoriaNo] = useState<boolean>(false);
  const[vMedica, setvMedica] = useState<boolean>(false);
  const[vRiesgo, setvRiesgo] = useState<boolean>(false);
  const[mProteccion, setmProteccion] = useState<boolean>(false);
  const[recibido, setRecibido] = useState<boolean>(false);
  const[enProceso, setEnProceso] = useState<boolean>(false);
  return (
    <IonPage>
     
      <IonContent className="ion-padding">
      <div>
          <IonButtons slot="start">
            <IonMenuButton color="secondary" />
            <IonLabel className="text-title">Seguimiento</IonLabel>
          </IonButtons>
        </div> 
        <div>
          <p><IonText>Denuncia</IonText></p>
          <p className="container">
            {
            escrita ? <IonButton className ="button-option"color="secondary"  shape="round" fill="solid">Escrita</IonButton>
                    : <IonButton onClick={()=>setEscrita(true)} className ="button-option"color="secondary"  shape="round" fill="outline">Escrita</IonButton>
            }
            {
              verbal ? <IonButton className ="button-option"color="warning"  shape="round" fill="solid">Verbal</IonButton>
                     : <IonButton onClick={()=>setVerbal(true)} className ="button-option" color="warning"  shape="round" fill="outline">Verbal</IonButton>
            }
            
          </p>
          <p><IonText>¿Requiere denuncia ambulatoria?</IonText></p>
          <p className="container">
            {
              ambulatoriaSi ? <IonButton className ="button-option"color="secondary"  shape="round" fill="solid">Sí</IonButton>
              : <IonButton onClick={()=>setAmbulatoriaSi(true)} className ="button-option"color="secondary"  shape="round" fill="outline">Sí</IonButton>
            }
            {
              ambulatoriaNo ? <IonButton className ="button-option"color="warning"  shape="round" fill="solid">No</IonButton>
              : <IonButton onClick={()=>setAmbulatoriaNo(true)} className ="button-option" color="warning"  shape="round" fill="outline">No</IonButton>
            }

          </p>
          <p><IonText>Tipo de Asistencia Ambulatoria</IonText></p>
          <p className="container">
            {
              vMedica ? <IonButton className ="button-valoracion ion-text-center" color="secondary"  shape="round" fill="solid">Valoración Médica</IonButton>
              : <IonButton onClick={()=>setvMedica(true)} className ="button-valoracion" color="secondary"  shape="round" fill="outline">Valoración Médica</IonButton>
            }
            {
              vRiesgo ? <IonButton className ="button-valoracion ion-text-center"color="warning"  shape="round" fill="solid">Valoración de Riesgo</IonButton>
              : <IonButton onClick={()=>setvRiesgo(true)} className ="button-valoracion" color="warning"  shape="round" fill="outline">Valoración de Riesgo</IonButton>
            }

          </p>
          <p><IonText>Admisión a trámites</IonText></p>
          <p className="container">
            {
              mProteccion ? <IonButton className ="button-mProteccion ion-text-center"color="secondary"  shape="round" fill="solid">Emisión de Medidas de Protección</IonButton>
              : <IonButton onClick={()=>setmProteccion(true)} className ="button-mProteccion"color="secondary"  shape="round" fill="outline">Emisión de Medidas de Protección</IonButton>
            }

          </p>
          <p><IonText>Medidas de Protección</IonText></p>
          <p className="container">
            {
            recibido ? <IonButton className ="button-mProteccion"color="secondary"  shape="round" fill="solid">Recibido</IonButton>
                    : <IonButton onClick={()=>setRecibido(true)} className ="button-option"color="secondary"  shape="round" fill="outline">Recibido</IonButton>
            }
            {
              enProceso ? <IonButton className ="button-mProteccion"color="warning"  shape="round" fill="solid">En Proceso</IonButton>
                     : <IonButton onClick={()=>setEnProceso(true)} className ="button-option" color="warning"  shape="round" fill="outline">En Proceso</IonButton>
            }
            
          </p>
          <div className="vector-position">
          <img className="img-vector" src="assets/icon/Vector.png" alt=""/>
          <IonButton className="img-mapa" routerLink="/ruta-del-proceso" fill="clear"> <img src="assets/icon/mapa.png" alt=""/></IonButton>
        </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SeguimientoProceso;