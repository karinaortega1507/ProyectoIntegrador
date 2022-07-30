import { IonButtons, IonContent, IonLabel, IonMenuButton, IonPage, IonSlide, IonSlides } from '@ionic/react';
import { useParams } from 'react-router';
import './Comportamiento.css';


// Optional parameters to pass to the swiper instance.
// See https://swiperjs.com/swiper-api for valid options.
const slideOpts = {
  initialSlide: 1,
  speed: 200
};

const Comportamiento: React.FC = () => {

  return (
    <IonPage>
      <IonContent  className="ion-padding" scroll-y="false">
      <div>
          <IonButtons slot="start">
            <IonMenuButton color="secondary" />
            <IonLabel className="text-title">Comportamientos de un hombre agresivo</IonLabel>
          </IonButtons>
        </div> 
        <IonSlides  pager={true} options={slideOpts}>
          <IonSlide > 
            <div>
              <img className="img-cmp" src="assets/images/gritando.jpg" alt=""/>
              <h2 className="text-1">Celos</h2>
              <p className="text-2">
              Este rasgo está presente en casi todas las personas maltratadoras, ante cualquier señal -la mujer llega 5 minutos más tarde a casa, la ve hablando con alguien, etc.- despierta sus celos y su conducta controladora.
              </p>
            </div>
            
          </IonSlide>
          <IonSlide>
            <div>
              <img className="img-cmp" src="assets/images/violencia-familiar-hombres-agresivos.jpg" alt=""/>
              <h2 className="text-1">Aislamiento</h2>
              <p className="text-2">
              La persona que agrede tiene dificultad o imposibilidad de mantener un contacto afectivo e íntimo, aunque exprese tener relaciones con mucha gente, éstas son superficiales, el aislamiento es emocional.
              </p>
            </div>
          </IonSlide>
          <IonSlide>
            <div>
              <img className="img-cmp" src="assets/images/manipulacion.jpg" alt=""/>
              <h2 className="text-1">Conductas controladoras y manipuladoras</h2>
              <p className="text-2">
              El agresor busca manipular y dominar a su víctima de todas las formas posibles, cuando el hombre siente que pierde ese control surge la agresión física. La violencia emocional es utilizada para neutralizar cualquier iniciativa de la mujer.
              </p>
            </div>
          </IonSlide>
    </IonSlides>
     
      </IonContent>
    </IonPage>
  );
};

export default Comportamiento;