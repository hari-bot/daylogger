import React from "react";

interface ProfilePictureProps {
  name: string;
  color: string;
  size?: string;
}

function ProfilePicture({ name, color, size = "100" }: ProfilePictureProps) {
  return (
    <img
      className="rounded-full"
      src={`https://placehold.co/${size}x/${color}/ffffff.svg?text=${name[0]}&font=Lato`}
      alt={name}
    />
  );
}

export default ProfilePicture;
