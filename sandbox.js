const board = [
    [ 'red', null, 'blue', 'red', 'red', 'red', 'blue' ],
    [ 'red', 'blue', 'red', 'red', 'blue', 'red', 'blue' ],
    [ '', '', '', '', '', '', '' ],
    [ '', '', '', '', '', '', 'blue' ],
    [ '', '', '', '', 'blue', '', '' ],
    [ '', 'red', '', '', '', '', '' ],
  ];
  console.log(board)
  const gameB = document.querySelector('#gameB')


//   gameB.innerText = board;
  
  const firstRow = board[0]
  const secondRow = board[1]
  const thirdRow = board[2]
  const fourthRow = board[3]

  const firstCell = board[0][0]
  
//   for(let row of board){
//     row.style.display = inline-block;
//   }





  for(let cell of firstRow){
    const gameCell = document.createElement('span')
    console.log(gameCell)
    console.log(cell)
    gameCell.style.width = '20px'
    gameCell.style.border = '17px solid grey'
   
    gameB.append(gameCell)
    
    gameCell.innerText = cell;

  }
  
  for(let cell of secondRow){
    const gameCell = document.createElement('span')
    console.log(gameCell)
    console.log(cell)
    gameCell.style.width = '20px'
    gameCell.style.border = '17px solid grey'
    gameB2.append(gameCell)
    gameCell.innerText = cell;
  }
  


 