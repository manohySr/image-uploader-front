import { useContext, useState } from 'react';
import ImageContext from '../../imageContext';
import Text from '../Typography/Text';
import IMAGE from './../../../assests/images/image.svg';

import './DragDrop.css';

export default function DragDrop() {
  const { fileSet, isOnSet } = useContext(ImageContext);

  const handleDrop = (e) => {
    e.preventDefault();
    const f = e.dataTransfer.files[0];
    fileSet(f);
    isOnSet(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    isOnSet(true);
  };

  const handleDragEnd = (e) => {
    e.preventDefault();
    isOnSet(false);
  };
  return (
    <div
      className="uploader"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDragLeave={handleDragEnd}
    >
      <div className="mb-3">
        <img src={IMAGE} alt="" srcSet="" />
      </div>
      <Text
        text={'Drag & Drop your image here'}
        type="small"
        color={'rgb(189, 189, 189)'}
      />
    </div>
  );
}
