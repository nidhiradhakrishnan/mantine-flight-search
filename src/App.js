import { MantineProvider } from '@mantine/core';
import BackGround from './components/background/BackGround';
import RecentSearch from './components/recentSearch/RecentSearch';
import FlightDeals from './components/flightDeals/FlightDeals';
import Services from './components/services/Services';
import PopularDestinations from './components/popularDestinations/PopularDestinations';
import Faq from './components/faq/Faq';



function App() {
  return (
    <MantineProvider>

      <BackGround />
      <RecentSearch />
      <FlightDeals />
      <Services />
      <PopularDestinations />
      <Faq />

    </MantineProvider>
  );
}

export default App;
