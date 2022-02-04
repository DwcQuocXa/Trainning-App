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

const CustomersForm = ({ open, handleClose, onSubmit, customer }) => {
  const classes = useStyles();
  const [initialValues, setInitialValues] = useState({
    firstname: '',
    lastname: '',
    streetaddress: '',
    postcode: '',
    city: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (customer)
      setInitialValues({
        firstname: customer.firstname,
        lastname: customer.lastname,
        streetaddress: customer.streetaddress,
        postcode: customer.postcode,
        city: customer.city,
        email: customer.email,
        phone: customer.phone,
      });
  }, [customer]);

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
            Customer
          </Typography>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ values, errors, handleChange, handleSubmit, isSubmitting }) => {
              return (
                <form className={classes.form} onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        id='firstname'
                        name='firstname'
                        value={values.firstname}
                        onChange={handleChange}
                        label='First Name'
                        variant='outlined'
                        required
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        id='lastname'
                        name='lastname'
                        value={values.lastname}
                        onChange={handleChange}
                        label='Last Name'
                        variant='outlined'
                        required
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        id='streetaddress'
                        name='streetaddress'
                        value={values.streetaddress}
                        onChange={handleChange}
                        label='Street Address'
                        variant='outlined'
                        required
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        id='postcode'
                        name='postcode'
                        value={values.postcode}
                        onChange={handleChange}
                        label='postcode'
                        variant='outlined'
                        required
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        id='city'
                        name='city'
                        value={values.city}
                        onChange={handleChange}
                        label='City'
                        variant='outlined'
                        required
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        id='email'
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        label='Email'
                        variant='outlined'
                        required
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        id='phone'
                        name='phone'
                        value={values.phone}
                        onChange={handleChange}
                        label='Phone'
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

export default CustomersForm;
