import { Api } from '../indexApi';
import { CreateUserPayload } from './types';

export const MetadataService = Api.injectEndpoints({
  endpoints: build => ({
    getAllUsers: build.query({
      query: () => `/users`,
    }),
    createUser: build.mutation<void, { body: Partial<CreateUserPayload> }>({
      query: ({ body }) => ({
        url: `users/create`,
        method: 'POST',
        body: body,
      }),
    }),
  }),
  overrideExisting: false,
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllUsersQuery, useCreateUserMutation } = MetadataService;
