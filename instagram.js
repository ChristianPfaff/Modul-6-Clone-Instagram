
//JS-Array
let posts = [{
  'author': '',
  'image': '',
  'location': '',
  'headline': '',
  'txtcolor': '',
  'comments': [{
    'user': '',
    'comment': ''
  }]
}
];

function txtcolor(post, id) {
  if (post['txtcolor'] == "white") {
    document.getElementById(id).classList.add("header-text-color-white");
  }
  return;
}

function getComment(i) {
  idUser = "idUser" + i;
  idComment = "idComment" + i;
  let userName = document.getElementById(idUser).value;
  if (userName == '') { return; }//If no there no userName leave func
  let com = document.getElementById(idComment).value;
  posts[i].comments.push({ user: userName, comment: com });
  show();
}

function show() {//Create and show new posts
  document.getElementById('post').innerHTML = '';

  for (let i = 1; i < posts.length; i++) {
    idname = "idHeader" + i;
    idUser = "idUser" + i;
    idComment = "idComment" + i;
    outputComment = "outputComment" + i;
    document.getElementById('post').innerHTML += `
     
    <div class="frame-1">
      <div class="top-bar">
        <div class="style-1">
          <img class="style-2" src="img/images.jpg" />
          <p><b>${posts[i].author}</b><br>${posts[i].location}</p>
        </div>
        <div class="tricolon">&#8230</div>
      </div>
      <img class="img-5" src="${posts[i].image}" />
      <p id="${idname}" class="idHeaderStyle header-text-size">${posts[i].headline}</p>
      <div class="style-3">
        <div class="style-4">
          <img class="img-1" src="img/favorite-4-48.png" >
          <img class="img-1" src="img/instagram-Sprech.png" >
          <img class="img-1" src="img/instagram1.png" >
        </div>
        <img class="img-1" src="img/instagram2.png" >
      </div>
      <div class="style-6"><span> Gefällt 55 Mal</span></div>
      <div id="${outputComment}" class="style-7">
        
      </div><hr>           
      <div class="style-5">
        <input id= "${idUser}" class='input-style-1' type="text" placeholder="User Name">
        <textarea id="${idComment}" cols="0" rows="0" placeholder="Kommentar... "></textarea>
        <div class="postStyle" onclick="getComment(${i})"><b>Posten</></div>
      </div>         
    </div>
    `
    generateComments(i);
    txtcolor(posts[i], idname);
  }

  function generateComments(postIndex) {
    let post = posts[postIndex]
    document.getElementById("outputComment" + postIndex).innerHTML = '';
    for (let i = 1; i < post.comments.length; i++) {
      document.getElementById("outputComment" + postIndex).innerHTML += `
      <p><b>${post.comments[i].user}</b> ${post.comments[i].comment} </p>`;
    }
  }
}

function creatNewPost() {
  document.getElementById('dialog').classList.remove('d-none');
  document.getElementById('body').classList.add('scrollbar-hidden');


}

function closeDialog() {
  document.getElementById('dialog').classList.add('d-none');
  document.getElementById('body').classList.remove('scrollbar-hidden');
}

function addNewPost() {
  let author = document.getElementById('id-inputNewPost-1').value;
  if (author == '') { return; }//If there no author then leave func
  let imgNo = document.getElementById('id-inputNewPost-2').value;
  if (imgNo == 0) { return; }//If there no picture then leave func
  let place = document.getElementById('id-inputNewPost-3').value;
  let headline = document.getElementById('id-inputNewPost-4').value;
  let headLineColor = getRadioBtnValue();
  posts.push({
    'author': author,
    'image': 'img/' + String(imgNo) + '.jpeg',
    'location': place,
    'headline': headline,
    'txtcolor': headLineColor,
    'comments': [{
      'user': '',
      'comment': ''
    }]
  });
  for (let k = 1; k < 5; k++) {//Clear previous entries of input fields
    document.getElementById('id-inputNewPost-' + k).value = "";
  }
  closeDialog();
  show();
}

function getRadioBtnValue() {
  if (document.getElementById('w').checked) {
    return document.getElementById('w').value;
  }
  else if (document.getElementById('b').checked) {
    return document.getElementById('b').value;
  }
}
