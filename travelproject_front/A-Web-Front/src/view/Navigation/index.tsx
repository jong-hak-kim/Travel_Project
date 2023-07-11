import { Box, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigator = useNavigate();
  const [login, setLogin] = useState<boolean>(false);

  return (
    <Box padding='1.5vh 10vw 1vh' borderBottom='1px solid #000000'>
      {login ? (
        <Box
          sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}
        >
          <Box sx={{ mr: "1.5vw" }}>마이페이지</Box>
          <Box>로그아웃</Box>
        </Box>
      ) : (
        <Box
          sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}
        >
          <Button
            sx={{ mr: "1.5vw", color: "black" }}
            size="small"
            onClick={() => navigator("/auth/sign-in")}
          >
            로그인
          </Button>
          <Button
            sx={{ color: "black" }}
            size="small"
            onClick={() => navigator("/auth/sign-up")}
          >
            회원 가입
          </Button>
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: "40px",
          fontWeight: 800,
          mt: "1.5vh",
          mb: "1.5vh",
        }}
      >
        TRAVEL
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: "16px",
          fontWeight: 600,
        }}
      >
        <Button sx={{ mr: "1.5vw" }} size="large" onClick={() => navigator("/course")}>
          여행지 코스
        </Button>
        <Button sx={{ mr: "1.5vw" }} size="large" onClick={() => navigator("/recommedation")}>
          여행지 추천
        </Button>
        <Button sx={{ mr: "1.5vw" }} size="large">
          플래너
        </Button>
        <Button size="large">고객센터</Button>
      </Box>
    </Box>
  );
}
