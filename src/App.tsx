import './App.css';

import { Connector } from 'mqtt-react-hooks';
import Nodes from './components/Nodes';

function App() {
  return (
    <Connector
      brokerUrl='ws://localhost:8080'
      options={{ keepalive: 0 }}
    >
      <div className="App">
        <Nodes />
      </div>
    </Connector>
  );
}

export default App;