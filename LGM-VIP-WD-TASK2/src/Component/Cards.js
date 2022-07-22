import React from "react";
import "../App.css";

const Users = ({ loading, users }) => {
  return loading ? (
    <div id="main">
      <img
        src="https://media.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif"
        alt="Loading"
        className="galaxy"
      />
    </div>
  ) : (
    <div id="main">
      {users.map((user) => (
        <div className="project column3">
          {console.log(user)}
          <div className="profile">
            <img src={user.avatar} alt={user.avatar} className="avatar"></img>
            <h1 className="name">
              {user.first_name} {user.last_name}
            </h1>
            <p className="email">{user.email}</p>
            <p className="id">USER ID: {1000*user.id}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;