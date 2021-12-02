import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./UserNotApprovedPage.css";
import { useDispatch } from "react-redux";
import { actionLogout } from "../../actions";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const UserNotApprovedPage = () => {
    const dispatch = useDispatch(null);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode="ios">
          <IonTitle>Login Error</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="user-not-approved-container shadow-2 pa2 ma2 tc br4">
          <p>
            This user is not approved.
            <br />
            Check with adminstration for more info.
          </p>
          {/* TODO logout from firebase and go to login page */}
          <IonButton size="small" color="success" onClick={() => {
              firebase.auth().signOut();
              dispatch(actionLogout());
          }}>
            Confirm
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default UserNotApprovedPage;
