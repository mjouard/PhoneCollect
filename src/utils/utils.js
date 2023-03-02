export function getCurrentUser(){
    const user = JSON.parse(localStorage.getItem("phone_collect_user"))
    return user; 
}

export function getUserRole(){
    const user = JSON.parse(localStorage.getItem("phone_collect_user"))
    if (user){
        return user.role
    }
    return null; 
}

export function clearCurrentUser(){
    localStorage.removeItem("phone_collect_user")
}

export function start_animation_scale(className) {
    var list = document.getElementsByClassName(className);
    console.log(className)
    var delay = 0;

    for (var i = 0; i < list.length; ++i) {
        list[i].style.animationDelay = delay + 's';
        delay += 0.25;
    }
}

export function refreshPage() {
    window.location.reload(false);
  }