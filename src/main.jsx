import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import Profile from './Profile';
import LoginLogout from './LoginLogout';
import './App.css';

const baseUrl = process.env.NODE_ENV === 'production' ? "https://shivamshende.github.io" : "http://localhost:5173";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-eer2erp88huqadhk.us.auth0.com"
    clientId="lukH5FRjA45lCt0h6LOW2yV3rLdvD8tH"
    authorizationParams={{
      redirect_uri: baseUrl
    }}
  >
    <Profile />
    <LoginLogout />
  </Auth0Provider>
);
