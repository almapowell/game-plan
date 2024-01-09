import { Box, Card } from "@mui/material";
import Header from "../../components/Header";
import Logo from "../../logos/kansas_logo.png";

const opponent = {
  id: "123",
  name: "Kansas",
  logo: Logo,
  date: "01-23-2024",
  dayOfTheWeek: "Wednesday",
  sponsor: "OU Health",
  halftime: "Youth Basketball",
  theme: "Pink Game",
  anthem: "Irving MS Choir",
  ticketPromo: "4 for $40",
  otherActivities: "WGYM T-Shirt Toss",
  recognitions: "Patriot of the Game",
  spirit: null,
  giveaway: "Pink Shirts",
  concourse: null,
  kidsZone: null,
  colorGuard: null,
  emcee: "Tommy",
  pa: "Justin Wollard",
  sspTickets: null,
};

const Game = () => {
  return (
    <Box m="20px">
      <Header title="Game Plan" subtitle="View each game" />
      <Box>
        <Card sx={{ p: "50px" }}>
          <Box display="flex" justifyContent="center">
            <img height="150" src={opponent.logo} />
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default Game;
