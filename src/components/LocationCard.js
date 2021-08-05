import styled from "styled-components";

const Card = styled.li`
  background-color: whitesmoke;
  border: 1px solid black;
  width: 300px;
  margin-top: 4rem;
  padding: 2rem;
`;

const CardTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

const LocationCard = ({ name, userCount, createdAt, views }) => {
  return (
    <Card>
      <CardTitle> {name} </CardTitle>
      <p>{userCount} Users</p>
      <p>{createdAt}</p>
      <p>{views} Views</p>
    </Card>
  );
};

export default LocationCard;
