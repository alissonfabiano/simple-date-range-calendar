import { styled } from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';

const ArrowButton = styled(ButtonBase)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: '50%',
  color: theme.palette.text.primary,
}));

export default ArrowButton;
