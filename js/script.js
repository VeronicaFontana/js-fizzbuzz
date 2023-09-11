const box = document.querySelector("#box");
const container = document.querySelector(".container");


for(let i = 1; i <= 100; i++){

  if((i % 3 === 0) && !(i % 5 === 0)){
    box.append("fizz ");
  } else if((i % 5 === 0) && !(i % 3 === 0)){
    box.append("buzz ")
  } else if((i % 3 === 0) && (i % 5 === 0)){
    box.append("fizzBuzz ")
  } else{
    box.append(i + " ");
  }

  console.log(i);
}