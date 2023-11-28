import axiosSecure from "./axiosSecure"


export const saveUser = async (user, obj) => {
    const currentUser = {
        email: user.email,
        role: 'user',
        status: 'Verified',
        info: obj
    }
    const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser)

    return data
}

