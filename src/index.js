import Notiflix from "notiflix";
import { fetchCountries } from "./js/fetchCountries";
import { nameMarkup, cardMarkup } from "./js/cardMarckup";

const debounce = require("lodash.debounce");

const DEBOUNCE_DELAY = 300;
const input = document.querySelector("#search-box");
const countryList = document.querySelector(".country-list");

input.addEventListener("input", debounce(onInputCountry, DEBOUNCE_DELAY));

function onInputCountry(event) {
  const inputValue = event.target.value.trim();
  if (inputValue !== "") {
    fetchCountries(inputValue)
      .then((data) => {
        if (data.length > 10) {
          Notiflix.Notify.warning(
            "Too many matches found. Please enter a more specific name."
          );
        } else if (data.length > 2 && data.length < 10) {
          countryList.innerHTML = nameMarkup(data);
        } else if (data.length === 1) {
          countryList.innerHTML = cardMarkup(data);
        }
      })
      .catch((error) => {
        Notiflix.Notify.warning("Oops, there is no country with that name");
      });
  } else {
    countryList.innerHTML = "";
  }
}
