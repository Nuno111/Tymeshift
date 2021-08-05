import { useEffect, useState } from "react";
import axios from "axios";
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
  font-size: 1.25rem;
  font-weight: bold;
`;

const List = styled.ul`
  padding: 0 3rem;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

const AllLocations = () => {
  const [locationsData, setLocationsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dateOptions = { hour12: true, hour: "2-digit", minute: "2-digit" };

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

  console.log(locationsData);
  if (!loading) {
    console.log(new Date(locationsData[0].createdAt));
  }

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
          {!loading && (
            <List>
              {locationsData.map(
                ({ id, name, userCount, createdAt, description }) => {
                  let formattedTime = new Date(createdAt)
                    .toLocaleTimeString("en-US", dateOptions)
                    .split(" ")
                    .join("")
                    .toLowerCase();

                  formattedTime =
                    formattedTime[0] === "0"
                      ? formattedTime.substring(1)
                      : formattedTime;

                  return (
                    <LocationCard
                      key={id}
                      name={name}
                      userCount={userCount}
                      createdAt={formattedTime}
                      description={description}
                      views="5"
                    />
                  );
                }
              )}
            </List>
          )}
        </Container>
      </section>
    </main>
  );
};

export default AllLocations;
