
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import React from 'react'

function App() {
  const {user,loginWithRedirect,isAuthenticated,logout}=useAuth0();
 
  return (
    <div className='App'>
     {isAuthenticated && user ? (
        <div>
          <p>{user.given_name}</p>
          <a href='https://www.google.com/'> Link</a>
          
          <img src={user.picture} alt="User Profile" />

        </div>
      ) : (
        <p>User not authenticated</p>
      )}
{
  isAuthenticated ? (<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>):(
    <button onClick={() => loginWithRedirect()}>Log In</button>)
}


    </div>
  )
}

export default App