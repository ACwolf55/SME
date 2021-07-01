function motivation( firstname, lastname ) {
    var welcomeText = "You're doing awesome, keep it up";
    function message(){
      return `${welcomeText} ${firstname} ${lastname}.`
      
    }
    return message
  }
  
  const greeting = motivation('Devin', 'Booker')
  
  greeting()
  
  


  //non closure simplier example
  
  function introduction(firstname,lastname){
    return `my name is ${firstname} ${lastname}.` 
  
  }
  
  introduction('Frodo', 'Baggins')