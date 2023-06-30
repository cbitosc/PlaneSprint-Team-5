function increaseCount()
{
    console.log("hello");
  let x=parseInt(document.getElementById("counterbtn2").value);
  if(x==10)
  {
      alert("cannot order more than 10 items");
  }
    x+=1;
    document.getElementById("counterbtn2").value=`${x}`;
  console.log(x);
  let y=parseInt(document.getElementById("butt").innerHTML);
  console.log(y);
  y=x*250
  
  document.getElementById("butt").innerHTML=`${y}`;
}

function increaseCount11()
{
    console.log("hello");
  let x=parseInt(document.getElementById("counterbtn11").value);
  if(x==10)
  {
      alert("cannot order more than 10 items");
  }
    x+=1;
    document.getElementById("counterbtn11").value=`${x}`;
  console.log(x);
}


function increaseCount3()
{
    console.log("hello");
  let x=parseInt(document.getElementById("counterbtn3").value);
  if(x==10)
  {
      alert("cannot order more than 10 items");
  }
    x+=1;
    document.getElementById("counterbtn3").value=`${x}`;
  console.log(x);
}


function increaseCount4()
{
    console.log("hello");
  let x=parseInt(document.getElementById("counterbtn4").value);
  if(x==10)
  {
      alert("cannot order more than 10 items");
  }
    x+=1;
    document.getElementById("counterbtn4").value=`${x}`;
  console.log(x);
}


function decreaseCount1()
{
    console.log("hello");
    let x=parseInt(document.getElementById("counterbtn11").value);
      x-=1;
      document.getElementById("counterbtn11").value=`${x}`;
    console.log(x);
}

function decreaseCount2()
{
    console.log("hello");
    let x=parseInt(document.getElementById("counterbtn2").value);
      x-=1;
      document.getElementById("counterbtn2").value=`${x}`;
    console.log(x);
}


function decreaseCount3()
{
    console.log("hello");
    let x=parseInt(document.getElementById("counterbtn3").value);
      x-=1;
      document.getElementById("counterbtn3").value=`${x}`;
    console.log(x);
}

function decreaseCount4()
{
    console.log("hello");
    let x=parseInt(document.getElementById("counterbtn4").value);
      x-=1;
      document.getElementById("counterbtn4").value=`${x}`;
    console.log(x);
}