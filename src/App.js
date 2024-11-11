/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Chart from './components/Chart';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const defaultLink = process.env.REACT_APP_DEFAULT_LINK;
  const linkOne = process.env.REACT_APP_LINK_ONE;
  const linkTwo = process.env.REACT_APP_LINK_TWO;
  const linkThree = process.env.REACT_APP_LINK_THREE;
  const linkFour = process.env.REACT_APP_LINK_FOUR;

  const fetchData = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(setData)
      .catch(console.error);
  };

  useEffect(() => {
    fetchData(defaultLink);
  }, []);

  const toggleMenu = () => {
    setIsMenuVisible(prevState => !prevState);
  };

  const handleMenuOptionClick = (url, title) => {
    fetchData(url);
    setIsMenuVisible(false);
  };

  return (
    <div className='App'>
      <div className='app-container'>
        {data ? (
          <div>
            <div className='header'>
              <h1>
                Количество пройденных тестов “{data.title}”
              </h1>

              <div className='dots' onClick={toggleMenu}>...</div>

              {isMenuVisible && (
                <div className="menu">
                  <button className="close-button" onClick={() => setIsMenuVisible(false)}>X</button>
                  <ul>
                    <li onClick={() => handleMenuOptionClick(defaultLink, 'OS Doors')}>OS Doors</li>
                    <li onClick={() => handleMenuOptionClick(linkOne, 'OS Bombuntu')}>OS Bombuntu</li>
                    <li onClick={() => handleMenuOptionClick(linkTwo, 'Mibre Office')}>Mibre Office</li>
                    <li onClick={() => handleMenuOptionClick(linkThree, 'LoWtEx')}>LoWtEx</li>
                    <li onClick={() => handleMenuOptionClick(linkFour, 'W$ POS')}>W$ POS</li>
                  </ul>
                </div>
              )}
            </div>

            <div className='chart-box'>
              <Chart data={data} />
            </div>
          </div>
        ) : (
          <p>Загрузка данных...</p>
        )}
      </div>
    </div>
  );
}

export default App;