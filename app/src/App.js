import React, { useState } from 'react';
// import logo from './logo.svg';
// import Data from './Data';
import './App.css';

import Form from './Form';
import Members from './Members';

function App(props) {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: 'Sam',
      email: 'ardis.productions@gmail.com',
      role: 'Software Engineer'
    }
  ]);
