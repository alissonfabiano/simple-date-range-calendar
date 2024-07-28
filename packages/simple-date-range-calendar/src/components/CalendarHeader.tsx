import { styled } from "@mui/material/styles";

const CalendarHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: theme.spacing(2),
}));

export default CalendarHeader;
