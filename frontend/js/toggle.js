var users=[
    {
        "name":"John Doe",
        "gender":"Male",
        "image":"/images/card.png"
    },
    {
        "name":"Jane Doe",
        "gender":"Female",
        "image":"/images/jane_doe.png"
    }
]

var curId=0;
function toggle(){
    //toggle curId from 0->1 and 1-->0
    curId = (curId + 1) % 2;

    //toggle the rendered user details
    var user= users[curId];
    document.getElementById("user-img").src = user.image;
    //to do:update for name and gender
    document.getElementById("user-name").innerText= user.name;
    document.getElementById("user-gender").innerText = user.gender;
}
