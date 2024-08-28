import { MantineProvider } from '@mantine/core';
import BackGround from './components/background/BackGround';
import RecentSearch from './components/recentSearch/RecentSearch';
import FlightDeals from './components/flightDeals/FlightDeals';
import Services from './components/services/Services';



function App() {
  return (
    <MantineProvider>

       {/* <BackGround /> */}
      <RecentSearch />
      {/* <FlightDeals />
      <Services/> */}

    </MantineProvider>
  );
}

export default App;
