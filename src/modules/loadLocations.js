import locationsImg from "../img/locationsIllustration.svg";

const main = document.getElementById('content');

const locationsSection = document.createElement('section');
locationsSection.setAttribute('class', 'twoColLayout');
main.appendChild(locationsSection);

const locationsIllustration = document.createElement("img");
locationsIllustration.src = locationsImg;
locationsSection.appendChild(locationsIllustration);

const textContainerL = document.createElement('div');
textContainerL.setAttribute('class', 'textContainer');
locationsSection.appendChild(textContainerL);

const ALocationHeading = document.createElement('h2');
ALocationHeading.setAttribute('class', 'itimFont headlineSizeM');
ALocationHeading.textContent = 'Location A';
textContainerL.appendChild(ALocationHeading);

const ALocationP = document.createElement('p');
ALocationP.setAttribute('class', 'ubuntuFont textSizeM');
ALocationP.textContent = 'Sunset Bistro 123 Oakwood Avenue, Brighton, NY 14618';
textContainerL.appendChild(ALocationP); 

const BLocationHeading = document.createElement('h2');
BLocationHeading.setAttribute('class', 'itimFont headlineSizeM');
BLocationHeading.textContent = 'Location B';
textContainerL.appendChild(BLocationHeading);

const BLocationP = document.createElement('p');
BLocationP.setAttribute('class', 'ubuntuFont textSizeM');
BLocationP.textContent = 'Mountain View Café 456 Cedar Hill Road, Aspen, CO 81611';
textContainerL.appendChild(BLocationP); 

const CLocationHeading = document.createElement('h2');
CLocationHeading.setAttribute('class', 'itimFont headlineSizeM');
CLocationHeading.textContent = 'Location C';
textContainerL.appendChild(CLocationHeading);

const CLocationP = document.createElement('p');
CLocationP.setAttribute('class', 'ubuntuFont textSizeM');
CLocationP.textContent = 'Lakeside Grill 789 Riverfront Street, Chicago, IL 60616';
textContainerL.appendChild(CLocationP); 

//Rewriten from HTML
/*
<section class="twoColLayout">
    <img src="img/locationsIllustration.svg">            
    <div class="textContainer">
        <h2 class="itimFont headlineSizeM">Location A</h2>
        <p class="ubuntuFont textSizeM">Sunset Bistro 123 Oakwood Avenue, Brighton, NY 14618</p>
        <h2 class="itimFont headlineSizeM">Location B</h2>
        <p class="ubuntuFont textSizeM">Mountain View Café 456 Cedar Hill Road, Aspen, CO 81611</p>
        <h2 class="itimFont headlineSizeM">Location C</h2>
        <p class="ubuntuFont textSizeM">Lakeside Grill 789 Riverfront Street, Chicago, IL 60616</p>
    </div>
</section>
*/