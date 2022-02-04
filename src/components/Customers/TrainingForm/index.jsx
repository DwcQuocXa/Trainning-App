import React, { useEffect, useState } from 'react';
import {
  Button,
  Grid,
  Modal,
  Typography,
  Paper,
  TextField,
} from '@mui/material';
import { Formik } from 'formik';

import useStyles from './style';

const TrainingForm = ({ open, handleClose, onSubmit, customer }) => {
  const classes = useStyles();
  const [initialValues, setInitialValues] = useState({
    activity: '',
    date: '',
    duration: '',
    customer: '',
  });

  console.log(initialValues);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Paper className={classes.modalPaper}>
          <Typography variant='h4' className={classes.title}>
            New training
          </Typography>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ values, errors, handleChange, handleSubmit, isSubmitting }) => {
              return (
                <form className={classes.form} onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        id='activity'
                        name='activity'
                        value={values.activity}
                        onChange={handleChange}
                        label='Activity'
                        variant='outlined'
                        required
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        id='date'
                        name='date'
                        value={values.date}
                        onChange={handleChange}
                        label='Date'
                        variant='outlined'
                        type='datetime-local'
                        required
                        fullWidth
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        id='duration'
                        name='duration'
                        value={values.duration}
                        onChange={handleChange}
                        label='Duration'
                        variant='outlined'
                        required
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        className={classes.submit}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              );
            }}
          </Formik>
        </Paper>
      </Modal>
    </div>
  );
};

export default TrainingForm;
