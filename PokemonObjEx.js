

let arcanine = {
    type: "Fire",
    moves: ["Fire Blast","Take Down","Outrage","Substitute"],
    stats: 175,
    item: "Charcoal"
  }
  
  
  let ditto = {
    type: "Normal",
    moves: ["Transform"],
    stats:80,
    item:"Leftovers",
    transform: function(oppont){
      this.type = oppont.type;
      this.stats = oppont.stats;
      this.moves = oppont.moves
      }
    }
  
  //ditto object before using transform function
  console.log(ditto)
  // result = {
  //   type: 'Normal',
  //   moves: [ 'Transform' ],
  //   stats: 80,
  //   item: 'Leftovers',
  //   transform: [Function: transform]
  // }
  
  ditto.transform(arcanine)
  
  // ditto after using transform function
  console.log(ditto)
  // result = {
  //   type: 'Normal',
  //   moves: [ 'Transform' ],
  //   stats: 80,
  //   item: 'Leftovers',
  //   transform: [Function: transform]
  // }