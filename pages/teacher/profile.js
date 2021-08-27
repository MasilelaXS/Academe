import ProfileTemplate from "../../components/Profile";

function Profile() {
  return (
    <div className="main no-padding-top">
      <ProfileTemplate
        profileInitials="XS"
        profileName="Mr. Masilela XS"
        profileTeacher="St Paul's High Teacher"
        profileSubjects="Mathematics | Physical Sciences"
      />
    </div>
  );
}

export default Profile;
