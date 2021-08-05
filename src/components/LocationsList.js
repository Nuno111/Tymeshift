import styled from "styled-components";
import LocationCard from "../components/LocationCard";
import { Fragment, useState } from "react";
import Modal from "./Modal";

const dateOptions = { hour12: true, hour: "2-digit", minute: "2-digit" };

// Formats fetched date to format: h:mmAM/PM
const formatDate = (createdAt) => {
  const newDate = new Date(createdAt);

  let formattedTime = newDate
    .toLocaleTimeString("en-US", dateOptions)
    .split(" ")
    .join("")
    .toLowerCase();

  formattedTime =
    formattedTime[0] === "0" ? formattedTime.substring(1) : formattedTime;

  return formattedTime;
};

const List = styled.ul`
  padding: 2rem 2rem;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const LocationsList = ({ locationsData }) => {
  // This can probably be optimzed instead of having X eventClickers to update modal data
  //I would like to have just one eventClicker on the ul and take advantage of event bubbling
  const [modalCard, setModalCard] = useState(undefined);
  const [componentsViews, setComponentsViews] = useState(
    Array(locationsData.length).fill(0)
  );

  const updateComponentsViews = (id) => {
    setComponentsViews((prevState) => (prevState[id] += 1));
  };

  const onCardClick = (id) => {
    updateComponentsViews(--id);
    updateModalCard(--id);
  };

  const updateModalCard = (id) => {
    const modalCard = cardsList.find((card) => card.key === id);

    setModalCard(modalCard);
  };

  const closeModal = () => setModalCard(undefined);

  const cardsList = locationsData.map(
    ({ id, name, userCount, createdAt, description }) => {
      return (
        <LocationCard
          key={id}
          id={id}
          name={name}
          userCount={userCount}
          createdAt={formatDate(createdAt)}
          views={componentsViews[id]}
          description={description}
          htmlTag="li"
          onCardClick={onCardClick}
          modalActive={false}
        />
      );
    }
  );

  return (
    <Fragment>
      <List>{cardsList}</List>
      {modalCard && <Modal card={modalCard} onButtonClick={closeModal}></Modal>}
    </Fragment>
  );
};

export default LocationsList;
