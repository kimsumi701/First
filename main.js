let computerNumber = 0;
let playButton = document.getElementById('play_button');
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
function picRandomNumber() {
    // 1~100 랜덤값
    computerNumber = Math.floor(Math.random() * 100) + 1;    
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
picRandomNumber();