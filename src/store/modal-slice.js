import { createSlice } from "@reduxjs/toolkit";

const modalInitState = {
  showModal: false,
  hideModal: true,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: modalInitState,
  reducers: {
    showModalContent(state) {
      state.showModal = true;
    },
    hideModalContent(state) {
      state.showModal = false;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
