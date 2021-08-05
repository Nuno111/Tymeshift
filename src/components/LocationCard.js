import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as UsersSvg } from "../assets/Users.svg";
import { ReactComponent as TimezoneSvg } from "../assets/Timezone.svg";
import { ReactComponent as ViewsSvg } from "../assets/Views.svg";

const Card = styled.li`
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

const LocationCard = ({ name, userCount, createdAt, views }) => {
  return (
    <Card role="">
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
        <p>{views} Views</p>
      </SvgParagraph>
    </Card>
  );
};

export default LocationCard;
