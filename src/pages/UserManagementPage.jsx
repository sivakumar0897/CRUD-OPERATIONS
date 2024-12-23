import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, addUser, editUser, removeUser } from '../redux/actions/userActions';
import UserList from '../components/Users/UserList';
import UserModal from '../components/Users/UserModal';
import UserPagination from '../components/Users/UserPagination';
import { Box, Typography } from '@mui/material';

const UserManagementPage = () => {
  const dispatch = useDispatch();
  const { users, loading, error, currentPage, totalPages } = useSelector((state) => state.user);

  const [openModal, setOpenModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    dispatch(fetchUsers(currentPage));
  }, [dispatch, currentPage]);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      dispatch(removeUser(id));
    }
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
    setOpenModal(true);
  };

  const handleCreate = () => {
    setCurrentUser(null);
    setOpenModal(true);
  };

  const handleSave = (userData) => {
    if (currentUser && currentUser.id) {
      dispatch(editUser(currentUser.id, userData)); 
    } else {
      dispatch(addUser(userData)); 
    }
    setOpenModal(false);
  };

  const handleSearch = (searchTerm) => {
    const filtered = users.filter(
      (user) =>
        user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">Error: {error}</Typography>;

  return (
    <Box sx={{ p: 3 }}>
      <UserList
        users={filteredUsers}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onCreate={handleCreate}
        onSearch={handleSearch}
      />
      <UserPagination
        totalPages={totalPages}
        currentPage={currentPage}
        setPage={(page) => dispatch(fetchUsers(page))}
      />
      <UserModal
        open={openModal}
        handleClose={() => setOpenModal(false)}
        user={currentUser}
        handleSave={handleSave}
      />
    </Box>
  );
};

export default UserManagementPage;
