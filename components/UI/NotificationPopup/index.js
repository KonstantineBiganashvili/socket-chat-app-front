import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  clearErrorNotification,
  clearSuccessNotification,
} from '../../../redux/slices/appState';
import Wrapper from './NotificationPopup.styles';

const NotificationPopup = () => {
  const dispatch = useDispatch();
  const { error, success } = useSelector((state) => state.appState);

  useEffect(() => {
    // Clearing error state after three seconds, I may increase this up to 5
    if (error) {
      setTimeout(() => {
        dispatch(clearErrorNotification());
      }, 3000);
    }

    // Clearing success state after three seconds, I may increase this up to 5
    if (success) {
      setTimeout(() => {
        dispatch(clearSuccessNotification());
      }, 3000);
    }
  }, [dispatch, error, success]);

  return error.length || success.length ? (
    // Using styled component as framer-motion component
    <Wrapper
      as={motion.div}
      animate={{ y: 100 }}
      initial={{
        color: error ? 'red' : 'green',
        backgroundColor: '#E3D5CA',
      }}
    >
      {error || success}
    </Wrapper>
  ) : null;
};

export default NotificationPopup;
