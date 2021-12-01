import "./ListProjects.css";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import NewProject from "../NewProject/NewProject";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { actionLogout } from "../../actions";
const ListProjects = () => {
  const dispatch = useDispatch(null);
    const [showNewProjectView , setShowNewProjectView] = useState(false)
  return (
    <IonPage>
      <NewProject setShowNewProjectView={setShowNewProjectView} showNewProjectView={showNewProjectView} />
      <IonHeader>
        <IonToolbar mode="ios">
          <IonTitle>Projects</IonTitle>
          <IonButtons slot="end">
            {/* TODO add project function */}
            <IonButton fill="outline" color="success" size="small" onClick={() => setShowNewProjectView(true)}>
              New Project
            </IonButton>
            <IonButton fill='outline' color='danger' size='small' onClick={() => {
              firebase.auth().signOut();
              dispatch(actionLogout())
            }}>
              Logout
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
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
