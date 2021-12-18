type NodeData = {
    location: string,
    timestamp: Date,
    sensors: {
      airQuality: {
        pms1_0: number,
        pms2_5: number,
        pms10: number
      }
      temperature: number,
      humidity: number,
    }
  }

export default NodeData;
