import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log('user data, ', user)

  if (isLoading) {
    return <div className="flex justify-center mt-5 text-yellow-500 text-2xl">Please Wait...</div>;
  }

  return (
    isAuthenticated && (
      <div className="flex flex-col items-center justify-center mt-5 text-white">
        <img className="mb-5 " src={user.picture} alt={user.name} />
        <h2 className="text-2xl font-semibold text-yellow-500">Welcome {user.name} !</h2>
        <p><span className="font-bold">Your Email Id: </span>{user.email}</p>
        <p><span className="font-bold">Last update: </span>{user.updated_at
        }</p>
      </div>
    )
  );
};

export default Profile;