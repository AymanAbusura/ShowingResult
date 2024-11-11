import React from 'react';
import InstanceColumn from './InstanceColumn';
import Arrow from './Arrow';

function Chart({ data }) {
  const { dev, test, prod, norm } = data;

  const sumDev = dev.front + dev.back + dev.db;
  const sumTest = test.front + test.back + test.db;
  const sumProd = prod.front + prod.back + prod.db;

  const maxTotalHeight = Math.max(sumDev, sumTest, sumProd);

  const getNormHeight = (value) => {
    if (value >= 1000) {
      return '100px';
    }
    return value < 30 ? `${value}vh` : `${value}px`;
  };


  return (
    <div className="chart-container">
      <div className="arrows-container">
        <Arrow diff={sumTest - sumDev} />
        <Arrow diff={sumProd - sumTest} /> 
      </div>

      <div className="chart-items">
        <InstanceColumn title="Dev" values={dev} maxTotalHeight={maxTotalHeight} />
        <InstanceColumn title="Test" values={test} maxTotalHeight={maxTotalHeight} />
        <InstanceColumn title="Prod" values={prod} maxTotalHeight={maxTotalHeight} />
        
        <div className="norm-container">
          <div className="norm-bar" style={{ height: getNormHeight(norm) }}>
            <div className='norm-bar-text'>{norm}</div>
          </div>
          <h3>Норматив</h3>
        </div>
      </div>

      <div className="detail-container">
        <div className="detail">
          <div className="square" style={{ backgroundColor: '#4AB6E8' }}></div>
          <span className="label">Клиентская часть</span>
        </div>
        <div className="detail">
          <div className="square" style={{ backgroundColor: '#AA6FAC' }}></div>
          <span className="label">Серверная часть</span>
        </div>
        <div className="detail">
          <div className="square" style={{ backgroundColor: '#E85498' }}></div>
          <span className="label">База данных</span>
        </div>
      </div>
    </div>
  );
}

export default Chart;