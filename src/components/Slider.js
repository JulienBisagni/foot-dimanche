import React from 'react';
import useSlider from 'use-slider';

import 'use-slider/lib/slider.min.css';

export default function Slider({ children, bottom = 20 }) {
  const { ref } = useSlider({
    slidesPerView: 3,
    responsive: [
      [1300, { slidesPerView: 2 }],
      [900, { slidesPerView: 1 }],
    ],
    loop: true,
    navigation: true,
  });
  return (
    <div className={`slider --bottom-${bottom}`}>
      <div ref={ref}>{children}</div>
    </div>
  );
}
