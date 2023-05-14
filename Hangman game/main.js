// creat latters
let latters = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
//creat array from latters
let lattersArray = Array.from(latters);
let lattersDiv = document.querySelector('.row .letters');
//add the latters in div
lattersArray.forEach((latter)=>{
        
    let span = document.createElement('span');
    span.innerHTML = latter;
    span.classList.add('latter-box');
    lattersDiv.appendChild(span);


});
// object of words
const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
  movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
  people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
};
let allkeys = Object.keys(words);
let randomprobvalu = Math.floor(Math.random()* allkeys.length);
let randomprobname = allkeys[randomprobvalu];
let randomprob = words[randomprobname];
let randomvaluename = Math.floor(Math.random() * randomprob.length);
let randomvaluevalue = randomprob[randomvaluename];
document.querySelector('.game-info .category span').innerHTML = randomprobname ;
// select guss letters div from html 
let  lettersGuss = document.querySelector('.letter-guss');
// crea array from the letter word select 
let lettersGussArray = Array.from(randomvaluevalue);
console.log(lettersGussArray);
// add the letters in div
lettersGussArray.forEach((letter)=>{
  let lettersGussDiv = document.querySelector('.letter-guss');
  let spanletters = document.createElement('span');
  // spanletters.innerHTML = letter;
  if(letter === ' '){ // cheak if the word has space 
    spanletters.innerHTML = '-';    
    spanletters.classList.add('has-space');
    

  }  
  lettersGussDiv.appendChild(spanletters);
  });
  
  
  // get clicked letter
  let Wrongcount = 0; // count of wrongs
  let correctcount = 0;
  document.addEventListener('click',(e)=>{
   let thestatue = false;
    if(e.target.className === 'latter-box'){
      e.target.classList.add('clicked');
      let theChosenWord  = Array.from(randomvaluevalue.toLowerCase());      
      console.log(theChosenWord);
      let clickedletter = e.target.innerHTML.toLowerCase();
      theChosenWord .forEach((letterword , wordindex)=>{        
        if(letterword === clickedletter){ 
          thestatue = true;         
          let gussspan = document.querySelectorAll('.letter-guss span')
          gussspan.forEach((span , spanindex)=>{
            if(spanindex === wordindex){ 
              correctcount++;
              span.innerHTML = clickedletter;
              if(gussspan.length === correctcount ){ // if the user wine the game popup messge 
                let winediv = document.createElement('div'); //creat div to show 'you wine' message
                winediv.classList.add('you-wine');
                winediv.innerHTML = 'you Wine';
                document.body.appendChild(winediv);                
                lattersDiv.classList.add('fineshed');
                
              }
              console.log(gussspan.length);

              


            }

          });
          
          
          

        }
      });
      
    
    let thedrawe = document.querySelector('.drawe-conatin');
    if(thestatue !== true){
      Wrongcount++;
      thedrawe.classList.add(`wrong-${Wrongcount}`);
      if(Wrongcount === 8){
        let div = document.createElement('div');
        div.classList.add('popup');
        let divtext = document.createTextNode(`Game over word is "${randomvaluevalue}"`);
        div.appendChild(divtext);
        document.body.appendChild(div);  
        let fineshclasslos = document.querySelectorAll('.letters span')      
        console.log(fineshclasslos)
        lattersDiv.classList.add('fineshed');
        
      }
      

  }
      

    }    
    
  });
  

