import { Card, CardContent, Typography } from '@mui/material';

const CustomNode = ({ data }) => {
  return (
    <Card variant="outlined" style={{ minWidth: 150 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {data.label}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomNode;
