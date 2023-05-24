"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const Video = () => {
  const [videoId, setVideoId] = useState<string | null>(null);

  useEffect(() => {
    const videoUrl = "https://www.youtube.com/watch?v=Sy8nPI85Ih4";

    // Extraer el ID del video de la URL
    const videoId = extractVideoId(videoUrl);

    // Obtener información del video utilizando la API de YouTube
    axios
      .get("https://www.googleapis.com/youtube/v3/videos", {
        params: {
          part: "snippet",
          id: videoId,
          key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
        },
      })
      .then((response) => {
        const video = response.data.items[0];

        setVideoId(videoId);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const extractVideoId = (url: string) => {
    const match = url.match(/(?:\/|v=)([a-zA-Z0-9_-]{11})(?:$|&|\?|#)/);
    return match ? match[1] : null;
  };

  return (
    <div className="relative xl:overflow-hidden xl:pt-[56.25%] w-full h-full rounded-md">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        className="w-full h-full rounded-md m-0 p-0 xl:absolute top-0 left-0 xl:scale-110"
      ></iframe>
    </div>
  );
};
