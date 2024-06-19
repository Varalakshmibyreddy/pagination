//Selecting dom elements
const startBtn = document.querySelector("#startBtn"),
endBtn = document.querySelector("#endBtn"),
prevNext = document.querySelectorAll(".prevNext"),
numbers = document.querySelectorAll(".link");

//setting an initial step
let currentStep = 0;

//function to update
const updateBtn = () =>{
    // if we are at the last step 
    if(currentStep === 4){
        endBtn.disabled = true;
        prevNext[1].disabled = true;
    }else if(currentStep === 0){
        //if we wre at the first step
        startBtn.disabled = true;
        prevNext[0].disabled = true;
    }else{
        endBtn.disabled = false;
        prevNext[1].disabled = false;
        startBtn.disabled = false;
        prevNext[1].disabled = false;
    }
};

//add event listeners to the num links 
numbers.forEach((number, numIndex) =>{
    number.addEventListener("click",(e) =>{
        e.preventDefault();
        //set the current step to the clicked num links
        currentStep = numIndex;
        //remove the active
        document.querySelector(".active").classList.remove("active");
        // add the active
        number.classList.add("active");
        updateBtn();
    });
});

//add event listners
prevNext.forEach((button) =>{
    button.addEventListener("click", (e) =>{
        //Increment or decrement
        currentStep += e.target.id === "next" ? 1 : -1;
        numbers.forEach((number,numIndex) =>{
            //toggle the active
            number.classList.toggle("active", numIndex === currentStep);
            updateBtn();
        });
    });
});

//add event listners to the start
startBtn.addEventListener("click", () =>{
    //remove the active
    document.querySelector(".active").classList.remove("active");
    //add  the active 
    numbers[0].classList.add("active");
    currentStep = 0;
    updateBtn();
    endBtn.disabled = false;
    prevNext[1].disabled = false;
});
//add event listners to the start
endBtn.addEventListener("click", () =>{
    //remove the active
    document.querySelector(".active").classList.remove("active");
    //add  the active 
    numbers[4].classList.add("active");
    currentStep = 4;
    updateBtn();
    startBtn.disabled = false;
    prevNext[1].disabled = false;
});
