import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { tokens } from "../../theme";
import PeopleOutlined from "@mui/icons-material/PeopleOutlined";
import CalendarTodayOutlined from "@mui/icons-material/CalendarTodayOutlined";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import HistoryIcon from "@mui/icons-material/History";
import MenuOutlined from "@mui/icons-material/MenuOutlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import logo from "../../logos/Oklahoma_Sooners_logo.png";
import CelebrationIcon from "@mui/icons-material/Celebration";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === to}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(to)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const location = useLocation();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState(location.pathname || "/");

  return (
    <Box
      sx={{
        height: "100vh",
        position: "sticky",
        top: 0,
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: `${colors.grey[300]} !important`,
        },
        "& .pro-menu-item.active": {
          color: `${colors.grey[100]} !important`,
          borderLeft: `3px solid ${colors.grey[100]} !important`,
          background:
            theme.palette.mode === "dark"
              ? `rgb(224,224,224, 0.1) !important`
              : `rgb(20,20,20, 0.1) !important`,
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <img height="80px" src={logo} />
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
              ></Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Alma Powell
                </Typography>
                <Typography variant="h5" color={colors.redAccent[500]}>
                  Marketing - Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<DashboardIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Game Plans
            </Typography>
            <SubMenu
              icon={<CelebrationIcon />}
              style={{
                color: colors.grey[100],
              }}
              title="Marketing"
            >
              <Item
                title="Game by Game Calendar"
                to="/game-by-game-calendar"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Single Game Calendar"
                to="/single-game-calendar"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Proposals / Plans"
                to="/proposals-plans"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Notes / Agenda"
                to="/notes-agenda"
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>

            <SubMenu
              icon={<LocalActivityIcon />}
              style={{
                color: colors.grey[100],
              }}
              title="Ticketing"
            >
              <Item
                title="Season Tickets"
                to="/season-tickets"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Mini Plans"
                to="/mini-plans"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Attendance Data"
                to="/attendance-data"
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>

            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Taskboard"
              to="/taskboard"
              icon={<FormatListBulletedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Team
            </Typography>
            <Item
              title="View Team"
              to="/team"
              icon={<PeopleOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Add Member"
              to="/add-user"
              icon={<PersonAddAltIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              History
            </Typography>
            <Item
              title="Archive"
              to="/history"
              icon={<HistoryIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
