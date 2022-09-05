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
import { searchContactById, getContactById } from "../services/red_apoyo_service";
import axios from "axios";

const EditarContactos: React.FC = () => {
  //const API_URL = "http://localhost:3000/contactos";
  const API_URL = "https://apis-femicides.herokuapp.com/api/v1/usuarios/";
  const { id } = useParams<{ id: string }>();
  const [nombres, setNombres] = useState<string>("");
  const [apellido, setApellido] = useState<string>("");
  const [direccion, setDireccion] = useState<any | null>("");
  const [vinculo, setVinculo] = useState<any | null>("");
  const [telefono, setTelefono] = useState<any>("");
  const [ciudad, setCiudad] = useState<any>("");
  const idUsuaria= localStorage.getItem("userId");
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
    let result = await getContactById(id);
    console.log(result.data);
    if (result) {
      setNombres(result.data.nombres);
      setApellido(result.data.apellidos);
      setDireccion(result.data.direccion);
      setVinculo(result.data.parentesco);
      setTelefono(result.data.celular);
      setCiudad(result.data.ciudad);
    }
  };
  /**
   * @param data
   */

  const onSubmit = handleSubmit(async (data: IRedDeApoyoData) => {
    if (data === null) history.push("/redDeApoyo");
    console.log("data " + JSON.stringify(data));
    let nwData: IRedDeApoyoData = JSON.parse(JSON.stringify(data));
    nwData.nombres = nombres;
    nwData.apellidos = apellido;
    nwData.celular = telefono;
    nwData.direccion = direccion;
    nwData.ciudad = ciudad;
    nwData.parentesco = vinculo;
    console.log("nwData " + nwData);
    await axios
      .put(API_URL + idUsuaria + "/redapoyos/" + id, nwData, config)
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
            <IonLabel>
              <b>Nombre</b>
            </IonLabel>
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
            <IonLabel>
              <b>Apellido</b>
            </IonLabel>
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
            <IonLabel>
              <b>Teléfono</b>{" "}
            </IonLabel>
            <IonInput
              className="ion-text-left"
              type="tel"
              value={telefono}
              id="celular"
              onIonChange={(e) => setTelefono(e.detail.value!)}
              {...register("celular")}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>
              <b>Dirección</b>
            </IonLabel>
            <IonInput
              value={direccion}
              id="direccion"
              onIonChange={(e) => setDireccion(e.detail.value!)}
              {...register("direccion")}
            />
          </IonItem>
          <IonItem>
            <IonLabel>
              <b>Ciudad</b>
            </IonLabel>
            <IonInput
              value={ciudad}
              id="ciudad"
              onIonChange={(e) => setCiudad(e.detail.value!)}
              {...register("ciudad")}
            />
          </IonItem>
          <IonItem>
            <IonLabel>
              <b>Vínculo</b>
            </IonLabel>
            <IonInput
              value={vinculo}
              id="parentesco"
              onIonChange={(e) => setVinculo(e.detail.value!)}
              {...register("parentesco", {
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
