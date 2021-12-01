import "./LoginPage.css";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useDispatch } from "react-redux";
import { actionSetPageName, actionSetUserData } from "../../actions";
const LoginPage = () => {
  const dispatch = useDispatch(null);
  const handleLogin = (e) => {
    console.log(e.user)
    dispatch(actionSetUserData(
      e.user.uid,
      e.user.displayName,
      e.user.email,
      e.user.photoURL
    ));
    dispatch(actionSetPageName('listProjects'))
  }
  //Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // We will display Google and Facebook as auth providers.
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: (e) => handleLogin(e),
    },
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode="ios">
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="login-main-container shadow-2 pa2 ma2 br4 tc">
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
