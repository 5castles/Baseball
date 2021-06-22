const start = document.querySelector(".js-start-btn"),
    inputBox = document.querySelector(".js-input-box"),
    input = inputBox.querySelector("input"),
    showRestChances = inputBox.querySelector(".tryNumText"),
    resultText = inputBox.querySelector(".result"),
    restChances = inputBox.querySelector(".restChances"),
    theAnswer = inputBox.querySelector(".theAnswer"),
    resultBox = inputBox.querySelector(".result-box"),
    restartBtn = document.querySelector(".restart");
    

let goalNumber = [];
let tryLimit = 10;

//START 클릭 시 목표 숫자 배열 생성(세자리)
function genNumber(){
    let firstNumber = Math.floor(Math.random()*10),
        secondNumber = Math.floor(Math.random()*10),
        thirdNumber = Math.floor(Math.random()*10);
    goalNumber = [firstNumber, secondNumber, thirdNumber];
}

function handleClickStart(event){
    const btn = event.target;
    btn.classList.add("no-show");
    inputBox.classList.remove("no-show");
    showRestChances.innerText = `Baseball Game을 통해 숫자를 맞춰 보세요!  (0~9 숫자 세자리)`;
    genNumber();
}

function handleSubmit(event){
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector("input");
    const userAnswer = input.value;
    //입력값이 세자리가 아닐때
    if(userAnswer.length > 3 || userAnswer.length < 3){
        alert(`숫자는 세 자리를 입력해주세요.`)
    } else{
        comparing(userAnswer);
    }
}

function comparing(userText){
    let countStrike = 0; 
    let countBall = 0;
    
    for(i=0; i<3; i++){
        //Index 순서, 값 같을 경우 - count STRIKE +1
        console.log(goalNumber[i], parseInt(userText[i]))
        if(goalNumber[i] === parseInt(userText[i])){
            countStrike += 1;
            //index 순서 다른것들 중 값은 목표 숫자배열에 포함된 경우 - count BALL +1
        }   else if(goalNumber.indexOf(parseInt(userText[i])) !== -1){
            countBall += 1;
        }
    }
    tryLimit -= 1;
    
    //스트라이크 & 볼 결과 표기
    if(countStrike === 3){
        input.value = "";
        resultText.innerText= `${countStrike} STRIKE! OUT!! You Won!`;
        restChances.innerText= `남은 횟수: ${tryLimit}`;
        theAnswer.innerText= `정답: ${goalNumber}`;
        restartBtn.innerText =`try again?`
        restartBtn.classList.remove("no-show");   
    }   else{
        input.value = "";
        resultText.innerText= `${countStrike} STRIKE, ${countBall} BALL!`;  
        restChances.innerText= `남은 횟수: ${tryLimit}`;
    }
    //남은횟수:0 - 재시작 버튼 표시
    if(tryLimit === 0){
        inputBox.classList.add("no-show");
        restartBtn.innerText = `You Lost. Retry it again!`;
        restartBtn.classList.remove("no-show");
    }
    
    
}

function handleClickRestart(){
    inputBox.classList.remove("no-show");
    restartBtn.classList.add("no-show");
    showRestChances.innerText = `Baseball Game을 통해 숫자를 맞춰 보세요!  (0~9 숫자 세자리)`;
    tryLimit = 10;
    resultText.innerText="";
    restChances.innerText= "";
    theAnswer.innerText= "";
    genNumber();
}

function init (){
    start.addEventListener("click", handleClickStart);
    inputBox.addEventListener("submit", handleSubmit);
    restartBtn.addEventListener("click", handleClickRestart);
}

init();

//str.indexOf(searchString(검색할 문자 또는 문자열)[, fromIndex])  
//str.includes('something')); 인수로 전달한 문자열이 포함되어 있는지를 검사하고 결과를 불리언 값으로 반환한다. 두번째 인수는 옵션으로 검색할 위치를 나타내는 정수이다.