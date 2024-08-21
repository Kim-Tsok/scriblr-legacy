const AssignAvatar = (avatar) => {
  const avatarNum = Math.floor(Math.random() * 6);

  const avatarUrls = [
    "https://res.cloudinary.com/duvliswox/image/upload/v1723327866/Avatars/avatar1_vt9h4x.png",
    "https://res.cloudinary.com/duvliswox/image/upload/v1723327866/Avatars/avatar2_rfluvc.png",
    "https://res.cloudinary.com/duvliswox/image/upload/v1723327866/Avatars/avatar3_teu6ni.png",
    "https://res.cloudinary.com/duvliswox/image/upload/v1723327866/Avatars/avatar4_ulabs7.png",
    "https://res.cloudinary.com/duvliswox/image/upload/v1723327866/Avatars/avatar5_w2t1vx.png",
    "https://res.cloudinary.com/duvliswox/image/upload/v1723327866/Avatars/avatar6_lyhmcl.png",
  ];

  const selectedAvatar = avatarUrls[avatarNum] || avatarUrls[0]; // Default to first avatar

  return selectedAvatar;
};

export default AssignAvatar;
