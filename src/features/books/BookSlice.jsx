import { 
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit'

const initialState = {
  books: [],
  selectedBook: '',
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async() => {
  try {
      const query = await fetch('https://www.googleapis.com/books/v1/volumes?q={NK+Jemisin}');
      const response = await query.json();
      return response.items;
  } catch (err) {
    return err.message;
  }
})

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    selectBook(state, action){
      return ({...state, selectedBook: action.payload});
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      return ({...state, books: action.payload})
    })
   }
});

export const selectAllBooks = (state) => state.booksReducer.books;
export const selectedBook = (state)  => state.booksReducer.selectedBook;

export const { selectBook } = bookSlice.actions;
export default bookSlice.reducer;