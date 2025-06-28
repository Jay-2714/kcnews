import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import Image from 'next/image';

interface Article {
  additionalContent?: React.JSX.Element;
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  date: string; // Format: "YYYY-MM-DD"
  videoUrl: string;
  thumbnailUrl?: string; // Optional for articles
}

type Media = Article;

const MediaCard: React.FC<{ media: Media }> = ({ media }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(media.thumbnailUrl || null);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const getYouTubeID = (url: string): string | null => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const matches = url.match(regex);
    return matches ? matches[1] : null;
  };

  const formatDate = (dateString: string): { formattedDate: string; day: string } => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    const dayOptions: Intl.DateTimeFormatOptions = { weekday: 'long' };
    return {
      formattedDate: date.toLocaleDateString('en-US', options),
      day: date.toLocaleDateString('en-US', dayOptions),
    };
  };

  const { formattedDate, day } = formatDate(media.date);

  useEffect(() => {
    if (!thumbnailUrl && media.videoUrl) {
      const videoId = getYouTubeID(media.videoUrl);
      if (videoId) {
        setThumbnailUrl(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
      }
    }
  }, [media.videoUrl, thumbnailUrl]);

  const videoId = media.videoUrl ? getYouTubeID(media.videoUrl) : null;

  const opts = {
    height: '300',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="mb-4 p-6 bg-white shadow-md rounded-md relative">
      {/* Date and Day */}
      <div className="flex justify-between mb-4">
        <span className="text-gray-500 text-sm">{formattedDate}</span>
        <span className="text-gray-500 text-sm capitalize">{day}</span>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-semibold mb-4">{media.title}</h2>

      {/* Image */}
      {media.imageUrl && (
        <div className="mb-4">
          <Image
            src={media.imageUrl}
            alt={media.title}
            width={800}
            height={400}
            className="w-full h-auto object-cover rounded-md"
            priority
          />
        </div>
      )}

      {/* Content */}
      {media.content && (
        <p className="text-gray-700 text-base mb-4">{media.content}</p>
      )}

      {/* Video */}
      <div className="relative w-full mb-4">
        {media.videoUrl && thumbnailUrl ? (
          !isPlaying ? (
            <>
              <Image
                src={thumbnailUrl}
                alt={media.title}
                width={800}
                height={450}
                className="w-full h-auto object-cover rounded-md"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <button
                  onClick={handlePlay}
                  className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </>
          ) : videoId ? (
            <YouTube videoId={videoId} opts={opts} />
          ) : (
            <p className="text-red-500">Invalid YouTube URL</p>
          )
        ) : null}
      </div>

      {/* Additional Content */}
      {media.additionalContent && (
        <div className="text-gray-700 text-base">{media.additionalContent}</div>
      )}
    </div>
  );
};

export default MediaCard;