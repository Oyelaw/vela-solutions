import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, CartesianGrid
} from 'recharts';

export default class Chart extends PureComponent {

  render() {
    const { height, width, data, showHorizontalCartesan, showVerticalCartesan, xAxisLine, mirror, hide, orientation } = this.props;

    return (
      <AreaChart
      width={width}
      height={height}
      data={data}
      margin={{
        top: 20, right: 10, left: 10, bottom: 0
      }}
    >
         <CartesianGrid horizontal={showHorizontalCartesan} vertical={showVerticalCartesan} />
         <XAxis dataKey="name" orientation={orientation} axisLine={xAxisLine} mirror={mirror} hide={hide} />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill='rgba(0,0,255,0.1)' />
    </AreaChart>
    )
  }
}