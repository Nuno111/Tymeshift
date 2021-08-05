import styled from "styled-components";

const Container = styled.main`
  max-width: 1536px;
  padding: 0 1rem;
  margin: 0 auto;
`;

const Header = styled.header`
  border-bottom: 1px lightgray solid;
  padding: 1rem 0;
`;
const PageTitle = styled.h2`
  color: grey;
`;

const PageSubTitle = styled.p`
  color: black;
  font-size: 1.5rem;
`;

const AllLocations = () => {
  return (
    <main>
      <Header>
        <Container>
          <PageTitle>All Locations</PageTitle>
          <PageSubTitle>Acme Locations</PageSubTitle>
        </Container>
      </Header>
    </main>
  );
};

export default AllLocations;
