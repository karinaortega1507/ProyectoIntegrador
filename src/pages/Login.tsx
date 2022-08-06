import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react/dist/types/components';

const validationSchema = yup.object({
  cedula: yup
    .string()
    .nullable()
    .min(10,"Ingrese número de cedula válido")
    .required("Cédula es requerida"),
  contrasena: yup
    .string()
    .nullable()
    .required("Contraseña es requerida"),
});

const Login: React.FC = () => {
  return (
    <IonPage className="ion-padding">
      <div>
          <IonButtons slot="start">
            <IonMenuButton color="secondary" />
            <IonLabel className="text-title"></IonLabel>
          </IonButtons>
          
        </div>   
      <Formik
        initialValues={{
          cedula: null,
          contrasena: null,
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {formikProps => (
          <IonContent>
            <form onSubmit={formikProps.handleSubmit}>
              <IonItem>
                <IonInput
                  type="text"
                  name="cedula"
                  placeholder="cedula"
                  value={formikProps.values.cedula}
                  onIonChange={formikProps.handleChange}
                />
              </IonItem>
              <p className="error">
                {formikProps.touched.cedula && formikProps.errors.cedula}
              </p>
              <IonItem>
                <IonInput
                  type="text"
                  name="contraseña"
                  placeholder="contraseña"
                  value={formikProps.values.contrasena}
                  onIonChange={formikProps.handleChange}
                />
              </IonItem>
              <p className="error">
                {formikProps.touched.contrasena && formikProps.errors.contrasena}
              </p>
              <IonItem>
                <IonLabel>Select Color</IonLabel>
                <IonSelect
                  name="color"
                  value={formikProps.values.color}
                  onIonChange={formikProps.handleChange}
                >
                  <IonSelectOption value="brown">Brown</IonSelectOption>
                  <IonSelectOption value="blonde">Blonde</IonSelectOption>
                  <IonSelectOption value="black">Black</IonSelectOption>
                  <IonSelectOption value="red">Red</IonSelectOption>
                </IonSelect>
              </IonItem>
              <p className="error">
                {formikProps.touched.color && formikProps.errors.color}
              </p>
              
              <IonButton type="submit">SAVE</IonButton>
            </form>

            <div style={{ fontSize: "smaller" }}>
              <p>VALUES</p>
              <pre>{JSON.stringify(formikProps.values, null, 2)}</pre>

              <p>ERRORS</p>
              <pre>{JSON.stringify(formikProps.errors, null, 2)} </pre>
            </div>
          </IonContent>
        )}
      </Formik>
    </IonPage>
  );
};

export default Login;