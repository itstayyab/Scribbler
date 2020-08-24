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

var count = 0;

function likes() {
    count++;
    var para = count + ' person likes this post!';
    document.getElementById('liker').innerHTML = para;
    document.getElementById('liked').innerHTML = 'Liked';
}

function editor() {
    var a = '<button class="edit" onclick="save()">' +
        ' Save ' +
        '<i class="fa fa-floppy-o" aria-hidden="true">' +

        '</i>' +
        '</button>';

    document.getElementById('edit').innerHTML = a;
    // var b= document.createElement(document.getElementById('postname'));
    document.getElementById('heading').readOnly = false;
    document.getElementById('contentbox').readOnly = false;


}

var c = 0;


function save() {
    var a = '<button class="edit" onclick="editor()">' +
        ' Edit ' +
        '<i class="fa fa-pencil-square-o" aria-hidden="true">' +

        '</i>' +
        '</button>';
    document.getElementById('edit').innerHTML = a;

    if (c == 0) {
        document.getElementById('heading').innerHTML = 'UPDATED: ' + document.getElementById('heading').innerHTML;
        document.getElementById('contentbox').value = 'UPDATED :  ' + document.getElementById('contentbox').value;
    }

    c++;
    document.getElementById('heading').readOnly = true;
    document.getElementById('contentbox').readOnly = true;
}

function comments() {
    var pr = document.getElementById('commentbox').value;
    document.getElementById('commentbox').value = '';

    if (pr != '')
        document.getElementById('comment').innerHTML += '<p class="comment-add">' + pr + '</p>'
}