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
import { checkUserInDatabase ,createNewUserinDatabase} from "../../backend/database";
const LoginPage = () => {
  const dispatch = useDispatch(null);
  const handleLogin = async(e) => {
    console.log(e.user)
    const res = await checkUserInDatabase(e.user.uid);
    if(res === 'newUser'){
      createNewUserinDatabase(e.user.uid);
      dispatch(actionSetPageName('userNotApprovedPage'));
    }
    else{
      console.log(res);
      if(!res.isApproved){
        dispatch(actionSetPageName('userNotApprovedPage'));
      }else{
         // TODO open APP & dispatch the user data
         // TODO update the database that the user is logged in
      }
    }
  }
  //Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID],
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
            uiCallback={ui => ui.disableAutoSignIn()}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
