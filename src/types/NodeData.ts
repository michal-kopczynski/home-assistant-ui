type NodeData = {
    location: string,
    timestamp: Date,
    sensors: {
      temperature: number,
      humidity: number,
      pms1_0: number,
      pms2_5: number,
      pms10: number
    }
  }

export default NodeData;
