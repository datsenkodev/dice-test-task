const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.roll');
const result = document.getElementById('result');
const shadow = document.getElementById('shadow');

const randomDice = () => {
  let random = Math.floor(Math.random() * 6) + 1;
  rollDice(random);
};

const rollDice = (random) => {
  dice.style.animation = 'rolling 4s ease';

  setTimeout(() => {
    switch (random) {
      case 1:
        dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
        break;

      case 2:
        dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
        break;

      case 3:
        dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
        break;

      case 4:
        dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
        break;

      case 5:
        dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
        break;

      case 6:
        dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
        break;

      default:
        break;
    }
    result.textContent = random;
    dice.style.animation = 'floating 2s infinite';
  }, 4050);
};

rollBtn.addEventListener('click', randomDice);
