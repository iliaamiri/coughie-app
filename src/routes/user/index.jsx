import { useState } from "preact/hooks";
import ImageEditor from "../../components/profile/imageEditor";
import DisplayBar from "../../components/displayBar";
import ProfileEditor from "../../components/profile/profileEditor";
import FormEditor from "../../components/profile/formEditor";
import Preference from "../../components/profile/preferenceEditor";
import Setting from "../../components/profile/settingEditor";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="profile">
      <DisplayBar name="My profile" />
      <div className="profile-div">
        {!isEdit ? (
          <>
            <ImageEditor setIsEdit={setIsEdit} />
            <Preference />
            <Setting />
          </>
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
