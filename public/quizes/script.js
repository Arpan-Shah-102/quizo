let rightCounter = 0;
let questionCounter = 0;

const rightSound = new Audio('./sound/right.mp3');
const wrongSound = new Audio('./sound/wrong.mp3');

for (let i = 1; i <= 10; i++) {
  $(`button.q${i}`).click(function () {
    if ($(this).hasClass('correct') != true) {
      $(this).addClass('wrong');
      $(`h4.q${i}`).text('Wrong!');
      $(`h4.q${i}`).css('color', 'darkred');
      wrongSound.play();
    }
    else {
      $(this).addClass('right');
      rightCounter++;
      $(`h4.q${i}`).text('Correct!');
      $(`h4.q${i}`).css('color', 'darkgreen');
      rightSound.play();
    }
    $(`.q${i}`).prop('disabled', true);
    questionCounter++;
    
    setTimeout(function () {
      if (questionCounter == 10) {
        alert('Your finished!');
        alert(`Your score is ${rightCounter} out of 10.`);
        alert(`You got %${rightCounter*10}`);
        if (rightCounter*10 >= 80) {
          alert('Congratulations! You passed the quiz!');
        } else {
          alert('Sorry, you failed the quiz.');
        }
      }
    }, 500);
  });
}