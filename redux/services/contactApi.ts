import { api } from "./api";

const BASE_URL = "/contact";

export const contactApi = api.injectEndpoints({
  endpoints: (build: any) => ({
    createContact: build.mutation({
      query: (contact: any) => ({
        url: `${BASE_URL}?endpoint=CREATE_CONTACT`,
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["Contact", "Dashboard"],
    }),
    updateContact: build.mutation({
      query: (contact: any) => ({
        url: `${BASE_URL}?endpoint=UPDATE_CONTACT`,
        method: "PATCH",
        body: contact,
      }),
      invalidatesTags: ["Contact", "Dashboard"],
    }),
    getContacts: build.query({
      query: () => `${BASE_URL}?endpoint=FETCH_CONTACTS`,
      providesTags: ["Contact"],
    }),
    getContact: build.query({
      query: (contactId: string) =>
        `${BASE_URL}/${contactId}?endpoint=FETCH_CONTACT`,
      providesTags: (_result: any, _error: any, arg: any) => [
        { type: "Contact", id: arg },
      ],
    }),
    deleteContact: build.mutation({
      query: (contact: any) => ({
        url: `${BASE_URL}?endpoint=DELETE_CONTACT`,
        method: "DELETE",
        body: contact.id,
      }),
      invalidatesTags: ["Contact", "Dashboard"],
    }),
  }),
});

export const {
  useCreateContactMutation,
  useUpdateContactMutation,
  useGetContactsQuery,
  useGetContactQuery,
  useDeleteContactMutation,
} = contactApi;
