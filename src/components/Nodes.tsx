import { useEffect,useState } from 'react';
import { useSubscription } from 'mqtt-react-hooks';
import NodeDataType from '../types/NodeData';
import TopicType from '../types/Topic';

import Node from './Node'

type NodesType = {
  [key: string]: NodeDataType
}

function parseTopic(topic: string) : TopicType {
  const parts = topic.split('/')
  console.log({parts})
  return {
    prefix: parts[0],
    location: parts[1],
    payload: parts[2],
  }
}

export default function Nodes() {
  const { message, connectionStatus } = useSubscription('nodes/#');
  const [nodes, setNodes] = useState < NodesType > ({});

  useEffect(() => {
    if (message) {
      console.log(message.topic)
      const topic = parseTopic(message.topic)
      if (topic.payload === 'data'){
        console.log('dat:')
        console.log(message.message)
        setNodes({...nodes, [topic.location]: (typeof message.message === 'string' ? JSON.parse(message.message) : message.message)})
      } else if (topic.payload === 'status') {
        console.log('status:')
        console.log(message.message)
        setNodes({...nodes, [topic.location]: (typeof message.message === 'string' ? JSON.parse(message.message) : message.message)})
      }
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
