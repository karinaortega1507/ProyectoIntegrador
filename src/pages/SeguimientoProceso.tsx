import {
  IonAlert,
  IonButton,
  IonButtons,
  IonContent,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonText,
} from "@ionic/react";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./SeguimientoProceso.css";
import { getEtapasUsuaria } from "../services/red_apoyo_service";

interface Etapa {
  nombre: string;
  valor: string;
}

const SeguimientoProceso: React.FC = () => {
  const API_URL = "https://apis-femicides.herokuapp.com/api/v1/procesos/";
  /*Estados de la etapa de denuncia - 1*/

  const [escrita, setEscrita] = useState<boolean>(false);
  const [verbal, setVerbal] = useState<boolean>(false);
  const [selectedEscrita, setSelectedEscrita] = useState<boolean>(false);
  const [selectedVerbal, setSelectedVerbal] = useState<boolean>(false);

  /*Estados de la etapa de denuncia ambulatoria - 2*/

  const [ambulatoriaSi, setAmbulatoriaSi] = useState<boolean>(false);
  const [ambulatoriaNo, setAmbulatoriaNo] = useState<boolean>(false);
  const [selectedSi, setSelectedSi] = useState<boolean>(false);
  const [selectedNo, setSelectedNo] = useState<boolean>(false);

  /*Estados de la etapa de valoración médica - 3*/

  const [vMedica, setvMedica] = useState<boolean>(false);
  const [vRiesgo, setvRiesgo] = useState<boolean>(false);
  const [selectedMedica, setSelectedMedica] = useState<boolean>(false);
  const [selectedRiesgo, setSelectedRiesgo] = useState<boolean>(false);

  /*Estados de la etapa de protección - 4*/

  const [mProteccion, setmProteccion] = useState<boolean>(false);
  const [selectedProteccion, setSelectedProteccion] = useState<boolean>(false);

  /*Estados de la etapa de proceso - 5*/

  const [enProceso, setEnProceso] = useState<boolean>(false);
  const [recibido, setRecibido] = useState<boolean>(false);
  const [selectedRecibido, setSelectedRecibido] = useState<boolean>(false);
  const [selectedEnProceso, setSelectedEnProceso] = useState<boolean>(false);
  const [etapaActual, setEtapaActual] = useState<string>("");
  const [buttonProgress, setButtonProgress] = useState<boolean>();
  const [denuncia, setDenuncia] = useState<boolean>(false);
  const [ambulatoria, setAmbulatoria] = useState<boolean>(false);
  const [valoracion, setValoracion] = useState<boolean>(false);
  const [proteccion, setProteccion] = useState<boolean>(false);
  const [proceso, setProceso] = useState<boolean>(false);

  /**variables para el manejo de alerts */
  const [isSent, setIsSent] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [msmError, setMsmError] = useState<string>("");
  const [isSentError, setIsSentError] = useState<boolean>(false);

  const unCheckStages = () => {
    //resetear los estados a false
    setSelectedEscrita(false);
    setSelectedVerbal(false);
    setSelectedSi(false);
    setSelectedNo(false);
    setSelectedMedica(false);
    setSelectedRiesgo(false);
    setSelectedProteccion(false);
    setSelectedRecibido(false);
    setSelectedEnProceso(false);
  };

  const saveStage = () => {
    /**
     * Si la etapa actual es 1 y no ha seleccionado si requiere o no denuncia
     * ambulatoria, entonces se envía una alerta de que no puede guradar la etapa
     * debido a que esta seleccionando una etapa mayor a la que sigue.
     */
    if (etapaActual === "1" && !ambulatoria) {
      if (!selectedSi && !selectedNo) {
        setMsmError(
          "Al parecer intentas registrar varias etapas o seleccionaste una etapa no correspondiente"
        );
        setIsSentError(true);
        unCheckStages();
        unCheckStages();
      }
    }

    /**
     * Si la etapa actual es 1 y si ha seleccionado si requiere o no denuncia
     * ambulatoria, pero no ha seleccionado otras etapas se crea la etapa.
     */
    if (etapaActual === "1" && !ambulatoria) {
      if (
        selectedSi ||
        (selectedNo &&
          !selectedMedica &&
          !selectedRiesgo &&
          !selectedProteccion &&
          !selectedRecibido &&
          !selectedEnProceso)
      ) {
        alert("Crear etapa");
        let newEtapa: Etapa = { nombre: "", valor: "" };
        if (selectedSi) {
          newEtapa = { nombre: "Ambulatoria", valor: "Si" };
        }
        if (selectedNo) {
          newEtapa = { nombre: "Ambulatoria", valor: "No" };
        }
        createStage(newEtapa);
      }
    }

    /**
     * Si la etapa actual es 1 y ya ha marcado si desea requiere o no denunica ambulatoria,
     * la siguiente etapa corresponde a la valoración ya sea medica o de riesgo, pero si desea
     * crear una etapa distinta a medica o riesgo, se le informa que no se puede crear la etapa
     */
    if (etapaActual === "1" && ambulatoria) {
      if (!selectedMedica && !selectedRiesgo) {
        setMsmError(
          "Al parecer intentas registrar varias etapas o seleccionaste una etapa no correspondiente"
        );
        setIsSentError(true);
        unCheckStages();
        unCheckStages();
      }
      if (selectedMedica || selectedRiesgo) {
        if (selectedProteccion || selectedRecibido || selectedEnProceso) {
          setMsmError(
            "Al parecer intentas registrar varias etapas o seleccionaste una etapa no correspondiente"
          );
          setIsSentError(true);
          unCheckStages();
          unCheckStages();
        }
      }

      /**
       * si la etapa actual es 1 y ha seleccionado valoracion medica o de riesgo sin haber
       * seleccionado otras etapas, entonces se crea la etapa
       */
      if (selectedMedica || selectedRiesgo) {
        if (!selectedProteccion && !selectedRecibido && !selectedEnProceso) {
          alert("crear etapa");
          let newEtapa: Etapa = { nombre: "", valor: "" };
          if (selectedMedica) {
            newEtapa = { nombre: "Valoracion", valor: "Medica" };
          }
          if (selectedRiesgo) {
            newEtapa = { nombre: "Valoracion", valor: "Riesgo" };
          }
          createStage(newEtapa);
        }
      }
    }
  };

  const createStage = (data: Etapa) => {
    const idUsuaria = localStorage.getItem("userId");
    axios
      .post(API_URL + idUsuaria + "/etapas", data)
      .then((response) => {
        if (response.data) {
          setMessage("¡La etapa se ha guardado correctamente!");
          console.log(response.data);
          setIsSent(true);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  useEffect(() => {
    getEtapas();
  }, [setEtapaActual]);

  /**
   * Obtiene el arreglo de las etapas y setea la etapa actual en la que se p
   * encuentra la usuaria
   */
  const getEtapas = async () => {
    let result = await getEtapasUsuaria();
    let etapas: Etapa[] = result.data;
    console.log(etapas);
    if (etapas.length === 1) setEtapaActual("1");

    if (etapas.length === 2) setEtapaActual("1");

    if (etapas.length === 3) setEtapaActual("2");

    if (etapas.length === 4) setEtapaActual("3");

    if (etapas.length === 5) setEtapaActual("4");

    etapas.forEach((element) => {
      console.log(element.valor);
      if (element.valor === "Escrita") {
        setEscrita(true);
        setVerbal(false);
      }
      if (element.valor === "Verbal") {
        setVerbal(true);
        setEscrita(false);
      }
      if (element.nombre === "Denuncia") setDenuncia(true);

      if (element.valor === "Si") {
        setAmbulatoriaSi(true);
        setAmbulatoriaNo(false);
      }
      if (element.valor === "No") {
        setAmbulatoriaSi(false);
        setAmbulatoriaNo(true);
      }
      if (element.nombre === "Ambulatoria") setAmbulatoria(true);

      if (element.valor === "Medica") {
        setvMedica(true);
        setvRiesgo(false);
      }
      if (element.valor === "Riesgo") {
        setvMedica(false);
        setvRiesgo(true);
      }
      if (element.nombre === "Valoracion") setValoracion(true);

      if (element.valor === "Proteccion") {
        setmProteccion(true);
        setProteccion(true);
      }
      if (element.nombre === "Proteccion") setProteccion(true);

      if (element.valor === "Recibido") {
        setRecibido(true);
        setEnProceso(false);
      }
      if (element.valor === "Recibido") {
        setRecibido(false);
        setEnProceso(true);
      }
      if (element.nombre === "Proceso") setProceso(true);
    });

    console.log(
      "escrita" +
        escrita +
        "ambulatoria si " +
        ambulatoriaSi +
        "denuncia" +
        denuncia +
        "Ambulatoria" +
        ambulatoria
    );

    console.log("verbal", verbal);
  };
  const link = `ruta-del-proceso/${etapaActual}`;

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonAlert
          isOpen={isSent}
          onDidDismiss={() => setIsSent(false)}
          header={"Etapa registrada"}
          message={message}
          buttons={["ok"]}
        />
        <IonAlert
          isOpen={isSentError}
          onDidDismiss={() => setIsSent(false)}
          header={"Etapa NO registrada"}
          message={msmError}
          buttons={["ok"]}
        />
        <div>
          <IonButtons slot="start">
            <IonMenuButton color="secondary" />
            <IonLabel className="text-title-seg">Seguimiento</IonLabel>
          </IonButtons>
        </div>
        <div>
          <p>
            <IonText>Denuncia</IonText>
          </p>
          {escrita && denuncia && (
            <p className="container">
              <>
                <IonButton
                  className="button-option"
                  color="secondary"
                  shape="round"
                  fill="solid"
                >
                  Escrita
                </IonButton>
                <IonButton
                  className="button-option"
                  color="warning"
                  shape="round"
                  fill="outline"
                >
                  Verbal
                </IonButton>
              </>
            </p>
          )}

          {verbal && denuncia && (
            <p className="container">
              <>
                <IonButton
                  className="button-option"
                  color="secondary"
                  shape="round"
                  fill="outline"
                >
                  Escrita
                </IonButton>
                <IonButton
                  className="button-option"
                  color="warning"
                  shape="round"
                  fill="solid"
                >
                  Verbal
                </IonButton>
              </>
            </p>
          )}

          {!denuncia && (
            <p className="container">
              <>
                {selectedEscrita ? (
                  <IonButton
                    className="button-option"
                    color="secondary"
                    shape="round"
                    fill="solid"
                  >
                    Escrita
                  </IonButton>
                ) : (
                  <IonButton
                    onClick={() => {
                      setSelectedEscrita(true);
                      setSelectedVerbal(false);

                      setButtonProgress(true);
                    }}
                    className="button-option"
                    color="secondary"
                    shape="round"
                    fill="outline"
                  >
                    Escrita
                  </IonButton>
                )}
                {selectedVerbal ? (
                  <IonButton
                    className="button-option"
                    color="warning"
                    shape="round"
                    fill="solid"
                  >
                    Verbal
                  </IonButton>
                ) : (
                  <IonButton
                    onClick={() => {
                      setSelectedVerbal(true);
                      setSelectedEscrita(false);
                      setButtonProgress(true);
                    }}
                    className="button-option"
                    color="warning"
                    shape="round"
                    fill="outline"
                  >
                    Verbal
                  </IonButton>
                )}
              </>
            </p>
          )}

          <p>
            <IonText>¿Requiere denuncia ambulatoria?</IonText>
          </p>
          {ambulatoriaSi && ambulatoria && (
            <p className="container">
              <>
                <IonButton
                  className="button-option"
                  color="secondary"
                  shape="round"
                  fill="solid"
                >
                  Si
                </IonButton>
                <IonButton
                  className="button-option"
                  color="warning"
                  shape="round"
                  fill="outline"
                >
                  No
                </IonButton>
              </>
            </p>
          )}
          {ambulatoriaNo && ambulatoria && (
            <p className="container">
              <>
                <IonButton
                  className="button-option"
                  color="secondary"
                  shape="round"
                  fill="outline"
                >
                  Si
                </IonButton>
                <IonButton
                  className="button-option"
                  color="warning"
                  shape="round"
                  fill="solid"
                >
                  No
                </IonButton>
              </>
            </p>
          )}

          {!ambulatoria && (
            <p className="container">
              <>
                {selectedSi ? (
                  <IonButton
                    className="button-option"
                    color="secondary"
                    shape="round"
                    fill="solid"
                  >
                    Si
                  </IonButton>
                ) : (
                  <IonButton
                    onClick={() => {
                      setSelectedSi(true);
                      setSelectedNo(false);
                      setAmbulatoriaSi(true);
                      setAmbulatoriaNo(false);
                      setButtonProgress(true);
                    }}
                    className="button-option"
                    color="secondary"
                    shape="round"
                    fill="outline"
                  >
                    Si
                  </IonButton>
                )}
                {selectedNo ? (
                  <IonButton
                    className="button-option"
                    color="warning"
                    shape="round"
                    fill="solid"
                  >
                    No
                  </IonButton>
                ) : (
                  <IonButton
                    onClick={() => {
                      setSelectedNo(true);
                      setSelectedSi(false);
                      setAmbulatoriaNo(true);
                      setAmbulatoriaSi(false);
                      setButtonProgress(true);
                    }}
                    className="button-option"
                    color="warning"
                    shape="round"
                    fill="outline"
                  >
                    No
                  </IonButton>
                )}
              </>
            </p>
          )}

          <p>
            <IonText>Tipo de Asistencia Ambulatoria</IonText>
          </p>

          {vMedica && valoracion && (
            <p className="container">
              <>
                <IonButton
                  className="button-option-medica"
                  color="secondary"
                  shape="round"
                  fill="solid"
                >
                  Valoración Médica
                </IonButton>
                <IonButton
                  className="button-option-medica"
                  color="warning"
                  shape="round"
                  fill="outline"
                >
                  Valoración de Riesgo
                </IonButton>
              </>
            </p>
          )}

          {vRiesgo && valoracion && (
            <p className="container">
              <>
                <IonButton
                  className="button-option-medica"
                  color="secondary"
                  shape="round"
                  fill="outline"
                >
                  Valoración Médica
                </IonButton>
                <IonButton
                  className="button-option-medica"
                  color="warning"
                  shape="round"
                  fill="solid"
                >
                  Valoración de Riesgo
                </IonButton>
              </>
            </p>
          )}

          {!valoracion && (
            <p className="container">
              <>
                {selectedMedica ? (
                  <IonButton
                    className="button-option-medica"
                    color="secondary"
                    shape="round"
                    fill="solid"
                  >
                    Valoración Médica
                  </IonButton>
                ) : (
                  <IonButton
                    onClick={() => {
                      setSelectedMedica(true);
                      setSelectedRiesgo(false);
                      setvMedica(true);
                      setvRiesgo(false);
                      setButtonProgress(true);
                    }}
                    className="button-option-medica"
                    color="secondary"
                    shape="round"
                    fill="outline"
                  >
                    Valoración Médica
                  </IonButton>
                )}
                {selectedRiesgo ? (
                  <IonButton
                    className="button-option-medica"
                    color="warning"
                    shape="round"
                    fill="solid"
                  >
                    Valoración de Riesgo
                  </IonButton>
                ) : (
                  <IonButton
                    onClick={() => {
                      setSelectedRiesgo(true);
                      setSelectedMedica(false);
                      setvRiesgo(true);
                      setvMedica(false);
                      setButtonProgress(true);
                    }}
                    className="button-option-medica"
                    color="warning"
                    shape="round"
                    fill="outline"
                  >
                    Valoración de Riesgo
                  </IonButton>
                )}
              </>
            </p>
          )}

          <p>
            <IonText>Admisión a trámites</IonText>
          </p>

          {mProteccion && proteccion && (
            <p className="container">
              <IonButton
                className="button-mProteccion ion-text-center"
                color="secondary"
                shape="round"
                fill="solid"
              >
                Emisión de Medidas de Protección
              </IonButton>
            </p>
          )}

          {!proteccion && (
            <p className="container">
              <>
                {selectedProteccion ? (
                  <IonButton
                    onClick={() => {
                      setSelectedProteccion(false);
                      setmProteccion(false);
                    }}
                    className="button-mProteccion ion-text-center"
                    color="secondary"
                    shape="round"
                    fill="solid"
                  >
                    Emisión de Medidas de Protección
                  </IonButton>
                ) : (
                  <IonButton
                    onClick={() => {
                      setSelectedProteccion(true);
                      setmProteccion(true);
                      setButtonProgress(true);
                    }}
                    className="button-mProteccion ion-text-center"
                    color="secondary"
                    shape="round"
                    fill="outline"
                  >
                    Emisión de Medidas de Protección
                  </IonButton>
                )}
              </>
            </p>
          )}

          <p>
            <IonText>Medidas de Protección</IonText>
          </p>
          {recibido && proceso && (
            <p className="container">
              <>
                <IonButton
                  className="button-mProteccion"
                  color="secondary"
                  shape="round"
                  fill="solid"
                >
                  Recibido
                </IonButton>
                <IonButton
                  className="button-mProteccion"
                  color="warning"
                  shape="round"
                  fill="outline"
                >
                  En Proceso
                </IonButton>
              </>
            </p>
          )}

          {enProceso && proceso && (
            <p className="container">
              <>
                <IonButton
                  className="button-mProteccion"
                  color="secondary"
                  shape="round"
                  fill="outline"
                >
                  Recibido
                </IonButton>
                <IonButton
                  className="button-mProteccion"
                  color="warning"
                  shape="round"
                  fill="solid"
                >
                  En Proceso
                </IonButton>
              </>
            </p>
          )}

          {!proceso && (
            <p className="container">
              <>
                {selectedRecibido ? (
                  <IonButton
                    className="button-mProteccion"
                    color="secondary"
                    shape="round"
                    fill="solid"
                  >
                    Recibido
                  </IonButton>
                ) : (
                  <IonButton
                    onClick={() => {
                      setSelectedRecibido(true);
                      setSelectedEnProceso(false);
                      setRecibido(true);
                      setEnProceso(false);
                      setButtonProgress(true);
                    }}
                    className="button-mProteccion"
                    color="secondary"
                    shape="round"
                    fill="outline"
                  >
                    Recibido
                  </IonButton>
                )}
                {selectedEnProceso ? (
                  <IonButton
                    className="button-mProteccion"
                    color="warning"
                    shape="round"
                    fill="solid"
                  >
                    En Proceso
                  </IonButton>
                ) : (
                  <IonButton
                    onClick={() => {
                      setSelectedEnProceso(true);
                      setSelectedRecibido(false);
                      setEnProceso(true);
                      setRecibido(false);
                      setButtonProgress(true);
                    }}
                    className="button-mProteccion"
                    color="warning"
                    shape="round"
                    fill="outline"
                  >
                    En Proceso
                  </IonButton>
                )}
              </>
            </p>
          )}
          <br />
          <br />
          <p className="ion-text-center">
            {buttonProgress && (
              <IonButton onClick={saveStage} shape="round" fill="solid">
                Guardar Etapa
              </IonButton>
            )}
          </p>
          <div className="vector-position">
            <img className="img-vector" src="assets/icon/Vector.png" alt="" />
            <IonButton className="img-mapa" routerLink={link} fill="clear">
              <img src="assets/icon/mapa.png" alt="" />
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SeguimientoProceso;
/*
  const authAxios = axios.create({
    baseURL: API_URL,
  });
  useIonViewDidEnter(async () => {
    try {
      //fetch and get CONTACTS of user
      
      const result = await authAxios.get(API_URL);
      console.log(result.data);
      mostrarEtapas(result.data);  
    } catch (error) {
      console.log(error);
    }
  });*/
