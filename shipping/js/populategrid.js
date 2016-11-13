var topGridName = []
var topGridImg = []

var bottomGridName = []
var bottomGridImg = []
function add(name, img) {
    var list1 = document.getElementById("topGrid");
    
    
    var s = '<img class="img-circle list" id = "' + name + '" src="'
    s+= img;
    s += '" />'; // HTML string

    var entry = document.createElement('li');
    
    entry.innerHTML = s;

    list1.appendChild(entry);
    
    
    topGridName.push(name);
    topGridImg.push(img);
    
    bottomGridName.push(name);
    bottomGridImg.push(img);
    
    var list2 = document.getElementById("bottomGrid");
    var a = '<img class="img-circle list" id = "' + name + '" src="'
    a+= img;
    a += '" />'; // HTML string

    var entry1 = document.createElement('li');
    entry1.innerHTML = a;
    list2.appendChild(entry1)
}

function ship() {
    //alert("I SHIP");
    var selected = document.getElementsByClassName("active");
    var person1 = selected[0].getElementsByTagName("img")[0].id;
    var person2 = selected[1].getElementsByTagName("img")[0].id;
    
    alert("OMFG YOU SHIP " + person1 + " WITH " + person2);
    
    //write kewl code that sends data here
}


add("TJ Horner", "../img/faces/face-1.jpg");
add("Dan Janes", "../img/faces/face-0.jpg");
add("John Cena", "http://a3.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTIwNjA4NjMzNzAzNzI4NjUy.jpg");

function setNames() {
    var selected = document.getElementsByClassName("active");
    var person1 = selected[0].getElementsByTagName("img")[0].id;
    var person2 = selected[1].getElementsByTagName("img")[0].id;
    
    var p1Label = document.getElementById("topName");
    var p2Label = document.getElementById("bottomName");
    
    p1Label.innerHTML = person1;
    p2Label.innerHTML = person2;
}

window.setInterval(function(){
  /// call your function here
    setNames();
}, 250);