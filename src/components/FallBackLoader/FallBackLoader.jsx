import { ColorRing } from 'react-loader-spinner';
import { Wrapper } from './FallBackLoader.styled';
 
const FallBackLoader = () => {
  return (
    <Wrapper>
      <ColorRing
        height={100}
        width={100}
        color="#1976d2"
        visible={true}
        ariaLabel="colorRing-loading"
        secondaryColor="#1976d2"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    </Wrapper>
  );
};

export default FallBackLoader;