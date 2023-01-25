export function getCurrentUser(){
    const user = localStorage.getItem("phone_collect")
    return user; 
}