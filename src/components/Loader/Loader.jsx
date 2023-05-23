import { ThreeDots } from 'react-loader-spinner';
import { Container } from './Loader.styled';

export const Loader = () => {
  return (
    <Container>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#ff6b0a"
        ariaLabel="three-dots-loading"
        wrapperClassName=""
        visible={true}
      />
    </Container>
  );
};
