const baseURL = 'https://ghibliapi.herokuapp.com/films/';

let movContainer = document.querySelector('.mov-info');

document.getElementById('btnFetch').addEventListener('click', fetchPeeps);
//////
///////START Modal script
var exampleModal = document.getElementById('exampleModal');
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget;
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever');
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title');
  var modalBodyInput = exampleModal.querySelector('.modal-body input');

  modalTitle.textContent = 'New message to ' + recipient;
  modalBodyInput.value = recipient;
});
///End Modal script

function fetchPeeps(e) {
  e.preventDefault();
  fetch(`${baseURL}`)
    .then((response) => response.json())
    .then((json) => displayImage(json));
}

function displayImage(films) {
  console.log(films);
  console.log(films[3].title);
  console.log(films[3].director);

  for (let i = 0; i < films.length; i++) {
    let movE = document.createElement('div');
    movE.className = 'card';
    let movTitle = document.createElement('h5');
    movTitle.className = 'card-title';
    let movDescript = document.createElement('p');
    movDescript.className = 'card-text';
    let movImg = document.createElement('img');
    movImg.className = 'card-img-top';
    let movPoster = document.createElement('img');
    movPoster.className = 'card-img-top2';
    let movDirector = document.createElement('p');
    movDirector.className = 'directR';
    let movRdate = document.createElement('p');
    movRdate.className = 'releaseDate';

    //this is the added a -- check on add LINK
    var a = document.createElement('a');
    var linkText = document.createTextNode('View Free Desktop Artwork');
    a.appendChild(linkText);
    a.title = 'View Free Desktop Artwork';
    // a.href = 'http://example.com';
    a.target = '_blank';
    // a.setAttribute('target', '_blank'); -- both set attribute and target works

    var butIon = document.createElement('button');
    butIon.innerHTML = 'make this dynamic';
    butIon.setAttribute('data-bs-whatever', '@getbootstrap');
    movE.appendChild(butIon);

    // this is buiding a button
    /* button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      data-bs-whatever="@getbootstrap"
    >
      Open modal for @getbootstrap
    </button> */

    movTitle.innerText = `Movie title: ${films[i].title} `;
    movDescript.innerText = `Movie description: ${films[i].description}`;
    movDirector.innerText = `${films[i].director}`;
    movRdate.innerText = `${films[i].release_date}`;
    movImg.src = personUrl(
      films[i].title.replaceAll(' ', '').toLowerCase().replace("'", '')
    );
    movPoster.src = movUrl(
      films[i].title.replaceAll(' ', '').toLowerCase().replace("'", '')
    );

    a.href = movImg.src;

    movContainer.appendChild(movE);
    movE.appendChild(movImg);
    movE.appendChild(movPoster);
    movE.appendChild(movTitle);
    movE.appendChild(movDescript);
    movE.appendChild(movDirector);
    movE.appendChild(movRdate);
    movE.appendChild(a);
  }
}

function personUrl(characterName) {
  characterList = {
    castleinthesky: 'https://www.ghibli.jp/gallery/laputa006.jpg',
    pompoko: 'https://www.ghibli.jp/gallery/tanuki011.jpg',
    theredturtle: 'https://www.ghibli.jp/gallery/redturtle017.jpg',
    whenmarniewasthere: 'https://www.ghibli.jp/gallery/marnie019.jpg',
    thetaleoftheprincesskaguya:
      'https://www.ghibli.jp/gallery/kaguyahime039.jpg',
    thewindrises: 'https://www.ghibli.jp/gallery/kazetachinu019.jpg',
    fromuponpoppyhill: 'https://www.ghibli.jp/gallery/kokurikozaka050.jpg',
    arrietty: 'https://www.ghibli.jp/gallery/karigurashi045.jpg',
    ponyo: 'https://www.ghibli.jp/gallery/ponyo024.jpg',
    talesfromearthsea: 'https://www.ghibli.jp/gallery/ged048.jpg',
    howlsmovingcastle: 'https://www.ghibli.jp/gallery/howl049.jpg',
    thecatreturns: 'https://www.ghibli.jp/gallery/baron005.jpg',
    spiritedaway: 'https://www.ghibli.jp/gallery/chihiro048.jpg',
    myneighborstheyamadas: 'https://www.ghibli.jp/gallery/yamada050.jpg',
    princessmononoke: 'https://www.ghibli.jp/gallery/mononoke036.jpg',
    porcorosso: 'https://www.ghibli.jp/gallery/porco034.jpg',
    onlyyesterday: 'https://www.ghibli.jp/gallery/omoide028.jpg',
    kikisdeliveryservice: 'https://www.ghibli.jp/gallery/majo011.jpg',
    myneighbortotoro: 'https://www.ghibli.jp/gallery/totoro032.jpg',
    graveofthefireflies:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.EnZGBy1AMR3_ysHQ0onhAQHaD_%26pid%3DApi&f=1',
    whisperoftheheart: 'https://www.ghibli.jp/gallery/mimi048.jpg',
  };

  if (characterList.hasOwnProperty(characterName)) {
    return characterList[characterName];
  } else {
    return '';
  }
}

function movUrl(movPosterName) {
  posterList = {
    castleinthesky: 'https://www.ghibli.jp/images/laputa.jpg',
    pompoko: 'https://www.ghibli.jp/images/tanuki.jpg',
    theredturtle: 'https://www.ghibli.jp/images/red-turtle.jpg',
    whenmarniewasthere: 'https://www.ghibli.jp/images/marnie.jpg',
    thetaleoftheprincesskaguya: 'https://www.ghibli.jp/images/kaguyahime.jpg',
    thewindrises: 'https://www.ghibli.jp/images/kazetachinu.jpg',
    fromuponpoppyhill: 'https://www.ghibli.jp/images/kokurikozaka.jpg',
    arrietty: 'https://www.ghibli.jp/images/karigurashi.jpg',
    ponyo: 'https://www.ghibli.jp/images/ponyo.jpg',
    talesfromearthsea: 'https://www.ghibli.jp/images/ged.jpg',
    howlsmovingcastle: 'https://www.ghibli.jp/images/howl.jpg',
    thecatreturns: 'https://www.ghibli.jp/images/baron.jpg',
    spiritedaway: 'https://www.ghibli.jp/images/chihiro.jpg',
    myneighborstheyamadas: 'https://www.ghibli.jp/images/yamada.jpg',
    princessmononoke: 'https://www.ghibli.jp/images/mononoke.jpg',
    porcorosso: 'https://www.ghibli.jp/images/porco.jpg',
    onlyyesterday: 'https://www.ghibli.jp/images/omoide.jpg',
    kikisdeliveryservice: 'https://www.ghibli.jp/images/majo.jpg',
    graveofthefireflies: 'https://www.ghibli.jp/images/hotarunohaka.jpg',
    myneighbortotoro: 'https://www.ghibli.jp/images/totoro.jpg',
    whisperoftheheart: 'https://www.ghibli.jp/images/mimi.jpg',
  };
  if (posterList.hasOwnProperty(movPosterName)) {
    return posterList[movPosterName];
  } else {
    return '';
  }
}

var myModal = document.getElementById('myModal');
var myInput = document.getElementById('myInput');

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus();
});

/*
  NOTEs

load modal - https://www.codexworld.com/bootstrap-modal-dynamic-content-jquery-ajax-php-mysql/

https://www.tutorialrepublic.com/codelab.php?topic=bootstrap&file=changing-modal-content-according-to-the-trigger-button

possible load modal answer - https://getbootstrap.com/docs/4.0/components/modal/#varying-modal-content





  Website resources: https://translate.google.com/translate?hl=en&sl=ja&u=https://www.ghibli.jp/works/mimi/&prev=search&pto=aue




  title: Grave of the Fireflies, Castle in the Sky, My Neighbor Totoro, Kiki's Delivery Service, Only Yesterday, Porco Rosso, Pom Poko, Whisper of the Heart, Princess Mononoke, My Neighbors the Yamadas, Spirited Away, The Cat Returns, Howl's Moving Castle, Tales from Earthsea, Ponyo, Arrietty, From Up on Poppy Hill, The Wind Rises, The Tale of the Princess Kaguya, When Marnie Was There, The Red Turtle,


Ghibli Museum


Examples of other students - https://studioghiblifilmdata.web.app and https://td-ghibli-api-c0135.firebaseapp.com




studio has given free usage of..
see rights

link for the images: https://www.ghibli.jp/works/kaguyahime/



*/
