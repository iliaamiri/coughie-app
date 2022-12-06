import { useState } from "preact/hooks";
const Profile = () => {
  const data = localStorage.getItem("user");
  const [user, setUser] = useState(
    JSON.parse(data) || {
      uname: "John",
      age: 20,
      lastTimeVape: "2020-10-10",
      spendMoney: 10,
      eCigaretteSaved: 1,
    }
  );
  console.log(user);

  return (
    <div>
      <h1>Profile</h1>
      <div>
        <img src="/assets/profile.png" alt="user profile" />
      </div>
    </div>
  );
};
export default Profile;
