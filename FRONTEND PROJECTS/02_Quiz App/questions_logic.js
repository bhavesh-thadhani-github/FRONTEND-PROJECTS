
document.addEventListener('DOMContentLoaded', function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const topic = urlParams.get('topic');

    const body = document.querySelector('body');
    if (topic === 'science') {
        body.style.backgroundImage = 'url(resources/science_bg1.jpg)';
        showQuestions('science', scienceQuestions)
        changeQuestions(scienceQuestions)
    } else if (topic === 'technology') {
        body.style.backgroundImage = 'url(resources/tech_bg.jpg)';
        showQuestions('technology', technologyQuestions)
        changeQuestions(technologyQuestions)
    } else if(topic === 'space') {
        body.style.backgroundImage = 'url(resources/space_bg.jpg)'
        showQuestions('space', spaceQuestions)
        changeQuestions(spaceQuestions)
    } else if(topic === 'history') {
        body.style.backgroundImage = 'url(resources/history_bg.jpg)'
        showQuestions('history', historyQuestions)
        changeQuestions(historyQuestions)
    } else if(topic === 'business') {
        body.style.backgroundImage = 'url(resources/business_bg.jpg)'
        showQuestions('business', businessQuestions)
        changeQuestions(businessQuestions)
    }
});

//Adding Questions and accessing elements

//accessing submit button
const submit = document.querySelector('#submit-btn')

//accessing question number
const qNum = document.querySelector('#question-number')

//accessing question
const question = document.querySelector('#question')

//accessing options
const opt = document.querySelectorAll('.div-option')
const iconCircle = document.querySelectorAll('.iconCircle')
const first = document.querySelector('#first')
const second = document.querySelector('#second')
const third = document.querySelector('#third')
const fourth = document.querySelector('#fourth')

//accessing next-previou
const previous = document.querySelector('#previous')
const next = document.querySelector('#next')

//accessing start btn & timer
let start = document.querySelector('#start-btn')
let timer = document.querySelector('#timer')

//Defining Questions
const scienceQuestions = [
    {
        question: `What is the chemical symbol for water?`,
        options: ['A) H<sub>2</sub>O', 'B) CO<sub>2</sub>', 'C) NaCl', 'D) O<sub>2</sub>'],
        answer: `A) H2O`
    },
    {
        question: `What is the main function of red blood cells in the human body?`,
        options: ['A) Digesting Food', 'B) Fighting infections', 'C) Transporting oxygen', 'D) Regulating body temperature'],
        answer: `C) Transporting oxygen`
    },
    {
        question: `What is the basic unit of life in all living organisms?`,
        options: ['A) Cell', 'B) Atom', 'C) Molecule', 'D) Tissue'],
        answer: `A) Cell`
    },
    {
        question: `What is the process by which plants make their own food called?`,
        options: ['A) Transpiration', 'B) Respiration', 'C) Fermentation', 'D) Photosynthesis'],
        answer: `D) Photosynthesis`
    },
    {
        question: `What force causes objects to fall towards the Earth?`,
        options: ['A) Gravity', 'B) Magnetism', 'C) Friction', 'D) Inertia'],
        answer: `A) Gravity`
    },
    {
        question: `What is the chemical symbol for gold?`,
        options: ['A) Ag', 'B) Fe', 'C) Au', 'D) Pb'],
        answer: `C) Au`
    },
    {
        question: `What is the smallest bone in the human body?`,
        options: ['A) Tibia', 'B) Stapes', 'C) Femur', 'D) Radius'],
        answer: `B) Stapes`
    },
    {
        question: `What is the unit of measurement for electrical resistance?`,
        options: ['A) Ampere', 'B) Watt', 'C) Ohm', 'D) Volt'],
        answer: `C) Ohm`
    },
    {
        question: `What is the main component of natural gas?`,
        options: ['A) Oxygen', 'B) Nitrogen', 'C) Hydrogen', 'D) Methane'],
        answer: `D) Methane`
    },
    {
        question: `What is the SI unit of pressure?`,
        options: ['A) Pascal', 'B) Joule', 'C) Newton', 'D) Watt'],
        answer: `A) Pascal`
    }
] 

const technologyQuestions = [
    {
        question: `What does "www" stand for in a website address?`,
        options: ['A) World Wite Web', 'B) World Writable Web', 'C) World Workable Web', 'D) World Wide Web'],
        answer: `D) World Wide Web`
    },
    {
        question: `Which company developed the Windows operating system?`,
        options: ['A) Microsoft', 'B) Apple', 'C) Google', 'D) IBM'],
        answer: `A) Microsoft`
    },
    {
        question: `What does USB stand for?`,
        options: ['A) United States of Britain', 'B) User Software Bridge', 'C) Universal Serial Bus', 'D) Underwater Sonar Beacon'],
        answer: `C) Universal Serial Bus`
    },
    {
        question: `What is the name of the technology used to transmit data over short distances using radio waves?`,
        options: ['A) Bluetooth', 'B) Wi-Fi', 'C) Ethernet', 'D) 4G'],
        answer: `A) Bluetooth`
    },
    {
        question: `What does CPU stand for in computing?`,
        options: ['A) Computer Processing Unit', 'B) Central Processing Unit', 'C) Core Processing Unit', 'D) Central Power Unit'],
        answer: `B) Central Processing Unit`
    },
    {
        question: `What does HTML stand for in web development?`,
        options: ['A) Hyper Tool Markup Language', 'B) Hypertext Markup Language', 'C) High Tech Multimedia Language', 'D) Home Technology Markup Language'],
        answer: `B) Hypertext Markup Language`
    },
    {
        question: `What is the name of the protocol used to send and receive email messages?`,
        options: ['A) SMTP', 'B) HTTP', 'C) FTP', 'D) DNS'],
        answer: `A) SMTP`
    },
    {
        question: `Which programming language was developed by Sun Microsystems in 1995?`,
        options: ['A) C++', 'B) Python', 'C) Ruby', 'D) Java'],
        answer: `D) Java`
    },
    {
        question: `What is the primary purpose of a firewall in network security?`,
        options: ['A) To increase internet speed', 'B) To block unauthorized access', 'C) To filter spam emails', 'D) To encrypt data'],
        answer: `B) To block unauthorized access`
    },
    {
        question: `What does RAID stand for in data storage?`,
        options: ['A) Rapid Access and Input Delivery', 'B) Random Access Inverted Drive', 'C) Redundant Array of Independent Disks', 'D) Remote Application and Integration Directory'],
        answer: `C) Redundant Array of Independent Disks`
    }
]

const spaceQuestions = [
    {
        question: `What is the name of the closest star to Earth?`,
        options: ['A) Sun', 'B) Alpha Centauri', 'C) Proxima Centauri', 'D) Sirius'],
        answer: `A) Sun`
    },
    {
        question: `Who was the first human to walk on the moon?`,
        options: ['A) Buzz Aldrin', 'B) Alan Shepard', 'C) Yuri Gagarin', 'D) Neil Armstrong'],
        answer: `D) Neil Armstrong`
    },
    {
        question: `What is the name of the galaxy that contains our solar system?`,
        options: ['A) Andromeda', 'B) Milky Way', 'C) Pinwheel', 'D) Triangulum'],
        answer: `B) Milky Way`
    },
    {
        question: `What is the name of the largest moon of Saturn?`,
        options: ['A) Europa', 'B) Titan', 'C) Io', 'D) Ganymede'],
        answer: `B) Titan`
    },
    {
        question: `What is the name of the first artificial satellite launched into space?`,
        options: ['A) Vanguard 1', 'B) Sputnik 1', 'C) Explorer 1', 'D) Telstar 1'],
        answer: `B) Sputnik 1`
    },
    {
        question: `What is the name of the first space station launched into orbit by the Soviet Union?`,
        options: ['A) Salyut 1', 'B) Mir', 'C) Skylab', 'D) Tiangong'],
        answer: `A) Salyut 1`
    },
    {
        question: ` What is the name of the phenomenon where light is bent by the gravitational pull of massive objects?`,
        options: ['A) Redshift', 'B) Blueshift', 'C) Dark Matter', 'D) Gravitational lensing'],
        answer: `D) Gravitational lensing`
    },
    {
        question: `What is the name of the mission that successfully landed humans on the moon for the first time?`,
        options: ['A) Gemini 8', 'B) Mercury 7', 'C) Apollo 11', 'D) Apollo 13'],
        answer: `C) Apollo 11`
    },
    {
        question: `What is the name of the largest planet in our solar system?`,
        options: ['A) Saturn', 'B) Jupiter', 'C) Neptune', 'D) Uranus'],
        answer: `B) Jupiter`
    },
    {
        question: ` What is the name of the hypothetical boundary marking the edge of the Sun's gravitational influence?`,
        options: ['A) Heliopause', 'B) Oort Cloud', 'C) Kuiper Belt', 'D) Magnetosphere'],
        answer: `A) Heliopause`
    }

]

const historyQuestions = [
    {
        question: `Who was the first President of the United States?`,
        options: ['A) Thomas Jefferson', 'B) George Washington', 'C) Abraham Lincoln', 'D) John Adams'],
        answer: `B) George Washington`
    },
    {
        question: `In what year did World War II end?`,
        options: ['A) 1918', 'B) 1939', 'C) 1941', 'D) 1945'],
        answer: `D) 1945`
    },
    {
        question: `Who wrote the plays Romeo and Juliet and Hamlet?`,
        options: ['A) Charles Dickens', 'B) Mark Twain', 'C) William Shakespeare', 'D) Jane Austen'],
        answer: `C) William Shakespeare`
    },
    {
        question: `Who was the leader of the Soviet Union during the Cuban Missile Crisis?`,
        options: ['A) Nikita Khrushchev', 'B) Joseph Stalin', 'C) Leonid Brezhnev', 'D) Vladimir Lenin'],
        answer: `A) Nikita Khrushchev`
    },
    {
        question: `Who was the first female Prime Minister of the United Kingdom?`,
        options: ['A) Theresa May', 'B) Margaret Thatcher', 'C) Angela Merkel', 'D) Indira Gandhi'],
        answer: `B) Margaret Thatcher`
    },
    {
        question: `What was the name of the ship that sank after hitting an iceberg in 1912?`,
        options: ['A) Titanic', 'B) Lusitania', 'C) Britannic', 'D) Olympic'],
        answer: `A) Titanic`
    },
    {
        question: `Who was the last Emperor of Russia?`,
        options: ['A) Nicholas II', 'B) Alexander II', 'C) Peter the Great', 'D) Ivan the Terrible'],
        answer: `A) Nicholas II`
    },
    {
        question: `What event marked the beginning of World War I?`,
        options: ['A) Bombing of Pearl Harbor', 'B) Treaty of Versailles', 'C) Invasion of Poland', 'D) Assassination of Archduke Franz Ferdinand'],
        answer: `D) Assassination of Archduke Franz Ferdinand`
    },
    {
        question: `What ancient civilization built the Great Pyramids of Giza?`,
        options: ['A) Ancient Greeks', 'B) Ancient Egyptians', 'C) Ancient Romans', 'D) Sumerians'],
        answer: `B) Ancient Egyptians`
    },
    {
        question: `Which battle is considered the turning point in the Pacific theater during World War II?`,
        options: ['A) Battle of Iwo Jima', 'B) Battle of Okinawa', 'C) Battle of Midway', 'D) Battle of Leyte Gulf'],
        answer: `C) Battle of Midway`
    },
]

const businessQuestions = [
    {
        question: `What does IPO stand for in finance?`,
        options: ['A) Initial Public Offering', 'B) International Product Organization', 'C) Investment Portfolio Overview', 'D) Internal Profit Objective'],
        answer: `A) Initial Public Offering`
    },
    {
        question: `Which company is the world's largest online retailer?`,
        options: ['A) Alibaba', 'B) Amazon', 'C) eBay', 'D) Walmart'],
        answer: `B) Amazon`
    },
    {
        question: `What is the currency of Japan?`,
        options: ['A) Dollar', 'B) Yuan', 'C) Euro', 'D) Yen'],
        answer: `D) Yen`
    },
    {
        question: `What is the term for a period of sustained economic decline?`,
        options: ['A) Depression', 'B) Recession', 'C) Inflation', 'D) Boom'],
        answer: `B) Recession`
    },
    {
        question: `What does ROI stand for in business?`,
        options: ['A) Revenue from Operations', 'B) Rate of Income', 'C) Return on Investment', 'D) Risk of Inflation'],
        answer: `C) Return on Investment`
    },
    {
        question: `What is the main function of the World Bank?`,
        options: ['A) Providing financial aid to developing countries', 'B) Regulating international trade', 'C) Setting global interest rates', 'D) Facilitating mergers and acquisitions'],
        answer: `A) Providing financial aid to developing countries`
    },
    {
        question: `What is the term for a company's first sale of stock to the public?`,
        options: ['A) VC', 'B) SEO', 'C) M&A', 'D) IPO'],
        answer: `D) IPO`
    },
    {
        question: `What is the Dow Jones Industrial Average?`,
        options: ['A) Investment bank', 'B) Mutual fund', 'C) Stock market index', 'D) Regulatory agency'],
        answer: `C) Stock market index`
    },
    {
        question: `What is the largest stock exchange in the world by market capitalization?`,
        options: ['A) New York Stock Exchange (NYSE)', 'B) London Stock Exchange (LSE)', 'C) Tokyo Stock Exchange (TSE)', 'D) NASDAQ'],
        answer: `A) New York Stock Exchange (NYSE)`
    },
    {
        question: `What is the name of the economic theory that suggests government intervention in the economy should be minimal?`,
        options: ['A) Keynesian economics', 'B) Laissez-faire', 'C) Marxism', 'D) Monetarism'],
        answer: `B) Laissez-faire`
    }
];

//Enable & Disable Quiz
// 1) Disabling
next.disabled = true
previous.disabled = true
opt.forEach(option => {
    option.disabled = true
})
let quizStarted = false
// 2) Enabling
const enableQuiz = function(){
    next.disabled = false
    previous.disabled = false
    opt.forEach(option => {
        option.disabled = false
    })
}
//Adding Actions
function showQuestions(selectedTopic, objectTopic){
        console.log(objectTopic[0].question)
        question.innerHTML = objectTopic[0].question
        first.innerHTML = objectTopic[0].options[0]
        second.innerHTML = objectTopic[0].options[1]
        third.innerHTML = objectTopic[0].options[2]
        fourth.innerHTML = objectTopic[0].options[3]
}

//functionality of next & previous button
function changeQuestions(provideTopic){
    let currentQuestionIndex = 0;

    function displayQuestion(){
        if(currentQuestionIndex <= 9){
            qNum.innerHTML = `${currentQuestionIndex+1} of 10`
        }
        question.innerHTML = provideTopic[currentQuestionIndex].question
        first.innerHTML = provideTopic[currentQuestionIndex].options[0]
        second.innerHTML = provideTopic[currentQuestionIndex].options[1]
        third.innerHTML = provideTopic[currentQuestionIndex].options[2]
        fourth.innerHTML = provideTopic[currentQuestionIndex].options[3]
        if(currentQuestionIndex === 9){
            next.innerHTML = 'Submit'
        }else{
            next.innerHTML = 'Next'
        }
    }
    function nextQuestion(){
        opt.forEach(option => {
            const icon = option.querySelector('.iconCircle');
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
        });

        currentQuestionIndex++
        displayQuestion()
    }
    function previousQuestion(){
        if(currentQuestionIndex>0){
            currentQuestionIndex--
        }
        displayQuestion()
    }
    next.addEventListener('click', nextQuestion)
    previous.addEventListener('click',previousQuestion)
}

//Start Btn & Timer Functionality
let timeInterval;

function startTimer(){
    changeQuestions = true;
    let timeInSeconds = 5 * 60  //5 min.s in 60 sec.s
    
    updateTimerDisplay(timeInSeconds, start)

    timeInterval = setInterval(function(){
        timeInSeconds--

        updateTimerDisplay(timeInSeconds, start)

        if(timeInSeconds <= 0){
            clearInterval(timeInterval)
            alert('Time has Ended')
        }
    }, 1000)
    start.style.display = 'none'
    timer.style.padding = '10px 15px'    
    timer.style.fontSize = '30px'    
}

function updateTimerDisplay(timeInSeconds, start){
    const minutes = Math.floor((timeInSeconds % 3600) / 60)
    const seconds = timeInSeconds % 60

    const displayMinutes = String(minutes).padStart(2, '0')
    const displaySeconds = String(seconds).padStart(2, '0')

    timer.textContent = `${displayMinutes}:${displaySeconds}`
}
start.addEventListener('click', function(){
    startTimer()
    enableQuiz()
    quizStarted = true
})

//Functionality on clicking the option

let previousOption = null; // Keep track of the previously selected option

opt.forEach(function(element) {
    element.addEventListener('click', function() {
        // Find the icon element within the clicked div
        const icon = element.querySelector('.iconCircle');

        // Revert the icon of the previously selected option
        if (previousOption !== null) {
            const previousIcon = previousOption.querySelector('.iconCircle');
            previousIcon.classList.remove('fa-solid');
            previousIcon.classList.add('fa-regular');
        }

        // Change the icon of the clicked option
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');

        // Update the previousOption to the currently clicked option
        previousOption = element;
    });
});

let previousOptionIndex = null; // Keep track of the index of the previously selected option

opt.forEach(function(element, index) {
    element.addEventListener('click', function() {
        // Update the previousOptionIndex to the index of the currently clicked option
        previousOptionIndex = index;

        // Find the icon element within the clicked div
        const icon = element.querySelector('.iconCircle');

        // Revert the icon of the previously selected option (if any)
        if (previousOptionIndex !== null) {
            const previousOption = opt[previousOptionIndex];
            const previousIcon = previousOption.querySelector('.iconCircle');
            previousIcon.classList.remove('fa-solid');
            previousIcon.classList.add('fa-regular');
        }

        // Change the icon of the clicked option
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
    });
});






