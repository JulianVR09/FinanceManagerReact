import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import { AuthProvider } from './src/contexts/auth.context';

const App = () => {
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
};

export default App;
