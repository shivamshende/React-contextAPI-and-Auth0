import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginLogout = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const handleButtonClick = () => {
    if (isAuthenticated) {
      logout({ returnTo: window.location.origin });
    } else {
      loginWithRedirect();
    }
  };

  return (
    <>
      {!isAuthenticated && (
        <div className='flex flex-col justify-center items-center text-white'>
          <p className="flex justify-center items-center mt-5 text-white">
            Our app utilizes the Context API in React to manage authentication.
          </p>
          <p className='flex justify-center items-center text-white'>
            Context API streamlines the process of verifying user identity,
            ensuring secure access to features across our platform.
          </p>
        </div>
      )}

      <div className="flex flex-col justify-center items-center h-screen">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleButtonClick}
        >
          {isAuthenticated ? 'Logout' : 'Login'}
        </button>
      </div>
    </>
  );
};

export default LoginLogout;