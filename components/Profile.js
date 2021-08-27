import React from "react";

function ProfileTemplate({
  profileInitials,
  profileName,
  profileTeacher,
  profileSubjects,
}) {
  return (
    <div className="main no-padding-top animate__animated animate__fadeInRight">
      <div className="profile-top"></div>
      <div className="profile-icon-wrapper flex justify-center">
        <div className="profile-icon">{profileInitials}</div>
      </div>
      <div className="profile-body">
        <div className="content">
          <h2>{profileName}</h2>
          <p>
            <b>{profileTeacher}</b>
          </p>
          <p>{profileSubjects}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileTemplate;
