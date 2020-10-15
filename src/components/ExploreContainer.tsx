import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonImg,
} from "@ionic/react";
import React from "react";
import "./ExploreContainer.css";
import { looper } from "./data";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const renderItem = (c: any) => (
    <IonCard key={c.key}>
      <IonImg src={c.image}></IonImg>
      <IonCardHeader>
        <IonCardTitle>{c.name}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <h2>I'm a Card! # {c.key}</h2>
      </IonCardContent>
    </IonCard>
  );

  return (
    <div className="grid gap-4 grid-cols-3">
      {looper.map((c) => renderItem(c))}
    </div>
  );
};

export default ExploreContainer;
