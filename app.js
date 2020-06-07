let doctorName = 'ဟိန်းဇော်';
let i = 1;
let btn = document.querySelector('.btn-forward');
let text = document.querySelector('#text1');
document.getElementById('introClose').onclick = function () {
    document.querySelector('.intro').classList.add('remove');
    document.querySelector('.card').style.opacity = '100%';
    document.querySelector('h1').style.opacity = '100%';
}
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
    document.querySelector('.card').style.opacity = '30%';
    document.querySelector('h1').style.opacity = '30%';
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
    <button class='btn2' id='home' onclick='car.hospital();'>​ဆေးရုံတန်းသွားမယ်</button>`;
    },
    looking: function () {
        text.innerHTML = `<p>ပထမဆုံးငါခံစားမိတာကတော့ပတ်ဝန်းကျင်တစ်ခုလုံးကအေးစက်ပြီးခြောက်သွေ့နေတယ်
        မြူခိုးတွေဟာအပြာအနည်းငယ်ပါတဲ့မှုန်မှိုင်းမှိုင်းအဖြူရောင်အလွာအနေနဲ့ပတ်ဝန်းကျင်ကိုဖုံးအုပ်ထားတယ်
        ကားသမားကတော့သူစီးလာတဲ့ကားလေးကိုတစ်နေရာဆီမောင်းနှင်ထွက်ခွာသွားပြီ
        မြူခိုးတွေကြားထဲတရွေ့တရွေ့ထွက်ခွာသွားတဲ့အဲ့ကားလေးကိုငါလှမ်းကြည့်နေခဲ့တယ်
        နာရီတစ်ချက်ငုံ့ကြည့်လိုက်တော့နာရီကဘာကြောင့်မှန်းမသိအလုပ်မလုပ်တော့ဘူး
        စောသေးလို့ထင်တယ်...ကားဝင်းထဲလူတောင်သိပ်မရှိဘူး
        တစ်ညလုံးအိပ်တစ်ဝက်နိုးတစ်ဝက်စီးလာရတော့ဗိုက်ကလည်းဆာနေပြီ
        မီးရောင်ခပ်မှိန်မှိန်ထွန်းထားတဲ့ကားဝင်းအကျော်ကလက်ဘက်ရည်ဆိုင်လေးမှာဘဲဝမ်းတစ်ထွာကိုဖြေရှင်းဖို့ဝင်ထိုင်လိုက်တယ်
        ထမင်းကြော်တစ်ပွဲကိုအားရပါးရစားလိုက်တယ်
        အိတ်ကပ်ထဲမှာပါလာတဲ့ဆေးလိပ်
        လေးကိုထုတ်သောက်ပြီးအနွေးထည်တစ်ခုနဲ့ငါပတ်ဝန်းကျင်ကိုအံတုနေခဲ့တယ်
        မကြာခင်ငါတာဝန်ကျတဲ့ဒီမြို့ငယ်လေးရဲ့တိုက်နယ်ဆေးရုံလေးဆီကိုသွားရတော့မယ်</p><br>    
    <button class='btn1' id = 'school' onclick='car.hospital();'>ဆေးရုံသွားမယ်</button>`;
    },
    hospital: function () {
        text.innerHTML = `<p>ကားဝင်းဘေးနားဆိုင်ကယ်ဂိတ်ထဲအထုပ်တွေသယ်ပြီးခပ်စိုက်စိုက်လျောက်သွားလိုက်တယ်<br>
        “အကိုရေ..ဆေးရုံသွားချင်လို့”<br>
        အရပ်ခပ်ပြတ်ပြတ်ဆိုင်ကယ်ကယ်ရီဆရာကြီးကရှမ်းသံဝဲဝဲနဲ့<br>
        “ဟုတ်ကဲ့…ဟုတ်ကဲ့..ဆရာကြီး..အထုပ်တွေပေး<br>
        ရှေ့မှာထားလိုက်..ကျွန်တော်ကိုင်ထားပေးမယ်”<br>
        ဆိုင်ကယ်မောင်းတုန်းလေအေးတွေကလည်းမျက်နှာကိုတရဆတ်ဝင်တိုးနေတယ်<br>
        ဆေးရုံသွားတဲ့လမ်းလေးဟာကတ္တရာပါးပါးလေးခင်းထားတယ်<br>
        ဘေးဘက်ဝဲယာကိုချိုးတဲ့လမ်းလေးတွေဟာမြေညီလမ်းလေးတွေ<br>
        မြင်ကွင်းတွေကတော့မြူခိုးတွေရဲ့ကန့်သတ်မှုကိုခံထားရတယ်<br>
        ပတ်ဝန်းကျင်ကသပ်သပ်ရပ်ရပ်တော့ရှိပါရဲ့<br>
        လူတစ်ယောက်နှစ်ယောက်ဖြတ်သွားဖြတ်လာလုပ်သွားတာတော့တွေ့ရတယ်<br>
        ဒီမြို့လေးကငါထင်ထားတာထက်လူပိုနည်းနေတာဘဲကယ်ရီသမားကြီးကဆေးရုံရှေ့ချပေးလိုက်တယ်<br>
        ဆေးရုံကတောင်ကုန်းပေါ်မှာငူငူကြီးထိုင်နေတယ်<br>
        အထဲကိုဝင်လိုက်တော့ကောင်တာမှာsisterကြီးတစ်ယောက်ပဲရှိတယ်
        <br>
        “ဆရာကဒီကိုပြောင်းလာတဲ့ဆရာဟိန်းဇော်ဖြစ်မယ်”<br>
        “အင်း..ဟုတ်ပါတယ်”</p><br>    
    <button class='btn1' id = 'school' onclick='lock.result1();'>တာဝန်ကျတဲ့ဝန်ထမ်းကsisterကြီးတစ်ယောက်ဘဲရှိတာလား</button>
    <button class='btn2' id='home' onclick='lock.result2();'>ဆေးရုံကဝန်ထမ်းတွေမရှိဘူးလား</button>`;
    }
};
let lock = {
    result1: function () {
        text.innerHTML = `<p>"သန့်ရှင်းရေးလုပ်တဲ့ဦးလေးတစ်ယောက်တော့ရှိတယ်
        သူကနေမကောင်းလို့ဒီနေ့ခွင့်ယူထားတယ်"<br>        
        sisterကြီးကပေ၆၀x၈၀သာကျယ်သောဆေးရုံကိုလိုက်ပြပေးရှာတယ်<br>
        ဆေးရုံလေးကသာမန်ခပ်စုတ်စုတ်နယ်ဆေးရုံလေးဘဲ<br>
        ဆေးဆိုလို့ paracetamol,penicillin,diclo 
        အဲ့လောက်ဘဲ...ခွဲစိတ်ဖို့တောင် propofol တောင်မရှိဘူး<br>
        "ဒီမြို့မှာကလူနာကမရှိသလောက်နည်းတယ်ဆရာ
        မြို့ခံတော်တော်များများကတော်ရုံတန်ရုံဆိုအိမ်မှာပဲကုကြတာ"<br>
        တိုင်ကပ်နာရီကိုကြည့်တော့၄နာရီခွဲ<br>
        ဆောင်းတွင်းမို့ထင်တယ်..မှောင်ရီပျိုးနေပြီ<br>
        sisterကြီးကလိုက်ပြပြီးတော့သူတာဝန်ကျရာနေရာကိုထွက်သွားပြီ<br>
        ရှုပ်ပွနေတဲ့ခွဲခန်းထဲမှာသုံးလို့ရတာဘာများရှိမလဲလို့လိုက်ပတ်ကြည့်နေသေးတယ်<br>
        "ဒုန်း!!!!"<br>
        အသံကြားလို့အခန်းကထွက်ကြည့်မယ်လုပ်တော့အခန်းတံခါးကဖွင့်မရတော့<br>
        အပြင်ဘက်ကလော့ခတ်ထားသလိုဘဲ
        ဘယ်လောက်ဖွင့်ဖွင့်မရတော့ဘူး
        </p><br>    
    <button class='btn1' id = 'school' onclick=''>တံခါးကိုထုပြီးအပြင်ကလူကိုအော်ခေါ်မယ်</button>
    <button class='btn2' id='home' onclick=''>တံခါးဂျက်ကိုကန်ပြီးဖျက်မယ်</button>`;
    },
    result2: function () {
        text.innerHTML = `<p>
        "ဝန်ထမ်းကတော့ဆရာရယ်..ကျွန်မအပြင်သန့်ရှင်းရေးလုပ်တဲ့ဦးလေးကြီးတစ်ယောက်ပဲရှိတယ်ဆရာ"<br>
        sisterကြီးကပေ၆၀x၈၀သာကျယ်သောဆေးရုံကိုလိုက်ပြပေးရှာတယ်<br>
        ဆေးရုံလေးကသာမန်ခပ်စုတ်စုတ်နယ်ဆေးရုံလေးဘဲ<br>
        ဆေးဆိုလို့ paracetamol,penicillin,diclo
         အဲ့လောက်ဘဲ...ခွဲစိတ်ဖို့တောင်propofolတောင်မရှိဘူး<br>
        "ဒီမြို့မှာကလူနာကမရှိသလောက်နည်းတယ်ဆရာ
        မြို့ခံတော်တော်များများကတော်ရုံတန်ရုံဆိုအိမ်မှာပဲကုကြတာ"<br>
        တိုင်ကတ်နာရီကိုကြည့်တော့၄နာရီခွဲ<br>
        ဆောင်းတွင်းမို့ထင်တယ်..မှောင်ရီပျိုးနေပြီ<br>
        sisterကြီးကလိုက်ပြပြီးတော့သူတာဝန်ကျရာနေရာကိုထွက်သွားပြီ<br>
        ရှုပ်ပွနေတဲ့ခွဲခန်းထဲမှာသုံးလို့ရတာဘာများရှိမလဲလို့လိုက်ပတ်ကြည့်နေသေးတယ်<br>
        "ဒုန်း!!!!"<br>
        အသံကြားလို့အခန်းကထွက်ကြည့်မယ်လုပ်တော့အခန်းတံခါးကဖွင့်မရတော့<br>
        အပြင်ဘက်ကလော့ခတ်ထားသလိုဘဲ
        ဘယ်လောက်ဖွင့်ဖွင့်မရတော့ဘူး
        </p><br>    
    <button class='btn1' id = 'school' onclick=''>တံခါးကိုထုပြီးအပြင်ကလူကိုအော်ခေါ်မယ်</button>
    <button class='btn2' id='home' onclick=''>တံခါးဂျက်ကိုကန်ပြီးဖျက်မယ်</button>`;
    }
};
