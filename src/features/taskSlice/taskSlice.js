import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TASKS } from "../../constants/Constants";

export const fetchInitialData = createAsyncThunk(
  "data/fetchInitialData",
  async () => {
    const userData = localStorage.getItem("user");
    const user = JSON.parse(userData);
    const _id = user.getUser._id;
    const response = await fetch(TASKS + `${_id}`);
    const data = await response.json();
    return data;
  }
);

const taskSlice = createSlice({
  name: "task",
  initialState: {
    loading: true,
    error: null,
    data: null,
    filterData: null,
    allData: null,
    selectData: null,
  },
  reducers: {
    categoryCards: (state, action) => {
      const sortData = state.filterData.filter(
        (el) => el.category === action.payload
      );

      state.data = action.payload === "todo" ? state.allData : sortData;
    },

    stateCards: (state, action) => {
      const sortData = state.filterData.filter(
        (el) => el.state === action.payload
      );

      state.data = action.payload === "todo" ? state.allData : sortData;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInitialData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.filterData = action.payload;
        state.allData = action.payload;
        state.selectData = action.payload;
        state.loading = false;
      })
      .addCase(fetchInitialData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { categoryCards, stateCards } = taskSlice.actions;
export default taskSlice.reducer;
