import { contactApi } from "@/redux/services/contactApi";
import { Reducer, createSlice } from "@reduxjs/toolkit";

export interface ContactStatePayload {
  loading: boolean;
  success: boolean;
  error: string | false | null;
  message: string | null;
  contacts: [] | null;
  contact: {} | null;
  name: string | null;
}

export const initialContactState: ContactStatePayload = {
  loading: false,
  success: false,
  error: null,
  message: null,
  contacts: null,
  contact: null,
  name: null,
};

export const contactSlice = createSlice({
  name: "contact",
  initialState: initialContactState,
  reducers: {
    resetContactSuccess: (state) => {
      state.success = false;
    },
    resetContactError: (state) => {
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        contactApi.endpoints.createContact.matchFulfilled,
        (state: any, { payload }: any) => {
          state.message = payload.message;
          state.success = true;
          state.name = payload.name;
        }
      )
      .addMatcher(
        contactApi.endpoints.updateContact.matchFulfilled,
        (state: any, { payload }: any) => {
          state.message = payload.message;
          state.success = true;
        }
      )
      .addMatcher(
        contactApi.endpoints.getContacts.matchFulfilled,
        (state: any, { payload }: any) => {
          state.contacts = payload.contacts;
        }
      )
      .addMatcher(
        contactApi.endpoints.getContact.matchFulfilled,
        (state: any, { payload }: any) => {
          state.contact = payload.contact;
        }
      )
      .addMatcher(
        contactApi.endpoints.deleteContact.matchFulfilled,
        (state: any, { payload }: any) => {
          state.message = payload.message;
        }
      )
      .addMatcher(
        (action: any) =>
          action.type.endsWith("/rejected") &&
          action.payload?.data?.sliceName === "contactApi",
        (state: any, action: any) => {
          state.loading = false;
          state.error = action.payload.data;
        }
      );
  },
});

export const contactReducer =
  contactSlice.reducer as Reducer<ContactStatePayload>;

export const { resetContactSuccess, resetContactError } = contactSlice.actions;
