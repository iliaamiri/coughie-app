import { useState } from "preact/hooks";
import ImageEditor from "../../components/profile/imageEditor";
import DisplayBar from "../../components/displayBar";
import ProfileEditor from "../../components/profile/profileEditor";
import FormEditor from "../../components/profile/formEditor";

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
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="profile">
      <DisplayBar name="My profile" />
      <div className="profile-div">
        {!isEdit ? (
          <ImageEditor setIsEdit={setIsEdit} />
        ) : (
          <>
            <ProfileEditor />
            <FormEditor setIsEdit={setIsEdit} />
          </>
        )}
      </div>
    </div>
  );
};
export default Profile;
