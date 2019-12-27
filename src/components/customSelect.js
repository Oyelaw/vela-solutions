import React from 'react';

const CustomSelect = () => {

  const [showDropDown, setShowDropDown] = React.useState(false);

  return (
    <div className="custom-select" style={{width:200 +'px'}}>
      <select>
        <option value="0">All</option>
        <option value="1">Reconciled</option>
        <option value="2">Un-reconciled</option>
        <option value="3">Settled</option>
        <option value="4">Unsettled</option>
      </select>
    </div>
    
  )
  
}

export default CustomSelect;

