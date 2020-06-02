
let i = 1;
let btn = document.querySelector('.btn-forward');
let text = document.querySelector('#text' + i);
function first() {
    console.log(i)
    text.classList.remove('hide');
};
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