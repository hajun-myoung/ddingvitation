import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Header from "../Components/Header";

export default function HomePage() {
  return (
    <Box className="wrapper" id="homepage">
      <Header />
      <Box
        id="welcome-section"
        className="centralized flexColumn fullWidth"
        sx={{ p: 2, pt: 8, boxSizing: "border-box" }}
      >
        <Box className="title centralized flexColumn">
          <Typography variant="h1">DDING,</Typography>
          <Typography variant="h1">in SSANGMOON</Typography>
        </Box>
        <Box className="description fullWidth centralized flexColumn">
          <Typography>띵하준의 새 보금자리</Typography>
          <Typography>쌍문동으로 초대합니다</Typography>
        </Box>
        <Button
          variant="outlined"
          className="button"
          // disabled
          onClick={() => {
            alert(
              "아직 신청 기간이 아닙니다\n비싸게 굴어 죄송해요 이사는 가야죠"
            );
          }}
        >
          집들이 신청하기
        </Button>
      </Box>
      <Box id="second-section" className="fullWidth">
        <Box className="section-wrapper"></Box>
        <Box
          className="contents centralized flexColumn fullWidth"
          sx={{ pb: 4 }}
        >
          <Typography className="title">어디로 오나요?</Typography>
          <Typography className="body">
            서울시 도봉구 쌍문동...정의여고 근처요
          </Typography>
          <Typography className="body">
            상세주소는 신청하면 알려드려요~
          </Typography>
          <Box
            className="map-image"
            sx={{
              mt: 4,
              backgroundImage: `url(${process.env.PUBLIC_URL}/aprox-map.png)`,
              backgroundSize: "100%",
            }}
          />
          <Box className="comment-wrapper">
            <Typography className="comment">Powered by KakaoMap</Typography>
            <Typography className="comment">이 중 어딘가에 있음</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
