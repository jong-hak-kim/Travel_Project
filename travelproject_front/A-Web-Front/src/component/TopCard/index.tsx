import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, IconButton } from '@mui/material';
import axios from 'axios';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useState, useEffect } from 'react';




export default function TopCard(top: number) {
  const [data, setData] = useState(null);

  type touristProductTop = {
    productTitle: string;
    productImageUrl: string;
    productMoney: number;
    likeyCount: number;
  }

  type Item = {
    code: string;
    message: string;
    touristProductTop: touristProductTop[];
  }

  const getTop3 = async () => {
    try {
      const result = await axios.get(`http://localhost:4000/api/v1/main/product-board-top3`);
      setData(result.data);
    } catch (e) {
      console.log("오류 발생");
    }

  }
  useEffect(() => {
    getTop3();
  }, []);

  if (!data) return null;

  var jsonData = JSON.stringify(data);
  var parseData = JSON.parse(jsonData);

  const { productNumber, productTitle, productImageUrl, productMoney, likeCount } = parseData.productTop3List[top - 1];

  return (
    <Card>
      <CardMedia
        sx={{ height: '25vw' }}
        image={productImageUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom component="div" variant="body1" sx={{ fontWeight: 700 }}>
          {productTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          제주 3일 #가파도 #청보리축제 #핫플레이스 # 사진맛집
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '1vh' }}>
          <Typography variant='h6' sx={{ fontWeight: 700 }}>{productMoney}<span style={{ fontSize: '16px', fontWeight: 300 }}>원 ~</span></Typography>
          <IconButton>
            <FavoriteBorderOutlinedIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}