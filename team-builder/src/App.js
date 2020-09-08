import React, { useState } from "react";
import "./App.css";
import Form from "./components/form";
import TeamMembers from "./components/teamMembers";

function App() {
  const [list, setList] = useState([]);

  const addNewMember = (formData) => {
    const newMember = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      role: formData.role,
    };
    setList([...list, newMember]);
  };

  const memberToEdit = (props) => {
    const oldMember = {
      name: props.name,
      email: props.email,
      role: props.role,
    };
    setList([...list, oldMember]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Members</h1>
        <Form addNewMember={addNewMember} />
        <TeamMembers list={list} memberToEdit={memberToEdit} />
       
      </header>
    </div>
  );
}

export default App;
