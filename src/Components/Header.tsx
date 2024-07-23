import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

export default function Header() {
  return (
    <Box
      id="header"
      className="centralized space-between"
      sx={{ pl: 1, pr: 1 }}
    >
      <ConfirmationNumberIcon sx={{ color: "gray" }} />
      <Typography>띵비테이션</Typography>
    </Box>
  );
}
