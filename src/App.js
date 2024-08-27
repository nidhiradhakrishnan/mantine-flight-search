import { MantineProvider } from '@mantine/core';
import BackGround from './components/background/BackGround';
import Header from './components/header/Header';



function App() {
  return (
    <MantineProvider>
      <BackGround/>
      {/* <Header/> */}
       </MantineProvider>  
  );
}

export default App;
