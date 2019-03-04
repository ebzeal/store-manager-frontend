import React from 'react';
import Routes from './routes/index';

const App = () => {
  return (
    <div data-test="appComponent">
      <Routes />
      <img
        data-test="logoImg"
        src="https://res.cloudinary.com/ebzeal/image/upload/v1551350124/Ebzeal%20Stores/logo.png"
        alt="Logo"
      />
    </div>
  );
};

export default App;
