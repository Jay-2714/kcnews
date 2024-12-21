"use client";
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { collection, getDocs, query, limit, QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';
import { db } from '@/firebase-config';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Divider } from '@mui/material';

const NewsArticle = lazy(() => import('./components/NewsArticle'));

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
        console.log(newsArticles);
        console.log(videos)
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
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
    <div className="w-full flex flex-row mx-auto px-4 py-8">
      {/* Left Sidebar - Google Ads */}
      <div className="flex w-1/6  flex-col items-center mr-4">
        <div className="google-ad" style={{ width: '160px', height: '600px', backgroundColor: '#f1f1f1' }}>
          <p className="text-center text-sm">Google Ad</p>
        </div>
      </div>
<div>
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          height: '100%',
          width: '2px',
           // Adjust color for better visibility
          mx: 2, // Add horizontal margin
        }}
      />
      </div>

      {/* Center Section - Articles */}
      <div className="flex flex-col gap-8 items-center w-4/6">
        <h2 className="text-2xl font-bold mb-4" translate="no">
          ताज्या बातम्या
        </h2>
        <Suspense fallback={<div className="text-center">Loading articles...</div>}>
          {newsArticles.map((article) => (
            <NewsArticle key={article.id} media={article} />
          ))}
        </Suspense>
      </div>
      <div>
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          height: '100%',
          width: '2px',
           // Adjust color for better visibility
          mx: 2, // Add horizontal margin
        }}
      />
      </div>

      {/* Right Sidebar - Google Ads */}
      <div className="flex w-1/6 flex-col items-center ml-4">
        <div className="google-ad" style={{ width: '160px', height: '600px', backgroundColor: '#f1f1f1' }}>
          <p className="text-center text-sm">Google Ad</p>
        </div>
      </div>
    </div>
  );
}
