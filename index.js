let pointuserspan = document.getElementById('pointuser');
let pointpcpan = document.getElementById('pointpc');

//combinations ♦♣♥♠
let cartp1a = document.getElementById('cartp1a');
let cartp1b = document.getElementById('cartp1b');
let cartp1c = document.getElementById('cartp1c');

//1a
let card1atext = document.getElementById('textcard1a');
let simbolcard1a = document.getElementById('simbolcard1a');

//1b
let card1btext = document.getElementById('textcard1b');
let simbolcard1b = document.getElementById('simbolcard1b');

//signos y puntos
let signs = ['♦', '♣', '♥', '♠'];
var playerone_points = [];
var playerpc_points = [];

function setAgain() {
    console.log("Ejecutando setAgain");

    // Rebarajear cartas
    sorcardspc();

    // Reseteo visual
    cartp1a.classList.add('styleback');
    cartp1b.classList.add('styleback');
    card1atext.innerText = '';
    simbolcard1a.innerText = '';
    card1btext.innerText = '';
    simbolcard1b.innerText = '';

    let tercera = document.querySelector('.cartp1c');
    let existingCard = document.querySelector('.cartp2c');

    if (tercera) {
        tercera.remove();
    }
    if (existingCard) {
        existingCard.remove();
    }

    document.getElementById("Double").style.display = "inherit";

    // Resetear puntos
    playerone_points = [];
    playerpc_points = [];
    pointuserspan.innerText = '';
    pointpcpan.innerText = '';
}

function points_keeper(pc, user) {
    // console.log('Actualizando puntos...');
    // console.log('Puntos del usuario:', user);
    // console.log('Puntos de la PC:', pc);
    console.log('Point keeper')
    updatePoints()
}

function sorcards() {
    console.log("Ejecutando sorcards");

    card1atext.innerText = '';
    simbolcard1a.innerText = '';
    card1btext.innerText = '';
    simbolcard1b.innerText = '';

    let random_num = Math.floor(Math.random() * 10) + 1;
    let random_card = Math.floor(Math.random() * 4);
    let random_num2 = Math.floor(Math.random() * 10) + 1;
    let random_card2 = Math.floor(Math.random() * 4);

    cartp1a.classList.remove('styleback');
    cartp1b.classList.remove('styleback');
    card1atext.innerText = random_num;
    simbolcard1a.innerText = signs[random_card];
    card1btext.innerText = random_num2;
    simbolcard1b.innerText = signs[random_card2];
    
    playerone_points.push(random_num, random_num2);

    let points = playerone_points.reduce((acc, curr) => acc + curr, 0);
    let totalpc = playerpc_points.reduce((acc, curr) => acc + curr, 0);
    points_keeper(totalpc, points);
}

function Double() {
    console.log("Ejecutando Double");

    let random_num = Math.floor(Math.random() * 10) + 1;
    let random_card = Math.floor(Math.random() * 4);

    let newCard = document.createElement('div');
    newCard.classList.add('cartp1c');
    
    let textSpan = document.createElement('span');
    textSpan.id = 'textcard1c';
    newCard.appendChild(textSpan);
    
    let simbolSpan = document.createElement('span');
    simbolSpan.id = 'simbolcard1c';
    newCard.appendChild(simbolSpan);
    
    textSpan.innerText = random_num;
    simbolSpan.innerText = signs[random_card];
    
    let box1 = document.querySelector('.box1');
    box1.appendChild(newCard);

    document.getElementById("Double").style.display = "none";

    playerone_points.push(random_num);

    let points = playerone_points.reduce((acc, curr) => acc + curr, 0);
    let totalpc = playerpc_points.reduce((acc, curr) => acc + curr, 0);
    
    if (points > totalpc) {
        pc_double();
    }
}

function sorcardspc() {
    console.log("Ejecutando sorcardspc");

    let card2atext = document.getElementById('textcard2a');
    let simbolcard2a = document.getElementById('simbolcard2a');
    let card2btext = document.getElementById('textcard2b');
    let simbolcard2b = document.getElementById('simbolcard2b');
    let cartp2a = document.getElementById('cartp2a');
    let cartp2b = document.getElementById('cartp2b');
    let existingCard = document.querySelector('.cartp2c');

    card2atext.innerText = '';
    simbolcard2a.innerText = '';
    card2btext.innerText = '';
    simbolcard2b.innerText = '';

    let random_num = Math.floor(Math.random() * 10) + 1;
    let random_card = Math.floor(Math.random() * 4);
    let random_num2 = Math.floor(Math.random() * 10) + 1;
    let random_card2 = Math.floor(Math.random() * 4);

    cartp2a.classList.remove('styleback');
    cartp2b.classList.remove('styleback');
    card2atext.innerText = random_num;
    simbolcard2a.innerText = signs[random_card];
    card2btext.innerText = random_num2;
    simbolcard2b.innerText = signs[random_card2];

    playerpc_points.push(random_num, random_num2);

    if (existingCard) {
        existingCard.style.display = "none";
    }

    if (playerone_points.length > 0) {
        Stake();
    }
}

function pc_double() {
    console.log("Ejecutando pc_double");

    let random_num = Math.floor(Math.random() * 10) + 1;
    let random_card = Math.floor(Math.random() * 4);

    let newCard = document.createElement('div');
    newCard.classList.add('cartp2c');

    let textSpan = document.createElement('span');
    textSpan.id = 'textcard2c';
    newCard.appendChild(textSpan);

    let simbolSpan = document.createElement('span');
    simbolSpan.id = 'simbolcard2c';
    newCard.appendChild(simbolSpan);

    textSpan.innerText = random_num;
    simbolSpan.innerText = signs[random_card];

    let existingCard = document.querySelector('.cartp2c');
    if (existingCard) {
        existingCard.style.display = "none";
    }

    let box3 = document.querySelector('.box3');
    box3.appendChild(newCard);

    playerpc_points.push(random_num);

    let { pointsUser, pointsPC } = updatePoints();
    console.log('Point_keeper in double pc f')
    console.log(updatePoints())
    points_keeper(pointsPC, pointsUser);
}

function Stake() {
    console.log("Ejecutando Stake");

    let { pointsUser, pointsPC } = updatePoints();

    if (pointsPC > pointsUser && pointsPC < 22) {
        alert(`PC gana con ${pointsPC} puntos.`);
        playerpc_points = [];
    } else {
        let existingCard = document.querySelector('.cartp2c');
        if (existingCard) {
            existingCard.remove();
        }
        pc_double();
    }

    playerone_points = [];
    playerpc_points = [];
}

function updatePoints() {
    let pointsUser = playerone_points.reduce((acc, curr) => acc + curr, 0);
    let pointsPC = playerpc_points.reduce((acc, curr) => acc + curr, 0);

    pointuserspan.innerText = pointsUser;
    pointpcpan.innerText = pointsPC;

    return { pointsUser, pointsPC };
}

// Eventos
document.getElementById("abarajar").addEventListener("click", sorcards);
document.getElementById("nueva").addEventListener("click", setAgain);

// Inicializa el juego
sorcardspc();
