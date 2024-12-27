"use client";
import React, { useState, useEffect, lazy, Suspense } from "react";
import {
  collection,
  getDocs,
  query,
  limit,
  QueryDocumentSnapshot,
  DocumentData,
  orderBy,
  startAfter,
} from "firebase/firestore";
import { db } from "@/firebase-config";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Button, Divider } from "@mui/material";

// Lazy-loaded component for rendering individual articles
const NewsArticle = lazy(() => import("../components/NewsArticle"));

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
  const [firstArticle, setfirstArticle] = useState<Article[]>([]);

  useEffect(() => {
    getLatestPost();
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const firstQuery = query(collection(db, "articles"), orderBy("createdAt", "desc"), limit(1));
      const firstSnapshot = await getDocs(firstQuery);
      const firstDoc = firstSnapshot.docs[0];  
      const articleQuery = query(collection(db, "articles"),  // Same order as the first query
      startAfter(firstDoc),); // Start after the latest document
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
  const getLatestPost = async () => {
    try {
      const docquery = query(
        collection(db, "articles"),
        orderBy("createdAt", "desc"),
        limit(1)
      );

      const querySnapshot = await getDocs(docquery);
      const latestPost = querySnapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          } as Article)
      );
      setfirstArticle(latestPost);

      return latestPost;
    } catch (error) {
      console.error("Error fetching the latest post:", error);
      throw error;
    }
  };

  const [postState, setPostState] = useState(false);

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

  return (
    <div className="w-full flex flex-row mx-auto px-4 py-8">
      {/* Left Sidebar - Google Ads */}
      <div className="hidden md:flex w-1/6 flex-col items-center mr-4">
        <div
          className="google-ad"
          style={{
            width: "160px",
            height: "600px",
            backgroundColor: "#f1f1f1",
          }}
        >
         
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
          <div className="flex w-full mb-4">
            <Button
              fullWidth
              variant={postState ? "contained" : "outlined"}
              onClick={() => setPostState(true)}
              sx={{
               
                borderRadius: "24px 0 0 24px", // Rounded only on the left edges
                bgcolor: postState ? "red" : "transparent", // Red background if active
                color: postState ? "white" : "red", // Text color
                border: "1px solid red", // Red border for outlined style
                "&:hover": {
                  bgcolor: postState ? "darkred" : "rgba(255, 0, 0, 0.1)", // Hover effect
                },
                fontSize: "1.25rem",
                lang:"mr" ,
              }}
            >
              ताज्या बातम्या
            </Button>
            <Button
              fullWidth
              variant={!postState ? "contained" : "outlined"}
              onClick={() => setPostState(false)}
              sx={{
                borderRadius: "0 24px 24px 0", // Rounded only on the right edges
                bgcolor: !postState ? "red" : "transparent", // Red background if active
                color: !postState ? "white" : "red", // Text color
                border: "1px solid red", // Red border for outlined style
                "&:hover": {
                  bgcolor: !postState ? "darkred" : "rgba(255, 0, 0, 0.1)",
                  // Hover effect
                },
                fontSize: "1.25rem",
                lang:"mr" ,
              }}
            >
              जुन्या बातम्या
            </Button>
          </div>
        </div>
        <Suspense
          fallback={<div className="text-center">Loading articles...</div>}
        >
          {postState
            ? firstArticle.map((article) => (
                <NewsArticle key={article.id} media={article} />
              ))
            : newsArticles.map((article) => (
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
          style={{
            width: "160px",
            height: "600px",
            backgroundColor: "#f1f1f1",
          }}
        >
          <p className="text-center text-sm">Google Ad</p>
        </div>
      </div>
    </div>
  );
}
