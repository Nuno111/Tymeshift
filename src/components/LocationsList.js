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
  const [clickedCard, setClickedCard] = useState("");
  const [modalActive, setModalActive] = useState(false);

  const toggleModal = () => {
    setModalActive((prevState) => !prevState);
  };

  const onCardClick = (id) => {
    toggleModal();
    setClickedCard(--id);
  };

  return (
    <Fragment>
      <List>
        {locationsData.map(
          ({ id, name, userCount, createdAt, description }) => {
            return (
              <LocationCard
                key={id}
                id={id}
                name={name}
                userCount={userCount}
                createdAt={formatDate(createdAt)}
                description={description}
                views="5"
                htmlTag="li"
                onCardClick={onCardClick}
              />
            );
          }
        )}
      </List>
      {modalActive && (
        <Modal
          id={locationsData[clickedCard].id}
          name={locationsData[clickedCard].name}
          userCount={locationsData[clickedCard].userCount}
          createdAt={formatDate(locationsData[clickedCard].createdAt)}
          description={locationsData[clickedCard].description}
          onCardClick={toggleModal}
        />
      )}
    </Fragment>
  );
};

export default LocationsList;
