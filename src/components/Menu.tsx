import {
  IonAvatar,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
  analyticsOutline,
  analyticsSharp,
  exitOutline,
  exitSharp,
  heartCircleOutline,
  heartCircleSharp,
  helpCircleOutline,
  helpCircleSharp,
  informationCircleOutline,
  informationCircleSharp,
  peopleOutline,
  peopleSharp,
  settingsOutline,
  settingsSharp,
} from "ionicons/icons";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Dispositivo",
    url: "/dispositivo",
    iosIcon: heartCircleOutline,
    mdIcon: heartCircleSharp,
  },
  {
    title: "Seguimiento",
    url: "/seguimiento",
    iosIcon: analyticsOutline,
    mdIcon: analyticsSharp,
  },
  {
    title: "Información",
    url: "/informacion",
    iosIcon: informationCircleOutline,
    mdIcon: informationCircleSharp,
  },
  {
    title: "Red de Apoyo",
    url: "/redDeApoyo",
    iosIcon: peopleOutline,
    mdIcon: peopleSharp,
  },
  {
    title: "Ayuda",
    url: "/ayuda",
    iosIcon: helpCircleOutline,
    mdIcon: helpCircleSharp,
  },
  {
    title: "Salir",
    url: "/",
    iosIcon: exitOutline,
    mdIcon: exitSharp,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();
  const nombres = localStorage.getItem("userFirstName");
  const apellidos = localStorage.getItem("userLastName");
  const borrarLocalStorage = () => {
    //localStorage.removeItem("userId");
    localStorage.removeItem("userFirstName");
    localStorage.removeItem("userLastName");
  };
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>
            <IonItem>
              <IonAvatar>
                <img src="/assets/avatar.png" />
              </IonAvatar>
            </IonItem>
          </IonListHeader>
          <IonNote>
            {nombres} {apellidos}
          </IonNote>
          {appPages.map((appPage, index) => {
            if (location.pathname === "/") borrarLocalStorage();
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel dir="start">{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
