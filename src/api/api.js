import axios from "axios";


const instance = axios.create({
    withCredentials:false,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API_KEY":"cd9a2dbe-6c81-4b31-a8b7-eee67d87b2f6"
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
        return instance.post(`follow/${userId}`)},
    unfollow(userId){
        return instance.delete(`follow/${userId}`)},
    getProfile(userId){
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId)
        
    }
}


export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/`+ userId);
    },
    getStatus(userId){
        return instance.get(`profile/status/`+ userId);
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status});
    },
}
export const authAPI = {
    me (){
        return instance.get(`auth/me`);
    },
    login (email, password, rememberMe){
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout (){
        return instance.delete(`auth/login`);
    }
}

