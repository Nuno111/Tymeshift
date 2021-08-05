import styled from "styled-components";
import LocationCard from "../components/LocationCard";

const Container = styled.main`
  max-width: 1536px;
  padding: 0 1rem;
  margin: 0 auto;
`;

const Header = styled.header`
  border-bottom: 1px lightgray solid;
  padding: 1rem;
`;
const PageTitle = styled.h2`
  color: grey;
  padding-bottom: 0.5rem;
`;

const PageSubTitle = styled.p`
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
`;

const List = styled.ul`
  padding: 0 3rem;
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
      <section>
        <Container>
          <List>
            <LocationCard
              name="Acme HQ"
              userCount="114"
              createdAt="2:32pm (GMT+01:00)"
              views="5"
            />
          </List>
        </Container>
      </section>
    </main>
  );
};

export default AllLocations;
