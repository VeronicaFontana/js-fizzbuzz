const container = document.querySelector(".container");

for(let i = 1; i <= 100; i++){
  const box = document.createElement("div");
  container.append(box);

  box.classList.add("box-normal");
  

  if((i % 3 === 0) && !(i % 5 === 0)){
    box.append("fizz ");
    box.classList.add("box-fizz");
  } else if((i % 5 === 0) && !(i % 3 === 0)){
    box.append("buzz ");
    box.classList.add("box-buzz");
  } else if((i % 3 === 0) && (i % 5 === 0)){
    box.append("fizzBuzz ");
    box.classList.add("box-fizzbuzz");
  } else{
    box.append(i + " ");
  }
}