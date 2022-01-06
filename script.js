// let contain = document.getElementById("container"); // 1) Select the section with an id of container without using querySelector.
//*********************
// let contain2 = document.querySelector("#container");  // 2) Select the section with an id of container using querySelector.
//*********************
// let allSecond = document.querySelectorAll(".second"); // 3) Select all of the list items with a class of "second".
//*********************
// let olThird = document.querySelector("ol .third"); // 4)Select a list item with a class of third, but only the list item inside of the ol tag.
//*********************
// document.querySelector("#container").innerText="hello!1234"; // 5) Give the section with an id of container the text "Hello!".
//*********************
// document.querySelector(".footer").className += " main" // 6) Add the class main to the div with a class of footer.
//*********************
// document.querySelector(".footer").classList.remove("main"); // 7) Remove the class main on the div with a class of footer.

//*********************
// const cardUL = document.querySelector("ul"); // 8) Create a new li element.
// const newLi = document.createElement("li"); // 8) Create a new li element.
// newLi.textContent = "Four"; // 9) Give the li the text "four".
// cardUL.append(newLi); // 10) Append the li to the ul element.
// OR
// document.querySelector("ul").innerHTML+="<li>five</li>"

//*********************
// let newColorli = document.querySelectorAll("ol li");
// for(let i =0; i< newColorli.length; i++)
// {
//     newColorli[i].style.backgroundColor = "green"; //12) Loop over all of the lis inside the ol tag and give them a background color of "green".
// }

//*********************
// document.querySelector(".footer").remove();//13) Remove the div with a class of footer.

