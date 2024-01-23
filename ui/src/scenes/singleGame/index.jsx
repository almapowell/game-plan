import { Add } from "@mui/icons-material";
import { Box, Button, Card, Typography } from "@mui/material";
import Header from "../../components/Header";
import { generateRandomEvent } from "../gamebygame/mockData";

const GameSecion = ({ children }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      marginTop="80px"
      gap="20px"
    >
      {children}
    </Box>
  );
};

const SectionHeader = ({ children }) => {
  return (
    <Typography
      variant="h2"
      style={{
        color: "grey",
        fontStyle: "italic",
        textTransform: "none",
      }}
    >
      {children}
    </Typography>
  );
};

const SingleGame = () => {
  const opponent = generateRandomEvent("Alabama");

  return (
    <Box m="20px">
      <Header title="Single Game" subtitle="View each game" />
      <Box>
        <Card sx={{ p: "50px" }}>
          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="outlined"
              style={{
                border: "1px solid grey",
                color: "grey",
                fontSize: "1rem",
                textTransform: "none",
              }}
            >
              <Add />
              Add Section
            </Button>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            gap="40px"
            flexDirection="column"
            alignItems="center"
          >
            <Typography variant="h1">{opponent.opponent}</Typography>
            <img height="150" alt="logo" src={opponent.logo} />
          </Box>
          <GameSecion>
            <SectionHeader>Game Details</SectionHeader>
            <Typography variant="h4">Date: {opponent.date}</Typography>
            <Typography variant="h4">Time: {opponent.time}</Typography>
            <Typography variant="h4">TV: {opponent.tv}</Typography>
          </GameSecion>

          <GameSecion>
            <SectionHeader>Fan Engagement</SectionHeader>
            <Typography variant="h4">Theme: {opponent.theme}</Typography>
            <Typography variant="h4">Giveaways: {opponent.giveaway}</Typography>
            <Typography variant="h4">Color: {opponent.color_guard}</Typography>
          </GameSecion>

          <GameSecion>
            <SectionHeader>Sponsorships</SectionHeader>
            <Typography variant="h4">Sponsor: {opponent.sponsor}</Typography>
            <Typography variant="h4">
              Associated Sponsor: {opponent.giveaway}
            </Typography>
          </GameSecion>
        </Card>
      </Box>
    </Box>
  );
};

export default SingleGame;
