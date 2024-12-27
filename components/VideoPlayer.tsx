import React, { useState } from 'react';
import Image from 'next/image';
import { Typography, Box, Paper, IconButton } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import YouTube from 'react-youtube';

interface Video {
  id: string;
  title: string;
  videoUrl: string;  // Full YouTube URL (e.g., 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  thumbnailUrl: string;
}

const VideoPlayer: React.FC<{ video: Video }> = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  // Function to extract the video ID from the YouTube URL
  const getYouTubeID = (url: string): string | null => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const matches = url.match(regex);
    return matches ? matches[1] : null; // Return video ID or null
  };

  const videoId = getYouTubeID(video.videoUrl); // Extract the video ID

  // YouTube options
  const opts = {
    height: '300',
    width: '100%',
    playerVars: {
      autoplay: 1, // Auto-play video when it's loaded
    },
  };

  return (
    <Paper elevation={3} sx={{ maxWidth: 600, mx: 'auto', my: 2, p: 3 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        {video.title}
      </Typography>

      <Box sx={{ position: 'relative', width: '100%', height: 300, mb: 2 }}>
        {!isPlaying ? (
          <>
            {/* Show the thumbnail image until play is clicked */}
            <Image
              src={video.thumbnailUrl}
              alt={video.title}
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: '4px' }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
              }}
            >
              <IconButton
                onClick={handlePlay}
                sx={{
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                }}
              >
                <PlayCircleOutlineIcon sx={{ fontSize: 64 }} />
              </IconButton>
            </Box>
          </>
        ) : (
          // Show the YouTube video player when the play button is clicked
          videoId ? (
            <YouTube videoId={videoId} opts={opts} />
          ) : (
            <Typography color="error">Invalid YouTube URL</Typography>
          )
        )}
      </Box>

      {!isPlaying && (
        <Typography variant="body2" color="text.secondary">
          Click the play button to watch the video
        </Typography>
      )}
    </Paper>
  );
};

export default VideoPlayer;
