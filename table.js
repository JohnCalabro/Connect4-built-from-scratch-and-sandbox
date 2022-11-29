const td1 = document.querySelector('#top1')
console.log(td1)

td1.addEventListener('click', handleClick)

const td2 = document.querySelector('#top2')
const td3 = document.querySelector('#top3')
const td4 = document.querySelector('#top4')
const td5 = document.querySelector('#top5')
const td6 = document.querySelector('#top6')
const td7 = document.querySelector('#top7')



td2.addEventListener('click', handleClick) 
td3.addEventListener('click', handleClick) 
td4.addEventListener('click', handleClick) 
td5.addEventListener('click', handleClick) 
td6.addEventListener('click', handleClick) 
td7.addEventListener('click', handleClick) 
// for(let c of td){ //I think you need the grid from JS to iterate. 
//   c.addEventListener('click', handleClick) 
// }


// td.addEventListener('click', handleClick)

function createDiv(corrClass){
  
 
  

  const cell = document.querySelector(corrClass)
  console.log(cell)
  if(cell.hasChildNodes('div')){
    corrClass = 'rowAbv'
  }
  const div = document.createElement('div');
  div.setAttribute('class', 'pieceP1')
  
  cell.append(div)
  
  console.log(div)
  
  

}

function togglePlayer(){
  // const testDiv = document.querySelector('.testDivP1')
  
  // testDiv.classList.toggle('testDivP2')
  let p1 = document.querySelector('.pieceP1')
  console.log(p1)
  p1.classList.toggle('pieceP2')
}

function handleClick(e){
 
  
  console.log(e.target.getAttribute('id'))
  const tc = document.querySelector('.sevToLast')
  const ra = document.querySelector('.rowAbv1')
  console.log(ra)
  console.log(tc)
  if(!tc.hasChildNodes('div')){
    console.log('wow')
    // return null;
    if(e.target.getAttribute('id') === 'top1'){  
      console.log(e.target.id)
      
      createDiv('.sevToLast')
      // togglePlayer();
     
      
    }
  } else if(tc.hasChildNodes('div')){
    console.log('stupid computer')
    createDiv('.rowAbv1')
    
  } else if (ra.hasChildNodes('div')) {
    createDiv('.rowAbv1st')
    console.log('what?')
    //ask Eric why else if is ignored? Nealry works when I do just if, but adds
    //two at once. 
  }

  // if(e.target.getAttribute('id') === 'top1'){  
  //   console.log(e.target.id)
    
  //   createDiv('.sevToLast')
  //   // togglePlayer();
   
    
  // }
  
  // togglePlayer();
  const tc2 = document.querySelector('.sixToLast')
  if(!tc2.hasChildNodes('div')){
    if(e.target.getAttribute('id') === 'top2'){  //this just makes them all top1, 
      console.log(e.target.id)
      createDiv('.sixToLast')
      // togglePlayer()
      
    }
  }

  
  const tc3 = document.querySelector('.fthToLast')
  if(!tc3.hasChildNodes('div')){
    if(e.target.getAttribute('id') === 'top3'){  //this just makes them all top1, 
      console.log(e.target.id)
      createDiv('.fthToLast')
      // togglePlayer();
    }
  }
  
  const tc4 = document.querySelector('.fourthToLast')
  if(!tc4.hasChildNodes('div')){
    if(e.target.getAttribute('id') === 'top4'){  //this just makes them all top1, 
      console.log(e.target.id)
      createDiv('.fourthToLast')
      
    }
  }
  
  const tc5 = document.querySelector('.thrToLast')
  if(!tc5.hasChildNodes('div')){
    if(e.target.getAttribute('id') === 'top5'){  //this just makes them all top1, 
      console.log(e.target.id)
      createDiv('.thrToLast')
      
    }
  }
  
  const tc6 = document.querySelector('.secToLast')
  if(!tc6.hasChildNodes('div')){
    if(e.target.getAttribute('id') === 'top6'){  //this just makes them all top1, 
      console.log(e.target.id)
      createDiv('.secToLast')
      
    }
  }
  
  const tc7 = document.querySelector('.last')
  if(!tc7.hasChildNodes('div')){
    if(e.target.getAttribute('id') === 'top7'){  //this just makes them all top1, 
      console.log(e.target.id)
      createDiv('.last')
      
    }
  }
  
 
  togglePlayer();
  

}