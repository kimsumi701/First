let computerNumber = 0;
let playButton = document.getElementById('play_button');
let userInput = document.querySelector('#user_input');
let resultArea = document.getElementById('result_area');
let resetButton = document.querySelector('#reset_button');
let chancesArea = document.getElementById('chance_area');
let chances = 5;
let gameOver = false;
let userValueList = []; 
/* 
    document는 DOM트리의 최상위 객체다.
    DOM(Document Object Model)이라 하면 자바스크립트 입장에서 그저 일종의 문자열일 뿐인 HTML을 자바스크립트가 이해할 수 있게
    객체의 형태로 바꿔둔것
    (Document를 HTML이라고 하면 이해하기 편하다)
    이 DOM을 이제 자바스크립트가 마음대로 컨트롤할 수 있어야되는데 이떄 필요한 기본 함수들과 속성값을 제공해주는게 
    document라는 객체다.

    document.getElementById : id 선택
    document.getElementByClassName : class로 선택, 같은 class가 여러개 있을 경우엔 모두 다 선택이 되서 배열에 저장된다.
*/
/* 
    let userInput = document.querySelector("#user-input");
    >> id=user-input을 선택
    let resultAreaImg = document.querySelector(".main-img");
    >> class=main=img를 선택
    let menus = document.querySelector("nav a");
    >> nav 태그밑에 있는 a 태그를 선택

    document.querySelectorAll : 위에 document.querySelectort와 같다.
    하지만 All에서 알수있듯이 선택된값 모두를 NodeList에 담아 반환한다

*/
playButton.addEventListener('click', play);
/* addEventListener('이벤트의 이름', 이벤트 발생시 실행시킬 함수의 이름) */
resetButton.addEventListener('click', reset);
userInput.addEventListener('focus', function() {userInput.value = ''});
function picRandomNumber() {
    // 1~100 랜덤값
    computerNumber = Math.floor(Math.random() * 10) + 1;    
    console.log(computerNumber);
}
/* 
    Math : 자바스크립트에서 유용한 객체중 하나인 Math. 수학적으로 어지간한 함수들이 다 들어가있다.
    Math.Random() : 0~1사이의 값을 반환 (1에 근접한 값까지. 1은 미포함)
    Math.floor() : 소수점 버림
    Math.ceil() : 소수점 올림
    Math.round() : 소수점 반올림
    Math.max() : 여러개의 값중 제일 큰값 반환
    Math.min() : 여러개의 값중 제일 작은값 반환
*/
function play() {
    const USER_VALUE = userInput.value;
    if (USER_VALUE < 1 || USER_VALUE > 10) {
        resultArea.textContent = '1~10 사이의 숫자를 입력해주세요.';
        return;
    }
    if (userValueList.includes(USER_VALUE)) {
        resultArea.textContent = '이미 입력한 숫자입니다.';
        return;
    }
    userValueList.push(USER_VALUE);
    if (USER_VALUE < computerNumber) {
        resultArea.textContent = 'UP!!';
    } else if (USER_VALUE > computerNumber) {
        resultArea.textContent = 'DAWN!!';
    } else {
        resultArea.textContent = '정답!!';
        gameOver = true;
    }
    /* 
        다양한 노드의 속성값

        textContent : 노드의 text 값을 반환
        innerText : 노드의 text값을 반환, textContent랑 비슷하지만 textContent는 모든 요소를 반환하는 반면에,
        InnerText는 사람이 읽을 수 있는 요소만 가져온다. (글자사이에 여백이 많다면 textContent는 있는 그대로,
            가져오는 반면에 innerText는 여백을 한칸정도만 남기고 가져온다.)
        innerHTML : html 요소를 반환

        셋의 차이를 잘 보여주는 예제 코드.
        다음 코드를 실행시켜보면 차이가 확연하게 들어난다.

        HTML 상의 마크업
        <h1 id="test">
            <div>Hello      world</div>
        </h1>

        script 상의 코드
        let text = document.getElementById("test")
        console.log(test.innerText)
        console.log(test.textContent)
        console.log(test.innerHTML)

        이외에도 다양한 노드 속성과 함수는 다음 사이트에서 확인가능하다.
        https://developer.mozilla.org/ko/docs/web/API/Node
    */
    chances--;
    chancesArea.innerHTML = `남은 찬스 : ${chances}번`;
    if (chances == 0) {
        gameOver = true;
    }
    if (gameOver == true) {
        playButton.disabled = true;
    }
}
function reset() {    
    picRandomNumber();
    userInput.value = '';
    resultArea.textContent = '결과가 나온다';
    gameOver = false;
    playButton.disabled = false;
    chances = 5;
    chancesArea.innerHTML = `남은 찬스 : ${chances}번`;
    userValueList = [];  
}

picRandomNumber();