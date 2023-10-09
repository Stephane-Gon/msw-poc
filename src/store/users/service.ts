import { Api } from '../indexApi';
import { CreateUserPayload } from './types';

export const MetadataService = Api.injectEndpoints({
  endpoints: build => ({
    getAllUsers: build.query({
      query: () => `/users`,
      providesTags: ['Users']
    }),
    getUser: build.query({
      query: (id: number) => `/users/${id}`,
      providesTags: ['Users']
    }),
    createUser: build.mutation<void, { body: Partial<CreateUserPayload> }>({
      query: ({ body }) => ({
        url: `/users/create`,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Users']
    }),
    updateUser: build.mutation<void, { body: Partial<CreateUserPayload>, id: number}>({
      query: ({ body, id }) => ({
        url: `/users/update/${id}`,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Users']
    }),
  }),
  
  overrideExisting: false,
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useGetAllUsersQuery, 
  useCreateUserMutation, 
  useUpdateUserMutation,
  useGetUserQuery
} = MetadataService;
