import { MantineProvider } from '@mantine/core';
import BackGround from './components/background/BackGround';
import FlightTable from './components/flightTable/FlightTable';



function App() {
  return (
    <MantineProvider>
      <BackGround/>
       </MantineProvider>  
  );
}

export default App;
