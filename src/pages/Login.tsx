import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import {
  IonAlert,
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  useIonViewDidEnter,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import axios from "axios";

const validationSchema = yup.object({
  cedula: yup
    .string()
    .nullable()
    .min(10, "Ingrese número de cedula 10 dígitos")
    .required("Cédula es requerida"),
  contrasena: yup
    .string()
    .nullable()
    .min(3, "Contraseña incorrecta")
    .required("Contraseña es requerida"),
});

interface User {
  id: string;
  nombres: string;
  apellidos: string;
  cedula: string;
  clave: string;
}

const API_URL = "https://apis-femicides.herokuapp.com/api/v1/usuarios/";

const Login: React.FC = () => {
  let cedula: any;
  let clave: any;
  const history = useHistory();
  const [showAlert, setShowAlert] = useState(false);
  const authAxios = axios.create({
    baseURL: API_URL,
  });
  const [state, setState] = React.useState({
    usersArray: [],
  });

  useIonViewDidEnter(async () => {
    const users = await authAxios.get(API_URL);
    console.log(users.data);
    setState({ usersArray: users.data });
  });

  const checkUser = () => {
    console.log("cedula " + cedula + "clave " + clave);
    state.usersArray.map((user: User) => {
      if (user.cedula === cedula && user.clave === clave) {
        console.log("id " + user.id);
        localStorage.setItem("userId", user.id);
        localStorage.setItem("userFirstName", user.nombres);
        localStorage.setItem("userLastName", user.apellidos);
      }
    });
  };

  return (
    <IonPage className="ion-padding">
      <IonContent scroll-y="false">
        <div>
          <img
            className="img-login"
            src="assets/icon/img-login.png"
            alt=""
          ></img>
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
            cedula = values.cedula;
            clave = values.contrasena;
            checkUser();
            if (localStorage.getItem("userId")) {
              history.push("/home");
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
            </div> 
            
            localStorage.setItem(
                "userId",
                JSON.stringify({
                  id: values.cedula,
                })
              );
            */
/**
            * 
            * onSubmit={(values) => {

            if (
              values.cedula === "0924068620" &&
              values.contrasena === "prueba"
            ) {
              history.push("/home");
              localStorage.setItem("userId", values.cedula);
            } else setShowAlert(true);
          }}

           if (checkUser(values)) {
              //history.push("/home");
              console.log("home");
              localStorage.setItem("userId", currentUser.id);
           
          }
            */
/**
 *  usersArray.map((user: User) => {
              console.log(user);
              if (
                user.cedula === values.cedula &&
                user.clave === values.contrasena
              ) {
                console.log(values.cedula);
                currentUser.id = user.id;
                currentUser.nombres = user.nombres;
                currentUser.apellidos = user.apellidos;
                currentUser.cedula = user.cedula;
                currentUser.clave = user.clave;
                console.log(currentUser);
                console.log("home");
                localStorage.setItem("userId", currentUser.id);
              } else setShowAlert(true);
            });
 */
