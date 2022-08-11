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
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import "./EditarContactos.css";
import IRedDeApoyoData from "../types/red_apoyo_data.type";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { searchContactById, getId } from "../services/red_apoyo_service";

import axios from "axios";

const EditarContactos: React.FC = () => {
  const API_URL = "http://localhost:3000/contactos";
  const { id } = useParams<{ id: string }>();
  const [nombre, setNombre] = useState<string>("");
  const [apellido, setApellido] = useState<string>("");
  const [direccion, setDireccion] = useState<any>("");
  const [parentesco, setParentesco] = useState<any>("");
  const [telefono, setTelefono] = useState<any>("");
  const [ciudad, setCiudad] = useState<any>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IRedDeApoyoData>();

  const [isSent, setIsSent] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    getCurso();
  }, []);

  const getCurso = async () => {
    let result = await getId(id);
    if (result) {
      setNombre(result.data.nombre);
      setApellido(result.data.apellidos);
      setDireccion(result.data.direccion);
      setParentesco(result.data.parentesco);
      setTelefono(result.data.telefono);
      setCiudad(result.data.ciudad);
    }
  };
  //console.log(errors);

  /**
   *
   * @param data
   */

  const onSubmit = (data: any) => {
    axios
      .put(API_URL + "/" + id, data)
      .then((response) => {
        if (response.data) {
          setMessage("¡Tu contacto se ha guardado correctamente!");
          console.log(response.data);
          setIsSent(true);
          reset();
          history.push("/redDeApoyo");
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    //alert(JSON.stringify(data, null, 2));
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonAlert
          isOpen={isSent}
          onDidDismiss={() => setIsSent(false)}
          header={"Contacto actualizado"}
          message={message}
          buttons={["ok"]}
        />
        <div>
          <IonButtons slot="start">
            <IonMenuButton color="secondary" />
            <IonLabel className="text-title">Editar Contacto</IonLabel>
          </IonButtons>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* === ION INPUT === */}
          <IonItem>
            <IonLabel>Nombre</IonLabel>
            <IonInput
              value={nombre}
              onIonChange={(e) => setNombre(e.detail.value!)}
              {...register("nombre", {
                required: "Un nombre es requerido",
              })}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Apellido</IonLabel>
            <IonInput
              value={apellido}
              onIonChange={(e) => setApellido(e.detail.value!)}
              {...register("apellidos", {
                required: "Un apellido es requerido",
              })}
            />
          </IonItem>

          <IonItem>
            <IonLabel>Teléfono</IonLabel>
            <IonInput
              className="ion-text-left"
              type="tel"
              color="primary"
              value={telefono}
              onIonChange={(e) => setTelefono(e.detail.value!)}
              {...register("telefono")}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Dirección</IonLabel>
            <IonInput
              value={direccion}
              onIonChange={(e) => setDireccion(e.detail.value!)}
              {...register("direccion")}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Ciudad</IonLabel>
            <IonInput
              value={ciudad}
              onIonChange={(e) => setCiudad(e.detail.value!)}
              {...register("ciudad")}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Parentesco</IonLabel>
            <IonInput
              value={parentesco}
              onIonChange={(e) => setParentesco(e.detail.value!)}
              {...register("parentesco", {
                required: "Un parentesco es requerido",
              })}
            />
          </IonItem>
          <div>
            <IonButton shape="round" expand="block" type="submit">
              Guardar
            </IonButton>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default EditarContactos;

/**
 * 
  const [nombre, setNombre] = useState<string>("");
  const [apellido, setApellido] = useState<string>("");
  const [direccion, setDireccion] = useState<string>("");
  const [ciudad, setCiudad] = useState<string>("");
  const [parentesco, setParentesco] = useState<string>("");
  const [telefono, setTelefono] = useState<string>("");
 */
