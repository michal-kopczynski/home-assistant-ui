import SensorParameter from './SensorParameter'
import NodeData from '../types/NodeData'


const Node = ({nodeData}: {nodeData: NodeData | undefined}) => {
  return (
    <div className="node">
      <span>
        {nodeData && nodeData.location ? `${nodeData.location}` : ""}
      </span>

      <ul  className="node-data">
        <SensorParameter name='Temperature' value={nodeData && nodeData.sensors && nodeData.sensors.temperature} unit='°C'/>
        <SensorParameter name='Humidity' value={nodeData && nodeData.sensors && nodeData.sensors.humidity} unit='%'/>
        <SensorParameter name='PM 1.0' value={nodeData && nodeData.sensors && nodeData.sensors.pms1_0} unit=' mg/m3'/>
        <SensorParameter name='PM 2.5' value={nodeData && nodeData.sensors && nodeData.sensors.pms2_5} unit=' mg/m3'/>
        <SensorParameter name='PM 10' value={nodeData && nodeData.sensors && nodeData.sensors.pms10} unit=' mg/m3'/>
      </ul>
    </div>
  )
}

export default Node;
