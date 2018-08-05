function forLoop(array){
  for (i = 1; i < 25; i++){
    array.push("I am 1 strange loop.")
  }
  for (i > 1; i < 25; i++){
    array.push("I am ${i} strange loops.")
  }
  return array
}
