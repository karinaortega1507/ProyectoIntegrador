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
  const [nombres, setNombres] = useState<string>("");
  const [apellido, setApellido] = useState<string>("");
  const [direccion, setDireccion] = useState<any | null>("");
  const [vinculo, setVinculo] = useState<any | null>("");
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
    getContact();
  }, []);

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const getContact = async () => {
    let result = await getId(id);
    if (result) {
      setNombres(result.data.nombres);
      setApellido(result.data.apellidos);
      setDireccion(result.data.direccion);
      setVinculo(result.data.vinculo);
      setTelefono(result.data.telefono);
      setCiudad(result.data.ciudad);
    }
  };
  //console.log(errors);

  /**
   *
   * @param data
   */

  const onSubmit = handleSubmit(async (data: any) => {
    if (data === null) history.push("/redDeApoyo");
    reset();
    await axios
      .put(API_URL + "/" + id, data, config)
      .then((response) => {
        if (response.data) {
          setMessage("¡Tu contacto se ha actualizado correctamente!");
          console.log(response.data);
          setIsSent(true);
        } else {
          setMessage("No hay cambios");
          history.push("/redDeApoyo");
        }

        history.push("/redDeApoyo");
      })
      .catch((error) => {
        console.log(error.response);
        setLoading(false);
      });
  });

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
        <br />

        <form onSubmit={onSubmit}>
          <IonItem>
            <IonLabel>Nombre</IonLabel>
            <IonInput
              value={nombres}
              id="nombres"
              onIonChange={(e) => setNombres(e.detail.value!)}
              {...register("nombres", {
                required: "Un nombre es requerido",
              })}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Apellido</IonLabel>
            <IonInput
              value={apellido}
              id="apellido"
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
              value={telefono}
              id="telefono"
              onIonChange={(e) => setTelefono(e.detail.value!)}
              {...register("telefono")}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Dirección</IonLabel>
            <IonInput
              value={direccion}
              id="direccion"
              onIonChange={(e) => setDireccion(e.detail.value!)}
              {...register("direccion")}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Ciudad</IonLabel>
            <IonInput
              value={ciudad}
              id="ciudad"
              onIonChange={(e) => setCiudad(e.detail.value!)}
              {...register("ciudad")}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Vínculo</IonLabel>
            <IonInput
              value={vinculo}
              id="vinculo"
              onIonChange={(e) => setVinculo(e.detail.value!)}
              {...register("vinculo", {
                required: "Un vínculo es requerido",
              })}
            />
          </IonItem>
          <br />
          <br />
          <br />
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

/*axios
      .put(API_URL + "/" + id, data, config)
      .then((response) => {
        console.log(response);
        if (response.data) {
          setMessage("¡Tu contacto se ha actualizado correctamente!");
          console.log(response.data);
          setIsSent(true);
          reset();
          history.push("/redDeApoyo");
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });*/
//alert(JSON.stringify(data, null, 2));
