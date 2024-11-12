import { Spinner } from 'react-bootstrap';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={`${styles.loadingContainer}`}>
      <Spinner animation="border" variant="secondary" />
    </div>
  );
};

export default Loading;
