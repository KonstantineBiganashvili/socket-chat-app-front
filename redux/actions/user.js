import { deleteImg, getUser } from '../../services/api/modules/user';
import { setErrorNotification } from '../slices/appState';
import { setLoading, setProfile, setUser } from '../slices/user';

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

export const deleteImgAction = (profile) => async (dispatch) => {
  try {
    await deleteImg(profile.image);

    dispatch(setProfile({ ...profile, image: {} }));
  } catch (err) {
    setErrorNotification(
      err?.response?.data?.response?.message || 'Oops... Something Went Wrong!',
    );
  }
};
