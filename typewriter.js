const sentence = "hello there from lighthouse labs";

const printStr = (str) => {
  let seconds = 50;
  for (let letter of str) {
  setTimeout(() => {
      process.stdout.write(letter);
    }, seconds)
    seconds += 50;  
  } 
  setTimeout(() => {
    console.log ("");
  }, seconds);  
}

printStr(sentence);
