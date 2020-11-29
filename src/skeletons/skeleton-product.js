import React from 'react';
import Shimmer from './shimmer';
import SkeletonElement from './skeleton-element';

const SkeletonProduct = () => {
  return (
    <div className='skeleton__wrapper'>
      <div className='skeleton__product'>
        <SkeletonElement type='title' />
        <SkeletonElement type='text' />
        <SkeletonElement type='text' />
        <SkeletonElement type='text' />
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonProduct;
