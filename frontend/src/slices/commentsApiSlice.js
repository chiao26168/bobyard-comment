import { COMMENTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";
export const commentsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query({
      query: ({ pageNumber, pageSize }) => ({
        url: `${COMMENTS_URL}?pageNumber=${pageNumber}&pageSize=${pageSize}`,
      }),
      providesTags: ["Comments"],
      keepUnusedDataFor: 5,
    }),
    createComment: builder.mutation({
      query: (data) => ({
        url: COMMENTS_URL,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Comments"],
    }),
  }),
});

export const { useGetCommentsQuery, useCreateCommentMutation } =
  commentsApiSlice;
