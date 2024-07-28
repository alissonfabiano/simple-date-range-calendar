import { styled } from "@mui/material/styles";

const CalendarContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(1),
  minWidth: 280,
  minHeight: 346, 
  backgroundColor: theme.palette.background.paper,
}));

export default CalendarContainer;
