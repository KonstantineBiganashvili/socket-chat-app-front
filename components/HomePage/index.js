import Image from 'next/image';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HomeLayout from '../../layouts/HomeLayout';
import { getUserData } from '../../redux/actions/user';
import Loader from '../UI/Loader';
import { HomePageContainer } from './HomePage.styles';

const HomePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <HomeLayout>
      <HomePageContainer>
        <Image src="/img/conversation.png" width="830" height="600" />
        Start Your First Conversation Here!
      </HomePageContainer>
    </HomeLayout>
  );
};

export default HomePage;
