import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import {
  IonAlert,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import "./Login.css";

const validationSchema = yup.object({
  cedula: yup
    .string()
    .nullable()
    .min(10, "Ingrese número de cedula 10 dígitos")
    .required("Cédula es requerida"),
  contrasena: yup
    .string()
    .nullable()
    .min(5, "Contraseña incorrecta")
    .required("Contraseña es requerida"),
});

const Login: React.FC = () => {
  const history = useHistory();
  const [showAlert, setShowAlert] = useState(false);

  return (
    <IonPage className="ion-padding">
      <IonContent>
        <div>
          <IonButtons slot="start">
            <IonMenuButton color="secondary" />
            <IonLabel className="text-title"></IonLabel>
          </IonButtons>
        </div>
        <div className="img-login">
          <img src="assets/icon/img-login.png" alt=""></img>
        </div>
        <br />
        <br />
        <p className="ion-text-center">
          <IonLabel className="txt-proceso">Proceso de seguimiento</IonLabel>
        </p>
        <br />
        <br />
        <p className="ion-text-center">
          <IonLabel className="ion-text-uppercase txt-ingreso-credenciales">
            Ingrese sus credenciales
          </IonLabel>
        </p>
        <Formik
          initialValues={{
            cedula: null,
            contrasena: null,
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            if (
              values.cedula === "0924068620" &&
              values.contrasena === "prueba"
            ) {
              history.push("/home");
              localStorage.setItem(
                "userId",
                JSON.stringify({
                  id: values.cedula,
                })
              );
            } else setShowAlert(true);
          }}
        >
          {(formikProps) => (
            <IonContent className="form-login">
              <IonAlert
                isOpen={showAlert}
                onDidDismiss={() => setShowAlert(false)}
                header="Error"
                subHeader="Verificar credenciales"
                message="Cédula o contraseña incorrectos"
                buttons={["OK"]}
              />
              <form className="form-login" onSubmit={formikProps.handleSubmit}>
                <IonItem>
                  <IonInput
                    type="text"
                    name="cedula"
                    placeholder="Ingrese cédula"
                    value={formikProps.values.cedula}
                    onIonChange={formikProps.handleChange}
                  />
                </IonItem>
                <p className="p-error">
                  {formikProps.touched.cedula && formikProps.errors.cedula}
                </p>
                <IonItem>
                  <IonInput
                    type="password"
                    name="contrasena"
                    placeholder="Ingrese contraseña"
                    value={formikProps.values.contrasena}
                    onIonChange={formikProps.handleChange}
                  />
                </IonItem>
                <p className="p-error">
                  {formikProps.touched.contrasena &&
                    formikProps.errors.contrasena}
                </p>
                <br />
                <br />
                <br />
                <IonButton expand="block" shape="round" type="submit">
                  Iniciar sesión
                </IonButton>
              </form>
            </IonContent>
          )}
        </Formik>
      </IonContent>
    </IonPage>
  );
};

export default Login;

/**<div style={{ fontSize: "smaller" }}>
              <p>VALUES</p>
              <pre>{JSON.stringify(formikProps.values, null, 2)}</pre>

              <p>ERRORS</p>
              <pre>{JSON.stringify(formikProps.errors, null, 2)} </pre>
            </div> */
