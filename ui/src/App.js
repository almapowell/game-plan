import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { Button, CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./scenes/global/TopBar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import Team from "./scenes/team";
import AddUser from "./scenes/addUser";
// import Team from "./scenes/team";
// import AddUser from "./scenes/addUser";
// import Line from "./scenes/line";
// import Taskboard from "./scenes/taskboard";
// import Form from "./scenes/form";
// import FAQ from "./scenes/faq";
import Calendar from "./scenes/calendar";
import Bar from "./scenes/bar";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import SingleGame from "./scenes/singleGame";
import History from "./scenes/history";
import OpponentsTable from "./scenes/gamebygame/Opponents";

import raptor from "./raptor.jpeg";
import allo from "./allo.jpeg";
import littlefoot from "./littlefoot.jpeg";
import spike from "./spike.jpeg";
import tRex from "./t-rex.jpeg";
import tri from "./tri.jpeg";
import DinoGame from "./DinoGame";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route
                path="/game-by-game-calendar"
                element={<OpponentsTable />}
              />
              <Route path="/single-game-calendar" element={<SingleGame />} />
              {/* <Route path="/game-by-game-calendar" element={<GameByGame />} /> */}
              <Route path="/team" element={<Team />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/taskboard" element={<Taskboard />} /> */}
              <Route path="/add-user" element={<AddUser />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/history" element={<History />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
