import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

export default function RecommendationItem() {
  return (
    <Box display='flex' borderBottom='1px solid #404040' marginBottom='2vh'>
        <Box component='img' src='https://i.namu.wiki/i/8FDIV9Jwh-Zm6lrx05ZtRvKvpzjHkHBXv6P8X-NW9ho9ZS0KFSJtTGA-tOMN6U4TVUTdLYICSiEks6AsR9lvXs-9eWtkoXWazRF8dFHJ9Xa8Nckdqt58HKeD-o4ZxCw6BtwpjMc7yjGMm2wy8-j-Sw.webp' width='12vw' height='9vw' margin='1vw' borderRadius='10%'></Box>
        <Box margin='1vw' height='9vw'>
            <Typography fontWeight='700' fontSize='24px' marginBottom='0.5vw'>경복궁</Typography>
            <Divider />
            <Box marginTop='0.5vw' component="div" sx={{ textOverflow: 'ellipsis' }}>서울특별시 종로구 사직로 161 (세종로)에 있는 조선시대의 궁궐 중 하나이자 조선의 정궁(법궁)이다. 사적 제117호로 지정받았다. 태조가 조선을 건국하고 한양 천도를 단행하면서 조선 시대에 가장 먼저 지은 궁궐이다.

1592년 임진왜란 때 소실되어 275년간 방치되다가 19세기에 흥선대원군 주도로 중건되었다. 당시에는 7천여 칸이라는 거대한 규모를 자랑하는 건축물로 거듭났었지만 구한말과 일제강점기를 거치며 수천 칸의 전각이 헐리고 매각되며 조선총독부 청사와 같은 다른 건물이 들어서는 등 궐내가 크게 훼손되었다. 1990년에 이르러서는 고작 36동의 건물(고종 재위 당시의 7% 수준)만 남았고 지금도 계속 복원이 이루어지고 있다. 다만 사라진 전각들에 대한 자료가 부족하여 최근 복원한 전각들도 원형이라는 보장은 없으며, 후일에도 완전한 경복궁의 모습을 볼 수 있을지는 미지수이다.</Box>
        </Box>
    </Box>
  )
}
