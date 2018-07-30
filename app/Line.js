import React from 'react';
import {
  VictoryChart,
  VictoryZoomContainer,
  VictoryGroup,
  VictoryTooltip,
  VictoryLine,
  VictoryScatter,
} from 'victory-native';

const data = [
  { x: 0, y: 0 },
  { x: 1, y: 2 },
  { x: 2, y: 1 },
  { x: 3, y: 4 },
  { x: 4, y: 3 },
  { x: 5, y: 5 }
];

export default class Line extends React.Component {
  render() {
    return (
      <VictoryChart height={450}
      containerComponent={
        <VictoryZoomContainer/>
      }>
      <VictoryLine
        interpolation={'natural'} data={data}
        style={{ data: { stroke: "#c43a31" } }}
      />
      <VictoryScatter data={data}
        size={5}
        style={{ data: { fill: "#c43a31" } }}
      />
    </VictoryChart>
    );
  }
}