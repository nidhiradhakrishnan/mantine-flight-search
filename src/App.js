import { MantineProvider } from '@mantine/core';
import Header from './components/header/Header';



function App() {
  return (
    <MantineProvider>  
      <Header/>
       </MantineProvider>  
  );
}

export default App;
