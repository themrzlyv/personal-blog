import React from 'react';

const Connection = () => {
  return (
    <>
      <div className="my-5">
        <h6 className="font-semibold text-xl dark:text-white">Let's connect!</h6>
        <p className="text-gray-600 font-extralight dark:text-white text-current">
          My social media channels are all over this website but here are two handy buttons so we
          can connect right away. Looking forward to meet you!
        </p>
      </div>
      <div className="flex items-center w-full">
        <button className="flex-1 flex justify-center items-center dark:border-gray-500 dark:hover:bg-gray-400 dark:hover:bg-opacity-20 hover:border-cyan-600 hover:bg-gray-50 transition-all duration-300 py-2 border rounded-md">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-envelope text-cyan-600 mr-1"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg>
          </span>
          <span className="text-cyan-600">Drop a note</span>
        </button>
        <button className="flex-1 flex justify-center ml-1 dark:border-gray-500 dark:hover:bg-gray-400 dark:hover:bg-opacity-20 hover:border-cyan-600 hover:bg-gray-50 transition-all duration-300 items-center py-2 border rounded-md">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-telegram text-cyan-600 mr-1"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
            </svg>
          </span>
          <span className="text-cyan-600">Send a DM</span>
        </button>
      </div>
    </>
  );
};

export default Connection;
