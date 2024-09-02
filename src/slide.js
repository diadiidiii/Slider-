import React, { useState, useEffect, useRef } from 'react';
import './slide.css';

const Slider = ({ min, max, initialValue, showMinMaxValues, showDroplet }) => {
  const [value, setValue] = useState(initialValue);
  const sliderRef = useRef(null);
  const dropletRef = useRef(null);

  // Calculate the step size based on the min and max values
  const step = (max - min) / Math.floor(max - min);

  const handleOnChange = (event) => {
    // Calculate the nearest possible value based on the step size
    const newValue = Math.round(event.target.value / step) * step;
    setValue(newValue);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    const droplet = dropletRef.current;

    const updateDropletPosition = () => {
      const sliderWidth = slider.offsetWidth;
      const dropletWidth = droplet.offsetWidth;
      const thumbWidth = slider.clientWidth * (value / (max - min)); // Calculate thumb width
      const newPosition = thumbWidth - dropletWidth/ 2 + 57; // Adjust droplet position
      droplet.style.left = newPosition + 'px';
    };

    // Initial update of droplet position
    updateDropletPosition();

    // Listen for input events on the slider to update the droplet position
    slider.addEventListener('input', updateDropletPosition);

    return () => {
      // Cleanup event listener when component unmounts
      slider.removeEventListener('input', updateDropletPosition);
    };
  }, [value]); // Update droplet position when value changes

  return (
    <div className="slider-container">
      {showMinMaxValues && <span>{min}</span>}
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleOnChange}
        step={step} // Set the step size
        className="slider"
        ref={sliderRef} // Ref for slider input element
      />
      {showMinMaxValues && <span>{max}</span>}
      {showDroplet && <div className="droplet" ref={dropletRef}>{value}</div>}
    </div>
  );
};

export default Slider;
