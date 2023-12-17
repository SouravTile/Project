// src/App.js
import React from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <UserForm />
      <UserList />
    </div>
  );
};

export default App;
