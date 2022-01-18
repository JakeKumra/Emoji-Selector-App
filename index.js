const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emoji-container")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")
const inputVal = document.getElementById("inputValue")

pushBtn.addEventListener("click", () => pushEmoji() )
unshiftBtn.addEventListener("click", () => unshiftEmoji() )
popBtn.addEventListener("click", () => popEmoji() )
shiftBtn.addEventListener("click", () => shiftEmoji() )

renderEmojis()

function renderEmojis() {
    emojiContainer.innerHTML = ''
    for (let i = 0; i < myEmojis.length; i++) {
        let emojis = document.createElement("span");     // Create a <span> element
        emojis.textContent = myEmojis[i];                // Insert text
        emojiContainer.append(emojis);                   // Append <span> to <body>                                         
    }
}

function pushEmoji() { 
    if (inputVal.value) {
        myEmojis.push(inputVal.value)
        inputVal.value = ''
        renderEmojis()
    }
}

function unshiftEmoji() {
    if (inputVal.value) {
        myEmojis.unshift(inputVal.value)
        inputVal.value = ''
        renderEmojis()
    }
}

function popEmoji() { 
        myEmojis.pop(inputVal.value)
        inputVal.value = ''
        renderEmojis()
    
}

function shiftEmoji() { 
        myEmojis.shift(inputVal.value)
        inputVal.value = ''
        renderEmojis()
}