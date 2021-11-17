import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState:{
    sendMessageIsOpen:false,  
  },
  reducers: {
    OpenSendMessage: (state) => {
      state.sendmessageIsOpen= true;
    },
    CloseSendMessage: (state) => {
      state.sendmessageIsOpen= false;
    },
  },
});

export const { OpenSendMessage, OpenSendMessage } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
