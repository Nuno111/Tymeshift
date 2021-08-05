import styled from "styled-components";
import { Fragment, useState } from "react";
import { ReactComponent as UsersSvg } from "../assets/Users.svg";
import { ReactComponent as TimezoneSvg } from "../assets/Timezone.svg";
import { ReactComponent as ViewsSvg } from "../assets/Views.svg";

const Card = styled.div`
  background-color: whitesmoke;
  border: 1px solid lightgray;
  width: 220px;
  padding: 1rem 1.5rem;
`;

const CardTitle = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  padding-bottom: 1rem;
`;

const SvgParagraph = styled.div`
  display: flex;
  padding-bottom: 0.5rem;

  svg {
    width: 15px;
    height: 15px;
    fill: lightgray;
    padding-right: 0.5rem;
  }
`;

const ExtraTitle = styled.div`
  padding-top: 1rem;
`;

const ExtraButton = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    background-color: green;
    border-radius: 5rem;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
  }
`;

const LocationCard = ({
  id,
  name,
  userCount,
  createdAt,
  htmlTag,
  description,
  onCardClick,
  onButtonClick,
  modalActive,
}) => {
  const [clickCounter, setClickCounter] = useState(0);

  const updateCounter = () => {
    setClickCounter((prevState) => (prevState += 1));
  };

  return (
    // Accessibility needs to be optimized
    <Card
      as={htmlTag}
      role=""
      onClick={
        onCardClick
          ? () => {
              onCardClick(id);
              updateCounter();
            }
          : undefined
      }
    >
      <CardTitle> {name} </CardTitle>
      <SvgParagraph>
        <UsersSvg />
        <p>{userCount} Users</p>
      </SvgParagraph>
      <SvgParagraph>
        <TimezoneSvg />
        <p>{createdAt}</p>
      </SvgParagraph>
      <SvgParagraph>
        <ViewsSvg />
        <p>{clickCounter} Views</p>
      </SvgParagraph>
      {modalActive && (
        <Fragment>
          <ExtraTitle>Description</ExtraTitle>
          <p>{description}</p>
          <ExtraButton>
            <button onClick={onButtonClick}>Done</button>
          </ExtraButton>
        </Fragment>
      )}
    </Card>
  );
};

export default LocationCard;
