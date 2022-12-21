import { getUser } from '../../api/modules/user';
import { setErrorNotification } from '../slices/appState';
import { setLoading, setUser } from '../slices/user';

export const getUserData = () => async (dispatch) => {
  try {
    const currentUserInfo = await getUser();
    const {
      countries,
      current_user: user,
      user_chats: chats,
    } = currentUserInfo.data;
    dispatch(
      setUser({
        user,
        chats,
        countries,
      }),
    );
  } catch (err) {
    dispatch(setErrorNotification(err.message));
  } finally {
    dispatch(setLoading(false));
  }
};
