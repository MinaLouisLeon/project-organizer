import "./NewProject.css";
import Mmodal from "../../components/Mmodal/Mmodal";
import {
  IonInput,
  IonItem,
  IonLabel,
  IonTextarea,
} from "@ionic/react";
import { useState } from "react";
const NewProject = ({ setShowNewProjectView, showNewProjectView }) => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("\r");
  return (
    <Mmodal
      show={showNewProjectView}
      setShow={setShowNewProjectView}
      onClose={() => {
        setProjectName("");
        setProjectDescription("\r");
      }}
      submitText="Add"
      onSubmit={(e) => {
        e.preventDefault();
        
      }}
    >
      {/* <IonList> */}
        <IonItem>
          <IonLabel position="stacked">Project Name :</IonLabel>
          <IonInput
            required
            placeholder="Project Name :"
            type="text"
            onIonChange={(e) => setProjectName(e.detail.value)}
            value={projectName}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Project Description :</IonLabel>
          <IonTextarea
            autoGrow={true}
            placeholder="Project Description :"
            onIonChange={(e) => setProjectDescription(e.detail.value)}
            value={projectDescription}
          />
        </IonItem>
      {/* </IonList> */}
    </Mmodal>
  );
};

export default NewProject;
