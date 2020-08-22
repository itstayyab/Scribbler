function createPost() {
    document.getElementById("createPost-form").reset();
}

function loadpostslist() {
    window.location.href = "html/postslist.html";
}

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
    
    document.getElementById('main').innerHTML = p;
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

    document.getElementById('main').innerHTML = p;
}

function closeBox() {
    
    var pr = '<div>' +
        '<button class="btn-post" onclick="loadPage()">All Posts</button>' +
        '</div>' +
        '<div>' +
        '<button class="btn-post" onclick="Create()">Create Post</button>' +
        '</div>';
    
    document.getElementById('main').innerHTML = '';

    document.getElementById('posts').innerHTML = pr;
}

