import {
  IonButton,
  IonButtons,
  IonChip,
  IonContent,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { useParams } from "react-router";
import "./SeguimientoProceso.css";

const SeguimientoProceso: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  /*Estados de la etapa de denuncia - 1*/
  const [EtapaUno, setEtapaUno] = useState<boolean>(true);
  const [escrita, setEscrita] = useState<boolean>(true);
  const [verbal, setVerbal] = useState<boolean>(false);
  const [selectedEscrita, setSelectedEscrita] = useState<boolean>(false);
  const [selectedVerbal, setSelectedVerbal] = useState<boolean>(false);

  /*Estados de la etapa de denuncia ambulatoria - 2*/
  const [EtapaDos, setEtapaDos] = useState<boolean>(false);
  const [ambulatoriaSi, setAmbulatoriaSi] = useState<boolean>(false);
  const [ambulatoriaNo, setAmbulatoriaNo] = useState<boolean>(false);
  const [selectedSi, setSelectedSi] = useState<boolean>(false);
  const [selectedNo, setSelectedNo] = useState<boolean>(false);

  /*Estados de la etapa de valoración médica - 3*/
  const [EtapaTres, setEtapaTres] = useState<boolean>(false);
  const [vMedica, setvMedica] = useState<boolean>(false);
  const [vRiesgo, setvRiesgo] = useState<boolean>(false);
  const [selectedMedica, setSelectedMedica] = useState<boolean>(false);
  const [selectedRiesgo, setSelectedRiesgo] = useState<boolean>(false);

  /*Estados de la etapa de protección - 4*/
  const [EtapaCuatro, setEtapaCuatro] = useState<boolean>(false);
  const [mProteccion, setmProteccion] = useState<boolean>(false);
  const [selectedProteccion, setSelectedProteccion] = useState<boolean>(false);

  /*Estados de la etapa de proceso - 5*/
  const [EtapaCinco, setEtapaCinco] = useState<boolean>(false);
  const [enProceso, setEnProceso] = useState<boolean>(false);
  const [recibido, setRecibido] = useState<boolean>(false);
  const [selectedRecibido, setSelectedRecibido] = useState<boolean>(false);
  const [selectedEnProceso, setSelectedEnProceso] = useState<boolean>(false);

  const [buttonProgress, setButtonProgress] = useState<boolean>();
  const savedEtapa = () => {
    console.log("escrita " + escrita + " verbal " + verbal);
    console.log(
      "ambulatoria si " + ambulatoriaSi + " ambulatoria no " + ambulatoriaNo
    );
    console.log("vmedica " + vMedica + " vriesgo " + vRiesgo);
    console.log("mProteccion " + mProteccion);
    console.log("en proceso " + enProceso + " recibido " + recibido);
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
  return (
    <IonPage>
      <IonContent className="ion-padding">
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

          {escrita && EtapaUno && (
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

          {verbal && EtapaUno && (
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

          {!EtapaUno && (
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
                      setEscrita(true);
                      setVerbal(false);
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
                      setVerbal(true);
                      setEscrita(false);
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
          {ambulatoriaSi && EtapaDos && (
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
          {ambulatoriaNo && EtapaDos && (
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

          {!EtapaDos && (
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

          {vMedica && EtapaTres && (
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

          {vRiesgo && EtapaTres && (
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

          {!EtapaTres && (
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

          {mProteccion && EtapaCuatro && (
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

          {!EtapaCuatro && (
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
          {recibido && EtapaCinco && (
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

          {enProceso && EtapaCinco && (
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

          {!EtapaCinco && (
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
              <IonButton onClick={savedEtapa} shape="round" fill="solid">
                Guardar Estado
              </IonButton>
            )}
          </p>
          <div className="vector-position">
            <img className="img-vector" src="assets/icon/Vector.png" alt="" />
            <IonButton
              className="img-mapa"
              routerLink="/ruta-del-proceso"
              fill="clear"
            >
              {" "}
              <img src="assets/icon/mapa.png" alt="" />
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SeguimientoProceso;
