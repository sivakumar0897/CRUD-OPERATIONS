import React from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

// Validation Schema using Yup
const validationSchema = Yup.object().shape({
  first_name: Yup.string().required('First Name is required'),
  last_name: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  avatar: Yup.string()
    .url('Invalid URL format')
    .matches(/\.(jpg|jpeg|png|gif)$/, 'Must be an image URL (.jpg, .jpeg, .png, .gif)')
    .required('Avatar URL is required'),
});

const UserModal = ({ open, handleClose, user, handleSave }) => {
  const initialValues = {
    first_name: user?.first_name || '',
    last_name: user?.last_name || '',
    email: user?.email || '',
    avatar: user?.avatar || '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    handleSave(values);
    setSubmitting(false);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{user ? 'Edit User' : 'Create User'}</DialogTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <DialogContent>
              <Field
                as={TextField}
                name="first_name"
                label="First Name"
                margin="dense"
                fullWidth
                error={touched.first_name && Boolean(errors.first_name)}
                helperText={touched.first_name && errors.first_name}
              />
              <Field
                as={TextField}
                name="last_name"
                label="Last Name"
                margin="dense"
                fullWidth
                error={touched.last_name && Boolean(errors.last_name)}
                helperText={touched.last_name && errors.last_name}
              />
              <Field
                as={TextField}
                name="email"
                label="Email"
                margin="dense"
                fullWidth
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <Field
                as={TextField}
                name="avatar"
                label="Avatar URL"
                margin="dense"
                fullWidth
                error={touched.avatar && Boolean(errors.avatar)}
                helperText={touched.avatar && errors.avatar}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} disabled={isSubmitting}>
                Cancel
              </Button>
              <Button type="submit" variant="contained" disabled={isSubmitting}>
                Save
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default UserModal;
