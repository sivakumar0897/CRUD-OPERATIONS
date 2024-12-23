import React, { useState } from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Button,
  Box,
  TextField,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
} from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import TableChartIcon from '@mui/icons-material/TableChart';
import UserCardView from './UserCardView';

const UserList = ({ users, onEdit, onDelete, onCreate, onSearch }) => {
  const [viewMode, setViewMode] = useState('table');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);
    onSearch(searchValue);
  };

  return (
    <Box sx={{ backgroundColor: '#f8f9fc', padding: 3, borderRadius: 2 }}>
      {/* Header Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Users
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 'bold',
          }}
          onClick={onCreate}
        >
          Create User
        </Button>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 2,
        }}
      >
        <TextField
          placeholder="Search users by name..."
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={handleSearch}
          sx={{ width: '40%', backgroundColor: 'white' }}
        />
        <ToggleButtonGroup
          value={viewMode}
          exclusive
          onChange={(e, value) => setViewMode(value)}
          aria-label="view mode"
        >
          <ToggleButton value="table" aria-label="table view">
            <TableChartIcon />
            Table
          </ToggleButton>
          <ToggleButton value="card" aria-label="card view">
            <ViewListIcon />
            Card
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {/* Table or Card View */}
      {viewMode === 'table' ? (
        <Table sx={{ backgroundColor: 'white', borderRadius: 2 }}>
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <Avatar src={user.avatar} alt={user.first_name} />
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ marginRight: 1 }}
                    onClick={() => onEdit(user)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => onDelete(user.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <UserCardView users={users} onEdit={onEdit} onDelete={onDelete} />
      )}
    </Box>
  );
};

export default UserList;
