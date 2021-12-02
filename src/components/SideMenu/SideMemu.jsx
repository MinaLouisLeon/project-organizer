import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useDispatch } from "react-redux";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { actionLogout } from "../../actions";
const SideMenu = () => {
const dispatch = useDispatch(null);
  return (
    <IonMenu contentId="enable-sidemenu">
      <IonHeader>
        <IonToolbar mode="ios">
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>Settings</IonLabel>
          </IonItem>
          <IonItem
            button
            color="danger"
            onClick={() => {
              firebase
                .auth()
                .signOut()
                .then((e) => console.log(e))
                .catch((err) => console.log(err));
              dispatch(actionLogout());
            }}
          >
            <IonLabel>Logout</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default SideMenu;
