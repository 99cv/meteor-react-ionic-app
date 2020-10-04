import {
  IonBackButton,
  IonButtons,
  IonButton,
  IonMenuToggle,
  IonIcon,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonItemDivider
} from '@ionic/react';
import React from 'react';
import { menu } from 'ionicons/icons';

import { useTracker } from 'meteor/react-meteor-data';
import { LinksCollection } from '../api/links';

export const Info = () => {
  const links = useTracker(() => {
    return LinksCollection.find().fetch();
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuToggle>
              <IonButton>
                <IonIcon slot="icon-only" icon={menu}></IonIcon>
              </IonButton>
            </IonMenuToggle>
          </IonButtons>
          <IonTitle>New Item</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonList color="primary">
          <IonItemDivider>LINKS</IonItemDivider>
          {links.map(
            link => <IonItem color="primary" key={link._id}>
          {link.title}
          </IonItem>
      )}
        </IonList>


      </IonContent>
    </IonPage>
  );
};
