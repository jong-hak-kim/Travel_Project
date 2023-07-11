import { Paper, Typography } from "@mui/material";
import React from "react";

export default function RecommendationCard() {
  return (
    <Paper
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "300px",
        backgroundImage:
          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Yz4upNsnJz0QoMRVjZT80FudhIYHgBhbCQ&usqp=CAU)",
        backgroundSize: "cover",
        p: "5px",
      }}
    >
      <Typography
        sx={{ mt: "10px", fontSize: "16px", fontWeight: 900, color: "white" }}
      >
        경복궁
      </Typography>
      <Typography sx={{ fontSize: "8px", color: "white" }}>
        서울특별시 종로구 사직로 161 (세종로)에 있는 조선시대의 궁궐 중 하나이자
        조선의 정궁(법궁)이다. 사적 제117호로 지정받았다. 태조가 조선을 건국하고
        한양 천도를 단행하면서 조선 시대에 가장 먼저 지은 궁궐이다.
      </Typography>
    </Paper>
  );
}
