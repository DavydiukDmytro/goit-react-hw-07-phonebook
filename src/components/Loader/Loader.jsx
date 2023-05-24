import { ProgressBar } from 'react-loader-spinner';
import { Container } from './Loader.styled';

export const Loader = () => {
  return (
    <Container>
      <ProgressBar
        height="90"
        width="90"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#1c1e21"
        barColor="#1c1e21"
      />
    </Container>
  );
};
