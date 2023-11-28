import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useTest = () => {

    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()

    const { data: test = [] } = useQuery({
        queryKey: ['test', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/userTest?email=${user.email}`)
            return res.data
        }
    })
    return [test]
};

export default useTest;