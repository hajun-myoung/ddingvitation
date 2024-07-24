import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Header from "../Components/Header";
import { useEffect, useRef, useState } from "react";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

const mockupPlanData = [
  { title: "내가 선물이지", price: 0 },
  { title: "가벼운 선물", price: 10000 },
  { title: "감동적인 선물", price: 30000 },
  { title: "사랑의 표현", price: 50000 },
];

interface Plan {
  title: string;
  price: number;
}

export default function HomePage() {
  const section2contentsRef = useRef(null);
  const [section2padding, setSection2padding] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState<Plan>();

  useEffect(() => {
    if (section2contentsRef.current) {
      setSection2padding(
        (section2contentsRef.current as HTMLElement).offsetHeight
      );
      console.log((section2contentsRef.current as HTMLElement).offsetHeight);
    }
  }, [section2contentsRef]);

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
      <Box
        id="even-section"
        className="fullWidth"
        sx={{ pb: `${section2padding - 140}px` }}
        // 140px: starter margin top 40px, height 100px
      >
        <Box className="section-starter"></Box>
        <Box
          className="contents fullWidth"
          sx={{ pb: 4 }}
          ref={section2contentsRef}
        >
          <Box className="sub-section fullWidth centralized flexColumn">
            {/* Location */}
            <Typography className="title centralized">
              <LocationOnIcon className="subtitleIcon" />
              Location
            </Typography>
            <Typography className="body">
              서울시 도봉구 쌍문동...정의여고 근처
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
          {/* Partners */}
          <Box className="sub-section fullWidth centralized flexColumn">
            <Typography className="title centralized">
              <CardGiftcardIcon className="subtitleIcon" />
              Gifts
            </Typography>
            <Typography className="body">
              집들이 선물 뭐줄거에요? {">_0"}
            </Typography>
            {/* <Box className="cardView">
              <Typography className="cardText">안줄거에요</Typography>
            </Box> */}
            <Box sx={{ mt: 2 }}>
              <Box sx={{ backgroundColor: "#FFF" }}>
                {selectedPlan ? (
                  <Typography sx={{}}>
                    선택된 플랜: {selectedPlan.title}
                  </Typography>
                ) : (
                  <></>
                )}
              </Box>
              <Box></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
