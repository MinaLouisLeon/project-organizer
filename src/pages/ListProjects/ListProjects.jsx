import "./ListProjects.css";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import NewProject from "../NewProject/NewProject";
import SideMenu from "../../components/SideMenu/SideMemu";
import { useState } from "react";
const ListProjects = () => {
  const [showNewProjectView, setShowNewProjectView] = useState(false);
  return (
    <IonPage>
      <SideMenu />
      <NewProject
        setShowNewProjectView={setShowNewProjectView}
        showNewProjectView={showNewProjectView}
      />
      <IonHeader>
        <IonToolbar mode="ios">
          <IonMenuButton slot="start" />
          <IonTitle>Projects</IonTitle>
          <IonButtons slot="end">
            {/* TODO add project function */}
            <IonButton
              fill="outline"
              color="success"
              size="small"
              onClick={() => setShowNewProjectView(true)}
            >
              New Project
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen id="enable-sidemenu">
        <div className="project-list-main-container shadow-2 br4">
          <IonList className="br4">
            {/* TODO map projects */}
            <IonItem>
              <IonLabel>Project Name</IonLabel>
              {/* TODO add delete btn confirmation */}
              <IonButton>Info</IonButton>
              <IonButton color="danger">Delete</IonButton>
            </IonItem>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ListProjects;
