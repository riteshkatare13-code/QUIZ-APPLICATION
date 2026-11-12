import axios from "axios";

export const LoginHandler = async (username, password) => {
    try{
        const {data : {token}, status} = await axios.post("http://localhost:3000/auth/login", {
            username: username,
            password: password
        });


        if(status === 200){
            localStorage.setItem("token", token);
            return token;
        }

        console.log(data);
        
    }catch(err){
        console.error(err);
    }
}