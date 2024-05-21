import axios from 'axios';

export const fetchBooks = (query = '') => async (dispatch) => {
  const response = await axios.get(`/api/books?search=${query}`);
  dispatch({ type: 'FETCH_BOOKS', payload: response.data });
};

export const addBook = (book) => async (dispatch) => {
  const response = await axios.post('/api/books', book);
  dispatch({ type: 'ADD_BOOK', payload: response.data });
};
