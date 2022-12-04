const Profile = () => {
  const data = localStorage.getItem("user");
  const user = JSON.parse(data);

  return (
    <div>
      <h1>Profile</h1>
      <div>
        <image src="../../src/assets/profile.png" alt="user profile" />
      </div>
    </div>
  );
};
export default Profile;
