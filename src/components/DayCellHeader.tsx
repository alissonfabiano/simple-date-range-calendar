import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';

const DayCellHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: 'center',
  width: '100%',
}));

export default DayCellHeader;
