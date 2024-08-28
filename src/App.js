import { MantineProvider } from '@mantine/core';
import BackGround from './components/background/BackGround';
import RecentSearch from './components/recentSearch/RecentSearch';



function App() {
  return (
    <MantineProvider>

      <BackGround/>
      <RecentSearch />
    </MantineProvider>
  );
}

export default App;
