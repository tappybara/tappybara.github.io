import logo from './logo.svg';
import './App.css';

import { Header } from './components'
import { Box, Text } from './library/components';

function App() {
  return (
    <div className="App">
      <Header />
      <Box width="75%">
        <Text type="h2">test</Text> 
      </Box>
   
    </div>
  );
}

export default App;
