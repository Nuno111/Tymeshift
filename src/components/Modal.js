import styled from "styled-components";
import LocationCard from "./LocationCard";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const ModalOverlay = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const CenteredCard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

const Modal = ({
  id,
  name,
  userCount,
  createdAt,
  description,
  onButtonClick,
}) => {
  const extraElements = (
    <Fragment>
      <ExtraTitle>Description</ExtraTitle>
      <p>{description}</p>
      <ExtraButton>
        <button onClick={onButtonClick}>Done</button>
      </ExtraButton>
    </Fragment>
  );

  // Need to improve accessibility here
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay>
          <CenteredCard>
            <LocationCard
              key={id}
              name={name}
              userCount={userCount}
              createdAt={createdAt}
              description={description}
              htmlTag="div"
              extraElements={extraElements}
            />
          </CenteredCard>
        </ModalOverlay>,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default Modal;
