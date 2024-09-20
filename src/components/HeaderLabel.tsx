import { styled } from '@mui/material';

const HeaderLabel = styled('div')(({ theme }) => ({
  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  fontWeight: 500,
  fontSize: '1rem',
  lineHeight: 1.5,
  letterSpacing: '0.00938em',
  marginLeft: 16,
  color: theme.palette.text.primary,
}));

export default HeaderLabel;
