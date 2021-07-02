//function wth 4 parameters

function display(char1,char2,char3,char4){
    console.log(char1,char2,char3,char4)
  }
  
  let letters =['a','b','c','d']
  
  
  display(letters[0],letters[1],letters[2],letters[3])
  //result = a b c d
  //same as spead operator
  
  display(...letters)
  //result = a b c d
  //same as each index of array
  
  display(letters) 
  //result = [ 'a', 'b', 'c', 'd' ]
  // keeps it as array, only filling the first parameter
  
  display(letters,'y','z',4)
  // since all 1st parameter is being used you can still put in the other parameters 
  //result = [ 'a', 'b', 'c', 'd' ] y z 4
  
  display('a','b','c','d','e','f','g')
  //result = a b c d
  //if you put on more arguments than parameters the wont be used
  
  
  function displayInf(...chars){
    console.log(...chars)
  }
  
  displayInf(2,2,2,2,2,2,2,2,1)
  //result = 2 2 2 2 2 2 2 2 1
  //with this function since the parameter has the spead operator it can take infinite arguments (atleast as much as your pc can process lol)
  
  function displayInf2(...chars){
    console.log(chars)
  }
  
  displayInf2(2,2,2,2,2,2,2,2,1)
  //result = [2, 2, 2, 2, 2,2, 2, 2, 1]
  //if the parameter isnt used as a spread inside the function it will can still be infinite will just be an array
  
  displayInf2([2,2,2,2,2,2,1])
  //result = [ [2, 2, 2, 2,2, 2, 1] ]
  //if you make the argument an array it will just a nested array 
  //result[]
  
  displayInf2([2,2,2,1],['a','b','c','d'],[1,1,1,1,1,2],true,{movie:"independence Day"},'Red',5)
  //result = [[ 2, 2, 2, 1 ],[ 'a', 'b', 'c', 'd' ],[ 1, 1, 1, 1, 1, 2 ],true,{ movie: 'independence Day' },'Red',5]
  
  //you can in arguments of any type boolean,string etc, the result willl be an array where the index 0 is 1st argument, index 1 2nd argument and so on.
  
  
  displayInf([2,2,2,1],['a','b','c','d'],[1,1,1,1,1,2],true,{movie:"independence Day"},'Red',5)
  
  //result =[ 2, 2, 2, 1 ] [ 'a', 'b', 'c', 'd' ] [ 1, 1, 1, 1, 1, 2 ] true { movie: 'independence Day' } Red 5
  
  // since this one is using the function:
  //          function displayInf(...chars){
  //            console.log(...chars) <--return/display using spread
  //                            }
  
  //the result will not be all in one array, each argument will displayed on its own
  
  //this could be better if you just wanted to display information
  
  //but if you need to grab certain info not having it spread in the return could be better since result has an index
  
  