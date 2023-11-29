function myFunction0() {
    alert("Hello");
  }
  
  function myFunction() {
    // alert('Hello');
  
    var name = prompt("What is your name?");
  
    //   document.write('<h1> document.write</h1>');
  
    document.querySelector("h1").textContent = "Welcome to Gladios " + name;
  
    console.log("hello " + name);
    return name;
  }
  
  // function myFunction2(){  document.getElementById('nameHolder').style.color = 'blue';
  // }
  
  // myFunction2()
  