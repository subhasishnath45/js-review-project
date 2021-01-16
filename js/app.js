// const obj1 = {
//     key1:   1,
//     key2:   "Hi there",
//     key3: true
// }

// console.log(obj1.key1);

const reviews = [
    {
       id:1,
       name: "Susan Smith",
       job: "Web Designer & Developer",
       img: "img/person-1_rfzshl.jpg",
       text: "remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
       id:2,
       name: "Anna Johnson",
       job: "Graphics Designer",
       img: "img/person-2_np9x5l.jpg",
       text: "remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
       id:3,
       name: "John Jones",
       job: "CTO",
       img: "img/person-3_ipa0mj.jpg",
       text: "remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
       id:4,
       name: "Bill Anderson",
       job: "The Founder",
       img: "img/person-4_t9nxjt.jpg",
       text: "remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
];

// Select items from DOM.
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// review slider will start from this item
let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});
// Show the person based on item no
function showPerson(person){
   const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
// Show the next person.
nextBtn.addEventListener("click", function(){
   currentItem++;
   // if currentItem has the value of greater than 3.
   // currentItem will be assigned to 0.
   if(currentItem > reviews.length - 1){
      currentItem = 0;
   }
   showPerson(currentItem);
});

prevBtn.addEventListener("click", function(){
   currentItem--;
   if(currentItem < 0){
      currentItem = reviews.length - 1;
   }
   showPerson(currentItem);
});

randomBtn.addEventListener("click", function(){
   currentItem = Math.floor(Math.random() * reviews.length);
   // console.log(randNo);
   showPerson(currentItem);
});