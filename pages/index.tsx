import React, { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';

const MyComponent = () => {
  const { width } = useWindowSize();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
  {/* Reds */}
  <div
    className="two"
    style={{
      backgroundColor: 'rgb(153, 0, 0)',  // Brick Red
      width: isLoaded ? width : 0,
      transition: 'width 1.5s ease',
      height: '20px'
    }}
  />
  <div
    className="one"
    style={{
      backgroundColor: 'rgb(139, 0, 0)',  // Deep, Rich Red
      width: isLoaded ? width : 0,
      transition: 'width 1.5s linear',
      height: '15px'
    }}
  />
  <div
    className='seven'
    style={{
      backgroundColor: 'rgb(139, 0, 0)', // Oxblood
      width: isLoaded ? width : 0,
      transition: 'width 1.5s step-end',
      height: '10px',
    }}
  />

  {/* Oranges/Browns */}
  <div
    className='five'
    style={{
      backgroundColor: 'rgb(204, 85, 0)', // Burnt Orange
      width: isLoaded ? width : 0,
      transition: 'width 1.5s ease-in-out',
      height: '10px',
    }}
  />
  <div
    className='eight'
    style={{
      backgroundColor: 'rgb(204, 119, 34)', // Ochre
      width: isLoaded ? width : 0,
      transition: 'width 1.5s steps(4,start)',
      height: '20px',
    }}
  />

  {/* Yellows */}
  <div
    className='four'
    style={{
      backgroundColor: 'rgb(204, 204, 0)', // Mustard Yellow
      width: isLoaded ? width : 0,
      transition: 'width 1.5s ease-out',
      height: '30px',
    }}
  />
  <div
    className="two"
    style={{
      backgroundColor: 'rgb(255, 215, 0)',  // Gold
      width: isLoaded ? width : 0,
      transition: 'width 1.5s ease',
      height: '20px'
    }}
  />
  <div
    className='seven'
    style={{
      backgroundColor: 'rgb(189, 183, 107)', // Yellow
      width: isLoaded ? width : 0,
      transition: 'width 1.5s step-end',
      height: '10px',
    }}
  />

  {/* Greens */}
  <div
    className='three'
    style={{
      backgroundColor: 'rgb(34, 139, 34)', // Forest Green
      width: isLoaded ? width : 0,
      transition: 'width 1.5s ease-in',
      height: '15px'
    }}
  />
  <div
    className='five'
    style={{
      backgroundColor: 'rgb(0, 100, 0)', // Green
      width: isLoaded ? width : 0,
      transition: 'width 1.5s ease-in-out',
      height: '10px',
    }}
  />
  <div
    className='eight'
    style={{
      backgroundColor: 'rgb(85, 107, 47)', // Olive (Variant of Green)
      width: isLoaded ? width : 0,
      transition: 'width 1.5s steps(4,start)',
      height: '20px',
    }}
  />

  {/* Blues */}
  <div
    className='six'
    style={{
      backgroundColor: 'rgb(0, 0, 153)', // Deep Blue
      width: isLoaded ? width : 0,
      transition: 'width 1.5s step-start',
      height: '15px',
    }}
  />
  <div
    className='six'
    style={{
      backgroundColor: 'rgb(0, 0, 139)', // Blue
      width: isLoaded ? width : 0,
      transition: 'width 1.5s step-start',
      height: '15px',
    }}
  />
  <div
    className='nine'
    style={{
      backgroundColor: 'rgb(0, 0, 205)', // Medium Blue
      width: isLoaded ? width : 0,
      transition: 'width 1.5s steps(4, end)',
      height: '10px',
    }}
  />

  {/* Indigo */}
  <div
    className='four'
    style={{
      backgroundColor: 'rgb(75, 0, 130)', // Purple
      width: isLoaded ? width : 0,
      transition: 'width 1.5s ease-out',
      height: '30px',
    }}
  />

  {/* Greys/Blacks */}
  <div
    className="one"
    style={{
      backgroundColor: 'rgb(60, 60, 60)',  // Dark Grey
      width: isLoaded ? width : 0,
      transition: 'width 1.5s linear',
      height: '15px'
    }}
  />
  <div
    className='nine'
    style={{
      backgroundColor: 'rgb(112, 128, 144)', // Dove Grey
      width: isLoaded ? width : 0,
      transition: 'width 1.5s steps(4, end)',
      height: '10px',
    }}
  />
  <div
    className="three"
    style={{
      backgroundColor: 'rgb(0, 0, 0)', // Black
      width: isLoaded ? width : 0,
      transition: 'width 1.5s ease-in',
      height: '15px'
    }}
  />

    </div>
  );
};

export default MyComponent;
