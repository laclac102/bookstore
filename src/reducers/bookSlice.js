import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../apiService";
import { toast } from "react-toastify";

const initialState = {
  book: {},
  books: [],
  favorites: [],
  status: "idle",
  loading: false,
  error: "",
};

export const getBookList = createAsyncThunk(
  "books/getBookList",
  async ({ page, limit, query }, thunkApi) => {
    let url = `books?page=${page}&limit=${limit}`;
    if (query) url += `&query=${query}`;
    const res = await apiService.get(url);
    return res.data;
  }
);

export const getBook = createAsyncThunk("books/getBook", async ({ bookId }) => {
  const res = await apiService.get(`/books/${bookId}`);
  return res.data;
});

export const addToFavorite = createAsyncThunk(
  "books/addToFavorite",
  async ({ addingBook }) => {
    await apiService.post(`/favorites`, addingBook);
    toast.success("The book has been added to the reading list!");
  }
);

export const getFavorite = createAsyncThunk("books/getFavorite", async () => {
  const res = await apiService.get(`/favorites`);
  return res.data;
});
export const removeFavorite = createAsyncThunk(
  "books/removeFavorite",
  async ({ removedBookId }) => {
    await apiService.delete(`/favorites/${removedBookId}`);
    toast.success("The book has been removed");
  }
);
export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBookList.pending, (state, action) => {
        state.status = "loading";
        state.loading = true;
        state.error = "";
      })
      .addCase(getBookList.fulfilled, (state, action) => {
        state.status = "idle";
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(getBookList.rejected, (state, action) => {
        state.status = "rejected";
        state.loading = false;
        state.books = action.error.message;
      });
    builder
      .addCase(getBook.pending, (state, action) => {
        state.status = "loading";
        state.loading = true;
        state.error = "";
      })
      .addCase(getBook.fulfilled, (state, action) => {
        state.status = "idle";
        state.loading = false;
        state.book = action.payload;
      })
      .addCase(getBook.rejected, (state, action) => {
        state.status = "rejected";
        state.loading = false;
        state.book = action.error.message;
      });
    builder
      .addCase(addToFavorite.pending, (state, action) => {
        state.status = "loading";
        state.loading = true;
        state.error = "";
      })
      .addCase(addToFavorite.fulfilled, (state, action) => {
        state.status = "idle";
        state.loading = false;
      })
      .addCase(addToFavorite.rejected, (state, action) => {
        state.status = "rejected";
        state.loading = false;
      });
    builder
      .addCase(getFavorite.pending, (state, action) => {
        state.status = "loading";
        state.loading = true;
        state.error = "";
      })
      .addCase(getFavorite.fulfilled, (state, action) => {
        state.status = "idle";
        state.loading = false;
        state.favorites = action.payload;
      })
      .addCase(getFavorite.rejected, (state, action) => {
        state.status = "rejected";
        state.loading = false;
      });
    builder
      .addCase(removeFavorite.pending, (state, action) => {
        state.status = "loading";
        state.loading = true;
        state.error = "";
      })
      .addCase(removeFavorite.fulfilled, (state, action) => {
        state.status = "idle";
        state.loading = false;
      })
      .addCase(removeFavorite.rejected, (state, action) => {
        state.status = "rejected";
        state.loading = false;
      });
  },
});

export default bookSlice.reducer;
