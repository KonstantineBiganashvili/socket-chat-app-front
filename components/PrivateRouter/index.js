import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const PrivateRouter = ({ children }) => {
  const router = useRouter();
  const { token } = useSelector((state) => state.user);

  const publicRoutes = ['login', 'signup'];
  const currentPath = router.asPath.split('/');
  const isProtectedRoute = !publicRoutes.some((path) =>
    currentPath.includes(path),
  );

  useEffect(() => {
    if (isProtectedRoute && !token) {
      router.push('/login');
    } else if (!isProtectedRoute && token) {
      router.push('/');
    }
  }, []);

  return children;
};

export default PrivateRouter;
