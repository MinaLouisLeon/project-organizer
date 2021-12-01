import { IonApp } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

//import pages
import ListProjects from "./pages/ListProjects/ListProjects";

import { useSelector } from "react-redux";

const App = () => {
  const pageName = useSelector(state => state.mainReducer.pageName);
  const handleNav = () => {
    switch(pageName){
      case 'listProjects' :
        return(<ListProjects/>)
      default :
        return(<ListProjects/>)
    }
  }
  return (
    <IonApp>
      {handleNav()}
    </IonApp>
  );
};

export default App;
