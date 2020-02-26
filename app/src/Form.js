import React, { useState } from 'react';
import './Form.css';

const Form = (props) => {
    const [members, setMembers] = useState({
        name: '',
        email: '',
        role: ''
    });

    const newHandler = event => {
        setMembers ({ ...members,
            [event.target.name]: event.target.value
        });
        console.log(event.target.value);
    };

    const formSubmit = event => {
        event.preventDefault();
        props.addNewMember(members);
        setMembers({ name: '', email: '', role: '' });
    };

    return (
        <div>
            <Form onSubmit={formSubmit}>
                <label htmlFor='name'>Name</label>

                <input 
                type='text' 
                placeholder='Add Name' 
                id='name' 
                value={members.name} 
                name='name' 
                required='required'
                onChange={newHandler} />
            
                <label htmlFor='email'>Email</label>
                <input
                type='email'
                placeholder='Enter Email'
                id='email'
                value={members.email}
                required='required'
                onChange={newHandler} />

                <label htmlFor='role'>Role</label>
                <input 
                type='text'
                name='role'
                placeholder='Your Role'
                id='role'
                value={members.role}
                required='required'
                onChange={newHandler} />

                <button type='submit'>Add Member</button>
            </Form>
        </div>
    );
};

export default Form;