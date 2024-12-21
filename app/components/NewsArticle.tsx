import React, { useState } from 'react';
import YouTube from 'react-youtube';



interface Article {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  date: string;
  videoUrl: string;
  thumbnailUrl?: string;// Optional for articles
  // New property for video URL
}

type Media = Article;

const MediaCard: React.FC<{ media: Media }> = ({ media }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const getYouTubeID = (url: string): string | null => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const matches = url.match(regex);
    return matches ? matches[1] : null;
  };

  const videoId = media.videoUrl ? getYouTubeID(media.videoUrl) : null;

  const opts = {
    height: '300',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="mb-4 p-6 bg-white shadow-md rounded-md">
      <h1 className='text-lg font-semibold '>{media.date}</h1>
      <h2 className="text-2xl font-semibold mb-4">{media.title}</h2>

      <div className="relative w-full mb-4">
        {media.videoUrl && media.thumbnailUrl ? (
          !isPlaying ? (
            <>
              <img
                src={media.thumbnailUrl}
                alt={media.title}
                className="w-full h-full object-cover rounded-md"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <button
                  onClick={handlePlay}
                  className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-1.932A2 2 0 008.5 11.84v4.32a2 2 0 003.055 1.68l3.197-1.932a2 2 0 000-3.36z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v.01M12 17.747v.01"
                    />
                  </svg>
                </button>
              </div>
            </>
          ) : videoId ? (
            <YouTube videoId={videoId} opts={opts} />
          ) : (
            <p className="text-red-500">Invalid YouTube URL</p>
          )
        ) : media.imageUrl ? (
          <img
            src={media.imageUrl}
            alt={media.title}
            className="w-full h-full object-cover rounded-md"
          />
        ) : null}
      </div>

      {media.content && (
        <p className="text-gray-700 text-base mb-4">{media.content}</p>
      )}

      {!isPlaying && media.videoUrl && (
        <p className="text-sm text-gray-500">
          Click the play button to watch the video
        </p>
      )}
    </div>
  );
};

export default MediaCard;
