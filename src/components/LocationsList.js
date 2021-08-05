import styled from "styled-components";
import LocationCard from "../components/LocationCard";
import { useState } from "react";

const List = styled.ul`
  padding: 2rem 2rem;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const LocationsList = ({ locationsData }) => {
  const dateOptions = { hour12: true, hour: "2-digit", minute: "2-digit" };

  const [clickedCard, setClickedCard] = useState("");

  const onCardClick = (id) => {
    setClickedCard(id);
  };

  return (
    <List>
      {locationsData.map(({ id, name, userCount, createdAt, description }) => {
        const newDate = new Date(createdAt);

        let formattedTime = newDate
          .toLocaleTimeString("en-US", dateOptions)
          .split(" ")
          .join("")
          .toLowerCase();

        formattedTime =
          formattedTime[0] === "0" ? formattedTime.substring(1) : formattedTime;

        return (
          <LocationCard
            id={id}
            key={id}
            name={name}
            userCount={userCount}
            createdAt={formattedTime}
            description={description}
            views="5"
            htmlTag="li"
            onCardClick={onCardClick}
          />
        );
      })}
    </List>
  );
};

export default LocationsList;
