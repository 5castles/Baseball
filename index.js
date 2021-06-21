const start = document.querySelector(".js-start-btn"),
    inputBox = document.querySelector(".js-input-box"),
    input = inputBox.querySelector("input");


//START 클릭 시 목표 숫자 배열 생성(세자리)
function genNumber(){
    const firstNumber = Math.floor(Math.random()*10),
        secondNumber = Math.floor(Math.random()*10),
        thirdNumber = Math.floor(Math.random()*10);

    const goalNumber = [firstNumber, secondNumber, thirdNumber];
}

function handleClickStart(event){
    const btn = event.target;
    btn.classList.add("no-show");
    inputBox.classList.remove("no-show");
    genNumber();
}

function handleSubmit(event){
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector("input");
    const userAnswer = input.value;
    //입력값이 세자리 초과일때
    if(userAnswer.length > 3){
        alert(`숫자 세 자리를 입력해주세요.`)
    }
    
    
    console.log(userAnswer)
    
}



function init (){
    start.addEventListener("click", handleClickStart);
    inputBox.addEventListener("submit", handleSubmit);
}

init();

//str.indexOf(searchString(검색할 문자 또는 문자열)[, fromIndex])  
//str.includes('something')); 인수로 전달한 문자열이 포함되어 있는지를 검사하고 결과를 불리언 값으로 반환한다. 두번째 인수는 옵션으로 검색할 위치를 나타내는 정수이다.