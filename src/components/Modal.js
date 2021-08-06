import styled from "styled-components";
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

const Modal = ({ card }) => {
  // Need to improve accessibility here
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay>
          <CenteredCard>{card}</CenteredCard>
        </ModalOverlay>,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default Modal;
