import styled from "styled-components";

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.4;
  width: 100%;
  height: 100vh;
  background-color: gray;
  z-index: 2;
  cursor: pointer;
`;
// Need to improve accessibility here, add some aria roles or use different html elements
const Modal = ({ onClick }) => {
  return <ModalOverlay onClick={onClick} />;
};

export default Modal;
