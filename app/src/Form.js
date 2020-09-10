import React, { useState} from 'react';

const Form = props => {
    const [member, setMember] = useState({
        id: Date.now(),
        name: '',
        email: '',
        role: ''
    });

    const handleChanges = event => {
      setMember({ ...member, [event.target.name]: event.target.value});
    };

    const submitHandler = event => {
      event.preventDefault();
      props.addNewMember(member);
      setMember({ name: '', email: '', role: '' });
    };

    return (
      <div style={{borderBottom: '3px solid black', marginRight:"5%", marginLeft:"5%",}}>
        <form style={{padding:"30px", }} onSubmit={submitHandler}>
          <h1>Add Member:</h1>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text" 
            id="name" 
            name="name" 
            value={member.name} 
            onChange={handleChanges}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={member.email} 
            onChange={handleChanges}
          />
          <br />
          <label htmlFor="role">Role:</label>
          <br />
          <input
            name="role"
            id="role"
            value={member.role}
            onChange={handleChanges}
          />
          <br/>
          <br/>
          <label htmlFor="addMember"></label>
          <button type="submit" id="addMember" style ={{background: "black", color: 'white', fontWeight: 'bold', border: '1px solid black'}}> Submit</button>
          <br/>
          <br/>
        </form>
      </div>
    );
  };


export default Form;