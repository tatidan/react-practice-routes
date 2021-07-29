import React from "react";

const ProfilePage = ({ history, location, match }) => {
  return (
    <div>
      <h2>ProfilePage</h2>
      <button type="button" onClick={() => history.push(location.state.from)}>
        Go back
      </button>
    </div>
  );
};

export default ProfilePage;
