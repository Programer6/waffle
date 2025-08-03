const moods = {
    happy: {
        image: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXVmbmtvY3J5cGhwZmU1bHV3amU3cDQ5M3ZoN2tieWJ2OGpheTJ4aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11sBLVxNs7v6WA/giphy.gif',
        quote: "For every minute you are angry you lose sixty seconds of happiness. - Ralph Waldo Emerson",
        color: '#ffeb3b'
    },
    sad: {
        image: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnA1ZG9pc2RjYzlhM3NhdDF5ZHp5bHBmbzlraDJ6ajZ4emFwc3VvMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9Y5BbDSkSTiY8/giphy.gif',
        quote: "Tears come from the heart and not from the brain. - Leonardo da Vinci",
        color: '#2196f3'
    },
    angry: {
        image: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnRwM2ZleGx5Mjk1MmZ0ZGJtcnpsZzI5cDJvajV6MmxjaHk0bnhmZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT5LMVpIkWQasCA8eY/giphy.gif',
        quote: "Speak when you are angry and you will make the best speech you will ever regret. - Ambrose Bierce",
        color: '#f44336'
    },
    motivated: {
        image: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWQ1MjhwcGxzY2NwMnV6bWhsYnQ5N2wwMDg0bjZ3ZnR4Ym82ZGxueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4GXUa4U05Q0JAM972c/giphy.gif',
        quote: "The only way to do great work is to love what you do. - Steve Jobs",
        color: '#4caf50'
    },
    relaxed: {
        image: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDl0bGJiZ2JweHp6bzd3YjhqcDBrc3gwbXF1ZjRod3FoZWRuaHlqMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/J16yxZ0TUpSGqGTt3I/giphy.gif',
        quote: "Tension is who you think you should be. Relaxation is who you are. - Chinese Proverb",
        color: '#9c27b0'
    }
};

const happyBtn = document.getElementById('happy-btn');
const sadBtn = document.getElementById('sad-btn');
const angryBtn = document.getElementById('angry-btn');
const motivatedBtn = document.getElementById('motivated-btn');
const relaxedBtn = document.getElementById('relaxed-btn');
const moodImage = document.getElementById('mood-img'); 

if (happyBtn) {
    happyBtn.addEventListener('click', function() {
        moodImage.src = moods.happy.image;
        document.getElementById('quote').innerText = moods.happy.quote;
        localStorage.setItem('selected_mood', 'happy');
    });
    sadBtn.addEventListener('click', function() {
        moodImage.src = moods.sad.image;
        document.getElementById('quote').innerText = moods.sad.quote;
        localStorage.setItem('selected_mood', 'sad');
    });
    angryBtn.addEventListener('click', function() {
        moodImage.src = moods.angry.image;
        document.getElementById('quote').innerText = moods.angry.quote;
        localStorage.setItem('selected_mood', 'angry');
    });
    motivatedBtn.addEventListener('click', function() {
        moodImage.src = moods.motivated.image;
        document.getElementById('quote').innerText = moods.motivated.quote;
        localStorage.setItem('selected_mood', 'motivated');
    });
    relaxedBtn.addEventListener('click', function() {
        moodImage.src = moods.relaxed.image;
        document.getElementById('quote').innerText = moods.relaxed.quote;
        localStorage.setItem('selected_mood', 'relaxed');
    });
}

const quoteText = document.getElementById('quote-text');
const customQuoteInput = document.getElementById('custom-quote-input');
const customQuotePreview = document.getElementById('custom-quote-preview');
const colorChangeBtn = document.getElementById('color-change-btn');
const resetMoodbtn = document.getElementById('back-to-page');

if (customQuoteInput) {
    const savedMood = localStorage.getItem('selected_mood');
    if (savedMood && moods[savedMood]) {
        quoteText.innerText = moods[savedMood].quote;
    }

    customQuoteInput.addEventListener('keyup', function() {
        if (customQuoteInput.value.trim() === '') {
            customQuotePreview.innerText = "Your custom quote will appear here...";
        } else {
            customQuotePreview.innerText = customQuoteInput.value;
        }
    });

    colorChangeBtn.addEventListener('click', function() {
        const currentMood = localStorage.getItem('selected_mood');
        if (currentMood && moods[currentMood]) {
            document.body.style.backgroundColor = moods[currentMood].color;
        } else {
            alert("Please go back and select a mood first!");
        }
    });
}


if (resetMoodbtn) {
    resetMoodbtn.addEventListener('click', function() {
        localStorage.removeItem('selected_mood');
    });
}
