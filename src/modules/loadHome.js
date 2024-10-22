import './slider';
import heroImg from "../img/heroIllustration.svg";
import leftArrowImg from "../img/leftArrow.svg";
import rightArrowImg from "../img/rightArrow.svg";
import friedEggsImg from "../img/friedEggsIllustration.svg";
import fruitSaladImg from "../img/fruitSaladIllustration.svg";
import ramenImg from "../img/ramenIllustration.svg";
import pepperoniImg from "../img/pepperoniIllustration.svg";
import breakfastImg from "../img/breakfastIllustration.svg";
import tofuImg from "../img/tofuIllustration.svg";
import beginningsImg from "../img/cherryPieIllustration.svg";

function createHomeSection() {
    const homeSection = document.createElement('section');
    homeSection.setAttribute('id', 'homeSection');

    //Hero Section
    const heroSection = document.createElement('section');
    heroSection.setAttribute('id', 'heroSection');
    homeSection.appendChild(heroSection);

    const textContainerH = document.createElement('div');
    textContainerH.setAttribute('class', 'textContainer');
    heroSection.appendChild(textContainerH);

    const heroHeading = document.createElement('h2');
    heroHeading.setAttribute('class', 'itimFont headlineSizeL');
    const textBeforeBreak = document.createTextNode("It's not just food. ");
    const lineBreak = document.createElement('br');
    const textAfterBreak = document.createTextNode("It's an ");
    const span = document.createElement('span');
    span.setAttribute('class', 'purpleText');
    span.textContent = 'experience';
    heroHeading.appendChild(textBeforeBreak); // Add the first text node
    heroHeading.appendChild(lineBreak); // Add the <br> line break
    heroHeading.appendChild(textAfterBreak); // Add the text after <br>
    heroHeading.appendChild(span); // Add the <span> element
    textContainerH.appendChild(heroHeading);

    const heroP = document.createElement('p');
    heroP.setAttribute('class', 'ubuntuFont textSizeM');
    heroP.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui mi,  congue ac ornare rhoncus, sollicitudin.';
    textContainerH.appendChild(heroP);

    const heroBtn =document.createElement('button');
    heroBtn.setAttribute('class', 'redBtn itimFont');
    heroBtn.textContent ='Reserve Now';
    textContainerH.appendChild(heroBtn);

    const heroIllustration = document.createElement("img");
    heroIllustration.src = heroImg;
    heroSection.appendChild(heroIllustration);

    //Signature Dish Section
    const signatureDishesSection= document.createElement('section');
    signatureDishesSection.setAttribute('id', 'signatureDishesSection');
    homeSection.appendChild(signatureDishesSection);

    const signatureHeading = document.createElement('h2');
    signatureHeading.setAttribute('class', 'itimFont headlineSizeM');
    signatureHeading.textContent = 'Signature Dishes';
    signatureDishesSection.appendChild(signatureHeading);

    const arrowContainer = document.createElement('div');
    arrowContainer.setAttribute('class', 'arrowContainer');
    signatureDishesSection.appendChild(arrowContainer);

    const leftArrowIllustration = document.createElement("img");
    leftArrowIllustration.src = leftArrowImg;
    leftArrowIllustration.setAttribute('class', 'arrow left');
    arrowContainer.appendChild(leftArrowIllustration);

    const sliderContainer = document.createElement('div');
    sliderContainer.setAttribute('class', 'sliderContainer');
    arrowContainer.appendChild(sliderContainer);

    const rightArrowIllustration = document.createElement("img");
    rightArrowIllustration.src = rightArrowImg;
    rightArrowIllustration.setAttribute('class', 'arrow right');
    arrowContainer.appendChild(rightArrowIllustration);

    const slider = document.createElement('div');
    slider.setAttribute('class', 'slider');
    sliderContainer.appendChild(slider);

    //Card Eggs
    const friedEggsCard= document.createElement('div');
    friedEggsCard.setAttribute('class', 'card brightYellow');
    slider.appendChild(friedEggsCard);

    const eggsIllustration = document.createElement("img");
    eggsIllustration.src = friedEggsImg;
    eggsIllustration.setAttribute('class','cardIllustration');
    friedEggsCard.appendChild(eggsIllustration);

    const eggsHeading = document.createElement('h3');
    eggsHeading.setAttribute('class', 'itimFont cardHeadline headlineSizeM darkText');
    eggsHeading.textContent = 'Fried Eggs';
    friedEggsCard.appendChild(eggsHeading);

    const eggsP = document.createElement('p');
    eggsP.setAttribute('class', 'ubuntuFont cardText darkText');
    eggsP.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui mi,  congue ac ornare rhoncus, sollicitudin.';
    friedEggsCard.appendChild(eggsP); 

    const eggsBtn =document.createElement('button');
    eggsBtn.setAttribute('class', 'pinkBtn itimFont cardBtn');
    eggsBtn.textContent ='Add to cart';
    friedEggsCard.appendChild(eggsBtn);

    //Card Fruit Salad
    const fruitSaladCard= document.createElement('div');
    fruitSaladCard.setAttribute('class', 'card grey');
    slider.appendChild(fruitSaladCard);

    const fruitSaladIllustration = document.createElement("img");
    fruitSaladIllustration.src = fruitSaladImg;
    fruitSaladIllustration.setAttribute('class','cardIllustration');
    fruitSaladCard.appendChild(fruitSaladIllustration);

    const fruitSaladHeading = document.createElement('h3');
    fruitSaladHeading.setAttribute('class', 'itimFont cardHeadline headlineSizeM');
    fruitSaladHeading.textContent = 'Fruit Salad';
    fruitSaladCard.appendChild(fruitSaladHeading);

    const fruitSaladP = document.createElement('p');
    fruitSaladP.setAttribute('class', 'ubuntuFont cardText');
    fruitSaladP.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui mi,  congue ac ornare rhoncus, sollicitudin.';
    fruitSaladCard.appendChild(fruitSaladP); 

    const fruitBtn=document.createElement('button');
    fruitBtn.setAttribute('class', 'pinkBtn itimFont cardBtn');
    fruitBtn.textContent ='Add to cart';
    fruitSaladCard.appendChild(fruitBtn);

    //Card Ramen
    const ramenCard= document.createElement('div');
    ramenCard.setAttribute('class', 'card pastelYellow');
    slider.appendChild(ramenCard);

    const ramenIllustration = document.createElement("img");
    ramenIllustration.src = ramenImg;
    ramenIllustration.setAttribute('class','cardIllustration');
    ramenCard.appendChild(ramenIllustration);

    const ramenHeading = document.createElement('h3');
    ramenHeading.setAttribute('class', 'itimFont cardHeadline headlineSizeM darkText');
    ramenHeading.textContent = 'Ramen';
    ramenCard.appendChild(ramenHeading);

    const ramenP = document.createElement('p');
    ramenP.setAttribute('class', 'ubuntuFont cardText darkText');
    ramenP.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui mi,  congue ac ornare rhoncus, sollicitudin.';
    ramenCard.appendChild(ramenP); 

    const ramenBtn =document.createElement('button');
    ramenBtn.setAttribute('class', 'pinkBtn itimFont cardBtn');
    ramenBtn.textContent ='Add to cart';
    ramenCard.appendChild(ramenBtn);

    //Card Pepperoni
    const pepperoniCard= document.createElement('div');
    pepperoniCard.setAttribute('class', 'card brightYellow');
    slider.appendChild(pepperoniCard);

    const pepperoniIllustration = document.createElement("img");
    pepperoniIllustration.src = pepperoniImg;
    pepperoniIllustration.setAttribute('class','cardIllustration'); 
    pepperoniCard.appendChild(pepperoniIllustration);

    const pepperoniHeading = document.createElement('h3');
    pepperoniHeading.setAttribute('class', 'itimFont cardHeadline headlineSizeM darkText');
    pepperoniHeading.textContent = 'Pepperoni';
    pepperoniCard.appendChild(pepperoniHeading);

    const pepperoniP = document.createElement('p');
    pepperoniP.setAttribute('class', 'ubuntuFont cardText darkText');
    pepperoniP.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui mi,  congue ac ornare rhoncus, sollicitudin.';
    pepperoniCard.appendChild(pepperoniP); 

    const pepperoniBtn =document.createElement('button');
    pepperoniBtn.setAttribute('class', 'pinkBtn itimFont cardBtn');
    pepperoniBtn.textContent ='Add to cart';
    pepperoniCard.appendChild(pepperoniBtn);

    //Card Breakfast
    const breakfastCard= document.createElement('div');
    breakfastCard.setAttribute('class', 'card grey');
    slider.appendChild(breakfastCard);

    const breakfastIllustration = document.createElement("img");
    breakfastIllustration.src = breakfastImg;
    breakfastIllustration.setAttribute('class','cardIllustration');
    breakfastCard.appendChild(breakfastIllustration);

    const breakfastHeading = document.createElement('h3');
    breakfastHeading.setAttribute('class', 'itimFont cardHeadline headlineSizeM');
    breakfastHeading.textContent = 'Breakfast';
    breakfastCard.appendChild(breakfastHeading);

    const breakfastP = document.createElement('p');
    breakfastP.setAttribute('class', 'ubuntuFont cardText');
    breakfastP.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui mi,  congue ac ornare rhoncus, sollicitudin.';
    breakfastCard.appendChild(breakfastP); 

    const breakfastBtn =document.createElement('button');
    breakfastBtn.setAttribute('class', 'pinkBtn itimFont cardBtn');
    breakfastBtn.textContent ='Add to cart';
    breakfastCard.appendChild(breakfastBtn);

    //Card Tofu
    const tofuCard= document.createElement('div');
    tofuCard.setAttribute('class', 'card pastelYellow');
    slider.appendChild(tofuCard);

    const tofuIllustration = document.createElement("img");
    tofuIllustration.src = tofuImg;
    tofuIllustration.setAttribute('class','cardIllustration');
    tofuCard.appendChild(tofuIllustration);

    const tofuHeading = document.createElement('h3');
    tofuHeading.setAttribute('class', 'itimFont cardHeadline headlineSizeM darkText');
    tofuHeading.textContent = 'Handmade Tofu';
    tofuCard.appendChild(tofuHeading);

    const tofuP = document.createElement('p');
    tofuP.setAttribute('class', 'ubuntuFont cardText darkText');
    tofuP.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui mi,  congue ac ornare rhoncus, sollicitudin.';
    tofuCard.appendChild(tofuP); 

    const tofuBtn =document.createElement('button');
    tofuBtn.setAttribute('class', 'pinkBtn itimFont cardBtn');
    tofuBtn.textContent ='Add to cart';
    tofuCard.appendChild(tofuBtn);

    //Beginnings Section
    const beginningsSection= document.createElement('section');
    beginningsSection.setAttribute('id', 'beginningsSection');
    beginningsSection.setAttribute('class', 'twoColLayout');
    homeSection.appendChild(beginningsSection);

    const beginningsIllustration = document.createElement("img");
    beginningsIllustration.src = beginningsImg;
    beginningsSection.appendChild(beginningsIllustration);

    const textContainerB = document.createElement('div');
    textContainerB.setAttribute('class', 'textContainer');
    beginningsSection.appendChild(textContainerB);

    const beginningsHeading = document.createElement('h2');
    beginningsHeading.setAttribute('class', 'itimFont headlineSizeM');
    beginningsHeading.textContent = 'Our Beginnings';
    textContainerB.appendChild(beginningsHeading);

    const beginningsP = document.createElement('p');
    beginningsP.setAttribute('class', 'ubuntuFont textSizeM');
    const textBeforeRedText = document.createTextNode("Lorem ipsum dolor sit amet, consectetur ");
    const textAfterRedText = document.createTextNode(" adipiscing elit. Morbi dui mi,  congue ac ornare rhoncus, sollicitudin.");
    const redText = document.createElement('span');
    redText.setAttribute('class', 'redText');
    redText.textContent = 'cherry apple pie';
    beginningsP.appendChild(textBeforeRedText); 
    beginningsP.appendChild(redText); 
    beginningsP.appendChild(textAfterRedText); 
    textContainerB.appendChild(beginningsP);

    const beginningsBtn =document.createElement('button');
    beginningsBtn.setAttribute('class', 'purpleBtn itimFont');
    beginningsBtn.textContent ='Learn More';
    textContainerB.appendChild(beginningsBtn);

return homeSection
}

function loadHomeSection() {
    const main = document.getElementById('content');
    const homeSection = createHomeSection();
    main.appendChild(homeSection);
}
  
export {loadHomeSection}

//Rewriten from HTML
/*
<section id="heroSection">
    <div class="textContainer">
        <h2 class="itimFont headlineSizeL">It's not just food. <br> It's an <span class="purpleText">experience</span></h2>
        <p class="ubuntuFont textSizeM">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui mi,  congue ac ornare rhoncus, sollicitudin.</p>
        <button class="redBtn itimFont">Reserve Now</button>
    </div>
    <img src="img/heroIllustration.svg" alt="Shrimp bowl illustration">
</section>
<section id="signatureDishesSection">
    <h2 class="itimFont headlineSizeM">Signature Dishes</h2>
    <div class="arrowContainer">
        <img src="img/leftArrow.svg" alt="Arrow to the left" class="arrow left">            
        <div class="sliderContainer">
            <div class="slider">
                <div class="card brightYellow">
                    <img src="img/friedEggsIllustration.svg" class="cardIllustration">
                    <h3 class="itimFont cardHeadline headlineSizeM darkText">Fried Eggs</h3>
                    <p class="ubuntuFont cardText darkText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui mi,  congue ac ornare rhoncus, sollicitudin.</p>
                    <button class="pinkBtn itimFont cardBtn">Add to cart</button>
                </div>
                <div class="card grey">
                    <img src="img/fruitSaladIllustration.svg" class="cardIllustration">
                    <h3 class="itimFont cardHeadline headlineSizeM">Fruit Salad</h3>
                    <p class="ubuntuFont cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui mi,  congue ac ornare rhoncus, sollicitudin.</p>
                    <button class="pinkBtn itimFont cardBtn">Add to cart</button>
                </div>
                <div class="card pastelYellow">
                    <img src="img/ramenIllustration.svg" class="cardIllustration">
                    <h3 class="itimFont cardHeadline headlineSizeM darkText">Miso Ramen</h3>
                    <p class="ubuntuFont cardText darkText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui mi,  congue ac ornare rhoncus, sollicitudin.</p>
                    <button class="pinkBtn itimFont cardBtn">Add to cart</button>
                </div>
                <div class="card brightYellow">
                    <img src="img/pepperoniIllustration.svg" class="cardIllustration">
                    <h3 class="itimFont cardHeadline headlineSizeM darkText">Pepperoni</h3>
                    <p class="ubuntuFont cardText darkText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui mi,  congue ac ornare rhoncus, sollicitudin.</p>
                    <button class="pinkBtn itimFont cardBtn">Add to cart</button>
                </div>
                <div class="card grey">
                    <img src="img/breakfastIllustration.svg" class="cardIllustration">
                    <h3 class="itimFont cardHeadline headlineSizeM">Breakfast</h3>
                    <p class="ubuntuFont cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui mi,  congue ac ornare rhoncus, sollicitudin.</p>
                    <button class="pinkBtn itimFont cardBtn">Add to cart</button>
                </div>
                <div class="card pastelYellow">
                    <img src="img/tofuIllustration.svg" class="cardIllustration">
                    <h3 class="itimFont cardHeadline headlineSizeM darkText">Handmade Tofu</h3>
                    <p class="ubuntuFont cardText darkText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui mi,  congue ac ornare rhoncus, sollicitudin.</p>
                    <button class="pinkBtn itimFont cardBtn">Add to cart</button>
                </div>
            </div>
        </div>
        <img src="img/rightArrow.svg" alt="Arrow to the right" class="arrow right">            
    </div>      
</section>
<section id="beginningsSection" class="twoColLayout">
    <img src="img/cherryPieIllustration.svg" alt="Cherry pie illustration">            
    <div class="textContainer">
        <h2 class="itimFont headlineSizeM">Our Beginnings</h2>
        <p class="ubuntuFont textSizeM">Lorem ipsum dolor sit amet, consectetur <span class="redText">cherry apple pie</span> adipiscing elit. Morbi dui mi,  congue ac ornare rhoncus, sollicitudin.</p>
        <button class="purpleBtn itimFont">Learn More</button>
    </div>
</section>
*/