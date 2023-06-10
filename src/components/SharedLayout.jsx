import { Outlet } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import { Suspense } from 'react';
import FallBackLoader from './FallBackLoader/FallBackLoader';
import { Image } from 'mui-image';
import bgImage from './Images/Phonebook.jpg';

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<FallBackLoader />}>
        <Outlet />
      </Suspense>
      <Image
        objectFit={'cover'}
        objectPosition={'center'} 
        component="img"
        sx={{
          height: 50,
          width: 1300,
        }}
        alt='Phonebook'
        src={bgImage}
      />
    </>
  );
};

export default SharedLayout;