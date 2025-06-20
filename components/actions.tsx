import React from "react";

interface ActionsProps {
  photoUrl: string;
}

const Actions = ({ photoUrl }: ActionsProps) => {
  return (
    <div className="w-full h-full bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight p-6 rounded-2xl">
      <div className="w-full h-full flex flex-col justify-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
          Education
        </h3>
        <div className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
          <p className="mb-2">
            <strong>B.Tech Information Technology</strong><br/>
            Cochin University of Science and Technology (CUSAT)<br/>
            2022 - 2026
          </p>
          <p>
            Currently in the fourth semester, pursuing a comprehensive curriculum in Information Technology with focus on software development, data structures, and modern computing technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Actions;
