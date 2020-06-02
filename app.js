
let i = 1;
let btn = document.querySelector('.btn-forward');
let text = document.querySelector('#text1');
function first() {
    console.log(i)
    text.classList.remove('hide');
    begin();
};
function begin() {
    text.innerHTML = `<p>Where to go?</p>
    <button id = 'school' onclick='school.result();'>School</button>
    <button id='home' onclick='home.result();'>Home</button>`;
}
let school = {
    result: function () {
        text.innerHTML = `<p>What subject is been teaching now?</p>
        <button onclick = 'stop();'>Myanmar</button>
        <button onclick = 'stop();'>English</button>
        <button onclick='begin();'>Ask me again.</button>`;
    }
}
let home = {
    result: function () {
        text.innerHTML = `<p>Eat or sleep?</p>
        <button onclick = 'home.eat();'>Eat</button>
        <button onclick = 'home.sleep();'>Sleep</button>
        <button onclick='begin();'>Ask me again.</button>`;
    },
    eat: function () {
        text.innerHTML = `<p>Br sar ma lal</p>
        <button onclick = 'htamin.result();'>Hamin</button>
        <button onclick = 'stop();'>E sar mal</button>
        <button onclick='home.result();'>Ask me again.</button>`;
    },
    sleep: () => {
        alert('x p kwar');
    }
}
let htamin = {
    result: () => {
        text.innerHTML = `<p>Kg lr?</p>
        <button onclick = 'stop();'>Ma kg bu</button>
        <button onclick = 'stop();'>Kg tal</button>
        <button onclick='home.eat();'>Ask me again.</button>`;
    }
}
function stop() {
    alert('no more to continue "lee bal"');
}
function forward() {
    if (i <= 3) {
        document.querySelector('#text' + i).classList.add('hide')
        i++;
        document.querySelector('#text' + i).classList.remove('hide');
    } else {
        alert('Last');
    }
}
function backward() {
    if (i > 1) {
        document.querySelector('#text' + i).classList.add('hide');
        i--;
        document.querySelector('#text' + i).classList.remove('hide');
    } else {
        alert('This is last chapter');
    }

}