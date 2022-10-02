import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function RecipeReviewCard({
  imgUrl,
  title,
}: {
  imgUrl: string;
  title: string;
}) {
  return (
    <Card sx={{ width: 300, height: 400 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            {title[0]}
          </Avatar>
        }
        title={title}
      />
      <CardMedia
        component='img'
        height='194'
        image={imgUrl}
        alt='Paella dish'
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ position: 'relative' }}>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
        <IconButton aria-label='more' sx={{ position: 'absolute', right: 10 }}>
          <MoreVertIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
