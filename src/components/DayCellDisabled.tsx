import { styled } from '@mui/material';

const Cell = styled('div')(() => ({
  background: 'none',
  borderRadius: '50%',
  width: 36,
  height: 36,
  margin: 0,
  padding: 0,
  transform: 'scale(1.1)',
}));

const Content = styled('div')({
  border: '2px solid transparent',
});

const DayCellDisabled = () => {
  return (
    <div>
      <Content>
        <Cell role="gridcell" />
      </Content>
    </div>
  );
};

export default DayCellDisabled;
