function Signup() {

    var p = '<form>' +
        '<div class="box">' +
        '<p class="frm"> Get Started</p>' +
        '<i class="fa fa-times" id="cross" onclick="closeBox()"></i>' +
        '</div>' +
        '<div>' + '<hr class="frm">' + '</div>' +
        '<label class="frm">Name</label>' +
        '<input type="text" placeholder="Enter your name" required> ' +
        '<label class="frm">Username</label>' +
        '<input type="text" placeholder="Enter your username" required>' +
        '<label class="frm">Password</label>' +
        '<input type="password" placeholder="Enter your password" required>' +
        '<label class="frm">Confirm Password</label>' +
        '<input type="password" placeholder="Re-enter your password" required>' +
        '<button id="fbt">Sign Up</button>' +
        '</form>';

    document.getElementById('posts').innerHTML = '';

    document.getElementById('posts').innerHTML = p;
}

function Sign() {
    // this is for sign in
    var p = '<form id="sign">' +
        '<div class="box">' +
        '<p class="frm"> Welcome Back!</p>' +
        '<i class="fa fa-times" id="cross" onclick="closeBox()"></i>' +
        '</div>' +
        '<div>' + '<hr class="frm">' + '</div>' +


        '<label class="frm">Username</label>' +
        '<input type="text" placeholder="Enter your username" required>' +
        '<label class="frm">Password</label>' +
        '<input type="password" placeholder="Enter your password" required>' +


        '<button id="fbt">Sign In</button>' +
        '<p class="frm" style="text-align:center">Not a member? <span onclick="Signup()" style="color:#0066cc">Sign up</span></p>' +

        '</form>'
        ;
    document.getElementById('posts').innerHTML = '';

    document.getElementById('posts').innerHTML = p;
}

function closeBox() {
    location.href = "../html/postslist.html";
}

function post() {
    location.href = "../html/post.html";
}

function deletefun() {

    this.render = function (id) {

        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogyes = document.getElementById('dialogyes');
        var dialogno = document.getElementById('dialogno');
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');

        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH + "px";
        dialogbox.style.display = "block";
        document.getElementById('dialogboxhead').innerHTML = "Are you sure you want to delete this post?";
        dialogyes.innerHTML = '<button id="delete" onclick="Alert.del(' + id + ')">Yes</button>';
        dialogno.innerHTML = '<button id="cancel" onclick="Alert.cancel()">No</button>';

    }
    this.del = function (id) {
        console.log(id.id);

        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";
        document.getElementById(id.id).style.display = "none";

    }
    this.cancel = function () {
        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";
    }

}
var Alert = new deletefun();