import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useContext, useState } from 'react';
import Button from '../../components/Button/Button';
import Text from '../../components/Typography/Text';
import ImageContext from '../../imageContext';

import './Uploaded.css';

export default function Uploaded() {
  const [state, setState] = useState(false);

  const { data } = useContext(ImageContext);
  const link = data.imagePath;

  function copyText(id) {
    // Get the text field
    const copyText = document.getElementById(id).textContent;
    navigator.clipboard.writeText(copyText);
    setState(true);
    setTimeout(() => {
      setState(false);
    }, 2000);
  }

  return (
    <>
      <div className="container">
        <CheckCircleIcon
          style={{ color: 'rgb(33, 150, 83)' }}
          className="icon-true mb-2"
        />
        <div className="mb-3">
          <Text text={'Uploaded Successfully!'} type="medium" />
        </div>
        <img src={link} alt="" srcSet="" className="image__container mb-2" />
        <div className="copy">
          <div className="link" id="link">
            {link}
          </div>
          <div onClick={() => copyText('link')}>
            <Button text={'Copy Link'} />
          </div>
          {state ? (
            <>
              {' '}
              <div id="alert">Copied</div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
