var topGridName = []
var topGridImg = []

var bottomGridName = []
var bottomGridImg = []

function add(name, img) {
    var list1 = document.getElementById("topGrid");
    
    
    var s = '<img class="img-circle list" src="'
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
    var a = '<img class="img-circle list" src="'
    a+= img;
    a += '" />'; // HTML string

    var entry1 = document.createElement('li');
    entry1.innerHTML = a;
    list2.appendChild(entry1)
}

add("Ronak Shah", "../img/faces/face-1.jpg");
add("Ronak Shah", "../img/faces/face-0.jpg");
add("Ronak Shah", "../img/faces/face-2.jpg");
add("Ronak Shah", "../img/faces/face-1.jpg");
add("Ronak Shah", "../img/faces/face-2.jpg");
add("Ronak Shah", "../img/faces/face-1.jpg");
add("Ronak Shah", "../img/faces/face-1.jpg");
add("Ronak Shah", "../img/faces/face-1.jpg");
add("Ronak Shah", "../img/faces/face-1.jpg");
add("Ronak Shah", "../img/faces/face-1.jpg");
add("Ronak Shah", "../img/faces/face-1.jpg");
add("Ronak Shah", "../img/faces/face-1.jpg");
add("Ronak Shah", "../img/faces/face-1.jpg");
add("Ronak Shah", "../img/faces/face-1.jpg");
add("Ronak Shah", "../img/faces/face-1.jpg");

