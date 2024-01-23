import kansas from "../../logos/kansas_logo.png";
import texas from "../../logos/Texas_Longhorns.png";
import texasAandM from "../../logos/a&m.png";
import bama from "../../logos/bama.png";
import ducks from "../../logos/ducks.png";
import huskies from "../../logos/huskies.png";
import michigan from "../../logos/michigan.png";
import fsu from "../../logos/fsu.png";

export const generateRandomEvent = (name) => {
  const teams = [
    { logo: kansas, name: "Kansas" },
    { logo: texas, name: "Texas" },
    { logo: bama, name: "Alabama" },
    { logo: ducks, name: "Oregon" },
    { logo: huskies, name: "Washington" },
    { logo: fsu, name: "Florida State" },
    { logo: michigan, name: "Michigan" },
    { logo: texasAandM, name: "Texas A&M" },
  ]; // Add more teams as needed

  const themes = [
    "Sports Night",
    "Music Fest",
    "Cultural Celebration",
    "Family Fun Day",
  ]; // Add more themes as needed

  const chosenTeam = teams.filter((team) => team.name === name);

  const selectedTeam = teams[Math.floor(Math.random() * teams.length)];

  return {
    id: Math.floor(Math.random() * 1000) + 1,
    logo: name ? chosenTeam[0].logo : selectedTeam.logo,
    opponent: name ? chosenTeam[0].name : selectedTeam.name,
    date: getRandomDate(),
    time: getRandomTime(),
    tv: Math.random() < 0.5 ? "ESPN" : "ABC",
    theme: themes[Math.floor(Math.random() * themes.length)],
    sponsor: generateRandomString(10),
    associated_sponsor: generateRandomString(10),
    ssp_tickets: Math.floor(Math.random() * 100),
    anthem: generateRandomString(8),
    emcee: generateRandomString(6),
    pa: generateRandomString(12),
    color_guard: generateRandomString(10),
    halftime: generateRandomString(20),
    recognitions: generateRandomString(16),
    kids_zone: generateRandomString(14),
    concourse: generateRandomString(18),
    spirit: generateRandomString(10),
    giveaway: generateRandomString(22),
    ticket_promo: generateRandomString(15),
    consessions: generateRandomString(8),
    other_activities: generateRandomString(20),
  };
};

function getRandomDate() {
  const day = Math.floor(Math.random() * 28) + 1;
  const month = Math.floor(Math.random() * 12) + 1;
  const year = 2024; // You can adjust the year as needed
  return `${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}-${year}`;
}

function getRandomTime() {
  const hours = Math.floor(Math.random() * 12) + 1;
  const minutes = Math.floor(Math.random() * 60);
  const period = Math.random() < 0.5 ? "AM" : "PM";
  return `${hours}:${minutes.toString().padStart(2, "0")} ${period}`;
}

function generateRandomString(length) {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let randomString = "";
  for (let i = 0; i < length; i++) {
    randomString += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return randomString;
}

export const mockRows = [
  {
    label: "",
    value: "logo",
  },
  {
    label: "Date",
    value: "date",
  },
  {
    label: "Time",
    value: "time",
  },
  {
    label: "Theme",
    value: "theme",
  },
  {
    label: "Sponsor",
    value: "sponsor",
  },
  {
    label: "Associated Sponsor",
    value: "associatedSponsor",
  },
  {
    label: "SSP Tickets",
    value: "sspTickets",
  },
  {
    label: "Anthem",
    value: "anthem",
  },
  {
    label: "Emcee",
    value: "emcee",
  },
  {
    label: "PA",
    value: "pa",
  },
  {
    label: "Color Guard",
    value: "colorGuard",
  },
  {
    label: "Halftime",
    value: "halftime",
  },
  {
    label: "Recognitions",
    value: "recognitions",
  },
  {
    label: "Kids Zone",
    value: "kidsZone",
  },
  {
    label: "Concourse",
    value: "concourse",
  },
  {
    label: "Spirit",
    value: "spirit",
  },
  {
    label: "Giveaway",
    value: "giveaway",
  },
  {
    label: "Ticket Promo",
    value: "ticketPromo",
  },
  {
    label: "Consessions",
    value: "consessions",
  },
  {
    label: "Other Activities",
    value: "otherActivities",
  },
];
