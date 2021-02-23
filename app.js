/*リファクタリング＝ソフトウェアの外部的振る舞いを保ちつつ、
理解や修正が簡単になるように、内部構造を改善すること*/
//クイズにつかう定数を定義する
const quiz = [
    {
        question : 'ゲーム市場、最も売れたゲーム機は次の内どれ？',
        answers : [
            'ニンテンドースイッチ',
            'スーパーファミコン',
            'ニンテンドーDS',
            'プレイステーション４'
        ],
        correct : 'ニンテンドーDS'
    },{
        question : 'お酢に卵を殻ごといれると卵はどうなるでしょう？',
        answers : [
            '透明な卵になる',
            '鏡のようになんでもうつる卵になる',
            '卵が溶けてなくなる',
            '卵が石のように固くなる'
        ],
        correct : '透明な卵になる'
    },{
        question : 'リンカーンは大統領にある前は何をしていたでしょうか？',
        answers : [
            'プロ野球選手',
            '猟師',
            'レスラー',
            'タクシー運転手'
        ],
        correct : 'レスラー'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

//HTMLのオブジェクトを取ってくる場合、$を入れる
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
    //定数の文字列をHTMLに反映させる
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

const clickHandler = (e) => {
    //文字列の正誤を確認する場合は===を使う
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert("正解！");
        score++;
    } else {
        window.alert("不正解!");
    }

    quizIndex++;

    if(quizIndex < quizLength){
        //問題数がまだあればこちらを実行
        setupQuiz();
    } else {
        //問題数がもうなければこちらを実行
        window.alert('終了！あなたの正解数は'+ score + '/' + quizLength + 'です!');
    }
};

//ボタンをくりっくしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click',(e) => {
        clickHandler(e);
    });
    handlerIndex++;
}