import React, { useState } from 'react';
import { useOkto } from 'okto-sdk-react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios'; // Import Axios for API requests

const Okto = () => {
  const { authenticate } = useOkto(); // Removed getWallets as we're using the API directly
  const [authToken, setAuthToken] = useState(null);
  const [wallets, setWallets] = useState([]);

  const handleGoogleLogin = async (credentialResponse) => {
    const idToken = credentialResponse.credential;

    authenticate(idToken, async (authResponse, error) => {
      if (authResponse) {
        const token = authResponse.auth_token;
        setAuthToken(token);
        console.log('Authenticated successfully, auth token:', token);

        // Fetch wallet information using the direct API call
        try {
          const response = await axios.get('https://sandbox-api.okto.tech/api/v1/wallet', {
            headers: {
              Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
            },
          });

          setWallets(response.data); // Assuming the wallet data is in response.data
          console.log('Wallets retrieved successfully:', response.data);
        } catch (walletError) {
          console.error('Error fetching wallet information:', walletError);
        }
      } else if (error) {
        console.error('Authentication error:', error);
      }
    });
  };

  return (
    <div>
      <h1>Wallet Information</h1>
      {!authToken ? (
        <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={(error) => console.error('Login Failed', error)}
        />
      ) : (
        <div>
          {wallets.length > 0 ? (
            <ul>
              {wallets.map((wallet, index) => (
                <li key={index}>Wallet Address: {wallet.address}</li>
              ))}
            </ul>
          ) : (
            <p>No wallets found for the user.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Okto;
