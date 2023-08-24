let btns = document.querySelectorAll('button');
const player1='X'
const player2='O'
var clicked =0;
var won = false;

btns.forEach(function (i) {   
    //Alternate between turns and makes sure a box cant be clicked twice
    
      i.addEventListener('click', function() {

        if(won==false){
        if(document.querySelector('.msg').innerHTML == document.getElementById('player1').innerText){
          document.querySelector('.msg').innerHTML = document.getElementById('player2').innerText//changes turn
          i.disabled=true;//can't like a box that already has a value
          i.innerText = player2;//puts in the appropriate symbol
          clicked++;
        }else{
          document.querySelector('.msg').innerHTML = document.getElementById('player1').innerText
          i.disabled=true;
          i.innerText=player1;
          clicked++
        }
          //Check if won
        if(clicked>=5&&won==false)
        CheckIfWon();
        }
        if(clicked==9&&won==false)
        {alert('Tie')
        location.reload();

       
        }
      
      });
    

    
  
  
    

   


   function CheckIfWon(){
    //row numbers
    let x = 1
    let y = 4
    let z = 7
    

    while(won==false&&x!=4)//check vertical
    {
      if(document.getElementById(x).innerText==document.getElementById(y).innerText&&document.getElementById(y).innerText==document.getElementById(z).innerText){
        if(document.getElementById(x).innerText==player1){
          alert(player1+' Won')
          won = true;
          
  
        }
        else{
          alert(player2+' Won')
          won = true;
        }
      }
      //goes across one column
      x++
      y++
      z++
    }
    //column numbers
    let a = 1
    let b = 2
    let c = 3


    while(won==false&&a<=7)//Checks Horizontal
    {
      if(document.getElementById(a).innerText==document.getElementById(b).innerText&&document.getElementById(b).innerText==document.getElementById(c).innerText){
        if(document.getElementById(a).innerText==player1){
          alert(player1+' Won')
          won = true;
          
  
        }
        else{
          alert(player2+' Won')
          won = true;
        }
      }
      //goes down one row
      a=a+3
      b=b+3
      c=c+3
    }
    

    //Check Diagnol

    let e = 1
    let f =5
    let g = 9
    while(won==false&&e<=4)
    {
      
      
      if(document.getElementById(e).innerText==document.getElementById(f).innerText&&document.getElementById(f).innerText==document.getElementById(g).innerText){
        
        if(document.getElementById(e).innerText==player1){
          alert(player1+' Won')
          won = true;
  
        }
        else{
          alert(player2+' Won')
          won = true;
        }
      }
      e=e+2
      g=g-2
    }







  

   } 

  




  });