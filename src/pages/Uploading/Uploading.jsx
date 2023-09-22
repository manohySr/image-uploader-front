import Text from '../../components/Typography/Text';
import Loader from '../../components/Loader/Loader';

import './Uploading.css';

export default function Uploading() {
  return (
    <div className="container">
      <div className="mb-3 uploading">
        <Text text={'Uploading...'} />
      </div>
      <Loader />
    </div>
  );
}
