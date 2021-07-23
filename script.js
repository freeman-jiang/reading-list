const submitBooks = document.querySelector("#bookCount");
let numBooks=2
function addBook(){
  console.log("adds one book")
  if (numBooks>=10){
    submitBooks.remove
    books.innerHTML= "Reading list is full!"
    alert("Start reading!")
  }
  else{
    numBooks=numBooks+1
    const status =document.querySelector("#books")
    status.innerHTML= "You have inputted " + numBooks +" books os far"
  }
}
submitBooks.addEventListener("click", addBook)


