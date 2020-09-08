import React, { useState } from "react";
import "./form.css"


const Form = (props) => {
  console.log("form propp: ", props);
  const [list, setList] = useState({
    name: "",
    email: "",
    role: "",
  });

  const changeHandler = (e) => {
    console.log(e.target.value);
    console.log("list: ", list);
    setList({
      ...list,
      [e.target.name]: e.target.value,
    });
    };
    
    const submitForm = (e) => {
        e.preventDefault();
        props.addNewMember(list)
        setList({ name: '', email: '', role: '' });
    };

    return (
        <form className='form' onSubmit={submitForm}>
            <label className='name labels' htmlFor='name'>Name</label>
            <input
                type='text'
                name='name'
                value={list.name}
                onChange={changeHandler}
                />
            <label className='email labels' htmlFor='email'>Email</label>
            <input
                type='text'
                name='email'
                value={list.email}
                onChange={changeHandler}
            />
            <label className='role labels'  htmlFor='role'>Role</label>
            <input
                type='text'
                name='role'
                value={list.role}
                onChange={changeHandler}
            />

            <button className='button' type='submit'>Add new team member</button>
        </form>
    )

};
export default Form;
