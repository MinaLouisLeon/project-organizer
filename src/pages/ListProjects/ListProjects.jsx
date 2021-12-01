import './ListProjects.css';
import { IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react'
const ListProjects = () => {
    return(
        <IonPage>
        <IonHeader>
            <IonToolbar mode='ios'>
                <IonTitle>
                    Projects
                </IonTitle>
                <IonButtons slot='end'>
                    {/* TODO add project function */}
                    <IonButton fill='outline' color='success' size="small">
                        New Project
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <div className='project-list-main-container shadow-2 br4'>
                <IonList className="br4">
                    {/* TODO map projects */}
                    <IonItem>
                        <IonLabel>
                            Project Name
                        </IonLabel>
                        {/* TODO add delete btn confirmation */}
                        <IonButton >
                            Info
                        </IonButton>
                        <IonButton color='danger'>
                            Delete
                        </IonButton>
                    </IonItem>
                </IonList>
            </div>
        </IonContent>
        </IonPage>
    )
}

export default ListProjects;