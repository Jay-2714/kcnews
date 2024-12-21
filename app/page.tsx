"use client";
import React, { useState, useEffect, lazy, Suspense } from "react";
import {
  collection,
  getDocs,
  query,
  limit,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";
import { db } from "@/firebase-config";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Divider } from "@mui/material";

// Lazy-loaded component for rendering individual articles
const NewsArticle = lazy(() => import("./components/NewsArticle"));

// Updated Article interface with the `videoUrl` property
interface Article {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  date: string;
  videoUrl: string; 
  thumbnailUrl?: string; // New property for video URL
}

export default function Home() {
  const [newsArticles, setNewsArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch articles data from Firebase Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const articleQuery = query(collection(db, "articles"), limit(5));
        const articleSnapshot = await getDocs(articleQuery);
        const articleData = articleSnapshot.docs.map(
          (doc: QueryDocumentSnapshot<DocumentData>) =>
            ({
              id: doc.id,
              ...doc.data(),
            } as Article)
        );
        setNewsArticles(articleData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Render loading state
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress size={64} />
      </Box>
    );
  }

  // Render articles with sidebars
  return (
    <div className="w-full flex flex-row mx-auto px-4 py-8">
      {/* Left Sidebar - Google Ads */}
      <div className="hidden md:flex w-1/6 flex-col items-center mr-4">
        <div
          className="google-ad"
          style={{ width: "160px", height: "600px", backgroundColor: "#f1f1f1" }}
        >
          <p className="text-center text-sm">Google Ad</p>
        </div>
      </div>
      <div className="hidden md:flex">
        {/* Vertical Divider */}
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            height: "100%",
            width: "2px",
            mx: 2,
          }}
        />
      </div>

      {/* Center Section - Articles */}
      <div className="flex flex-col gap-1 items-center w-full md:w-4/6">
<div className="flex flex-col bg-white items-center w-full p-2">
        <h2 className="text-4xl font-bold mb-2" translate="no">
          ताज्या बातम्या
        </h2>
        </div>
        <Suspense fallback={<div className="text-center">Loading articles...</div>}>
          {newsArticles.map((article) => (
            <NewsArticle key={article.id} media={article} />
          ))}
        </Suspense>
      </div>
      <div className="hidden md:flex">
        {/* Vertical Divider */}
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            height: "100%",
            width: "2px",
            mx: 2,
          }}
        />
      </div>

      {/* Right Sidebar - Google Ads */}
      <div className="hidden md:flex w-1/6 flex-col items-center ml-4">
        <div
          className="google-ad"
          style={{ width: "160px", height: "600px", backgroundColor: "#f1f1f1" }}
        >
          <p className="text-center text-sm">Google Ad</p>
        </div>
      </div>
    </div>
  );
}
