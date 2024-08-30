/********************************************************************************* */
const textbody = document.getElementById("textbody")

const a = document.getElementById("a")
a.addEventListener("click", function(){
    userInput.innerHTML += "a"
})
const b = document.getElementById("b")
b.addEventListener("click", function(){
    userInput.innerHTML += "b"
})
const c = document.getElementById("c")
c.addEventListener("click", function(){
    userInput.innerHTML += "c"
})
const d = document.getElementById("d")
d.addEventListener("click", function(){
    userInput.innerHTML += "d"
})
const e = document.getElementById("e")
e.addEventListener("click", function(){
    userInput.innerHTML += "e"
})
const f = document.getElementById("f")
f.addEventListener("click", function(){
    userInput.innerHTML += "f"
})
const g = document.getElementById("g")
g.addEventListener("click", function(){
    userInput.innerHTML += "g"
})
const h = document.getElementById("h")
h.addEventListener("click", function(){
    userInput.innerHTML += "h"
})
const i = document.getElementById("i")
i.addEventListener("click", function(){
    userInput.innerHTML += "i"
})
const j = document.getElementById("j")
j.addEventListener("click", function(){
    userInput.innerHTML += "j"
})
const k = document.getElementById("k")
k.addEventListener("click", function(){
    userInput.innerHTML += "k"
})
const l = document.getElementById("l")
l.addEventListener("click", function(){
    userInput.innerHTML += "l"
})
const m = document.getElementById("m")
m.addEventListener("click", function(){
    userInput.innerHTML += "m"
})
const n = document.getElementById("n")
n.addEventListener("click", function(){
    userInput.innerHTML += "n"
})
const o = document.getElementById("o")
o.addEventListener("click", function(){
    userInput.innerHTML += "o"
})
const p = document.getElementById("p")
p.addEventListener("click", function(){
    userInput.innerHTML += "p"
})
const q = document.getElementById("q")
q.addEventListener("click", function(){
    userInput.innerHTML += "q"
})
const r = document.getElementById("r")
r.addEventListener("click", function(){
    userInput.innerHTML += "r"
})
const s = document.getElementById("s")
s.addEventListener("click", function(){
    userInput.innerHTML += "s"
})
const t = document.getElementById("t")
t.addEventListener("click", function(){
    userInput.innerHTML += "t"
})
const u = document.getElementById("u")
u.addEventListener("click", function(){
    userInput.innerHTML += "u"
})
const v = document.getElementById("v")
v.addEventListener("click", function(){
    userInput.innerHTML += "v"
})
const w = document.getElementById("w")
w.addEventListener("click", function(){
    userInput.innerHTML += "w"
})
const x = document.getElementById("x")
x.addEventListener("click", function(){
    userInput.innerHTML += "x"
})
const y = document.getElementById("y")
y.addEventListener("click", function(){
    userInput.innerHTML += "y"
})
const z = document.getElementById("z")
z.addEventListener("click", function(){
    userInput.innerHTML += "z"
})
/********************************************************************************************************** */

// let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
// const keyboard = document.getElementById("keyboard")
// function keys(){
//     let keyBtn = document.createElement("button")
//     alphabet.forEach(item =>{
//         keyBtn.innerHTML = item
//         keyBtn.classList.add("border", "bg-white", "hover:bg-green-700", "hover:text-white", "hover:shadow-gray-600", "border-black", "py-3", "px-5", "rounded-lg")
//         keyBtn.addEventListener("click", function(){
//             textuserInputy.innerHTML = item
//         })
//     })
//     keyboard.appendChild(keyBtn)    
// }



// keys()
// let clickLoad = document.getElementById("clickLoad")
// document.getElementById("clickLoad").addEventListener("click", function(){
//     clickLoad.classList.add("hidden")
//     timerstuff()

//     setTimeout(() => {
//         // userInput.classList.remove("flex-row")
//         // userInput.classList.add("flex", "flex-row")
//         textbody.innerHTML = 
//         `
//             <div class="w-full h-full">
//                 <img id="horse" class="h-[100%] w-[100%]" src="https://ideogram.ai/assets/image/lossless/response/JpSz9suzTJqF3cDJUQGEIg">
//                 <img id="chicken" class="hidden size-[90%]" src="https://ideogram.ai/assets/image/lossless/response/sZkUAhyuRPCwhx5VyVOOvw">
//             </div>
//             <div class="w-full h-full py-[100px]">
//                 <label id="userInput" class="bg-slate-100 w-[80%] h-14"></label>
//             </div>
//         `
//     }, 1000);
//     setTimeout(() => {
//         textbody.innerHTML = " "
//     }, 61000);

    
//     document.getElementById("submit").addEventListener("click", function(){
//         const horse = document.getElementById("horse")
//         const userInput = document.getElementById("userInput")
//         if(userInput.textContent === "horse" && (!horse.classList.contains("hidden"))){
//                 textbody.innerHTML= " "
//                 clearInterval()
//                 textbody.innerHTML=
//                 `<p>Correct!!!</p>`
//                 setTimeout(() => {
               
//                 }, 2000);
//         }
//         else if(userInput.textContent !== "horse" || (!horse.classList.contains("hidden"))){
//             textbody.innerHTML= " "
//             textbody.innerHTML=
//                     `<p>Incorrect</p>`
//                 setTimeout(() => {
//                     textbody.innerHTML = 
//             `
//                 <div class="w-full h-full">
//                     <img id="horse" class="h-[100%] w-[100%]" src="https://ideogram.ai/assets/image/lossless/response/JpSz9suzTJqF3cDJUQGEIg">
//                     <img id="chicken" class="hidden size-[90%]" src="https://ideogram.ai/assets/image/lossless/response/sZkUAhyuRPCwhx5VyVOOvw">
//                 </div>
//                 <div class="w-full h-full py-[100px]">
//                     <label id="userInput" class="bg-slate-100 w-[80%] h-14"></label>
//                 </div>
//             `
//                 }, 2000);
            
//         }
//     })
    

//     // let picsContainer = document.createElement("div")
//     // picsContainer.classList.add("flex", "w-[400px]", "h-[400px]")
//     // picsContainer.innerHTML = 
//     // `
//     // <img id="horse" class="size-[90%]" src="https://ideogram.ai/assets/image/lossless/response/JpSz9suzTJqF3cDJUQGEIg">
//     // <img id="chicken" class="size-[90%]" src="https://ideogram.ai/assets/image/lossless/response/sZkUAhyuRPCwhx5VyVOOvw">
//     // `


// //  picVsText()   
// })

// // function picVsText (){
        
// // }

// function pauseCountdown() {
//     if (isPaused) {
//         startCountdown(); // Resume countdown
//         document.getElementById('pauseButton').textContent = "Pause";
//     } else {
//         clearInterval(countdownInterval); // Pause countdown
//         document.getElementById('pauseButton').textContent = "Resume";
//     }
//     isPaused = !isPaused; // Toggle pause state
// }

//     // Initialize the countdown time in seconds (1 minute = 60 seconds)
// function timerstuff (){
//     let timeLeft = 60;

//     // Function to format the time as MM:SS
//     function formatTime(seconds) {
//         const minutes = Math.floor(seconds / 60);
//         const secondsLeft = seconds % 60;
//         return `${minutes.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;
//     }

//     // Function to update the countdown every second
//     const countdownInterval = setInterval(() => {
//         // Update the display
//         document.getElementById('countdown').textContent = formatTime(timeLeft);

//         // Decrement the time left
//         timeLeft--;

//         if(userInput.textContent === "horse" && (!horse.classList.contains("hidden"))){
//             clearInterval(countdownInterval)
//         }

//         if (timeLeft < 0) {
//             clearInterval(countdownInterval);
//             document.getElementById('countdown').textContent = "00:00";
//         }
//     }, 1000); // Update every second (1000 milliseconds)

// }

/********************************************************************************************************** */

// let clickLoad = document.getElementById("clickLoad");
// let currentImageIndex = 0; 
// let countdownInterval;
// let timeLeft = 30;

// const images = [
//     { src: "https://ideogram.ai/assets/progressive-image/balanced/response/_MrtX5y0Q1W5Ts8IseKqgg", word: "lion" },
//     { src: "https://ideogram.ai/assets/image/lossless/response/lj_oQyT4She17uyBCWAmbg", word: "racoon" },
//     { src: "https://ideogram.ai/assets/image/lossless/response/8vrOrA_bQsmndFvZ_SO5GQ", word: "hyena" },
//     { src: "https://ideogram.ai/assets/image/lossless/response/JpSz9suzTJqF3cDJUQGEIg", word: "horse" },
//     { src: "https://ideogram.ai/assets/image/lossless/response/sZkUAhyuRPCwhx5VyVOOvw", word: "chicken" },
//     { src: "https://ideogram.ai/assets/image/lossless/response/AHN9QeyWQHCwqp8IHuK93A", word: "fish" },
    
// ];


// function formatTime(seconds) {
//     const minutes = Math.floor(seconds / 30);
//     const secondsLeft = seconds % 60;
//     return `${minutes.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;
// }

// function startCountdown() {
//     countdownInterval = setInterval(() => {
//         document.getElementById('countdown').textContent = formatTime(timeLeft);
//         timeLeft--;

//         if (timeLeft < 0) {
//             clearInterval(countdownInterval);
//             document.getElementById('countdown').textContent = "00:00";
//             checkSpelling()
//         }
//     }, 1000); 
// }


// function pauseCountdown() {
//     clearInterval(countdownInterval);
// }


// function loadNextImage() {
//     if (currentImageIndex < images.length) {
//         const currentImage = images[currentImageIndex];
//         document.getElementById("textbody").innerHTML = `
//             <div class="w-full h-full">
//                 <img id="currentImage" class="h-[100%] w-[100%]" src="${currentImage.src}">
//             </div>
//             <div class="w-full h-full py-[100px]">
//                 <label id="userInput" class="bg-slate-100 w-[80%] h-14"></label>
//             </div>
//         `;
//     } else {
//         document.getElementById("textbody").innerHTML =  `
//         <p>Congratulations! You've finished. Correct: ${correctCount}, Incorrect: ${incorrectCount}</p>
//         <button id="restart" class="animate-bounce p-3 shadow-md shadow-cyan-900">Restart</button>`;
//         pauseCountdown();
//     }
// }

// // Function spelling check
// function checkSpelling() {
//     const horse = document.getElementById("currentImage");
//     const userInput = document.getElementById("userInput").textContent.trim().toLowerCase();
//     const correctWord = images[currentImageIndex].word;

//     if (userInput === correctWord) {
//         document.getElementById("textbody").innerHTML = `
//         <div class="border rounded-lg p-5 bg-green-800 w-fit h-fit m-auto"><p class="bg-slate-300 relative w-fit p-4 rounded-lg mx-auto h-fit my-auto animate-bounce text-green shadow-xl shadow-black">Correct!</p></div>`;
//         clearInterval(countdownInterval); // Stop the countdown
//         setTimeout(() => {
//             timeLeft = 30; 
//             startCountdown();
//             currentImageIndex++;
//             loadNextImage();
//         }, 1000);
//     } 
//     else if(userInput === " " && timeLeft == 0) {
        
//         setTimeout(() => {
//             document.getElementById("textbody").innerHTML = `
//             <div class="border rounded-lg p-5 bg-yellow-800 w-fit h-fit m-auto"><p class="bg-slate-300 relative w-fit p-4 rounded-lg mx-auto h-fit my-auto animate-bounce text-white shadow-xl shadow-black">You made no entries</p></div>`;;
//             currentImageIndex++;
//             loadNextImage();
//         }, 1000);
//     }
//     else{
//         document.getElementById("textbody").innerHTML = `
//         <div class="border rounded-lg p-5 bg-red-900 w-fit h-fit m-auto"><p class="bg-slate-300 relative w-fit p-4 rounded-lg mx-auto h-fit my-auto animate-bounce text-red-950 shadow-xl shadow-black">Incorrect</p></div>`;
//         setTimeout(() => {
//             timeLeft = 30; 
//             startCountdown();
//             loadNextImage();
//             currentImageIndex++;
//         }, 1000);
        
//     }
// }

// document.getElementById("clear").addEventListener("click", function(){
//     userInput.textContent = userInput.textContent.slice(0, -1)
// })
// clickLoad.addEventListener("click", function() {
//     clickLoad.classList.add("hidden");
//     startCountdown();
//     loadNextImage();
// });

// document.getElementById("submit").addEventListener("click", checkSpelling);

/********************************************************************************************************** */

let clickLoad = document.getElementById("clickLoad");
let currentImageIndex = 0; 
let countdownInterval;
let timeLeft = 30;
let correctCount = 0;
let incorrectCount = 0;

const images = [
    { src: "https://ideogram.ai/assets/progressive-image/balanced/response/_MrtX5y0Q1W5Ts8IseKqgg", word: "lion" },
    { src: "https://ideogram.ai/assets/image/lossless/response/lj_oQyT4She17uyBCWAmbg", word: "racoon" },
    { src: "https://ideogram.ai/assets/image/lossless/response/8vrOrA_bQsmndFvZ_SO5GQ", word: "hyena" },
    { src: "https://ideogram.ai/assets/image/lossless/response/JpSz9suzTJqF3cDJUQGEIg", word: "horse" },
    { src: "https://ideogram.ai/assets/image/lossless/response/sZkUAhyuRPCwhx5VyVOOvw", word: "chicken" },
    { src: "https://ideogram.ai/assets/image/lossless/response/AHN9QeyWQHCwqp8IHuK93A", word: "fish" }
];

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;
}

function startCountdown() {
    countdownInterval = setInterval(() => {
        document.getElementById('countdown').textContent = formatTime(timeLeft);
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').textContent = "00:00";
            checkSpelling(); // Automatically check spelling when timer is up
        }
    }, 1000); 
}

function pauseCountdown() {
    clearInterval(countdownInterval);
}

function loadNextImage() {
    if (currentImageIndex < images.length) {
        const currentImage = images[currentImageIndex];
        document.getElementById("textbody").innerHTML = `
            <div class="w-full h-full">
                <img id="currentImage" class="h-[100%] w-[100%]" src="${currentImage.src}">
            </div>
            <div class="w-full h-full py-[100px]">
                <label id="userInput" contenteditable="true" class="bg-slate-100 w-[80%] h-14"></label>
            </div>
        `;
        timeLeft = 30; // Reset time for each new image
        startCountdown();
    } else {
        document.getElementById("textbody").innerHTML = `
        <div class="flex flex-col space-y-3 text-lg justify-center align-middle p-3">
            <p>Congratulations! You've finished the session!</p>
            <p>Correct Answers: ${correctCount}</p>
            <p>Incorrect Answers: ${incorrectCount}</p>
        </div>
        <div>
            <button id="reloadButton" class="bg-blue-500  text-white p-2 rounded">Restart</button>
        </div>
        `;
        pauseCountdown();
        document.getElementById("reloadButton").addEventListener("click", reloadGame);
    }
}

function checkSpelling() {
    const userInput = document.getElementById("userInput").textContent.trim().toLowerCase();
    const correctWord = images[currentImageIndex].word;

    if (userInput === correctWord) {
        correctCount++;
        document.getElementById("textbody").innerHTML = `
        <div class="border rounded-lg p-5 bg-green-800 w-fit h-fit m-auto"><p class="bg-slate-300 relative w-fit p-4 rounded-lg mx-auto h-fit my-auto animate-bounce text-green shadow-xl shadow-black">Correct!</p></div>`;
    } else if (userInput === " " && timeLeft == 0) {
        document.getElementById("textbody").innerHTML = `
        <div class="border rounded-lg p-5 bg-yellow-800 w-fit h-fit m-auto"><p class="bg-slate-300 relative w-fit p-4 rounded-lg mx-auto h-fit my-auto animate-bounce text-white shadow-xl shadow-black">You made no entries</p></div>`;
    } else {
        incorrectCount++;
        document.getElementById("textbody").innerHTML = `
        <div class="border rounded-lg p-5 bg-red-900 w-fit h-fit m-auto"><p class="bg-slate-300 relative w-fit p-4 rounded-lg mx-auto h-fit my-auto animate-bounce text-red-950 shadow-xl shadow-black">Incorrect</p></div>`;
    }
    
    setTimeout(() => {
        currentImageIndex++;
        loadNextImage();
    }, 1000);
}

function reloadGame() {
    currentImageIndex = 0;
    correctCount = 0;
    incorrectCount = 0;
    timeLeft = 30;
    loadNextImage();
}

document.getElementById("clear").addEventListener("click", function() {
    const userInput = document.getElementById("userInput");
    userInput.textContent = userInput.textContent.slice(0, -1);
});

clickLoad.addEventListener("click", function() {
    clickLoad.classList.add("hidden");
    loadNextImage();
});

document.getElementById("submit").addEventListener("click", checkSpelling);
