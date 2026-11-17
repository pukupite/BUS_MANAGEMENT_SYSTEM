console.log("Index.js Connected");

function goToUser(user) {
        console.log(user)



    if (user === "admin") {
        window.location.href = "Admin/Page/Dashboard.html";
    }else if(user ==='customer'){
        window.location.href = "";
    }
    else if(user ==='ticket_checker'){
        window.location.href = "";
    }
    else if(user ==="supervisor"){

        console.log(user)
        window.location.href = "Supervisor/index.html";
    }
    else {
        alert(user.toUpperCase() + " portal is under development by group member.");
    }
}


