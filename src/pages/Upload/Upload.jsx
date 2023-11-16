import { useContext } from 'react';
import Button from '../../components/Button/Button';
import Text from '../../components/Typography/Text';
import DragDrop from '../../components/DragDrop/DragDrop';
import './Upload.css';

import ImageContext from '../../imageContext';

export default function Upload() {
  const { file, fileSet } = useContext(ImageContext);

  const handleInputFile = () => {
    document.querySelector('#uploader').click();
  };

  return (
    <>
      <input
        id="uploader"
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => {
          fileSet(e.target.files[0]);
        }}
      />
      <div className="container">
        <div className="mb-2">
          <Text text={'Upload your image'} type="medium" />
        </div>
        <div className="mb-3">
          <Text
            text={'File should be Jpeg, Png,...'}
            type="x-small"
            color={'rgb(130, 130, 130)'}
          />
        </div>
        <DragDrop />

        <div className="mb-3">
          <Text text={'or'} type="small" color={'rgb(189, 189, 189)'} />
        </div>
        <div onClick={handleInputFile}>
          <Button text={'Choose a file'} />
        </div>
      </div>
    </>
  );
}
