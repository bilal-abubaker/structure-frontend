'use client';
import React, { useState } from 'react';

const TestPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [angle, setAngle] = useState(120);

  return (
    <main className="main">
      {/* Header */}
      {/* <section>
        <p>Choose Hour</p>
        <p>Choose Day</p>
      </section> */}

      {/* Main */}
      <section
        className="slider"
        onClick={() => {
          console.log('trigger');
          setAngle((prevAngle) => {
            return prevAngle + 10;
          });
        }}
      >
        <div className="slider__value_2">
          <div className="slider__ball"></div>
        </div>
        {/* <div className="slider__value" style={{ height: `${angle}px` }}>
         
        </div> */}

        <div>
          <p>{inputValue} Hours</p>
        </div>
      </section>

      {/* Price and Hour */}
      <section>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setAngle(Number(e.target.value));
          }}
        />
        <p>$30</p>
      </section>

      <button>Start booking</button>
    </main>
  );
};

export default TestPage;
