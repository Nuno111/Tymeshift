import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import LocationsList from "../components/LocationsList";

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
  font-size: 1.25rem;
  font-weight: bold;
`;

const AllLocations = () => {
  const [locationsData, setLocationsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get(
        "https://6033c4d8843b15001793194e.mockapi.io/api/locations"
      );

      setLocationsData(resp.data);
      setLoading(false);
    };

    fetchData();
  }, []);

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
          {loading && <p>Please wait while the data loads</p>}
          {!loading && <LocationsList locationsData={locationsData} />}
        </Container>
      </section>
    </main>
  );
};

export default AllLocations;
