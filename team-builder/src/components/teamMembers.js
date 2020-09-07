import React from "react";

const TeamMembers = (props) => {
  console.log("team props: ", props);

  return (
    <div className="member-list">
      {props.list.map((list) => (
        <div className="list" key={list.id}>
          <h2>{list.name}</h2>
          <p>{list.email}</p>
          <p>{list.role}</p>
        </div>
      ))}
    </div>
  );
};
export default TeamMembers