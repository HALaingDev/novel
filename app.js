
let i = 1;
let btn = document.querySelector('.btn-forward');
let text = document.querySelector('#text1');
function first() {
    console.log(i)
    text.classList.remove('hide');
    begin();
};
function begin() {
    text.innerHTML = `<p>'သွားရမယ့်အချိန်မှီပါ့မလားမသိဘူး'<br>
    ငါအဲ့လိုရေရွတ်လိုက်မိတယ် <br>
    အိမ်ကထွက်လာတော့ပတ်ဝန်းကျင်ကအနည်းငယ်ပူလောင်နေတယ်<br>
    သွားမဲ့နေရာကတောင်ပေါ်မြို့လေးဆိုတော့ဟိုရောက်ရင်တော့အေးမယ်လို့မျှော်လင့်ရတာဘဲ<br>
    သက်ပြင်းတစ်ချက်မသိမသာချလိုက်မိတယ်</p><br>
    <button class='btn1' id = 'school' onclick='school.result();'>ကားနဲ့သွားမယ်<br>(၁၂နာရီကြာမယ်)</button>
    <button class='btn2' id='home' onclick='home.result();'>ရထားနဲ့သွားမယ်<br>(၁ရက်ခွဲကြာမယ်)</button>`;
}
let school = {
    result: function () {
        text.innerHTML = `< p > What subject is been teaching now ?</p >
        <button onclick='stop();'>Myanmar</button>
        <button onclick='stop();'>English</button>
        <button onclick='begin();'>Ask me again.</button>`;
    }
}
let home = {
    result: function () {
        text.innerHTML = `< p > Eat or sleep ?</p >
        <button onclick='home.eat();'>Eat</button>
        <button onclick='home.sleep();'>Sleep</button>
        <button onclick='begin();'>Ask me again.</button>`;
    },
    eat: function () {
        text.innerHTML = `< p > Br sar ma lal</p >
        <button onclick='htamin.result();'>Hamin</button>
        <button onclick='stop();'>E sar mal</button>
        <button onclick='home.result();'>Ask me again.</button>`;
    },
    sleep: () => {
        alert('x p kwar');
    }
}
let htamin = {
    result: () => {
        text.innerHTML = `< p > Kg lr ?</p >
        <button onclick='stop();'>Ma kg bu</button>
        <button onclick='stop();'>Kg tal</button>
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