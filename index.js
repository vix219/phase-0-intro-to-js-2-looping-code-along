
const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards() {
  const messages = []; 
  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
    console.log(message); 
    messages.push(message); 
  }
  return messages; 
}

const thankYouMessages = writeCards(); 
console.log(thankYouMessages);


function countDown() {

let countDown = 0;
while (countDown < 11) 
  console.log(countDown++);
}