import { MantineProvider } from '@mantine/core';
import Header from './components/header/Header';
import BackGround from './components/background/BackGround';



function App() {
  return (
    <MantineProvider>  
      <Header/>
      <BackGround/>
      </MantineProvider>  
  );
}

export default App;
