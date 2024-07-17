import { api } from "./api";

const BASE_URL = "/testimonial";

export const testimonialApi = api.injectEndpoints({
  endpoints: (build: any) => ({
    createTestimonial: build.mutation({
      query: (testimonial: any) => ({
        url: `${BASE_URL}?endpoint=CREATE_TESTIMONIAL`,
        method: "POST",
        body: testimonial,
      }),
      invalidatesTags: ["Testimonial", "Dashboard"],
    }),
    updateTestimonial: build.mutation({
      query: (testimonial: any) => ({
        url: `${BASE_URL}?endpoint=UPDATE_TESTIMONIAL`,
        method: "PATCH",
        body: testimonial,
      }),
      invalidatesTags: ["Testimonial", "Dashboard"],
    }),
    getTestimonials: build.query({
      query: () => `${BASE_URL}?endpoint=FETCH_TESTIMONIALS`,
      providesTags: ["Testimonial"],
    }),
    getTestimonial: build.query({
      query: (testimonialId: string) =>
        `${BASE_URL}/${testimonialId}?endpoint=FETCH_TESTIMONIAL`,
      providesTags: (_result: any, _error: any, arg: any) => [
        { type: "Testimonial", id: arg },
      ],
    }),
    deleteTestimonial: build.mutation({
      query: (testimonial: any) => ({
        url: `${BASE_URL}?endpoint=DELETE_TESTIMONIAL`,
        method: "DELETE",
        body: testimonial.id,
      }),
      invalidatesTags: ["Testimonial", "Dashboard"],
    }),
  }),
});

export const {
  useCreateTestimonialMutation,
  useUpdateTestimonialMutation,
  useGetTestimonialsQuery,
  useGetTestimonialQuery,
  useDeleteTestimonialMutation,
} = testimonialApi;
