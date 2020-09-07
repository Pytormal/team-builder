import React, {useState} from 'react';
import './App.css';
import Form from './components/form'
import TeamMembers from './components/teamMembers'

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      name: 'AlexAndrew',
      email: 'alex.m@pytormal.live',
      role: 'engineer'
    }
  ]);

  const addNewMember = (formData) => {
    const newMember = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      role: formData.role
    };
    setList([...list, newMember]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Members</h1>
        <Form addNewMember={addNewMember} />
        <TeamMembers list={list} />
      </header>
    </div>
  );
}

export default App;
