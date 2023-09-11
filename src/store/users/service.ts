import { Api } from '../indexApi';

export const MetadataService = Api.injectEndpoints({
  endpoints: build => ({
    getAllUsers: build.query({
      query: () => `/users`,
    }),
  }),
  overrideExisting: false,
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllUsersQuery } = MetadataService;
