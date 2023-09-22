import { useEffect, useState } from 'react';
import Upload from './pages/Upload/Upload';
import Uploading from './pages/Uploading/Uploading';
import Uploaded from './pages/Uploaded/Uploaded';

import ImageContext from './imageContext';
import './style.css';

import api from '../service';

export default function App() {
  const [file, fileSet] = useState(null);
  const [state, stateSet] = useState(0);
  const [isOn, isOnSet] = useState(false);
  const [data, dataSet] = useState('');

  useEffect(() => {
    async function uploadFile(file) {
      if (file) {
        try {
          let formdata = new FormData();
          formdata.append('file', file);
          const requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow',
          };
          const response = await fetch(api, requestOptions);
          stateSet(1);
          const result = await response.json();
          dataSet(result.data);
          stateSet(2);
        } catch (error) {
          stateSet(0);
        }
      }
    }
    uploadFile(file);
  }, [file]);
  return (
    <>
      <ImageContext.Provider
        value={{
          file,
          fileSet,
          state,
          stateSet,
          isOn,
          isOnSet,
          data,
          dataSet,
        }}
      >
        {state === 0 ? (
          <>
            {isOn ? (
              <>
                <div className="blur">
                  <Upload />
                </div>
              </>
            ) : (
              <>
                <Upload />
              </>
            )}
          </>
        ) : (
          <>
            {state === 1 && <Uploading />}
            {state === 2 && <Uploaded />}
          </>
        )}
      </ImageContext.Provider>
    </>
  );
}
