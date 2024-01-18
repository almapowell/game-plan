import { Box, Card } from "@mui/material";
import Header from "../../components/Header";
import Logo from "../../logos/kansas_logo.png";
import { mockOpponents } from "../gamebygame/mockData";

const Game = () => {
  return (
    <Box m="20px">
      <Header title="Game Plan" subtitle="View each game" />
      <Box>
        <Card sx={{ p: "50px" }}>
          <Box display="flex" justifyContent="center">
            <img height="150" src={mockOpponents[0].logo} />
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default Game;
