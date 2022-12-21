import { Provider } from 'react-redux';

import PrivateRouter from '../components/PrivateRouter';
import NotificationPopup from '../components/UI/NotificationPopup';
import store from '../redux/store';
import GlobalStyle from '../styles/globals';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NotificationPopup />
      <GlobalStyle />
      <PrivateRouter>
        <Component {...pageProps} />
      </PrivateRouter>
    </Provider>
  );
}

export default MyApp;
