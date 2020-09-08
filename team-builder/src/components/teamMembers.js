import React from "react";
import "./form.css";
import App from '../App'

const TeamMembers = (props) => {
  console.log("team props: ", props);

  return (
    <div className="member-list">
      {props.list.map((list) => (
        <div className="ul" key={list.id}>
          <li>
            <h2 className="Lables1">
              Name: <span className="labels2">{list.name}</span>
            </h2>
            <p className="Lables1">
              Email: <span className="labels2">{list.email}</span>
            </p>
            <p className="Lables1">
              Role: <span className="labels2">{list.role}</span>{" "}
            </p>
              </li>
              <button className='Edit' MemberToEdit={list.name}>Edit</button>
        </div>
      ))}
    </div>
  );
};
export default TeamMembers;
