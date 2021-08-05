import styled from "styled-components";
import LocationCard from "./LocationCard";

const ModalOverlay = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  cursor: pointer;
`;

const CenteredCard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// Need to improve accessibility here, add some aria roles or use different html elements
const Modal = ({ id, name, userCount, formattedTime, description }) => {
  return (
    <ModalOverlay>
      <CenteredCard>
        <LocationCard
          key={id}
          name={name}
          userCount={userCount}
          createdAt={formattedTime}
          description={description}
          views="5"
          htmlTag="div"
        />
        <div>Description</div>
        <p>{description}</p>
      </CenteredCard>
    </ModalOverlay>
  );
};

export default Modal;
