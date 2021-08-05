import styled from "styled-components";
import LocationCard from "../components/LocationCard";

const List = styled.ul`
  padding: 0 3rem;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

const dateOptions = { hour12: true, hour: "2-digit", minute: "2-digit" };

const LocationsList = ({ locationsData }) => {
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
            key={id}
            name={name}
            userCount={userCount}
            createdAt={formattedTime}
            description={description}
            views="5"
          />
        );
      })}
    </List>
  );
};

export default LocationsList;
