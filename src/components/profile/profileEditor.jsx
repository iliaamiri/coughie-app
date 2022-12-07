import { useState, useRef } from "preact/hooks";
import MyButton from "../button";
import useLocalStorage from "use-local-storage";
const ProfileEditor = () => {
  const data = localStorage.getItem("user");
  const [user, setUser] = useLocalStorage(
    "user",
    JSON.parse(data) || {
      uname: "",
      age: 20,
      lastTimeVape: "2020-10-10",
      spendMoney: 10,
      eCigaretteSaved: 1,
      isSubmit: true,
      imageUrl: "../assets/profile.png",
    }
  );
  const [imageUrl, setImageUrl] = useState("../assets/profile.png");
  const fileInputRef = useRef();

  const handleFileSelect = e => {
    const reader = new FileReader();
    reader.onload = e => {
      setImageUrl(e.target.result);
      setUser({ ...user, imageUrl: e.target.result });
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="profile-page">
      <input
        value={imageUrl}
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        className="image-input"
        style={{ display: "none" }}
      />
      {imageUrl && (
        <img
          className="profile-editor"
          src={user?.imageUrl ? user.imageUrl : "../assets/profile.png"}
          alt=""
          onClick={() => fileInputRef.current.click()}
        />
      )}
      <div className="btn-div">
        <MyButton
          onClick={() => fileInputRef.current.click()}
          text="Update your picture"
        />
      </div>
    </div>
  );
};
export default ProfileEditor;
