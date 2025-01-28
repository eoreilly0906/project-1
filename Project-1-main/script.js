const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const customers = [];
const yourflavorButton = document.querySelector('#yourflavor');
const customerList = document.querySelector('#customerItems');
const hiScore = document.querySelector('#placeholder');
const hiScoreTable = document.querySelector('#hiscoretable');
const img = document.createElement("img");

//TODO Learn foreach(?) loops for more effective iterative function making
//creates a val(0-40) and assigns it to every local.month[]
function randLocalTable(){
  for (let i=0;i<months.length;i++){
    let val = Math.floor(Math.random()*40);     //set rand val here
    localStorage.setItem(months[i],val);
  }
}

//If any local.months missing, randomizes table
function localTableGen(){
  for(let i=0;i<months.length;i++){
    checkVal = localStorage.getItem(months[i]);
    if (!checkVal){
      randLocalTable();
      console.log("Generated Values.");
    }
  }
}

//create "element" with "varname" as the id, returns element
function elementBuilder(element, varname){
  let nameVal = String(varname);
  varname = document.createElement(element);
  varname.id = nameVal
  return varname;
}

//generates table with header, and row elements
function generateHiScoreTable(){
  hiScoreTable.appendChild(elementBuilder("thead","hiScoreHead"));
  hiScoreHead.appendChild(elementBuilder("th","monthHead"));
  hiScoreHead.appendChild(elementBuilder("th","valHead"));
  monthHead.innerHTML = "Month";
  valHead.innerHTML = "Value";
  hiScoreTable.appendChild(elementBuilder("tbody","hiScoreBody"));

  for (let i = 0;i<months.length;i++){
    hiScoreBody.append(elementBuilder("tr","hiScoreRow "+i));
  }
}

//fills hiScoreTable rows with 2 cells containing the month the localstorage month value
function populateHiScores(){
  for(let i=0;i<hiScoreBody.childElementCount;i++){
    let bodyID = document.getElementById("hiScoreRow "+i);
    bodyID.appendChild(elementBuilder("td","month "+i));
    let bodyMonth = document.getElementById("month " +i);
    bodyMonth.textContent = months[i];
    bodyID.appendChild(elementBuilder("td","monthVal "+i));
    let bodyVal = document.getElementById("monthVal "+i);
    bodyVal.textContent = localStorage.getItem(months[i]);
  };
}

//looks for input from a user and displays a message for them
//as well as increases the local storage variable, runs on click event at bottom of program
function postForm(){
  customerList.innerHTML = '';
  const firstName = document.querySelector('#firstName').value.trim();
  const email = document.querySelector('#email').value.trim();
  let birthMonth = document.getElementById("myDropdown").value;
  
  if (!firstName || !email || !birthMonth) {
    alert("Ooops! Don't have all the info! Please try again.");
    return;
  }
  
  const customer = { firstName, email, birthMonth };
  customers.push(customer);
  
  let message = '';
  switch (birthMonth) {
    case "January":
      message = `Your flavor is “Birthday Cake!” 🎂 Maybe you’re thinking that Birthday cake is your flavor because it’s the first month of the year. 
      If you are then you are totally right, but that’s not all! 
      You are the life of the party! You are vibrant and courageous but also like to keep a low profile. 
      You know how to light a room up even though you enjoy the dark. 
      You take pride in group interactions until your social battery is on 0%.`;
      break;
      case "February":
        message = `Your flavor is “Red Velvet!” Has anyone ever called you suave before? If so believe it! 
        You like all aspects of your life to be smooth! 
        You are a disciplined workaholic who enjoys to reserve their time to themselves. 
        Just like our red velvet flavor, you’re very rich in life and we’re not talking about money wise! 
        You pride yourself in being stable, ambitious and practical.`;
        break;
        case "March": 
        message = `Your flavor is "Strawberry Cheesecake!" Stay classy! When you walk into a room you turn everyone's head!
        They can't wait to know you and they can't wait to try this flavor! It is rich and decadent and leaves a lasting inpression!`;
        break;
        case "April": 
        message = `Your flavour is “Peanut Brittle!” 
        Your personality is rich, warm, and irresistibly intriguing just like the ice cream. 
        You are reliable and steady, offering a comforting presence, yet you have a sharp wit or bold edge, much like the satisfying crunch of brittle. 
        You are multi layered, sweet and approachable on the surface, but with a resilient, hard-earned strength underneath. 
        You are often seen as a balance of tradition and uniqueness, someone who appreciates timeless values while still being a little unexpected, making them unforgettable in the best way!`;
        break;
        case "May": 
        message = `Your flavor is "Cookie Craze!" 🍪 🎆 You’re as sweet and irresistible as freshly baked cookies! 
        This flavor captures your energy—warm, comforting, and undeniably delightful. 
        Just like a batch of cookies fresh out of the oven, you have a knack for bringing people together and brightening their day.
        May is your time to shine, and your flavor reflects your adventurous side. Whether you’re chasing dreams or savoring the small joys, you sprinkle a bit of magic wherever you go. 
        Embrace the May-Cookie Craze—it’s a reminder to enjoy life’s sweetness while staying true to your warm, grounded self.`;
        break;
        case "June": 
        message = `Your flavor is “Vanilla Pop Rock!” 
        You find enjoyment in the simple things. 
        As long as there is a remote in your hand and a television in front of you, there is nothing that can satisfy you more. 
        You may come off plain and boring, but behind that facade there is excitement within you!
        It takes the right group or right person to break that shell!`;
        break;
        case "July": 
        message = `Your flavor is “Guava swirl!” Life is a dream and you are living in it! 
        Unfortunately for you, you can be an emotional wreck. 
        It’s okay though! You just love others with your whole heart which causes you to spiral. 
        Don’t let nobody get the best of you! Although you’re moody you are truly a beauty and a treasure to have in one’s life!`;
        break;
        case "August":
          message = `Your flavor is "Creamsicle!" 🍊
          You have a light to you that no one can dim! 
          Ready to have fun but does not mind a little R&R. 
          You are down to earth but can fizzle when overstimulated. 
          You are taking on the world regardless of your mood and you prefer to stay in good spirits. 
          Surround yourself with good energy and excuse yourself from negativity. `;
          break;
          case "September":
            message = `Your flavor is “Cookies and Cream!” 🍪 🥛 
            Well, look who the popular one is! 
            You’re always there when ice cream is found, 
            and you’re a go-to, reliable choice for anyone seeking a sweet treat. 
            You make people feel right at home. 
            You bring people together, just like Cookies and Cream! Or maybe peanut butter and jelly? 
            Wait, do we have that flavor too?`;
            break;
            case "October": 
            message = `Your flavor is "Banana Pudding!" This flavor is indulgent, complex, and unexpectedly comforting—just like their intense, mysterious personality. 
            The rich, creamy layers of banana pudding combined with velvety vanilla wafers and a hint of cinnamon bring depth and warmth, 
            reflecting your passionate, secretive nature.`;
            break;
            case "November": 
            message = `Your flavor is "Frosted Peppermint!" 🍬
            This flavor is cool, refreshing, and full of zest! 
            The crisp, invigorating taste of peppermint paired with a smooth, creamy base is the perfect reflection of your adventurous spirit and love for new experiences. 
            It’s energizing, bold, and a little bit playful, much like the free-spirited Archer who is always on the move.`;
            break;
            case "December": 
            message = `Your flavor is "Caramel Apple!" Maybe not what you're thinking for a holiday flavor,
            but more of a summer carnival! This flavor surprises you with rich apple and savory caramel swirl!
            Just like how you can be one with nature and be a little bit unexpected!`;
            break;
            default:
              message = `No Ice Cream for you :(`;
      break;
    }
    if (firstName === 'Darth Vader' || firstName === 'darth vader') {
      message = 'Nice job guessing the secret flavor! Dark-side chocolate is our most popular! Drop by for a free scoop! May the Melt Down be with you! Enjoy it you will!';
    }
    
    if (firstName === 'Luke Skywalker' || firstName === 'luke skywalker') {
      message = 'Boooooooooo!';
    }
    //made function with intent to pull out of click event
    function printFlavor(){
      const messageItem = document.createElement('p');
      messageItem.textContent = message;
      messageItem.classList.add('fade-in');
      customerList.appendChild(messageItem);
      localStorage.setItem('email', email);
    }
    printFlavor();

    //increases localstorage value for month if value from dropdown matches, careful NEEDS to be string.
    for(let i=0;i<months.length;i++){
      if (birthMonth=months[i]){
        let numValChange = (Number(localStorage.getItem(months[i])));
        numValChange++;
        stringValChange = String(numValChange);
        localStorage.setItem(months[i],stringValChange);
        break;
      }else console.log("failed to update");
    }

    //DOES NOT REFRESH ITEMS * ERASE TO REFRESH EACH TIME
    //document.querySelector('#firstName').value = '';
    //document.querySelector('#email').value = '';
    //birthMonthElement.value = '';
  }
  
  //Modal for subscription notification
  const askedtoSubscribe = localStorage.getItem('Asked to subscribe');
  
  if (!askedtoSubscribe) {
    setTimeout(() => {
      console.log('Asked to subscribe!');
      const modal = document.querySelector('#subscribeBox');
      modal.style.display = 'block';
      
      
      localStorage.setItem('Asked to subscribe', 'yes');
      
      
      document.querySelector('#Yes').addEventListener('click', () => {
        modal.style.display = 'none';
      });
      
      document.querySelector('#No').addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }, 10000); 
    
  } else {
    console.log('Already asked to subscribe.');
  }
  
localTableGen();
generateHiScoreTable();
populateHiScores();
yourflavorButton.addEventListener('click', postForm);