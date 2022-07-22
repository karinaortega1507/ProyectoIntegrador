import { IonButton, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as yup from "yup";
//import ExploreContainer from '../components/ExploreContainer';
import './Splash.css';

const schema = yup.object().shape({
    cedula: yup.string().required("Se requiere numero de cedula"),
    password: yup.string()
        .required("Se requiere de una contraseña"),
    passwordconfirmed: yup.string()
        .required("Se requiere de una contraseña"),
  });

const Registro: React.FC = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
    const submitForm = handleSubmit((data:any) => {
        console.log(data);
        
      });
    return (
        <IonPage>
            <IonHeader >
                <IonToolbar><IonTitle >
                    Registro
                </IonTitle></IonToolbar>
            </IonHeader>
        <IonContent className="ion-padding">
        
        <form method="POST" encType="multipart/form-data"
        onSubmit={submitForm} className="formRegistro">
       
            <IonItem >
            <IonLabel>Cedula:</IonLabel>
            <IonInput type="text" {...register("cedula")}></IonInput>
            <IonLabel><p>{errors.cedula?.message}</p></IonLabel>
            </IonItem>
            <IonItem >
            <IonLabel>Contraseña:</IonLabel>
            <IonInput type="password"  {...register("password")}></IonInput>
            <IonLabel><p>{errors.password?.message}</p></IonLabel>
            </IonItem>
            <IonItem >
            <IonLabel>Confirmar contraseña:</IonLabel>
            <IonInput type="password"  {...register("passwordConfirmed")}></IonInput>
            <IonLabel><p>{errors.passwordConfirmed?.message}</p></IonLabel>
            </IonItem>
            <IonButton routerLink="/Home" expand="block" type="submit" slot="end" className="submitRegistro">Registrarse</IonButton>
       
        </form>
        </IonContent>
        </IonPage>
    );
};

export default Registro;