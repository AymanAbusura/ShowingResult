import React from 'react';

function Arrow({ diff }) {
  const backgroundColor = diff < 0 ? '#FC440F' : diff > 0 ? '#00CC99' : '#898290';

  const fontSize = Math.abs(diff) >= 10000 ? '10px' : '14px';

  return (
    <svg 
      className="arrow" 
      viewBox="0 0 50 90" 
      xmlns="http://www.w3.org/2000/svg" 
      width="200" 
      height="100"
    >
      <line 
        x1="0" 
        y1="30" 
        x2="40" 
        y2="30" 
        stroke="#898290" 
        strokeWidth="1" 
      />
      
      <line 
        x1="0" 
        y1="30" 
        x2="0" 
        y2="80" 
        stroke="#898290" 
        strokeWidth="1" 
      />

      <rect
        x="40"
        y="15"
        width="48"
        height="24"
        rx="15"
        fill={backgroundColor}
      />
  
      <text
        width={50}
        x="63"
        y="30"
        fontSize={fontSize}
        fontFamily="Roboto"
        fontWeight="700"
        fill="white"
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        {diff === 0 ? (
          `${diff}`
        ) : (
          <>
            <tspan fontSize={fontSize}>{diff < 0 ? '↓' : '↑'}</tspan>
            <tspan fontSize={fontSize}> {diff < 0 ? `${diff}` : `+${diff}`}</tspan>
          </>
        )}
      </text>

      <line 
        x1="110" 
        y1="30" 
        x2="88" 
        y2="30" 
        stroke="#898290" 
        strokeWidth="1" 
      />

      <line 
        x1="110" 
        y1="30" 
        x2="110" 
        y2="80" 
        stroke="#898290" 
        strokeWidth="1" 
      />

      <polygon 
        points="105,75 110,85 115,75"
        fill="#898290" 
      />
    </svg>
  );
}

export default Arrow;