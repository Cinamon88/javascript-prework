{
  const playGame = function(playerInput) {
    clearMessages();
    const getMoveName = function(argMoveId) {
      if (argMoveId == 1) {
        return 'stone';
      } else if (argMoveId == 2) {
        return 'paper';
      } else if (argMoveId == 3) {
        return 'scissors';
      }
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    };

    const displayResult = function(argComputerMove, argPlayerMove) {
      if ((argComputerMove == 'stone' && argPlayerMove == 'paper') ||
        (argComputerMove == 'scissors' && argPlayerMove == 'stone') ||
        (argComputerMove == 'paper' && argPlayerMove == 'scissors')) {
        printMessage('You win!');
      } else if (argComputerMove == argPlayerMove) {
        printMessage('Draw!');
      } else {
        printMessage('You loose!');
      }
    };

    const randomNumber = Math.floor(Math.random() * 3 + 1),
      ComputerMove = getMoveName(randomNumber),
      PlayerMove = getMoveName(playerInput);

    console.log('Wylosowana liczba to: ' + randomNumber);

    printMessage('My move: ' + ComputerMove);

    console.log('Player move: ' + playerInput);

    printMessage('Your move: ' + PlayerMove);

    displayResult(ComputerMove, PlayerMove);
  }

  document.getElementById('play-rock').addEventListener('click', function() {
    playGame(1);
  });
  document.getElementById('play-paper').addEventListener('click', function() {
    playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function() {
    playGame(3);
  });

}
