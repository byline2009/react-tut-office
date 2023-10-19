import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "Duong Tran",
    age: "20",
    about: "im a teacher",
    avaUrl: "",
    themeColor: "#ffffff",
  },
  reducers: {
    update: (state, action) => {
      state.username = action.payload.username;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avaUrl = action.payload.avaUrl;
      state.themeColor = action.payload.themeColor;
    },
  },
});
export const { update } = userSlice.actions;
export default userSlice.reducer;
