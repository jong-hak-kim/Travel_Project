import { Paper, Typography } from "@mui/material";
import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function RecommendationCard(top: number) {
  const [data, setData] = useState(null);
  type RecommendTourspotTopList = {
    productTitle: string;
    productImageUrl: string;
    productMoney: number;
    likeyCount: number;
  }

  type Item = {
    code: string;
    message: string;
    recommendTourspotTop: RecommendTourspotTopList[];
  }

  const getTop3 = async () => {
    try {
      const result = await axios.get(`http://localhost:4000/api/v1/main/recommend-tourist-spot-top3`);
      setData(result.data);
    } catch (e) {
      console.log("오류 발생");
    }

  }
  useEffect(() => {
    getTop3();
  }, []);

  if (!data) return null;

  var jsonData = JSON.stringify(data);
  var parseData = JSON.parse(jsonData);

  const { touristSpotTitle, recommendTouristSpotImageUrl, content} = parseData.recommendTopList[top - 1];

  return (
    <Paper
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "300px",
        backgroundImage: `url(${recommendTouristSpotImageUrl})`,
        backgroundSize: "cover",
        p: "5px",
      }}
    >
      <Typography
        sx={{ mt: "10px", fontSize: "16px", fontWeight: 900, color: "white" }}
      >
        {touristSpotTitle}
      </Typography>
      <Typography sx={{ fontSize: "8px", color: "white" }}>
        {content}
      </Typography>
    </Paper>
  );
}
