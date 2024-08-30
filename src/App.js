import { Footer, MantineProvider } from '@mantine/core';
import BackGround from './components/background/BackGround';
import RecentSearch from './components/recentSearch/RecentSearch';
import FlightDeals from './components/flightDeals/FlightDeals';
import Services from './components/services/Services';
import PopularDestinations from './components/popularDestinations/PopularDestinations';
import Help from './components/help/Help';
import Faq from './components/faq/Faq';
import FooterPage from './components/footer/FooterPage';



function App() {
  return (
    <MantineProvider>

       <BackGround />
      <RecentSearch />
      <FlightDeals />
      <Services />
      <PopularDestinations />
      <Faq />
      <Help /> 
      <FooterPage/>
    </MantineProvider>
  );
}

export default App;
