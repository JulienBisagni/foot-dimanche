import React, { useState } from 'react';
import loadable from '@loadable/component';

const Slider = loadable(() => import('./Slider'));
const Image = loadable(() => import('./Image'));

export default function ImageGrid({ images }) {
  const [featuredImage, setFeaturedImage] = useState(images[0]);
  const imagesWithoutFeaturedImage = images.filter(
    (image) => image.originalSrc !== featuredImage.originalSrc
  );
  return (
    <div className='image-grid'>
      <div className='image-grid__featured-image'>
        <Image img={featuredImage.originalSrc} />
      </div>
      <div className='image-grid__slider'>
        <Slider>
          {imagesWithoutFeaturedImage?.map((image) => (
            <button
              key={image.originalSrc}
              className='btn'
              onClick={() => setFeaturedImage(image)}>
              <Image img={image.originalSrc} />
            </button>
          ))}
        </Slider>
      </div>
    </div>
  );
}
