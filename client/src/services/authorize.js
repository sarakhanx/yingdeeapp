import Swal from "sweetalert2"

export const authenticate=(response,next)=>{
    if(window !== undefined){
        sessionStorage.setItem("token",JSON.stringify(response.data.token))
        sessionStorage.setItem("user",JSON.stringify(response.data.username))
        Swal.fire('Login success','','success')
    }
    next()
}

export const getToken = ()=>{
    if(window !== "undefined"){
        if(sessionStorage.getItem("token"))
        return JSON.parse(sessionStorage.getItem("token"))
    }else{
        return false
    }
}

export const getUser = ()=>{
    if(window !== "undefined"){
        if(sessionStorage.getItem("user"))
        return JSON.parse(sessionStorage.getItem("user"))
    }else{
        return false
    }
}

export const logOut = (navigate) => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");
      Swal.fire("Logout success", "", "success");
      navigate("/");
    }
  };