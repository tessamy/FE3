'use strict';

const ekaP = document.querySelector('p');
const tokaP = document.querySelector('p:nth-child(2)');
const kolmasP = document.querySelector('p:nth-child(3)');

const lisaa = document.querySelector('#lisaa');
const vaihda = document.querySelector('#vaihda');
const toggle = document.querySelector('#toggle');

lisaa.addEventListener('click', (evt) => {
  ekaP.classList.add('punainen');
});

vaihda.addEventListener('click', (evt) => {
  if(tokaP.classList.contains('punainen')){
    tokaP.classList.replace('punainen', 'sininen');
  } else {
    tokaP.classList.replace('sininen', 'punainen');
  }
});

toggle.addEventListener('click', (evt) => {
  kolmasP.classList.toggle('vihrea');
});
