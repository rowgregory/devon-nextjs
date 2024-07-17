import { testimonialApi } from "@/redux/services/testimonialApi";
import { Reducer, createSlice } from "@reduxjs/toolkit";

export interface TestimonialStatePayload {
  loading: boolean;
  success: boolean;
  error: string | false | null;
  message: string | null;
  testimonials: [] | null;
  testimonial: {} | null;
}

export const initialTestimonialState: TestimonialStatePayload = {
  loading: false,
  success: false,
  error: null,
  message: null,
  testimonials: null,
  testimonial: null,
};

export const testimonialSlice = createSlice({
  name: "testimonial",
  initialState: initialTestimonialState,
  reducers: {
    resetTestimonialSuccess: (state) => {
      state.success = false;
    },
    resetTestimonialError: (state) => {
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        testimonialApi.endpoints.createTestimonial.matchFulfilled,
        (state: any, { payload }: any) => {
          state.message = payload.message;
          state.success = true;
        }
      )
      .addMatcher(
        testimonialApi.endpoints.updateTestimonial.matchFulfilled,
        (state: any, { payload }: any) => {
          state.message = payload.message;
          state.success = true;
        }
      )
      .addMatcher(
        testimonialApi.endpoints.getTestimonials.matchFulfilled,
        (state: any, { payload }: any) => {
          state.testimonials = payload.testimonials;
        }
      )
      .addMatcher(
        testimonialApi.endpoints.getTestimonial.matchFulfilled,
        (state: any, { payload }: any) => {
          state.testimonial = payload.testimonial;
        }
      )
      .addMatcher(
        testimonialApi.endpoints.deleteTestimonial.matchFulfilled,
        (state: any, { payload }: any) => {
          state.message = payload.message;
        }
      )
      .addMatcher(
        (action: any) =>
          action.type.endsWith("/rejected") &&
          action.payload?.data?.sliceName === "testimonialApi",
        (state: any, action: any) => {
          state.loading = false;
          state.error = action.payload.data;
        }
      );
  },
});

export const testimonialReducer =
  testimonialSlice.reducer as Reducer<TestimonialStatePayload>;

export const { resetTestimonialSuccess, resetTestimonialError } =
  testimonialSlice.actions;
