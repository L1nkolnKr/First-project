import axios from "axios";


const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API_KEY":"3a21b2a7-6a1b-4535-b5a9-55b708575323"
    }
});


export const userAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                        .then(response => {
                            return response.data;
                        });
        },
    follow(userId){
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)},
    unfollow(userId){
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)},
    getProfile(userId){
        return instance.get(`https://social-network.samuraijs.com/api/1.0//profile/`+ userId);
        
    }
}
export const authAPI = {
    me (){
        return instance.get(`auth/me`)
    }
}

