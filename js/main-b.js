'use strict';

const suljeNappi = document.querySelector('.closeBtn');
const modal = document.querySelector('#modal');


const loadJSON = (url, func) => {
  fetch(url).then((response) => {
    return response.json();
  }).then((json) => {
    func(json);
  });
};

const linkkiTapahtumat = () => {
  const linkit = document.querySelectorAll('ul a');
  linkit.forEach((linkki) => {
    linkki.addEventListener('click', (evt) => {
      evt.preventDefault();
      const href = linkki.getAttribute('href');
      // tai const href = linkki.href;
      const img = modal.querySelector('img');
      img.setAttribute('src', href);
      modal.classList.replace('hidden', 'lightbox');
      modal.classList.add('animated', 'slideInDown');
    });
  });
};


const templateFunction = (json) => {
  let html = '';
  json.forEach((kuva) => {
    html += `<li>
            <figure>
                <a href="img/original/${kuva.mediaUrl}"><img src="img/thumbs/${kuva.mediaThumb}"></a>
                <figcaption>
                    <h3>${kuva.mediaTitle}</h3>
                </figcaption>
            </figure>
        </li>`;
  });
  const element = document.querySelector('ul');
  element.innerHTML = html;
  linkkiTapahtumat();
};

loadJSON('kuvat.json', templateFunction);

suljeNappi.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.replace('lightbox', 'hidden');
});

