import React from 'react';

function InstanceColumn({ title, values }) {
  const getHeightUnit = (value) => {
    if (value >= 1000) {
      return '100px';
    }
    return value < 30 ? `${value}vh` : `${value}px`;
  };

  return (
    <div className="instance-container">
      <div className='instance-box'>
        <div className="component front" style={{ height: getHeightUnit(values.front) }}>{values.front}</div>
        <div className="component back" style={{ height: getHeightUnit(values.back) }}>{values.back}</div>
        <div className="component db" style={{ height: getHeightUnit(values.db) }}>{values.db}</div>
      </div>

      <div>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default InstanceColumn;