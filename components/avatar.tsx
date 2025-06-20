import React from "react";
import Image from "next/image";

interface AvatarTransitionProps {
  avatarUrl: string;
}

const AvatarTransition: React.FC<AvatarTransitionProps> = ({ avatarUrl }) => {
  return (
    <div className="flex justify-center">
      <div className="relative w-24 h-24 md:w-28 md:h-28">
        <Image
          alt="Avatar"
          className="w-24 h-24 md:w-28 md:h-28 object-cover mb-4 border-2 border-transparent dark:border-knight rounded-full"
          height={128}
          src={avatarUrl}
          width={128}
        />
      </div>
    </div>
  );
};

export default AvatarTransition;
