'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//? XML http request funciton old shool way.

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    const { languages } = Object.values(data.languages).reduce(
      (map, item) => {
        map.languages.push(item);

        return map;
      },
      { languages: [] }
    );

    const { currencyName, currencySymbol } = Object.values(
      data.currencies
    ).reduce(
      (map, item) => {
        map.currencyName.push(item.name);
        map.currencySymbol.push(item.symbol);

        return map;
      },
      { currencyName: [], currencySymbol: [] }
    );

    console.log(data);

    const html = `
  <article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${languages[0]}</p>
            <p class="country__row"><span>💰</span>${currencyName[0]}</p>
          </div>
        </article>
  `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
getCountryData('usa');
getCountryData('india');
