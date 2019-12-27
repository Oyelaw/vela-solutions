import React, { useState } from 'react';

import CustomSelect from '../components/customSelect'
import { DATA } from './data';

const Table = () => {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [lowRange, setLowRange] = React.useState(1);
  const [highRange, setHighRange] = React.useState(rowsPerPage);
  const [data, setData] = useState(DATA);


  const handleChangePageFoward = () => {
    // get number of pages based on current rows displayed per page
    const pages = (DATA.length) / rowsPerPage
    const check = page + 1
    if (check < pages) {
      setPage(page + 1);
      setLowRange(rowsPerPage + lowRange);
      setHighRange(highRange + highRange);
      return
    }

    alert('Currently on last page')
  };

  const handleChangePageBack = () => {
    if (page > 0) {
      setPage(page - 1);
      setLowRange(lowRange - rowsPerPage);
      const count = highRange - rowsPerPage;
      setHighRange((count < 0) ? rowsPerPage : count);
      return
    }

    alert('Currently on first page')
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const renderTableData = () => {
    return data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => {
      const { key, item_type, price, transaction_no, time, status } = item
      return (
        <tr key={index}>
          <td id='type-row'>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="18" fill="#7F8FA4" />
              <path d="M15.3477 14.5977L12.2363 23H11.1523L8.10547 14.5977H9.20117L11.5273 21.2598C11.6016 21.4746 11.6582 21.7227 11.6973 22.0039H11.7207C11.752 21.7695 11.8164 21.5176 11.9141 21.248L14.2871 14.5977H15.3477ZM26.5156 14.5977L24.1426 23H22.9883L21.2598 16.8594C21.1855 16.5977 21.1406 16.3125 21.125 16.0039H21.1016C21.0781 16.293 21.0273 16.5742 20.9492 16.8477L19.209 23H18.0664L15.6055 14.5977H16.6895L18.4766 21.043C18.5508 21.3125 18.5977 21.5938 18.6172 21.8867H18.6465C18.666 21.6797 18.7266 21.3984 18.8281 21.043L20.6855 14.5977H21.6289L23.4102 21.0898C23.4727 21.3125 23.5195 21.5742 23.5508 21.875H23.5742C23.5898 21.6719 23.6426 21.4023 23.7324 21.0664L25.4492 14.5977H26.5156Z" fill="white" />
            </svg>

            <span className='mg-left'>{item_type}</span>
          </td>
          <td>{transaction_no}</td>
          <td>{price}</td>
          <td>{time}</td>
          <td>
            <div className='status'>
              <div className='status-dot-yellow'></div>
              {status}
            </div>
          </td>
        </tr>
      )
    })
  }

  const renderTableHeader = () => {
    return <tr>
      <th>Item Type</th>
      <th>Transaction No</th>
      <th>Price</th>
      <th>Time</th>
      <th></th>
    </tr>
  }

  return (
    <div className='custom-table'>
      <div className='pagination-search'>
        <div>
          Showing
          <select name="len" id="select-length" onChange={handleChangeRowsPerPage}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
          out of {`${DATA.length}`} payments
        </div>

        <div className='search'>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6573 12L7.66054 8.00325C6.77101 8.80345 5.60422 9.22472 4.40868 9.17734C3.21314 9.12995 2.08334 8.61766 1.25994 7.74958C0.436537 6.8815 -0.0153972 5.72623 0.000400647 4.52986C0.0161985 3.33348 0.49848 2.19056 1.34452 1.34452C2.19056 0.49848 3.33348 0.0161985 4.52986 0.000400647C5.72623 -0.0153972 6.8815 0.436537 7.74958 1.25994C8.61766 2.08334 9.12995 3.21314 9.17734 4.40868C9.22472 5.60422 8.80345 6.77101 8.00325 7.66054L12 11.6573L11.6573 12ZM4.5954 0.492454C3.7833 0.489588 2.98862 0.727783 2.31199 1.17687C1.63536 1.62597 1.10723 2.26575 0.794463 3.01521C0.481699 3.76467 0.398378 4.59008 0.555052 5.38693C0.711726 6.18377 1.10135 6.9162 1.67457 7.49146C2.2478 8.06671 2.97884 8.45892 3.77513 8.61841C4.57142 8.7779 5.39712 8.6975 6.14768 8.38739C6.89824 8.07727 7.53989 7.5514 7.99137 6.87637C8.44285 6.20133 8.68385 5.4075 8.68386 4.5954C8.68259 3.51012 8.2519 2.46945 7.48585 1.70069C6.71981 0.931925 5.68066 0.497555 4.5954 0.492454Z" fill="#0E1D25" />
          </svg>
          <input className='search-input' placeholder='search...' />
        </div>
        <div className='show'>
          
          {/* <CustomSelect /> */}
        </div>
      </div>
      <table id='students'>
        <tbody>
          {renderTableHeader()}
          {renderTableData()}
        </tbody>
      </table>
      <div className='current-page'>
        <div className='showing'>
          {`Showing ${lowRange} to ${highRange} of ${data.length} Entries`}
        </div>
        <div>
          <div className='button'>
            <span className='previous pd-5 mg-l-r' onClick={handleChangePageBack}>Previous</span>
            <span className='previous pd-5 mg-l-r current'>{`${page + 1}`}</span>
            <span className='previous pd-5 mg-l-r'>{`${page + 2}`}</span>
            <span className='previous pd-5 mg-l-r' onClick={handleChangePageFoward}>Next</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table;
