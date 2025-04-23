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
    "% bald",               // stat20
    "% durability",         // stat21
    "% bone density",       // stat22
    "gpa",                  // stat23
    "drink size",           // stat24
    "speed",                // stat25
    "ping"                  // stat26
];

const questions = [
    {
        question: "bacon, egg, or cheese?",
        answers: [
            {
                text: "bacon",
                stats: { stat5: 9, stat21: 16, stat22: 2 }
            },
            {
                text: "egg",
                stats: { stat10: 2, stat16: 22, stat19: 3 }
            },
            {
                text: "cheese",
                stats: { stat7: 16, stat12: 3 }
            }
        ]
    },
    {
        question: "what's the move?",
        answers: [
            {
                text: "dennys",
                stats: { stat7: 3, stat8: 8, stat14: 17, stat20: 4 }
            },
            {
                text: "waffle house",
                stats: { stat2: 4, stat5: 5, stat13: 29, stat19: 14, stat22: 11 }
            }
        ]
    },
    {
        question: "how many alarms do you set?",
        answers: [
            {
                text: "1 (cap)",
                stats: { stat8: 9, stat25: 4 }
            },
            {
                text: "2",
                stats: { stat11: 18, stat17: 15 }
            },
            {
                text: "3+",
                stats: { stat2: 1, stat12: 14, stat14: 21, stat18: 14 }
            },
            {
                text: "rawdog (no alarm)",
                stats: { stat1: 10, stat5: 4, stat25: 21 }
            }
        ]
    },
    {
        question: "favorite coding language?",
        answers: [
            {
                text: "haskell",
                stats: { stat1: 3, stat9: 4, stat21: 12 }
            },
            {
                text: "matlab",
                stats: { stat1: 14, stat8: 4, stat13: 14, stat20: 8 }
            },
            {
                text: "cobol",
                stats: { stat1: 18, stat11: 13 }
            },
            {
                text: "php",
                stats: { stat1: 4, stat2: 3, stat18: 7 }
            },
            {
                text: "R",
                stats: { stat1: 15, stat7: 2, stat8: 7 }
            },
            {
                text: "x86 asm",
                stats: { stat1: 22, stat10: 8, stat17: 11 }
            },
            {
                text: "lisp",
                stats: { stat1: 19, stat10: 9, stat22: 14 }
            }
        ]
    },
    {
        question: "favorite cheese?",
        answers: [
            {
                text: "kraft singles",
                stats: { stat5: 13, stat7: 2, stat8: 13, stat14: 11, stat19: 14 }
            },
            {
                text: "cream cheese",
                stats: { stat7: 19, stat15: 6, stat22: 19 }
            },
            {
                text: "parmesan",
                stats: { stat7: 3, stat12: 17, stat16: 18 }
            },
            {
                text: "cottage cheese",
                stats: { stat1: 11, stat7: 17, stat21: 19 }
            }
        ]
    },
    {
        question: "what's the best body part?",
        answers: [
            {
                text: "left arm",
                stats: { stat7: 11, stat12: 10 }
            },
            {
                text: "right arm",
                stats: { stat6: 7, stat8: 4 }
            },
            {
                text: "left leg",
                stats: { stat1: 2, stat9: 15 }
            },
            {
                text: "right leg",
                stats: { stat2: 6, stat13: 12 }
            },
            {
                text: "nose",
                stats: { stat5: 2, stat15: 14, stat19: 2 }
            } 
        ]
    },
    {
        question: "What was your freshman year dorm?",
        answers: [
            {
                text: "Ellicott community",
                stats: { stat6: 7, stat9: 13, stat13: 4, stat19: 13, stat21: 11, stat22: 9 }
            },
            {
                text: "Cambridge community",
                stats: { stat9: 19, stat20: 5, stat22: 3 }
            },
            {
                text: "Denton community",
                stats: { stat7: 4, stat15: 4, stat21: 8, stat22: 14 }
            },
            {
                text: "JW/PC",
                stats: { stat8: 5, stat12: 13, stat15: 18, stat22: 4 }
            },
            {
                text: "P-Freddy",
                stats: { stat15: 2, stat22: 2 }
            },
            {
                text: "other",
                stats: { stat19: 18, stat21: 9, stat22: 5 }
            }              
        ]
    },
    {
        question: "Best floor of Mckeldin?",
        answers: [
            {
                text: "1",
                stats: { stat8: 8, stat19: 8, stat23: 2 }
            },
            {
                text: "2",
                stats: { stat5: 12, stat16: 13, stat22: 2, stat23: 7, stat25: 29 }
            },
            {
                text: "3",
                stats: { stat7: 5, stat22: 13, stat25: 13 }
            },
            {
                text: "4",
                stats: { stat6: 7, stat21: 13 }
            },
            {
                text: "5",
                stats: { stat11: 2, stat22: 12 }
            },
            {
                text: "6",
                stats: { stat9: 4, stat12: 2, stat23: 1}
            },
            {
                text: "7",
                stats: { stat2: 5, stat9: 4, stat17: 3, stat23: 23}
            }
        ]
    },
    {
        question: "Choose a fast food",
        answers: [
            {
                text: "taco bell",
                stats: { stat2: 3, stat6: 11, stat9: 3, stat15: 5 }
            },
            {
                text: "mcdonalds",
                stats: { stat8: 3, stat20: 3, stat22: 5, stat23: 5, stat25: 18 }
            },
            {
                text: "subway",
                stats: { stat1: 3, stat12: 3, stat17: 13, stat23: 8 }
            },
            {
                text: "popeyes",
                stats: { stat10: 7, stat16: 11, stat19: 12, stat22: 6 }
            }
        ]
    },
    {
        question: "What phone do you have?",
        answers: [
            {
                text: "iphone",
                stats: { stat8: 4, stat9: 2, stat15: 20, stat23: 1, stat25: 2 }
            },
            {
                text: "samsung",
                stats: { stat2: 2, stat6: 6, stat12: 8, stat18: 1 }
            },
            {
                text: "motorola",
                stats: { stat1: 9, stat25: 1 }
            },
            {
                text: "huawei",
                stats: { stat8: 4, stat17: 17 }
            },
            {
                text: "other",
                stats: { stat10: 8, stat13: 13 }
            }
        ]
    },
    {
        question: "favorite color: ",
        answers: []
    },
    {
        question: "birthdate: ",
        answers: []
    },
    {
        question: "would you rather have: ",
        answers: [
            {
                text: "unlimited bacon but no games",
                stats: { stat5: 21, stat6: 9, stat19: 8 }
            },
            {
                text: "unlimited games but no games",
                stats: { stat2: 12, stat9: 18, stat10: 12 }
            }
        ]
    },
    {
        question: "would you rather: ",
        answers: [
            {
                text: "never be able to eat again",
                stats: { stat6: 4, stat20: 2 }
            },
            {
                text: "never be able to poop again",
                stats: { stat7: 8, stat13: 9, stat23: 31 }
            }
        ]
    },
    {
        question: "Hypothetically, you take a canvas quiz with questionable legitimacy and it took you 2 out of the provided 60 minutes. Do you: ",
        answers: [
            {
                text: "wait out the clock",
                stats: { stat18: 11 }
            },
            {
                text: "submit immediately",
                stats: { stat5: 6, stat6: 8, stat21: 15 }
            },
            {
                text: "change some of the answers a couple times",
                stats: { stat13: 4 }
            }
        ]
    },
    {
        question: "how do you signal to your friend during an exam?",
        answers: [
            {
                text: "pencil tap",
                stats: { stat15: 3, stat25: 2 }
            },
            {
                text: "foot tap",
                stats: { stat2: 10, stat18: 9, stat25: 7 }
            },
            {
                text: "cough",
                stats: { stat6: 3, stat22: 12, stat25: 5 }
            },
            {
                text: "audibly talk to them",
                stats: { stat5: 3 }
            },
            {
                text: "pull out you phone and call them",
                stats: { stat1: 7, stat10: 5, stat25: 30 }
            }
        ]
    },
    {
        question: "Hypothetically, you're taking a veo scooter but you get a wheel stuck on the purple line tracks. You eat dirt. What do you do?",
        answers: [
            {
                text: "laugh it off 'that was intentional'",
                stats: { stat12: 11 }
            },
            {
                text: "start crying",
                stats: { stat8: 3, stat12: 12 }
            },
            {
                text: "I never fall",
                stats: { stat2: 9 }
            },
            {
                text: "too broke to take a veo",
                stats: { stat18: 7 }
            }
        ]
    },
    {
        question: "You’re at a mutual friend’s house. Toilet clogged. No plunger. What do you do?",
        answers: [
            {
                text: "leave",
                stats: { stat5: 5, stat6: 2, stat15: 6, stat26: 3 }
            },
            {
                text: "own up to it",
                stats: { stat8: 3, stat16: 4, stat26: 12 }
            },
            {
                text: "Plastic. Bag.",
                stats: { stat9: 4, stat10: 11, stat22: 9, stat25: 18 }
            }
        ]
    },
    {
        question: "You take a screenshot of a text conversation to send to your friend but you accidentally send it back to that same person. What do you do?",
        answers: [
            {
                text: "new phone who dis",
                stats: { stat6: 8, stat18: 20 }
            },
            {
                text: "no follow up text",
                stats: { stat1: 13, stat8: 7 }
            },
            {
                text: "double down",
                stats: { stat9: 9, stat11: 14, stat19: 8 }
            },
            {
                text: "send laughing/crying/skull emoji",
                stats: { stat10: 15, stat16: 13 }
            }
        ]
    },
    {
        question: "You're going down the elevator from the 2nd floor. The elevator is nearly full. What do you do?",
        answers: [
            {
                text: "Shove yourself in (and don’t fart)",
                stats: { stat11: 8, stat20: 13 }
            },
            {
                text: "Shove yourself in (and fart)",
                stats: { stat1: 5, stat6: 5, stat7: 11 }
            },
            {
                text: "take the stairs",
                stats: { stat2: 11, stat12: 7, stat20: 14 }
            },
            {
                text: "wait for the next elevator",
                stats: { stat8: 6, stat17: 11 }
            }
        ]
    },
    {
        question: "Milk.",
        answers: [
            {
                text: "whole",
                stats: { stat6: 3, stat16: 3 }
            },
            {
                text: "2%",
                stats: { stat2: 17, stat21: 15, stat26: 3 }
            },
            {
                text: "skim/lowfat",
                stats: { stat1: 13, stat8: 2, stat12: 4 }
            },
            {
                text: "chocolate",
                stats: { stat6: 3, stat15: 17, stat18: 7 }
            },
            {
                text: "strawberry",
                stats: { stat10: 14, stat11: 8, stat14: 4, stat19: 6 }
            }
        ]
    },
    {
        question: "A chinese guy who is visibly blind comes up to you and starts speaking a thick mandarin accent. He might be asking for directions idk. What do you do?",
        answers: [
            {
                text: "Point the way he needs to go",
                stats: { stat8: 5, stat9: 4, stat16: 7, stat26: 17 }
            },
            {
                text: "walk the opposite direction",
                stats: { stat6: 4, stat23: 1 }
            },
            {
                text: "lead him to where he needs to go",
                stats: { stat11: 4, stat15: 11, stat20: 14 }
            },
            {
                text: "子曰：道千乘之国：敬事而信，节用而爱人，使民以时。",
                stats: { stat1: 5, stat5: 4, stat23: 6, stat26: 12 }
            }
        ]
    },
    {
        question: "你从UMD dining hall偷过几个plates?",
        answers: [
            {
                text: "0 (ur lying)",
                stats: { stat6: 3, stat23: 4, stat26: 23 }
            },
            {
                text: "1",
                stats: { stat11: 3, stat23: 8, stat26: 19 }
            },
            {
                text: "2",
                stats: { stat13: 3, stat23: 14, stat26: 12 }
            },
            {
                text: "3+",
                stats: { stat10: 7, stat14: 24, stat23: 2, stat26: 2 }
            }
        ]
    },
    {
        question: "You’re running late and need to take the bus. The bus arrives and it is PACKED. Your number 1 OP is standing at the doorway. The next bus will make you 15 minutes late. What do you do?",
        answers: [
            {
                text: "Go in and throw ur OP off the bus",
                stats: { stat10: 3, stat11: 19, stat20: 18 }
            },
            {
                text: "Go in (and fart)",
                stats: { stat5: 11, stat6: 7, stat7: 9 }
            },
            {
                text: "Go in and stay silent the entire ride",
                stats: { stat13: 7, stat18: 12 }
            },
            {
                text: "Wait for the next bus",
                stats: { stat16: 9 }
            }
        ]
    },
    {
        question: "You wake up at 9:58. You have a final exam at 10. What are you telling your professor?",
        answers: [
            {
                text: "I had to attend my fish’s funeral",
                stats: { stat9: 11, stat23: 9 }
            },
            {
                text: "Be honest",
                stats: { stat8: 7, stat23: 2 }
            },
            {
                text: "Run.",
                stats: { stat2: 18, stat5: 3, stat11: 11, stat13: 9, stat14: 14 }
            },
            {
                text: "Nothing. It's cooked. Go back to bed.",
                stats: { stat12: 2, stat17: 13, stat26: 33 }
            }
        ]
    },
    {
        question: "Hypothetically, you are on vacation with a group of friends. You guys just bought 10 lbs of ground beef to last the trip and put in the fridge. Night 1, you wake up at 4 am STARVING, I’m talking FAMISHED. You open up the fridge and the only thing in there is the 10 lbs of ground beef. You go to sleep later that night 10 lbs heavier and the fridge is now empty. What do you do the next morning?",
        answers: [
            {
                text: "Be the first one to ask what happened to the ground beef",
                stats: { stat5: 2, stat8: 6, stat17: 17, stat23: 4 }
            },
            {
                text: "Blame it on the fattest guy in the friend group",
                stats: { stat9: 7, stat12: 5, stat18: 4, stat23: 2 }
            },
            {
                text: "Gaslight everyone that they forgot to bring it",
                stats: { stat6: 6, stat10: 12, stat19: 7, stat23: 3 }
            },
            {
                text: "Slowly drop hints throughout the trip that you ate all of it",
                stats: { stat7: 12, stat14: 9, stat20: 32, stat26: 12 }
            }
        ]
    }
];

// Initialize all stats to 0
function initializeStats() {
    for (let i = 1; i <= 26; i++) {
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
            let s = {}
            switch (floor) {
                case 1:
                    s = { stat8: 8, stat19: 8, stat23: 2 };
                    break;
                case 2:
                    s = { stat5: 12, stat16: 13, stat22: 2, stat23: 7, stat25: 29 };
                    break;
                case 3: 
                    s = { stat7: 5, stat22: 13, stat25: 13 };
                    break;
                case 4:
                    s = { stat6: 7, stat21: 13 };
                    break;
                case 5:
                    s = { stat11: 2, stat22: 12 };
                    break;
                case 6:
                    s = { stat9: 4, stat12: 2, stat23: 1};
                    break;
                default:
                    s = { stat2: 5, stat9: 4, stat17: 3, stat23: 23};
                    break;
            }
            
            selectAnswer(s);
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
            selectAnswer({});
        };
    }
    // Handle "birthdate" (Question index 11)
    else if (currentQuestion === 11) {
        const slider = document.createElement('input');
        slider.type = 'range';
        slider.min = 0;
        slider.max = 365;
        slider.value = 0;
        slider.className = 'option-button';
        optionsContainer.appendChild(slider);

        slider.addEventListener('input', () => {
            nextButton.style.display = 'block';
        });

        nextButton.onclick = () => {
            selectAnswer({});
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

    const getSize = () => {
        let option = Math.floor(Math.random() * 3);
        if (option == 0) return "Lil' Big Gulp";
        else if (option == 1) return "Big Gulp";
        else if (option == 2) return "Super Big Gulp";
        else return "Double Gulp";
    };

    Object.entries(stats).forEach(([statKey, value]) => {
        const statNumber = parseInt(statKey.replace('stat',''));
        const modValue = value % 101;  // Apply modulus 101
        const label = statLabels[statNumber - 1];
        

        let displayValue;
        
        // Handle special cases
        switch(label) {
            case 'age':
                displayValue = Math.round(10 + (value/100 * 50)); // 10-60
                break;
            case 'height': {
                const totalInches = 36 + (value/100 * 48); // 3ft (36") to 7ft (84")
                const feet = Math.floor(totalInches / 12);
                const inches = Math.round(totalInches % 12);
                displayValue = `${feet}'${inches}"`;
                break;
            }
            case 'weight':
                displayValue = Math.round(50 + (Math.floor(Math.random() * 100)/100 * 200)); // 100-300 lbs
                break;
            case 'mbti':
                displayValue = randomMBTI();
                break;
            case '% aura':
                displayValue = ((value - 50) * 2000).toLocaleString(); // -100,000 to 100,000
                break;
            case 'bank account balance': {
                const balance = (value - 50) * 400; // -20k to +20k
                displayValue = `$${balance.toLocaleString()}`;
                break;
            }
            case '# friends':
                displayValue = Math.round(-1 + (value/100 * 101)); // -1 to 100+
                break;
            case 'screen time':
                displayValue = (value/100 * 24).toFixed(1) + ' hrs'; // 0-24 hrs
                break;
            case 'eye prescription':
                displayValue = (-12 * (value/100)).toFixed(2); // 0.00 to -12.00
                break;
            case '% bone density':
                displayValue = Math.round(value/100 * 300) + ' g/cm³'; // 0-300
                break;
            case 'gpa':
                displayValue = (4 * (value/100)).toFixed(2); // 0.00-4.00
                break;
            case 'drink size':
                displayValue = getSize();
                break;
            case 'speed':
                displayValue = Math.round(-20 + (value/100 * 220)) + ' mph'; // -20-200
                break;
            case 'ping':
                displayValue = Math.round(value/100 * 20000) + ' ms'; // 0-20000
                break;
            default:
                // For percentage-based stats
                displayValue = value + '%';
        }

        const statDiv = document.createElement('div');
        statDiv.className = 'stat-bar';
        
        statDiv.innerHTML = `
            <div class="stat-label">
                ${label}: ${displayValue}
            </div>
            <div class="bar-container">
                <div class="bar-fill" style="width: ${value}%"></div>
            </div>
        `;
        
        statsContainer.appendChild(statDiv);
    });
}


// Start the quiz
initializeStats();
showQuestion();