//finding all divisions having .filter class
let allFilters = document.querySelectorAll(".filter div");
let grid = document.querySelector(".grid");
let ticketarea = document.querySelector('.tickets')
// object that maps string colorname to colorcode
let colors = {
  pink: "#d595aa",
  blue: "#5ecdde",
  green: "#91e6c7",
  black: "black",
};

for (let i = 0; i < allFilters.length; i++) {
  // adding eventlister that listens to mouse click
  allFilters[i].addEventListener("click", function (e) {
    //getting the currentTarget's class -> clicked items's class (in this case/html only one class is there -> colorname-btn)
    let color = e.currentTarget.classList[0].split("-")[0]; //-> getting the colorname from class name 
    grid.style.backgroundColor = colors[color]; //styling/applying style of bgcolor to grid
  });
}
// function addcards(){
  //   console.log("clicked!!!");
// }
let cardHtml=' <div class="ticket-container"><div class="ticket-color"></div><div class="ticket-id">#anjkdh</div><div class="ticket-content" contenteditable="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam officia officiis tenetur, rerum eveniet earum nisi explicabo ex quae impedit necessitatibus vitae iusto dolor repellendus!</div></div>';

let add = document.querySelectorAll(".add")[0];
add.addEventListener("click",function(e){
  console.log("Working Listner");
    let old = grid.innerHTML;
    let newdata = old + '\n' + cardHtml;
    grid.innerHTML=newdata;
});
