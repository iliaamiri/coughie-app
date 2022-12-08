import { useState } from "preact/hooks";
import ImageEditor from "../../components/profile/imageEditor";
import DisplayBar from "../../components/displayBar";
import ProfileEditor from "../../components/profile/profileEditor";
import FormEditor from "../../components/profile/formEditor";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  console.log(isEdit);

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
