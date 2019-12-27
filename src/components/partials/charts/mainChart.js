import React from 'react';

import Chart from '../../chart';
import LeftButton from '../../../../public/assets/Left-Button.svg'
import RightButton from '../../../../public/assets/Right-Button.svg'

import { DATA } from './miniCharts';

const MainChart = () => {

  return (
    <div className='main-chart'>
      <div className='left-main-chart'>
        <div className='title-pagination'>
          <div className='date'>Today: 5, Aug 2018</div>
          <div className='range-picker'>
            <svg width="140" height="33" viewBox="0 0 140 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1 5.25C1 2.90279 2.90279 1 5.25 1H134.75C137.097 1 139 2.90279 139 5.25V27.75C139 30.0972 137.097 32 134.75 32H5.25C2.90279 32 1 30.0972 1 27.75V5.25Z" stroke="#DDE0E3" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M123.827 16.1676L121.6 18.7481C121.405 18.9737 120.765 19.2051 120.308 18.6872L118.166 16.2059C117.945 15.9488 117.945 15.5321 118.166 15.2755C118.388 15.0183 118.748 15.0183 118.969 15.2755L120.948 17.5672L122.992 15.2005C123.222 14.9332 123.597 14.9332 123.827 15.2005C124.058 15.4672 124.058 15.9009 123.827 16.1676Z" fill="#CCCFD4" />
              <path d="M17.7832 20H13.0312V19.1562H14.9297V12.6289L12.9844 13.209V12.2949L15.8906 11.4102V19.1562H17.7832V20ZM25.0137 16.9883C25.0137 17.9844 24.8027 18.7598 24.3809 19.3145C23.959 19.8652 23.3945 20.1406 22.6875 20.1406C22.3594 20.1406 22.0898 20.0938 21.8789 20V19.0273C22.0898 19.1797 22.3633 19.2559 22.6992 19.2559C23.5859 19.2559 24.0293 18.5039 24.0293 17V11.5977H25.0137V16.9883ZM31.3184 20H30.3574V19.0625H30.334C29.916 19.7812 29.3008 20.1406 28.4883 20.1406C27.8906 20.1406 27.4219 19.9824 27.082 19.666C26.7461 19.3496 26.5781 18.9297 26.5781 18.4062C26.5781 17.2852 27.2383 16.6328 28.5586 16.4492L30.3574 16.1973C30.3574 15.1777 29.9453 14.668 29.1211 14.668C28.3984 14.668 27.7461 14.9141 27.1641 15.4062V14.4219C27.7539 14.0469 28.4336 13.8594 29.2031 13.8594C30.6133 13.8594 31.3184 14.6055 31.3184 16.0977V20ZM30.3574 16.9648L28.9102 17.1641C28.4648 17.2266 28.1289 17.3379 27.9023 17.498C27.6758 17.6543 27.5625 17.9336 27.5625 18.3359C27.5625 18.6289 27.666 18.8691 27.873 19.0566C28.084 19.2402 28.3633 19.332 28.7109 19.332C29.1875 19.332 29.5801 19.166 29.8887 18.834C30.2012 18.498 30.3574 18.0742 30.3574 17.5625V16.9648ZM38.1094 20H37.1484V16.5781C37.1484 15.3047 36.6836 14.668 35.7539 14.668C35.2734 14.668 34.875 14.8496 34.5586 15.2129C34.2461 15.5723 34.0898 16.0273 34.0898 16.5781V20H33.1289V14H34.0898V14.9961H34.1133C34.5664 14.2383 35.2227 13.8594 36.082 13.8594C36.7383 13.8594 37.2402 14.0723 37.5879 14.498C37.9355 14.9199 38.1094 15.5312 38.1094 16.332V20ZM46.2891 17.0352H43.0898V16.2793H46.2891V17.0352ZM56.127 20H51.375V19.1562H53.2734V12.6289L51.3281 13.209V12.2949L54.2344 11.4102V19.1562H56.127V20ZM63.3574 16.9883C63.3574 17.9844 63.1465 18.7598 62.7246 19.3145C62.3027 19.8652 61.7383 20.1406 61.0312 20.1406C60.7031 20.1406 60.4336 20.0938 60.2227 20V19.0273C60.4336 19.1797 60.707 19.2559 61.043 19.2559C61.9297 19.2559 62.373 18.5039 62.373 17V11.5977H63.3574V16.9883ZM70.2188 20H69.2578V19.0508H69.2344C68.8359 19.7773 68.2188 20.1406 67.3828 20.1406C65.9531 20.1406 65.2383 19.2891 65.2383 17.5859V14H66.1934V17.4336C66.1934 18.6992 66.6777 19.332 67.6465 19.332C68.1152 19.332 68.5 19.1602 68.8008 18.8164C69.1055 18.4688 69.2578 18.0156 69.2578 17.457V14H70.2188V20ZM77.1445 20H76.1836V16.5781C76.1836 15.3047 75.7188 14.668 74.7891 14.668C74.3086 14.668 73.9102 14.8496 73.5938 15.2129C73.2812 15.5723 73.125 16.0273 73.125 16.5781V20H72.1641V14H73.125V14.9961H73.1484C73.6016 14.2383 74.2578 13.8594 75.1172 13.8594C75.7734 13.8594 76.2754 14.0723 76.623 14.498C76.9707 14.9199 77.1445 15.5312 77.1445 16.332V20Z" fill="#7F8FA4" />
            </svg>

            <div className='left-button'>
              <img src={LeftButton} />
            </div>
            <div className='right-button'>
              <img src={RightButton} />
            </div>
          </div>
        </div>

        <div>
          <Chart
            height={400}
            width={890}
            data={DATA}
            orientation={'top'}
            xAxisLine={false}
            mirror={true}
            hide={false}
            showHorizontalCartesan={false}
            showVerticalCartesan={true}
          />
        </div>
      </div>
      <div className='right-main-chart'>
        <div className='orders brd-btm'>
          <span className='orders-header'>Orders</span>
          <svg width="305" height="4" viewBox="0 0 305 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M241.897 0H303C304.105 0 305 0.895431 305 2C305 3.10457 304.105 4 303 4H241.897V0Z" fill="#FDC203" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2C0 0.895431 0.895431 0 2 0H241.896V4H2C0.895428 4 0 3.10457 0 2Z" fill="#27AE60" />
          </svg>
          <span className='order-detail'>Pending Order: 20</span>
          <span className='order-detail'>Reconciled Order: 80</span>
          <span className='order-detail m-b'>Total Order: 100</span>
        </div>
        <div className='orders'>
          <span className='orders-header'>Payments</span>
          <svg width="305" height="4" viewBox="0 0 305 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M241.897 0H303C304.105 0 305 0.895431 305 2C305 3.10457 304.105 4 303 4H241.897V0Z" fill="#FDC203" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2C0 0.895431 0.895431 0 2 0H241.896V4H2C0.895428 4 0 3.10457 0 2Z" fill="#27AE60" />
          </svg>
          <span className='order-detail'>Reconciled Payments: 20</span>
          <span className='order-detail'>Un-Reconciled Payments: 80</span>
          <span className='order-detail m-b'>Total Payments: 100</span>
        </div>
      </div>
    </div>
  )
}

export default MainChart;