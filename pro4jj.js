const quiz = [
  {
    question: '一番大きいカップはどれ？？',
    answers: ['Aカップ', 'Bカップ', 'Dカップ', 'Hカップ'],
    correct: 'Hカップ'
  }, {
    question: '次の文章の○○に入る文字を答えよ   見知らぬ○○',
    answers: ['人妻', '巨乳', '天井', '井口'],
    correct: '天井'
  }, {
    question: '一番頭おかしいのは？',
    answers: ['土屋', '松尾', '松尾', '村上'],
    correct: '土屋'
  }
]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

//$buttonをHTMLのbuttonと紐づけ
const $button = document.getElementsByTagName('button');

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  //問題文をidを用いてquestionに変更
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  //各buttonのtextをanswersに対応
  for (let buttonIndex = 0; buttonIndex < $button.length; buttonIndex++) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  }
}
setupQuiz();

//第一問の正誤判定
const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！！');
    score++;
  } else {
    window.alert('不正解...');
  }

  quizIndex++;
  if(quizIndex < quizLength) {
    //問題がまだあればこっち
    setupQuiz();
  } else {
    //問題数がもう無ければこちらを実行
    window.alert('終了！ あなたの正解数は'　+ score + '/' + quizLength + 'です！');
  }

};
for (let handlerIndex = 0; handlerIndex < $button.length; handlerIndex++) {
  $button[handlerIndex].addEventListener('click', (e) =>{
    clickHandler(e);
  });
}
