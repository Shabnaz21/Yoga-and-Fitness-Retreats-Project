import axios from "axios";


const instance = axios.create({
    baseURL: 'https://yoga-and-fitness-retreats-server.vercel.app',
    withCredentials: true,
});

const useAxios = () => {
    return instance;

};

export default useAxios;