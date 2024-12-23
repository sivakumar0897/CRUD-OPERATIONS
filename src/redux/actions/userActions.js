import { getUsers, createUser, updateUser, deleteUser } from '../../api/userApi';

// Action Creators
export const fetchUsersRequest = () => ({ type: 'FETCH_USERS_REQUEST' });
export const fetchUsersSuccess = (payload) => ({ type: 'FETCH_USERS_SUCCESS', payload });
export const fetchUsersFailure = (error) => ({ type: 'FETCH_USERS_FAILURE', payload: error });

// Fetch Users
export const fetchUsers = (page = 1) => async (dispatch) => {
  dispatch(fetchUsersRequest());
  try {
    const response = await getUsers(page);
    dispatch(
      fetchUsersSuccess({
        data: response.data.data,
        totalPages: response.data.total_pages,
        page: response.data.page,
      })
    );
  } catch (error) {
    console.error('Fetch Users Error:', error.message); 
    dispatch(fetchUsersFailure(error.message));
  }
};

// Create User
export const addUser = (userData) => async (dispatch) => {
  try {
    const response = await createUser(userData);
    dispatch({
      type: 'CREATE_USER',
      payload: response.data,
    });
  } catch (error) {
    console.error('Create User Error:', error.message); 
  }
};

export const editUser = (id, userData) => async (dispatch) => {
  try {
    const response = await updateUser(id, userData);
    dispatch({
      type: 'UPDATE_USER',
      payload: { ...response.data, id },
    });
  } catch (error) {
    console.error('Update User Error:', error.message);
  }
};



export const removeUser = (id) => async (dispatch) => {
  try {
    await deleteUser(id);
    dispatch({
      type: 'DELETE_USER',
      payload: id, 
    });
  } catch (error) {
    console.error('Delete User Error:', error.message);
  }
};

