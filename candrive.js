let rep;
while(rep = true){

  let age = prompt("enter your age");
  age = Number.parseInt(age);
  if (age > 18) {
    alert("you can drive");
  }
  else if(age<18) {
    alert("u cant drive");
  }
  else  {
  console.error("invalid input");
  break;
  }

    let user = prompt("do u want the same question to be repeated?\n if yes then type: y\n and if no the type: n");
    if (user == "y"){
      rep = true;
      continue;
    }
    else if(user == "n"){
      rep = false;
      break;  
      
    }
  else{
    console.error("invalid input");
    break;
    }
  }