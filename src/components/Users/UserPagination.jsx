import React from 'react';
import { Pagination, Stack } from '@mui/material';

const UserPagination = ({ totalPages, currentPage, setPage }) => {
  const handleChange = (event, value) => {
    setPage(value); 
  };

  return (
    <Stack spacing={2} alignItems="center" sx={{ marginTop: 3 }}>
      <Pagination
        count={totalPages} 
        page={currentPage} 
        onChange={handleChange} 
        color="primary"
      />
    </Stack>
  );
};

export default UserPagination;
