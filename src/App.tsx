import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import Splash from './pages/Splash';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Dispositivo from './pages/Dispositivo';
import Seguimiento from './pages/Seguimiento';
import SeguimientoProceso from './pages/SeguimientoProceso';
import Informacion from './pages/Informacion';
import Ayuda from './pages/Ayuda';
import MedidaProteccion from './pages/MedidaProteccion';
import Comportamiento from './pages/Comportamiento';
import AgregarContactos from './pages/AgregarContactos';
import RutaProceso from './pages/RutaProceso';

import RedDeApoyo from './pages/RedDeApoyo';

import Configuracion from './pages/Configuracion';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';


setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/home" exact={true} component={Home} ></Route>
            <Route path="/" exact={true} component={Splash} ></Route>
            <Route path="/login" exact={true} component={Login} ></Route>
            <Route path="/registro" exact={true} component={Registro} ></Route>
            <Route path="/dispositivo" exact={true} component={Dispositivo} ></Route>
            <Route path="/seguimiento" exact={true} component={Seguimiento} ></Route>
            <Route path="/redDeApoyo" exact={true} component={RedDeApoyo} ></Route>
            <Route exact path="/ayuda" component={Ayuda} ></Route>
            <Route exact path="/informacion" component={Informacion} ></Route>
            <Route path="/configuracion" exact={true} component={Configuracion} ></Route>
            <Route exact path="/medidas-proteccion" component={MedidaProteccion} ></Route>
            <Route exact path="/comportamiento-agresivo" component={Comportamiento} ></Route>
            <Route exact path="/agregar-contactos" component={AgregarContactos} ></Route>
            <Route exact path="/seguimiento-proceso" component={SeguimientoProceso} ></Route>
            <Route exact path="/ruta-del-proceso" component={RutaProceso} ></Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
