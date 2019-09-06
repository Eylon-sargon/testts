import React, { Component } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { IForm } from './FormList';

interface P {
  form: IForm;
}

export default function FormCard(props: P) {
  const { form } = props;
  if (!form) return null;

  return (
    <Card>
      <CardMedia
        style={{ height: 0, paddingTop: '56.25%' }}
        image="https://via.placeholder.com/350x150"
        title={form.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h4">
          {form.title}
        </Typography>
        <Typography component="p">{form.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" variant="contained" color="secondary">
          Go To Form
        </Button>
      </CardActions>
    </Card>
  );
}
