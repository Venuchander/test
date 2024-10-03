import { useState } from 'react';
import SignIn from './assets/pages/SignIn';
import SignUp from './assets/pages/SignUp';

const App = () => {
  const [showSignIn, setShowSignIn] = useState(true);

  const toggleForm = () => {
    setShowSignIn(!showSignIn);
  };

  return (
    <div>
      <h1>{showSignIn ? 'Sign In' : 'Sign Up'}</h1>
      {showSignIn ? (
        <SignIn toggleForm={toggleForm} />
      ) : (
        <SignUp toggleForm={toggleForm} />
      )}
      <button onClick={toggleForm}>
        Switch to {showSignIn ? 'Sign Up' : 'Sign In'}
      </button>
    </div>
  );
};

export default App;