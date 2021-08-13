 let team1 = []
 let team2 = []

 let names = ["bob", 'dav', 'jack', 'hareld', 'max', "james"]

 function randomNumber(max, min = 0) {
    min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
 }

 class Player {
constructor (){
    this.name = names[randomNumber(5)];
    this.power = randomNumber(5, 1);
    this.health = randomNumber(10, 5);
}

 }
 function buildTeam (times, team) {
    for (let index = 0; index < times; index++) {

team.push(new Player)
    
    }
 }





function gameTurn () {
buildTeam(10, team1);
buildTeam(10, team2);

console.log(team1);
console.log(team2);
}


gameTurn()
