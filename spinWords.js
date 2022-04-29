function spinWords(string){
  return string.split(" ").map((e,i)=> e.length>=5? e.split("").reverse().join(""):e).join(" ")
}
a one line function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed
