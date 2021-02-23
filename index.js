// Code your solution here

function findMatching(drivers, string){
  return drivers.filter(d => d.toUpperCase() === string.toUpperCase())
}

function fuzzyMatch(drivers, string){
  return drivers.filter(d => d[0] == string[0])
}

function matchName(drivers, string){
  return drivers.filter( d => d.name == string)
}