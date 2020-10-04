
import React, { useState } from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonMenuToggle, IonIcon, IonLabel, IonItem } from "@ionic/react";
import { RouteComponentProps, withRouter } from 'react-router';
//import { RouteComponentProps, withRouter } from '@ionic/react-router';

const pages = [
    { title: 'Home', path: '/', icon: 'home' },
    { title: 'New', path: '/new', icon: 'information' }
];

const SideNotif = ({ history }) => {
    const [activePage, setActivePage] = useState(pages[0].title);

    const renderMenuItems = () => {
        return pages.map((page) => (
            <IonMenuToggle key={page.title} auto-hide="false" menu="notif">
                <IonItem button
                    color={page.title === activePage ? 'primary' : ''}
                    onClick={() => navigateToPage(page)}>
                    <IonIcon slot="start" name={page.icon}></IonIcon>
                    <IonLabel>
                        {page.title}
                    </IonLabel>
                </IonItem>
            </IonMenuToggle>
        ));
    }

    const navigateToPage = (page) => {
        history.push(page.path);
        setActivePage(page.title);
    }

    return (
        <IonMenu side="end" contentId="main" menuId="notif">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Notifications
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    {renderMenuItems()}
                </IonList>
            </IonContent>
        </IonMenu>
    );
}

export default withRouter(
    SideNotif
);