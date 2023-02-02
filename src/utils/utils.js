export function getCurrentUser(){
    const user = JSON.parse(localStorage.getItem("phone_collect_user"))
    return user; 
}

export function clearCurrentUser(){
    localStorage.removeItem("phone_collect_user")
}