import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonSegment, IonSegmentButton } from '@ionic/react';
import { useParams } from 'react-router';
import './AgregarContactos.css';

const AgregarContactos: React.FC = () => {

  return (
    <IonPage>
     
      <IonContent className="ion-padding">
        <div>
          <IonButtons slot="start">
            <IonMenuButton color="secondary" />
            <IonLabel className="text-title">Agregar Contactos</IonLabel>
          </IonButtons>
        </div> 
        <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position='floating'>
                                        Nombres
                                    </IonLabel>
                                    <IonInput  type='text'></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position='floating'>
                                        Apellidos
                                    </IonLabel>
                                    <IonInput  type='text'></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position='floating'>
                                        Ciudad
                                    </IonLabel>
                                    <IonInput  type='text'></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position='floating'>
                                        Parentesco
                                    </IonLabel>
                                    <IonInput  type='text'></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className='ion-text-center ion-margin-top'>
                                <IonButton shape='round' fill='outline' >
                                    Guardar
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
        
        
      </IonContent>
    </IonPage>
  );
};

export default AgregarContactos;