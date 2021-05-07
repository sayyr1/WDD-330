// const question = "What is the Superman's real name?";
// const answer = prompt(question); //using prompt I can store data. 
// alert(`Your answer ${answer}`); //alert 

// const quiz = [
//     ["What is Superman's real name?", "Clark Kent"],
//     ["What is Wonder Woman's real name?", "Diana Prince"],
//     ["What is Batman's real name?", "Bruce Wayne"]
// ];
// let score = 0; // initialize score
// for(const [questions, answer] of quiz){
//     const response = prompt(questions);
//     if(response === answer) {
//         alert('Correct!');
//         score++;
//     }
//     else {
//         alert(`Wrong! The correct answer was ${answer}`)
//     }
// }
// // At the end of the game, report the player's score
// alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : " "}`);

// Using Functions
// const quiz = [
//     ["What is the Superman's real mame?", "Clark Kent"],
//     ["What is teh Wonder Woman's real name?", "Diana Prince"],
//     ["What is Batman's real name?", "Bruce Wayne"]
// ];
//  function start(quiz) {
//      let score = 0;
//      // main game loop
//      for(const [question,answer] of quiz){
//          const response = ask(question);
//          check(response, answer);
//      }
//      // end of main game loop

//      gameOver();

//      // function declarations
//      function ask(question){
//          return prompt(question);
//      }

//      function check(response, answer) {
//          if(response === answer){
//              alert('Correct!');
//              score++;
//          } else {
//              alert(`Wrong! The correct answer was ${answer}`);
//          }
//      }
//      function gameOver(){
//          alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ""}`);

//      }
//  }
//  start(quiz);

//-- Using Objects


// View Object


// const quiz = [{
//         name: "Superman",
//         realName: "Clark Kent"
//     },
//     {
//         name: "Wonder Woman",
//         realName: "Diana Prince"
//     },
//     {
//         name: "Batman",
//         realName: "Bruce Wayne"
//     }
// ];

// // View Object
// const view = {
//     score: document.querySelector('#score'),
//     question: document.getElementById('question'),
//     result: document.getElementById('result'),
//     info: document.getElementById('info'),
//     render(target,content,attributes) {
//     for(const key in attributes) {
//     target.setAttribute(key, attributes[key]);
//     }
//     target.innerHTML = content;
//     }
//     };
// // // namespace the functions we created
// const game = {
//     start(quiz) {
//         this.questions = [...quiz];
//         this.score = 0;


//         // main game loop
//         for (const question of this.questions) {
//             this.question = question;
//             this.ask();
//         }
//         // end of main game loop
//         this.gamerOver();
//     },

//     ask() {
//        const question = `What is ${this.question.name}'s real name?`;
// view.render(view.question,question);
// const response = prompt(question);
// this.check(response);
//     },
//     check(response) {
//         const answer = this.question.realName;
//         if(response === answer){
//         view.render(view.result,'Correct!',{'class':'correct'});
//         alert('Correct!');
//         this.score++;
//         view.render(view.score,this.score);
//         } else {
//         view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
//         alert(`Wrong! The correct answer was ${answer}`);
//         }

//     },

//     gamerOver() {
//         view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
//     }

// };






// const quiz = [{
//     name: "Superman",
//     realName: "Clark Kent"
// },
// {
//     name: "Wonder Woman",
//     realName: "Diana Prince"
// },
// {
//     name: "Batman",
//     realName: "Bruce Wayne"
// }
// ];

// // View Object
// const view = {
//     score: document.querySelector('#score strong'),
//     question: document.getElementById('question'),
//     result: document.getElementById('result'),
//     info: document.getElementById('info'),
//     render(target, content, attributes) {
//         for (const key in attributes) {
//             target.setAttributes(key, attributes[key]);
//         }
//         target.innerHTML = content;
//     },
//     show(element) {
//         element.style.display = 'block';
//     },
//     hide(element){
//         element.style.display = 'none';
//     }


// };

// // Game Object
// const game = {
//     start(quiz) {
//         this.score = 0;
//         this.questions = [...quiz];
//         view.hide(view.start);
//         // main game loop
//         for (const question of this.questions) {
//             this.question = question;
//             this.ask();
//         }
//         // end of main game loop
//         this.gamerOver();
//     },

//     ask() {
//         const question = `What is ${this.question.name}'s real name?`;
//         view.render(view.question, question);
//         const response = prompt(question);
//         this.check(response);
//     },
//     check(response) {
//         const answer = this.question.realName;
//         if (response === answer) {
//             view.render(view.result,'Correct!',{ 'class': 'correct'});
//             alert('Correct!');
//             this.score++;
//             view.render(view.score, this.score);

//         } else {
//             view.render(view.result, `Wrong! The correct answer was ${answer}`, { 'class': 'wrong' });
//             alert(`Wrong! The correct answer was ${answer}`);
//         }

//     },

//     gameOver() {
//         view.render(view.info, `Game Over, you scored ${this.score} points${this.score !== 1 ? 's' : ''}`);
//         view.show(view.start);
//     }

// }

// view.start.addEventListener('click', () => game.start(quiz), false);

const quiz = [
    { name: "Superman", realName: "Clark Kent" },
    { name: "Wonderwoman", realName: "Dianna Prince" },
    { name: "Batman", realName: "Bruce Wayne" },
];

// View Object
const view = {
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    start: document.getElementById('start'),
    render(target, content, attributes) {
        for (const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },
    show(element) {
        element.style.display = 'block';
    },
    hide(element) {
        element.style.display = 'none';
    }
};

// Game Object
const game = {
    start(quiz) {
        this.score = 0;
        this.questions = [...quiz];
        view.hide(view.start);
        // main game loop
        for (const question of this.questions) {
            this.question = question;
            this.ask();
        }
        // end of main game loop
        this.gameOver();
    },
    ask() {
        const question = `What is ${this.question.name}'s real name?`;
        view.render(view.question, question);
        const response = prompt(question);
        this.check(response);
    },
    check(response) {
        const answer = this.question.realName;
        if (response === answer) {
            view.render(view.result, 'Correct!', { 'class': 'correct' });
            alert('Correct!');
            this.score++;
            view.render(view.score, this.score);
        } else {
            view.render(view.result, `Wrong! The correct answer was ${answer}`, { 'class': 'wrong' });
            alert(`Wrong! The correct answer was ${answer}`);
        }
    },
    gameOver() {
        view.render(view.info, `Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
        view.show(view.start);
    }
}

view.start.addEventListener('click', () => game.start(quiz), false);
