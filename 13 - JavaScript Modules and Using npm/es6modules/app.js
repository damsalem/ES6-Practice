import { uniq } from "lodash";
import insane from "insane";
import jsonp from "jsonp";
// import apiKey from "./src/config"; // used to import as default

// import { apiKey, url, sayHi } from "./src/config"; // used for import as named
// console.log(apiKey, url);
// sayHi("Dani");

// const ages = [1, 1, 4, 52, 12, 4];

// console.log(uniq(ages));

import User, { createURL, gravatar } from "./src/user";

const Dani = new User(
  "Dani Amsalem",
  "dani@theamsalems.com",
  "https://theamsalems.com"
);
const profile = createURL("Dani-Amsalem");
const image = gravatar(Dani.email);
console.log(image);
