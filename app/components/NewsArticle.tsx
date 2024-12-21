import React, { useState } from 'react';
import Image from 'next/image';
import { Typography, Box, Paper, IconButton } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import YouTube from 'react-youtube';

interface Video {
  id: string;
  title: string;
  videoUrl?: string; // Optional for articles
  thumbnailUrl?: string; // Optional for articles
}

interface Article {
  id: string;
  title: string;
  content?: string; // Optional for videos
  imageUrl?: string; // Optional for videos
}

type Media = Video & Article;

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
    <Paper elevation={3} sx={{ maxWidth: 600, mx: 'auto', my: 2, p: 3 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        {media.title}
      </Typography>

      <Box sx={{ position: 'relative', width: '100%', height: 300, mb: 2 }}>
        {media.videoUrl && media.thumbnailUrl ? (
          !isPlaying ? (
            <>
              <Image
                src={media.thumbnailUrl}
                alt={media.title}
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
          ) : videoId ? (
            <YouTube videoId={videoId} opts={opts} />
          ) : (
            <Typography color="error">Invalid YouTube URL</Typography>
          )
        ) : media.imageUrl ? (
          <Image
            src={media.imageUrl}
            alt={media.title}
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: '4px' }}
          />
        ) : null}
      </Box>

      {media.content && (
        <Typography variant="body1">{media.content}</Typography>
      )}

      {!isPlaying && media.videoUrl && (
        <Typography variant="body2" color="text.secondary">
          Click the play button to watch the video
        </Typography>
      )}
    </Paper>
  );
};

export default MediaCard;
