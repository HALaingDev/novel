
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
    <button class='btn1' id = 'school' onclick='car.result();'>ကားနဲ့သွားမယ်<br>(၁၂နာရီကြာမယ်)</button>
    <button class='btn2' id='home' onclick='home.result();'>ရထားနဲ့သွားမယ်<br>(၁ရက်ခွဲကြာမယ်)</button>`;
}
let car = {
    result: function () {
        text.innerHTML = `<p>သွားရမယ့်မြို့ကအိမ်ခြေနည်းလို့လားမသိဘူး
        ကားပေါ်မှာလူနည်းနည်းဘဲပါတယ်<br>
        ကားလေးကတရွေ့ရွေ့နဲ့လယ်ကွင်း​တွေ,တောင်တက်လမ်းတွေ , ထင်းရှူးတောတွေကိုတရွေ့ရွေ့နဲ့ဖြတ်လာတယ်<br>
        မြူခိုးတွေဆိုင်းနေတဲ့အဝေးမြို့လေးကိုလှမ်းတောင်မြင်နေရပြီ
        မြို့ကိုရောက်တော့ပတ်ဝန်းကျင်ကိုသတိထားလိုက်မိတယ်
        ကားပေါ်မှာကားသမားနဲ့ငါဘဲကျန်တော့တယ်<br>ခရီးသည်တွေလမ်းမှာဆင်းသွားတယ်ထင်ပါရဲ့<br>
        ကားပေါ်ကဆင်းတော့လေအေးတစ်ချက်မျက်နှာနားကိုဖြတ်တိုက်သွားတယ်
        အေးစက်စက်ပတ်ဝန်းကျင်ရဲ့အငွေ့အသက်ကကျောထဲထိစိမ့်သွားသလိုတောင်ခံစားရတယ်</p><br>    
    <button class='btn1' id = 'school' onclick='car.looking();'>ပတ်ဝန်းကျင်ကို<br>ကြည့်မယ်</button>
    <button class='btn2' id='home' onclick='home.result();'>​ဆေးရုံတန်းသွားမယ်</button>`;
    },
    looking: function () {

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