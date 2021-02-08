/* eslint-disable no-nested-ternary */
import React from 'react';
import Img from 'gatsby-image/withIEPolyfill';

export default function Image({
  img,
  imgObjectFit = 'contain',
  additionalClassNames = '',
  imgTitle = 'Footdimanche',
  width = 600,
  height = 200,
}) {
  return (
    <>
      {img && img.fluid ? (
        <Img
          fluid={img.fluid}
          objectFit={imgObjectFit}
          className={`img ${additionalClassNames}`}
          alt={img.title}
        />
      ) : img ? (
        <img
          loading='lazy'
          className={`img ${additionalClassNames}`}
          src={img.src || img}
          alt={imgTitle}
          width={width}
          height={height}
        />
      ) : null}
    </>
  );
}
