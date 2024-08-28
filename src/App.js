import { MantineProvider } from '@mantine/core';
import BackGround from './components/background/BackGround';
import RecentSearch from './components/recentSearch/RecentSearch';
import FlightDeals from './components/flightDeals/FlightDeals';



function App() {
  return (
    <MantineProvider>
      <BackGround/>
      <RecentSearch />
      <FlightDeals/>
    </MantineProvider>
  );
}

export default App;
