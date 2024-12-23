import React from 'react';
import { TextField } from '@mui/material';

const UserSearch = ({ searchTerm, setSearchTerm }) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Search users by name..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      sx={{ marginBottom: 3 }}
    />
  );
};

export default UserSearch;

