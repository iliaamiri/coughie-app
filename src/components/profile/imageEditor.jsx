import "./index.css";
import { useState } from "preact/hooks";
import MyButton from "../button";
import useLocalStorage from "use-local-storage";

const ImageEditor = ({ setIsEdit }) => {
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
      imageUrl: "/assets/profileAvatars/default.jpg",
    }
  );
  const [imageUrl, setImageUrl] = useState("/assets/profileAvatars/default.jpg");

  const handleFileSelect = e => {
    const reader = new FileReader();
    reader.onload = e => {
      setImageUrl(e.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);
    setUser({ ...user, imageUrl: e.target.result });
  };

  const handleClick = () => {
    setIsEdit(true);
  };

  return (
    <div className="profile-page">
      <input
        value={imageUrl}
        type="file"
        onChange={handleFileSelect}
        className="image-input"
        style={{ display: "none" }}
      />
      {imageUrl && (
        <img
          className="image-editor"
          src={user?.imageUrl ? user.imageUrl : "/assets/profileAvatars/default.jpg"}
          alt=""
        />
      )}
      <div className="btn-div">
        <MyButton onClick={handleClick} text="Edit Profile" />
      </div>
    </div>
  );
};
export default ImageEditor;
