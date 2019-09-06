import React, { Component } from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import * as contentful from 'contentful';
import FormCard from './FormCard';
import { any } from 'prop-types';

const SPACE_ID = '06dq1mrq6sq9';
const ACCESS_TOKEN = 'bDS_P8H9lb4FesDnwRM2j858_c2mdLnEOCrSPhVcafo';

const contentfulClient = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

interface Question {
  title: string;
}

export interface IForm {
  title: string;
  description: string;
  questions: Question[];
}

interface S {
  forms: IForm[];
}

export class FormList extends Component<{}, S> {
  state = {
    forms: [],
  };

  async componentDidMount() {
    try {
      const res = await contentfulClient.getEntries({
        content_type: 'form',
      });

      const forms: IForm[] = res.items.map((form: any) => ({
        title: form.fields.title,
        description: form.fields.description,
        questions: form.fields.questions.map((question: any) => question.fields.title),
      }));

      this.setState({
        forms,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    if (!this.state.forms.length)
      return (
        <Box padding={10}>
          <Typography variant="h5" align="center">
            Loading content...
          </Typography>
        </Box>
      );

    return (
      <Grid container spacing={8} style={{ padding: '20px' }}>
        {this.state.forms.map(form => (
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <FormCard form={form} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default FormList;
