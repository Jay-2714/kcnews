import React from 'react';
import Image from 'next/image';
import { Typography, Box, Paper } from '@mui/material';

interface Article {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
}

const NewsArticle: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <Paper elevation={3} sx={{ maxWidth: 600, mx: 'auto', my: 2, p: 3 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        {article.title}
      </Typography>
      <Box sx={{ position: 'relative', width: '100%', height: 300, mb: 2 }}>
        <Image
          src={article.imageUrl}
          alt={article.title}
          layout="fill"
          objectFit="cover"
          style={{ borderRadius: '4px' }}
        />
      </Box>
      <Typography variant="body1">
        {article.content}
      </Typography>
    </Paper>
  );
};

export default NewsArticle;