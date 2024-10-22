import aboutUsImg from "../img/aboutUsIllustration.svg";

function createAboutUsSection() {
    const aboutSection = document.createElement('section');
    aboutSection.setAttribute('class', 'twoColLayout');
    aboutSection.setAttribute('id', 'aboutSection');
   
    const aboutUsIllustration = document.createElement("img");
    aboutUsIllustration.src = aboutUsImg;
    aboutSection.appendChild(aboutUsIllustration);

    const textContainerA = document.createElement('div');
    textContainerA.setAttribute('class', 'textContainer');
    aboutSection.appendChild(textContainerA);

    const AboutHeading1 = document.createElement('h2');
    AboutHeading1.setAttribute('class', 'itimFont headlineSizeM');
    AboutHeading1.textContent = 'It all started with...';
    textContainerA.appendChild(AboutHeading1);

    const aboutP1 = document.createElement('p');
    aboutP1.setAttribute('class', 'ubuntuFont textSizeM');
    aboutP1.textContent = 'Lorem ipsum dolor sit amet, consectetur cherry apple pie adipiscing elit. Morbi dui mi,  congue ac ornare rhoncus, sollicitudin.';
    textContainerA.appendChild(aboutP1); 

    const AboutHeading2 = document.createElement('h2');
    AboutHeading2.setAttribute('class', 'itimFont headlineSizeM');
    AboutHeading2.textContent = "How it's going?";
    textContainerA.appendChild(AboutHeading2);

    const aboutP2 = document.createElement('p');
    aboutP2.setAttribute('class', 'ubuntuFont textSizeM');
    aboutP2.textContent = 'Lorem ipsum dolor sit amet, consectetur carpiem diem adipiscing elit. Morbi dui mi,  congue ac ornare rhoncus, sollicitudin.';
    textContainerA.appendChild(aboutP2); 

    const AboutHeading3 = document.createElement('h2');
    AboutHeading3.setAttribute('class', 'itimFont headlineSizeM');
    AboutHeading3.textContent = 'Hopes for future';
    textContainerA.appendChild(AboutHeading3);

    const aboutP3 = document.createElement('p');
    aboutP3.setAttribute('class', 'ubuntuFont textSizeM');
    aboutP3.textContent = 'Lorem ipsum dolor sit amet, consectetur kiem su laut adipiscing elit. Morbi dui mi,  congue ac ornare rhoncus, sollicitudin. Lorem ipsum dolor sit amet, consectetur cie diemen adipiscing elit. Morbi dui mi,  congue ac ornare rhoncus, sollicitudin';
    textContainerA.appendChild(aboutP3); 

    return aboutSection
}

function loadAboutUsSection() {
    const main = document.getElementById('content');
    const aboutSection = createAboutUsSection();
    main.appendChild(aboutSection);
}
  
export {loadAboutUsSection}

  
//Rewriten from HTML
/*
<section class="twoColLayout">
    <img src="img/aboutUsIllustration.svg">            
    <div class="textContainer">
        <h2 class="itimFont headlineSizeM">It all started with...</h2>
        <p class="ubuntuFont textSizeM">Lorem ipsum dolor sit amet, consectetur cherry apple pie adipiscing elit. Morbi dui mi,  congue ac ornare rhoncus, sollicitudin.</p>
        <h2 class="itimFont headlineSizeM">How it's going?</h2>
        <p class="ubuntuFont textSizeM">Lorem ipsum dolor sit amet, consectetur carpiem diem adipiscing elit. Morbi dui mi,  congue ac ornare rhoncus, sollicitudin.</p>
        <h2 class="itimFont headlineSizeM">Hopes for future</h2>
        <p class="ubuntuFont textSizeM">Lorem ipsum dolor sit amet, consectetur kiem su laut adipiscing elit. Morbi dui mi,  congue ac ornare rhoncus, sollicitudin. Lorem ipsum dolor sit amet, consectetur cie diemen adipiscing elit. Morbi dui mi,  congue ac ornare rhoncus, sollicitudin.</p>
    </div>
</section>
*/