import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user, isItLoading } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !isItLoading,
        queryFn: async () => {
            // console.log('checking is admin', user);
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            // console.log(res.data);
            return res.data?.admin
        }
    })
    return [isAdmin, isAdminLoading]

};

export default useAdmin;