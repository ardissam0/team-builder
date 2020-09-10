import React from 'react';

const Member = props => {
    return (
      <div style = {{marginLeft: '5%'}}>
        {props.member.map(member => (
          <div style={{fontSize:"20px", padding:"30px", width:"15%"}} key={member.id}>
            <h4>{member.name}</h4>
            <p>{member.email}</p>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    );
  };

export default Member;