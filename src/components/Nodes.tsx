import { useEffect,useState } from 'react';
import { useSubscription } from 'mqtt-react-hooks';
import NodeDataType from '../types/NodeData';

import Node from './Node'

type NodesType = {
  [key: string]: NodeDataType
}

export default function Nodes() {
  const { message, connectionStatus } = useSubscription('/nodes/#');
  const [nodes, setNodes] = useState < NodesType > ({});

  useEffect(() => {
    if (message) {
      console.log(message.topic)
      // TODO: add topic validation
      
      setNodes({...nodes, [message.topic.split('/')[2]]: JSON.parse(message.message)})
      console.log(nodes)
    } 
  }, [message]);

  return (
    <div className='nodes-section'>
      <h1>Nodes</h1>
      <div className='nodes'>
        {Object.keys(nodes).map((key)=><Node key={key} nodeData={nodes[key]}/>)}
      </div>
    </div>
  );
}
