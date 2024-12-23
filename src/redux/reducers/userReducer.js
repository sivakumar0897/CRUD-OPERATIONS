const initialState = {
  users: [],
  currentPage: 1,
  totalPages: 1,
  loading: false,
  error: null,
};



const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_REQUEST':
      return { ...state, loading: true, error: null };

    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        loading: false,
        users: action.payload.data,
        totalPages: action.payload.totalPages,
        currentPage: action.payload.page,
      };

    case 'FETCH_USERS_FAILURE':
      return { ...state, loading: false, error: action.payload };

    case 'CREATE_USER':
      return { ...state, users: [action.payload, ...state.users] };

    case 'UPDATE_USER':
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };

    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };

    default:
      return state;
  }
};
export default userReducer;