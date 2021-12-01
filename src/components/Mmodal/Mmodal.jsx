import { IonButton } from "@ionic/react";
import "./Mmodal.css";
const Mmodal = ({ setShow, show, onClose,submitText ,onSubmit,children }) => {
  const MmodalShow = show ? "Mmodal-block" : "Mmodal-none";
  return (
    <div className={"Mmodal-main-conatiner " + MmodalShow}>
      <div className="Mmodal-inner-conatianer br4">
        <div className="pa2 ma2">
          <form onSubmit={onSubmit}>
          {children}
          <section className="tr">
            <IonButton color='success' size='small' type='submit'>
              {submitText}
            </IonButton>
            <IonButton
              size="small"
              color="danger"
              onClick={() => {
                setShow(false);
                onClose();
              }}
            >
              Close
            </IonButton>
          </section>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Mmodal;
