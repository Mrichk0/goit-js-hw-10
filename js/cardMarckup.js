export function nameMarkup(countries) {
  return countries
    .map(
      ({ name, flags }) =>
        `<li >
 <img src="${flags.svg}" width="25" alt="${name.official} national Flag">
 <span>${name.official}</span>
 </li>`
    )
    .join("");
}

export function cardMarkup(countries) {
  return countries
    .map(
      ({ name, flags, capital, population, languages }) =>
        `<li>
     
 <img src="${flags.svg}" width="25"  alt="${name.official} national Flag">
 <span>${name.official}</span>
 </li>
     <li>Capital:${capital}</li>
     <li>Population:${population}</li>
     <li>Languages:${Object.values(languages)}</li>
   </li>`
    )
    .join("");
}
