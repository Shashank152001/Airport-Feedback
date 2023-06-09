export const initialLoggedInDetails={
    isLoggedIn : false,
    userName : "",
    userType : "",
    flightNumber :"",
    gate : "",
    token : "",
    tokenExpiry :"" ,
    userId:""
} 

export const reducer=(state,action)=>{
    if(action.type==="UserLogin")
    {
        //console.log(action.payload)
        return {
            isLoggedIn : true,
            userType : action.payload.type,
            flightNumber : action.payload.flightNumber,
            gate : action.payload.gate,
            userName : action.payload.userName,
            token : action.payload.token,
            userId:action.payload.userId
        }
    }
    if(action.type==="UserLogout")
    {
        //console.log(action.payload)
        localStorage.removeItem("UserName");
        return {
            isLoggedIn : false,
        }
    }

}