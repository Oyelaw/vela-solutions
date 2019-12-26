import React from 'react';
import Chart from '../../chart';

export const DATA = [
  {
    name: 'Jul', uv: 3350
  },
  {
    name: 'Feb', uv: 2000
  },
  {
    name: 'Mar', uv: 1500
  },
  {
    name: 'Apr', uv: 2780
  },
  {
    name: 'May', uv: 3990
  },
  {
    name: 'Jun', uv: 3350
  }
];

export const ChartOne = () => {

  return (
    <div className='mini-chart'>
      <div className='title-figure'>
        <span className='figures-text'>Daily Transaction Volume</span>
        <span className='figures-number'>2,342</span>
      </div>
      <div className='mini-line-chart'>
        <Chart 
          height={60}
          width={120}
          data={DATA}
          orientation={'top'}
          xAxisLine={false}
          mirror={true}
          hide={true}
          showHorizontalCartesan={false}
          showVerticalCartesan={false}
        />
      </div>
    </div>
  )
}


export const ChartTwo = () => {

  return (
    <div className='mini-chart'>
      <div className='title-figure'>
        <span className='figures-text'>Daily Transaction Value</span>
        <span className='figures-number'>N4,000,000</span>
      </div>
      <div className='mini-line-chart'>
      <Chart 
          height={60}
          width={120}
          data={DATA}
          orientation={'top'}
          xAxisLine={false}
          mirror={true}
          hide={true}
          showHorizontalCartesan={false}
          showVerticalCartesan={false}
        />
      </div>
    </div>
  )
}

export const ChartThree = () => {

  return (
    <div className='mini-chart'>
      <div className='title-figure'>
        <span className='figures-text'>Total Transaction Volume</span>
        <span className='figures-number'>452,000</span>
      </div>
      <div className='mini-line-chart'>
      <Chart 
          height={60}
          width={120}
          data={DATA}
          orientation={'top'}
          xAxisLine={false}
          mirror={true}
          hide={true}
          showHorizontalCartesan={false}
          showVerticalCartesan={false}
        />
      </div>
    </div>
  )
}

export const ChartFour = () => {

  return (
    <div className='mini-chart'>
      <div className='title-figure'>
        <span className='figures-text'>Total Transaction Value</span>
        <span className='figures-number'>N4,000,000</span>
      </div>
      <div className='mini-line-chart'>
      <Chart 
          height={60}
          width={120}
          data={DATA}
          orientation={'top'}
          xAxisLine={false}
          mirror={true}
          hide={true}
          showHorizontalCartesan={false}
          showVerticalCartesan={false}
        />
      </div>
    </div>
  )
}

const MiniCharts = () => {

  return (
    <div className='mini-charts'>
    <ChartOne />
    <ChartTwo />
    <ChartThree />
    <ChartFour />
  </div>
  )
}

export default MiniCharts;