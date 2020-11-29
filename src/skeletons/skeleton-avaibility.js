import React from 'react';
import Shimmer from './shimmer';
import SkeletonElement from './skeleton-element';

const SkeletonAvaibility = () => {
  return (
    <div className='skeleton__wrapper'>
      <div className='skeleton__avaibility'>
        <SkeletonElement type='avaibility' />
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonAvaibility;
