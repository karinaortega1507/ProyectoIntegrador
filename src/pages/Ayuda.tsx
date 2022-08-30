import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  analyticsOutline,
  bluetoothOutline,
  informationCircleOutline,
  peopleOutline,
  pin,
} from "ionicons/icons";
import { useParams } from "react-router";
import "./Ayuda.css";

const Ayuda: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div>
          <IonButtons slot="start">
            <IonMenuButton color="secondary" />
            <IonLabel className="text-title">Ayuda</IonLabel>
          </IonButtons>
        </div>
        <IonLabel className="uso-app ion-text-center" color="primary">
          Uso de la aplicación
        </IonLabel>
        <p>
          <b>
            <IonText></IonText>
          </b>
        </p>
        <IonCard>
          <IonItem>
            <IonIcon icon={bluetoothOutline} slot="start" />
            <IonLabel>1. Conectar a BLE</IonLabel>
            <IonButton routerLink={"/dispositivo"} fill="outline" slot="end">
              Ir
            </IonButton>
          </IonItem>

          <IonCardContent>
            Realizar la conexión bluetooth entre el accesorio y el teléfono
            móvil. Ir al menu y seleccionar Dispositivo. Este paso se reliza una
            sola ocasión junto con el servidor público asignado.
          </IonCardContent>
          <IonImg
            className="img-1"
            src={"/assets/images/conectar-dispositivo.png"}
          ></IonImg>
        </IonCard>
        <IonCard>
          <IonItem>
            <IonIcon icon={bluetoothOutline} slot="start" />
            <IonLabel>2. Conexión exitosa </IonLabel>
            <IonButton routerLink={"/dispositivo"} fill="outline" slot="end">
              Ir
            </IonButton>
          </IonItem>

          <IonCardContent>
            En el menu seleccionar Dispositivo y se visualizará el estado
            conectado.
          </IonCardContent>
          <IonImg
            className="img-1"
            src={"/assets/images/conectado.png"}
          ></IonImg>
        </IonCard>
        <IonCard>
          <IonItem>
            <IonIcon icon={analyticsOutline} slot="start" />
            <IonLabel>3. Seguimiento</IonLabel>
            <IonButton
              routerLink={"/seguimiento-proceso"}
              fill="outline"
              slot="end"
            >
              Ir
            </IonButton>
          </IonItem>

          <IonCardContent>
            Seleccionar Seguimiento dentro del menu para comenzar a establecer
            la etapa en la que se encuentra. Sólo deberá presionar el botón de
            la etapa correspondiente y presionar el botón guardar.
          </IonCardContent>
          <IonImg
            className="img-1"
            src={"/assets/images/seguimiento.png"}
          ></IonImg>
        </IonCard>
        <IonCard>
          <IonItem>
            <IonIcon icon={informationCircleOutline} slot="start" />
            <IonLabel>4. Información</IonLabel>
            <IonButton routerLink={"/informacion"} fill="outline" slot="end">
              Ir
            </IonButton>
          </IonItem>
          <IonCardContent>
            Seleccionar información dentro del menu para conocer sobre las
            meddas de protección y conductas de un posible agresor. Sólo deberá
            seleccionar el contenido que desea visualizar y se mostrará la
            información.
          </IonCardContent>
          <IonImg
            className="img-1"
            src={"/assets/images/informacion.png"}
          ></IonImg>
        </IonCard>
        <IonCard>
          <IonItem>
            <IonIcon icon={peopleOutline} slot="start" />
            <IonLabel>5. Red de Apoyo</IonLabel>
            <IonButton routerLink={"/redDeApoyo"} fill="outline" slot="end">
              Ir
            </IonButton>
          </IonItem>
          <IonCardContent>
            Esta sección la puedes encontrar dentro del menú. Aquí podrás
            agregar uno a uno a los contactos que pueden auxiliarte en caso de
            emergencia.
          </IonCardContent>
          <IonImg className="img-1" src={"/assets/images/red.png"}></IonImg>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Ayuda;
