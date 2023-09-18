import { useGetAllUsersQuery } from "../../../../../store/users/service"

const useUsersList = () => {

    const {data, isLoading, isError} = useGetAllUsersQuery({})

    return {
        data,
        isLoading,
        isError,
    }
}

export default useUsersList