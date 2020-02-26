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

  const addNewMember = member => {

    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };

    setMembers([...members, newMember]);
    console.log(members);
  }

  return (
    <div className ='App'>
     <h1>Team</h1>
     <Form addNewMember={addNewMember} />
     <Members members={members} />
    </div>
  );
}

export default App;