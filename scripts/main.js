let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  // getAttribute를 통해서 src 속성값을 얻는다.
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.jpg");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
  // setAttribute를 사용해서 src의 속성값을 바꾼다.
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name.");
  //prompt() 함수는 alert()와 비슷하다.
  //사용자에게 어떤 데이터를 입력하길 요청하고 그 값을 변수에 저장할 수 있다.
  localStorage.setItem("name", myName);
  //localStorage로 저장한 데이터는 브라우저 세션 간에 공유된다.
  //localStorage 데이터는 만료되지 않는다.
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla is cool, " + myName;
  }
  /*
  if문 사용이유
  만약에 myName이 입력되지 않았다면 setUsername을 다시 실행시킨다.
  입력이 되었다면 myHeading 값을 바꾼다.
  */
}
myButton.onclick = function () {
  setUserName();
};

// let myHeading = document.querySelector("h1");
// // querySelector을 사용해서 본문 제목에 대한 참조를 myHeading이라는 변수에 저장
// myHeading.textContent = "Hello world!";
// // myHeading 변수의 textContent 프로퍼티의 값을 "Hello World로 설정"

/*
document.querySelector("html").onclick = function () {
  alert("Ouch! Stop poking me!");
};
html 사이트를 클릭하면 창이 뜨게 한다.
*/
// 변수를 선언한 후에, 값을 할당할 수 있다.
// 변수에는 어떤 값을 준 후, 나중에 변경할 수 있다.

// let iceCream = "chocolate";
// if (iceCream === "chocolate") {
//   alert("Yay, I love choclate ice cream!");
// } else {
//   alert("Awwwm but chocolate is my favorite...");
// }

/*
변수 종류
- String
    let myVariable = 'Bob';
    인용부호로 둘러싸야 한다.
- Number
    let myVariable = 10;
- Boolean
    let myVariable = true;
    true/false -> 참/거짓을 나타낼 수 있다.
- Array
    let myVariable = [1, 'Bob', 'Steve', 10];
    참조 방법
    myVariable[0], myVariable[1]
- Object
    let myVariable = document.querySelector('h1');

변수 사용 -> 동적인 일을 할 수 있다.
 */

/*
연산자 === 
두 값이 서로 같은지 테스트 하여 true/false 결과를 반환한다.
다른 언어들과 다르게 =을 3개를 사용한다.
*/

/*
<함수>
재사용하기를 원하는 기능을 담는 방법이다.

이름 뒤에 () 가 있다면 그것은 함수이다.

인수(arguments) -> 함수가 작동하는데 필요한 일련의 데이터이다.
*/

/*
<이벤트>
웹사이트의 실질적인 상호작용에는 이벤트가 중요하다!

이벤트는 브라우저에서 발생하는 일을 듣고 그에 대한 반응으로 코드를 실행하는 구조이다.
*/
