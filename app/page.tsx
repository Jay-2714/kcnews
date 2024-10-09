"use client"
import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, limit, QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';
import { db } from '@/firebase-config'; // Adjust this path if necessary
import NewsArticle from './components/NewsArticle';
import VideoPlayer from './components/VideoPlayer';
import { Box, Typography, Grid, CircularProgress, Divider } from '@mui/material';

interface Article {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
}

interface Video {
  id: string;
  title: string;
  videoUrl: string;
  thumbnailUrl: string;
}

export default function Home() {
  const [newsArticles, setNewsArticles] = useState<Article[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articleQuery = query(collection(db, 'articles'), limit(5));
        const articleSnapshot = await getDocs(articleQuery);
        const articleData = articleSnapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
          id: doc.id,
          ...doc.data()
        } as Article));
        setNewsArticles(articleData);

        const videoQuery = query(collection(db, 'videos'), limit(5));
        const videoSnapshot = await getDocs(videoQuery);
        const videoData = videoSnapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
          id: doc.id,
          ...doc.data()
        } as Video));
        setVideos(videoData);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching data: ", err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <CircularProgress size={64} />
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" component="h2" gutterBottom>
          ताज्या बातम्या
        </Typography>
        {newsArticles.map((article) => (
          <NewsArticle key={article.id} article={article} />
        ))}
      </Grid>
      <Grid item xs={12} md={1}>
        <Divider orientation="vertical" flexItem sx={{ height: '100%' }} />
      </Grid>
      <Grid item xs={12} md={5}>
        <Typography variant="h4" component="h2" gutterBottom>
          व्हिडिओ
        </Typography>
        {videos.map((video) => (
          <VideoPlayer key={video.id} video={video} />
        ))}
      </Grid>
    </Grid>
  </Box>
  );
}