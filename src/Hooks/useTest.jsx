import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useTest = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    const { refetch, data: test = [] } = useQuery({
        queryKey: ['test', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/userTest?email=${user.email}`)
            return res.data
        }
    })
    return [test, refetch]
};

export default useTest;