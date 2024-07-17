import React from "react";
import { styled } from "@mui/material/styles";
import { formatDate } from "date-fns";

const HeaderContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.default,
  marginBottom: 8,
  padding: "0 8px",
}));

const NavButton = styled("div")(({ theme }) => ({
  color: theme.palette.primary.main,
  cursor: "pointer",
  padding: "8px",
  fontSize: "1.5rem",
  fontWeight: "bold",
  userSelect: "none",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    borderRadius: "50%",
  },
}));

interface CalendarHeaderProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentDate,
  onPrevMonth,
  onNextMonth,
}) => {
  return (
    <HeaderContainer>
      <NavButton onClick={onPrevMonth}>{"<"}</NavButton>
      <h2>{formatDate(currentDate, "MMMM yyyy")}</h2>
      <NavButton onClick={onNextMonth}>{">"}</NavButton>
    </HeaderContainer>
  );
};

export default CalendarHeader;
