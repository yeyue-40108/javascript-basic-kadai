const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンをクリックしたら文字を変更する
btn.addEventListener('click', () =>{
    text.textContent = 'ボタンをクリックしました';
});