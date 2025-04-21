// Initialize stats and questions
let currentQuestion = 0;
const stats = {};

// Add this mapping array at the top of your script
const statLabels = [
    "age",                  // stat1
    "height",               // stat2
    "weight",               // stat3
    "mbti",                 // stat4
    "% dog",                // stat5
    "spice tolerance",      // stat6
    "lactose tolerance",    // stat7
    "% npc",                // stat8
    "% rizz",               // stat9
    "% aura",               // stat10
    "bank account balance", // stat11
    "% bullied probability",// stat12
    "% no hand wash",       // stat13
    "% fridge capacity",    // stat14
    "# friends",            // stat15
    "screen time",          // stat16
    "eye prescription",     // stat17
    "% indian",             // stat18
    "% melanated",          // stat19
    "% hairline",           // stat20
    "% tuffness",           // stat21
    "% durability",         // stat22
    "% bone density",       // stat23
    "how easy to draw",     // stat24
    "gpa",                 // stat25
    "smash/pass",          // stat26
    "size",                // stat27
    "speed",               // stat28
    "ping"                // stat29
];

const questions = [
    // Sample question - you'll need to add all 26
    {
        question: "bacon, egg, or cheese?",
        answers: [
            {
                text: "bacon",
                stats: { stat5: 3, stat1: -1, stat13: 10 }
            },
            {
                text: "egg",
                stats: { stat5: 10, stat11: -200, stat15: 3 }
            },
            {
                text: "cheese",
                stats: { stat5: -1, stat25: 1, stat16: 3 }
            }
        ]
    },
    {
        question: "what's the move?",
        answers: [
            {
                text: "dennys",
                stats: { stat5: 12, stat19: 10, stat13: 12 }
            },
            {
                text: "waffle house",
                stats: { stat5: -5, stat19: 25, stat18: 5 }
            }
        ]
    },
    {
        question: "how many alarms do you set?",
        answers: [
            {
                text: "1 (cap)",
                stats: { stat8: 15, stat22: 10, stat16: -3 }
            },
            {
                text: "2",
                stats: { stat22: 3, stat16: 6, stat27: 1 }
            },
            {
                text: "3+",
                stats: { stat8: -15, stat22: -10, stat16: 3 }
            },
            {
                text: "rawdog (no alarm)",
                stats: { stat9: 10, stat22: 25, stat27: 1 }
            }
        ]
    },
    {
        question: "favorite coding language?",
        answers: [
            {
                text: "haskell",
                stats: { stat14: -30, stat7: 3, stat1: 40 }
            },
            {
                text: "matlab",
                stats: { stat14: -18, stat7: 50, stat1: 18 }
            },
            {
                text: "cobol",
                stats: { stat14: -70, stat7: 3, stat1: -6 }
            },
            {
                text: "php",
                stats: { stat14: 50, stat7: 5, stat1: 51 }
            },
            {
                text: "R",
                stats: { stat14: 20, stat7: 9, stat1: 54 }
            },
            {
                text: "x86 asm",
                stats: { stat14: 20, stat7: 9, stat1: 54, stat10: -1000 }
            },
            {
                text: "lisp",
                stats: { stat14: 15, stat7: -3, stat1: 21 }
            }
        ]
    },
    {
        question: "favorite cheese?",
        answers: [
            {
                text: "kraft singles",
                stats: { stat5: 42, stat20: 15, stat24: 9, stat12: 15 }
            },
            {
                text: "cream cheese",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            },
            {
                text: "parmesan",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            },
            {
                text: "cottage cheese",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            }
        ]
    },
    {
        question: "what's the best body part?",
        answers: [
            {
                text: "left arm",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "right arm",
                stats: { stat5: 24, stat20: 6, stat24: 3, stat12: 6 }
            },
            {
                text: "left leg",
                stats: { stat5: 16, stat20: 18, stat24: -3, stat12: 10 }
            },
            {
                text: "right leg",
                stats: { stat5: 42, stat20: 15, stat24: 9, stat12: 15 }
            },
            {
                text: "nose",
                stats: { stat5: 42, stat20: 15, stat24: 9, stat12: -40 }
            } 
        ]
    },
    {
        question: "What was your freshman year dorm?",
        answers: [
            {
                text: "Ellicott community",
                stats: { stat11: -100, stat29: 1003, stat8: 12, stat25: -1 }
            },
            {
                text: "Cambridge community",
                stats: { stat11: 3000, stat29: 24, stat8: 30, stat25: -1 }
            },
            {
                text: "Denton community",
                stats: { stat11: 500, stat29: 24, stat8: 40, stat25: 5 }
            },
            {
                text: "JW/PC",
                stats: { stat11: 10000, stat29: 1, stat8: 6, stat25: 9 }
            },
            {
                text: "P-Freddy",
                stats: { stat11: 15000, stat29: -10 , stat8: 50, stat25: 12 }
            },
            {
                text: "other",
                stats: { stat11: -3, stat29: -3, stat8: -3, stat25: 3 }
            }              
        ]
    },
    {
        question: "Best floor of Mckeldin?",
        answers: [
            {
                text: "1",
                stats: { stat28: 7 }
            },
            {
                text: "2",
                stats: { stat28: 14 }
            },
            {
                text: "3",
                stats: { stat28: 21 }
            },
            {
                text: "4",
                stats: { stat28: 28 }
            },
            {
                text: "5",
                stats: { stat28: 35 }
            },
            {
                text: "6",
                stats: { stat28: 42 }
            },
            {
                text: "7",
                stats: { stat28: 29 }
            }
        ]
    },
    {
        question: "Choose a fast food",
        answers: [
            {
                text: "taco bell",
                stats: { stat13: 50, stat14: -19, stat17: 2 }
            },
            {
                text: "mcdonalds",
                stats: { stat13: 50, stat14: -39, stat17: -1 }
            },
            {
                text: "subway",
                stats: { stat13: -50, stat14: 29, stat17: 3 }
            },
            {
                text: "popeyes",
                stats: { stat13: -50, stat14: -19, stat17: 2 }
            }
        ]
    },
    {
        question: "What phone do you have?",
        answers: [
            {
                text: "iphone",
                stats: { stat6: -15, stat21: 25, stat2: 32 }
            },
            {
                text: "samsung",
                stats: { stat6: 15, stat21: 15, stat2: 64 }
            },
            {
                text: "motorola",
                stats: { stat6: 3, stat21: -15, stat2: -10 }
            },
            {
                text: "huawei",
                stats: { stat6: 3, stat21: -25, stat2: 7 }
            },
            {
                text: "other",
                stats: { stat6: -25, stat21: -25, stat2: 7 }
            }
        ]
    },
    {
        question: "favorite color: ",
        answers: [
            {
                text: "Answer 1",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            }
        ]
    },
    {
        question: "birthdate: ",
        answers: [
            {
                text: "Answer 1",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            }
        ]
    },
    {
        question: "would you rather: ",
        answers: [
            {
                text: "have unlimited bacon but no games",
                stats: { stat26: 2, stat16: 19, stat10: 8 }
            },
            {
                text: "have unlimited games but no games",
                stats: { stat26: 1 , stat16: 9, stat10: 18 }
            }
        ]
    },
    {
        question: "would you rather: ",
        answers: [
            {
                text: "never be able to eat again",
                stats: { stat20: -15, stat24: 45, stat9: 18 }
            },
            {
                text: "never be able to poop again",
                stats: { stat20: -40, stat24: -20, stat9: 6 }
            }
        ]
    },
    {
        question: "Hypothetically you just took a canvas quiz and it took you 2 out of the 60 minutes that were given (there were like 30 questions) do you: ",
        answers: [
            {
                text: "wait out the clock",
                stats: { stat9: 21, stat10: -5, stat15: -10 }
            },
            {
                text: "submit immediately",
                stats: { stat9: 60, stat10: 25, stat15: 4 }
            },
            {
                text: "change some of the answers a couple times",
                stats: { stat9: 61, stat10: 10, stat15: 1 }
            }
        ]
    },
    {
        question: "how do you signal to your friend during an exam?",
        answers: [
            {
                text: "pencil tap",
                stats: { stat18: 28, stat19: -10, stat25: 12 }
            },
            {
                text: "foot tap",
                stats: { stat18: 28, stat19: -10, stat25: 12 }
            },
            {
                text: "cough",
                stats: { stat18: 18, stat19: -5, stat25: 19 }
            },
            {
                text: "audibly talk to them",
                stats: { stat18: -29, stat19: 25, stat25: -25 }
            },
            {
                text: "pull out you phone and call them",
                stats: { stat18: -11, stat: 28, stat25: -25 }
            }
        ]
    },
    {
        question: "Hypothetically you’re a veo scooter on campus drive (the section with all the purple line tracks). Your scooter tire gets caught in a rail and you fall over. Someone comes up to you and asks if you’re okay. What do you do?",
        answers: [
            {
                text: "laugh it off 'that was intentional'",
                stats: { stat10: -30, stat23: 10, stat21: -5 }
            },
            {
                text: "start crying",
                stats: { stat10: -50, stat23: -20, stat21: -25 }
            },
            {
                text: "I never fall",
                stats: { stat10: -5, stat23: 20, stat21: 10 }
            },
            {
                text: "too broke to take a veo",
                stats: { stat10: 20, stat23: 41, stat21: 31 }
            }
        ]
    },
    {
        question: "You’re at a mutual friend’s house. Toilet clogged. No plunger. What do you do?",
        answers: [
            {
                text: "leave",
                stats: { stat15: -14, stat7: 42, stat16: -5 }
            },
            {
                text: "own up to it",
                stats: { stat15: 3, stat7: -11, stat16: -5 }
            },
            {
                text: "Plastic. Bag.",
                stats: { stat15: 18, stat7: 43, stat16: 16 }
            }
        ]
    },
    {
        question: "You take a screenshot of a text conversation to send to your friend but you accidentally send it back to that same person. What do you do?",
        answers: [
            {
                text: "new phone who dis",
                stats: { stat24: 15, stat22: 3, stat13: 5 }
            },
            {
                text: "no follow up text",
                stats: { stat24: -10, stat22: 19, stat13: 30 }
            },
            {
                text: "double down",
                stats: { stat24: -15, stat22: 18, stat13: 31 }
            },
            {
                text: "send laughing/crying/skull emoji",
                stats: { stat24: 16, stat22: 21, stat13: 41 }
            }
        ]
    },
    {
        question: "You're going down the elevator from the 2nd floor. The elevator is nearly full. What do you do?",
        answers: [
            {
                text: "Shove yourself in (and don’t fart)",
                stats: { stat10: -20, stat20: 8, stat26: 1 }
            },
            {
                text: "Shove yourself in (and fart)",
                stats: { stat10: 35, stat20: 8, stat26: 1 }
            },
            {
                text: "take the stairs",
                stats: { stat10: 3, stat20: 16, stat26: 2 }
            },
            {
                text: "wait for the next elevator",
                stats: { stat10: -3, stat20: -12, stat26: 3 }
            }
        ]
    },
    {
        question: "Milk.",
        answers: [
            {
                text: "whole",
                stats: { stat12: -10, stat16: 14, stat18: 15 }
            },
            {
                text: "2%",
                stats: { stat12: -3, stat16: 12, stat18: 16 }
            },
            {
                text: "skim/lowfat",
                stats: { stat12: 30, stat16: 10, stat18: 8 }
            },
            {
                text: "chocolate",
                stats: { stat12: 3, stat16: 8, stat18: -20 }
            },
            {
                text: "strawberry",
                stats: { stat12: -15, stat16: 19, stat18: -10 }
            }
        ]
    },
    {
        question: "A chinese guy who is visibly blind comes up to you and starts speaking a thick mandarin accent. He might be asking for directions idk. What do you do?",
        answers: [
            {
                text: "Point the way he needs to go",
                stats: { stat29: 60, stat23: 5, stat7: 17 }
            },
            {
                text: "walk the opposite direction",
                stats: { stat29: 10, stat23: 18, stat7: 18 }
            },
            {
                text: "lead him to where he needs to go",
                stats: { stat29: -10, stat23: 1, stat7: -7 }
            },
            {
                text: "子曰：道千乘之国：敬事而信，节用而爱人，使民以时。",
                stats: { stat29: -20, stat23: 50, stat7: -15 }
            }
        ]
    },
    {
        question: "你从UMD dining hall偷过几个plates?",
        answers: [
            {
                text: "0 (ur lying)",
                stats: { stat21: 11, stat1: 5, stat27: 1 }
            },
            {
                text: "1",
                stats: { stat21: 6, stat1: 6, stat27: 10 }
            },
            {
                text: "2",
                stats: { stat21: 4, stat1: 5, stat27: 20 }
            },
            {
                text: "3+",
                stats: { stat21: 12, stat1: -11, stat27: 40 }
            }
        ]
    },
    {
        question: "You’re running late to an important exam and there is a bus that will take you there on time. The bus comes and it is PACKED and your number 1 opp is standing right at the doorway. The next bus will make you 15 minutes late. What do you do?",
        answers: [
            {
                text: "Go in and throw ur opp off the bus",
                stats: { stat23: 20, stat19: 23, stat16: 3 }
            },
            {
                text: "Go in (and fart)",
                stats: { stat18: 12, stat10: -5, stat9: -33 }
            },
            {
                text: "Go in and stay silent the entire ride",
                stats: { stat10: 28, stat8: 82, stat2: 1 }
            },
            {
                text: "Wait for the next bus",
                stats: { stat11: 11, stat14: -29, stat17: 29 }
            }
        ]
    },
    {
        question: "You wake up at 9:58. You have a final exam at 10. What are you telling your professor?",
        answers: [
            {
                text: "I had to attend my fish’s funeral",
                stats: { stat20: 33, stat18: -3, stat22: 18 }
            },
            {
                text: "Be honest",
                stats: { stat16: 42, stat23: 2, stat2: -3 }
            },
            {
                text: "Run.",
                stats: { stat25: 97, stat25: 79, stat17: -22 }
            },
            {
                text: "Nothing. It's cooked. Go back to bed.",
                stats: { stat11: 33, stat5: 6, stat7: -11 }
            }
        ]
    },
    {
        question: "Hypothetically, you are on vacation with a group of friends. You guys just bought 10 lbs of ground beef to last the trip and put in the fridge. Night 1, you wake up at 4 am STARVING, I’m talking FAMISHED. You open up the fridge and the only thing in there is the 10 lbs of ground beef. You go to sleep later that night 10 lbs heavier and the fridge is now empty. What do you do the next morning?",
        answers: [
            {
                text: "Be the first one to ask what happened to the ground beef",
                stats: { stat10: 23, stat6: 19, stat8: 67 }
            },
            {
                text: "Blame it on the fattest guy in the friend group",
                stats: { stat9: 14, stat15: -2, stat19: 83 }
            },
            {
                text: "Gaslight everyone that they forgot to bring it",
                stats: { stat18: 66, stat20: -27, stat17: -13 }
            },
            {
                text: "Slowly drop hints throughout the trip that you ate all of it",
                stats: { stat29: 44, stat28: 18, stat25: -13 }
            }
        ]
    }
];

// Initialize all stats to 0
function initializeStats() {
    for (let i = 1; i <= 30; i++) {
        stats[`stat${i}`] = 0;
    }
}

// Display current question
function showQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question-text').textContent = question.question;
    const optionsContainer = document.getElementById('options-container');
    const nextButton = document.getElementById('next-button');
    optionsContainer.innerHTML = '';
    nextButton.style.display = 'none';

    // Handle "Best floor of Mckeldin" (Question index 7)
    if (currentQuestion === 7) {
        const container = document.createElement('div');
        const slider = document.createElement('input');
        const valueDisplay = document.createElement('span');
        valueDisplay.style.marginLeft = '10px';
        
        slider.type = 'range';
        slider.min = 1;
        slider.max = 7;
        slider.value = 1;
        slider.className = 'option-button';
        
        slider.addEventListener('input', () => {
            valueDisplay.textContent = slider.value;
            nextButton.style.display = 'block';
        });
        
        container.appendChild(slider);
        container.appendChild(valueDisplay);
        optionsContainer.appendChild(container);

        nextButton.onclick = () => {
            const floor = parseInt(slider.value);
            const stat28Value = question.answers[floor - 1].stats.stat28;
            selectAnswer({ stat28: stat28Value });
        };
    }
    // Handle "favorite color:" (Question index 10)
    else if (currentQuestion === 10) {
        const colorPicker = document.createElement('input');
        colorPicker.type = 'color';
        colorPicker.className = 'option-button';
        optionsContainer.appendChild(colorPicker);

        colorPicker.addEventListener('input', () => {
            nextButton.style.display = 'block';
        });

        nextButton.onclick = () => {
            // Use the stats from the first answer (as per original setup)
            selectAnswer(question.answers[0].stats);
        };
    }
    // Handle "birthdate" (Question index 11)
    else if (currentQuestion === 11) {
        const slider = document.createElement('input');
        slider.type = 'range';
        slider.min = 0;
        slider.max = 100;
        slider.value = 0;
        slider.className = 'option-button';
        optionsContainer.appendChild(slider);

        slider.addEventListener('input', () => {
            nextButton.style.display = 'block';
        });

        nextButton.onclick = () => {
            selectAnswer({ stat1: parseInt(slider.value) });
        };
    }
    // Default case: render buttons for other questions
    else {
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.className = 'option-button';
            button.textContent = answer.text;
            button.onclick = () => selectAnswer(answer.stats);
            optionsContainer.appendChild(button);
        });
    }

    document.getElementById('progress').textContent = 
        `Question ${currentQuestion + 1} of ${questions.length}`;
}

// Handle answer selection
function selectAnswer(selectedStats) {
    // Update stats
    Object.entries(selectedStats).forEach(([stat, value]) => {
        stats[stat] = Math.min(Math.max(stats[stat] + value, 0), 100);
    });
    
    // Move to next question or show results
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Display results
function showResults() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('results-container').style.display = 'block';
    
    const statsContainer = document.getElementById('stats-container');
    statsContainer.innerHTML = '';

    // Generate random values for specific stats
    const randomMBTI = () => {
        const types = [['E','I'], ['N','S'], ['F','T'], ['J','P']];
        return types.map(t => t[Math.floor(Math.random() * 2)]).join('');
    };

    const getSize = (modValue) => {
        if (modValue <= 25) return "Lil' Big Gulp";
        else if (modValue <= 50) return "Big Gulp";
        else if (modValue <= 75) return "Super Big Gulp";
        else return "Double Gulp";
    };

    Object.entries(stats).forEach(([statKey, value]) => {
        const statNumber = parseInt(statKey.replace('stat',''));
        const modValue = value % 101;  // Apply modulus 101
        const label = statLabels[statNumber - 1];
        
        // Skip creating bars for these stats
        if (label === 'mbti' || label === 'size') return;

        let displayValue;
        
        // Handle special cases
        switch(label) {
            case 'age':
                displayValue = Math.round(10 + (modValue/100 * 50)); // 10-60
                break;
            case 'height': {
                const totalInches = 36 + (modValue/100 * 48); // 3ft (36") to 7ft (84")
                const feet = Math.floor(totalInches / 12);
                const inches = Math.round(totalInches % 12);
                displayValue = `${feet}'${inches}"`;
                break;
            }
            case 'weight':
                displayValue = Math.round(100 + (modValue/100 * 200)); // 100-300 lbs
                break;
            case 'mbti':
                displayValue = randomMBTI();
                break;
            case '% aura':
                displayValue = ((modValue - 50) * 2000).toLocaleString(); // -100,000 to 100,000
                break;
            case 'bank account balance': {
                const balance = (modValue - 50) * 400; // -20k to +20k
                displayValue = `$${balance.toLocaleString()}`;
                break;
            }
            case '# friends':
                displayValue = Math.round(-1 + (modValue/100 * 101)); // -1 to 100+
                break;
            case 'screen time':
                displayValue = (modValue/100 * 24).toFixed(1) + ' hrs'; // 0-24 hrs
                break;
            case 'eye prescription':
                displayValue = (-12 * (modValue/100)).toFixed(2); // 0.00 to -12.00
                break;
            case '% bone density':
                displayValue = Math.round(modValue/100 * 300) + ' g/cm³'; // 0-300
                break;
            case 'gpa':
                displayValue = (4 * (modValue/100)).toFixed(2); // 0.00-4.00
                break;
            case 'smash/pass':
                displayValue = Math.random() > 0.5 ? 'Smash' : 'Pass';
                break;
            case 'size':
                displayValue = getSize(modValue);
                break;
            case 'speed':
                displayValue = Math.round(-20 + (modValue/100 * 220)) + ' mph'; // -20-200
                break;
            case 'ping':
                displayValue = Math.round(modValue/100 * 20000) + ' ms'; // 0-20000
                break;
            default:
                // For percentage-based stats
                displayValue = modValue + '%';
        }

        const statDiv = document.createElement('div');
        statDiv.className = 'stat-bar';
        
        statDiv.innerHTML = `
            <div class="stat-label">
                ${label}: ${displayValue}
            </div>
            <div class="bar-container">
                <div class="bar-fill" style="width: ${modValue}%"></div>
            </div>
        `;
        
        statsContainer.appendChild(statDiv);
    });
}


// Start the quiz
initializeStats();
showQuestion();