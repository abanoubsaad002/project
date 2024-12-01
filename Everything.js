    var showpassword =document.getElementById("password");
    var shnowNewpassword =document.getElementById("new-password");
    var chekc_password =document.getElementById("confirm-password");
    var form1 =document.getElementById("form1");
    var form2 =document.getElementById("form2");

    var player = document.getElementById("play");
    var shop = document.getElementById("toSoping");
    function we() {
        if (showpassword.type === "password",shnowNewpassword.type === "password",chekc_password.type === "password") {
            password.type = "text";
            shnowNewpassword.type = "text";
            chekc_password.type = "text";
        }else {
            password.type = "password";
            shnowNewpassword.type = "password";
            chekc_password.type = "password";
        }
    }

    function newuser() {
        form1.style.display = "none";
        form2.style.display = "block";
    }


    function New_Account() {
        var email = document.getElementById("new-email").value;
        var username = document.getElementById("new-username").value;
        var NEWpassword = document.getElementById("new-password").value;
        var confirm_password = document.getElementById("confirm-password").value;
        var mobile = document.getElementById("new-mobile").value;
            if (email == "" || username == "" || NEWpassword == "" || confirm_password == "" || mobile == ""){
            alert("pleas full data");
            return;
            }else if(NEWpassword !== confirm_password) {
            alert("password NOT match");
            return;
        }
        var users = JSON.parse(localStorage.getItem("users")) || [];

        var isUserExists = users.some(function(user) {
            return user.email === email || user.username === username;
        });

        if (isUserExists) {
            alert("البريد الإلكتروني أو اسم المستخدم مستخدم بالفعل!");
            return;
        }
        var newUser = {
            email: email,
            username: username,
            password: NEWpassword,
            mobile: mobile
        };

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Account created successfully!");

        form2.style.display = "none";
        form1.style.display = "block";
    }



    function shopping() {

        var users = JSON.parse(localStorage.getItem("users")) || [];
        var password = document.getElementById("password").value;
        var user = document.getElementById("user").value;

        var currentUser = users.find(function(u) {
            return u.username === user && u.password === password;
        });

        if (currentUser) {
            //her will make page like amazone !!
            
            // تخزين حالة تسجيل الدخول في localStorage
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("currentUser", JSON.stringify(currentUser));

            shop.style.display = "none";
            player.style.display = "flex";
        }else{
        alert("inviled user or password");
        }
    }
    window.onload = function() {
        // التحقق من حالة تسجيل الدخول
        var isLoggedIn = localStorage.getItem("isLoggedIn");
        if (isLoggedIn) {
            shop.style.display = "none"; 
            player.style.display = "flex"; 
        } else {
            shop.style.display = "flex";
            player.style.display = "none";
        }

    };
    function logout() {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("currentUser");
        shop.style.display = "flex";
        player.style.display = "none";
    }

