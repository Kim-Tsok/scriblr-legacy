const AssignAvatar = (avatar) => {
  const avatarNum = Math.floor(Math.random() * 6);
  const aL1 =
    "https://res.cloudinary.com/duvliswox/image/upload/v1723327866/Avatars/avatar1_vt9h4x.png";
  const aL2 =
    "https://res.cloudinary.com/duvliswox/image/upload/v1723327866/Avatars/avatar2_rfluvc.png";
  const aL3 =
    "https://res.cloudinary.com/duvliswox/image/upload/v1723327866/Avatars/avatar3_teu6ni.png";
  const aL4 =
    "https://res.cloudinary.com/duvliswox/image/upload/v1723327866/Avatars/avatar4_ulabs7.png";
  const aL5 =
    "https://res.cloudinary.com/duvliswox/image/upload/v1723327866/Avatars/avatar5_w2t1vx.png";
  const aL6 =
    "https://res.cloudinary.com/duvliswox/image/upload/v1723327866/Avatars/avatar6_lyhmcl.png";

  let selectedAvatar = "";

  if (avatarNum == 0) {
    selectedAvatar = aL1;
  } else if (avatarNum == 1) {
    selectedAvatar = aL2;
  } else if (avatarNum == 2) {
    selectedAvatar = aL3;
  } else if (avatarNum == 3) {
    selectedAvatar = aL4;
  } else if (avatarNum == 4) {
    selectedAvatar = aL5;
  } else if (avatarNum == 5) {
    selectedAvatar = aL6;
  } else {
    selectedAvatar = aL1;
  }

  avatar = selectedAvatar;
};

export default AssignAvatar;
