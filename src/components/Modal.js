import styled from "styled-components";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import LocationCard from "./LocationCard";

const ModalOverlay = styled.aside`
  position: fixed;
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

const Modal = ({ cardsList, views, onButtonClick, id }) => {
  // Need to improve accessibility here
  const element = cardsList[id];

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay role="dialog">
          <CenteredCard>
            <LocationCard
              key={element.props.id}
              id={element.props.id}
              name={element.props.name}
              userCount={element.props.userCount}
              createdAt={element.props.createdAt}
              views={views[id]}
              description={element.props.description}
              htmlTag="div"
              modalActive={true}
              onButtonClick={onButtonClick}
            />
          </CenteredCard>
        </ModalOverlay>,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default Modal;
