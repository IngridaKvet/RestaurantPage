import reservationsImg from "../img/reservationsIllustration.svg";

const main = document.getElementById('content');

const reservationsSection = document.createElement('section');
reservationsSection.setAttribute('class', 'twoColLayout');
main.appendChild(reservationsSection);

const reservationsIllustration = document.createElement("img");
reservationsIllustration.src = reservationsImg;
reservationsSection.appendChild(reservationsIllustration);

const textContainerR = document.createElement('div');
textContainerR.setAttribute('class', 'textContainer');
reservationsSection.appendChild(textContainerR);

const reservationsHeading = document.createElement('h2');
reservationsHeading.setAttribute('class', 'itimFont headlineSizeM');
reservationsHeading.textContent = 'Reserve a table';
textContainerR.appendChild(reservationsHeading);

const reservationsP1 = document.createElement('p');
reservationsP1.setAttribute('class', 'ubuntuFont textSizeM');
reservationsP1.textContent = 'Lorem ipsum dolor sit amet, consectetur diemen adipiscing elit. Morbi dui mi,  congue ac ornare rhoncus, sollicitudin.';
textContainerR.appendChild(reservationsP1); 

const reservationsP2 = document.createElement('p');
reservationsP2.setAttribute('class', 'ubuntuFont textSizeM purpleText');
reservationsP2.textContent = '+395 000 565 28';
textContainerR.appendChild(reservationsP2); 

const reservationsP3 = document.createElement('p');
reservationsP3.setAttribute('class', 'ubuntuFont textSizeM purpleText');
reservationsP3.textContent = '+395 745 619 89';
textContainerR.appendChild(reservationsP3); 

//Rewriten from HTML
/*
<section class="twoColLayout">
    <img src="img/reservationsIllustration.svg">            
    <div class="textContainer">
        <h2 class="itimFont headlineSizeM">Reserve a table</h2>
        <p class="ubuntuFont textSizeM">Lorem ipsum dolor sit amet, consectetur diemen adipiscing elit. Morbi dui mi,  congue ac ornare rhoncus, sollicitudin.</p>
        <p class="ubuntuFont textSizeM purpleText">+395 000 565 28</p>
        <p class="ubuntuFont textSizeM purpleText">+395 745 619 89</p>
    </div>
</section>
*/