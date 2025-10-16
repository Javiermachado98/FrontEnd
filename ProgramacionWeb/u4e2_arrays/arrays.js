const shortCountryList = [
    "Falkland Islands", "Faroe Islands",
    "Gabon", "Gambia",
    "Haiti", "Honduras",
    "Iceland", "India",
    "Jamaica", "Japan",
    "Saudi Arabia", "Senegal",
    "Serbia", "Seychelles",
    "Singapore", "Slovakia",
    "Slovenia", "Solomon Islands",
    "South Africa", "South Sudan",
    "Spain", "Sri Lanka",
    "Sudan", "Suriname",
    "Sweden", "Switzerland",
    "Afghanistan", "Albania",
    "Bahamas", "Bahrain",
    "Cabo Verde", "Cambodia",
    "Turkey", "Turkmenistan",
    "Tuvalu", "Uganda",
    "Ukraine", "United Arab Emirates",
    "United Kingdom", "United States of America",
    "Uruguay", "Uzbekistan",
    "Vanuatu", "Venezuela",
    "Denmark", "Djibouti",
    "Ecuador", "Egypt",
    "Kazakhstan", "Kenya",
    "Lao People's Democratic Republic", "Latvia",
    "Madagascar", "Malawi",
    "Namibia", "Nauru",
    "Oman", "Pakistan",
    "Qatar", "Romania",
    "Rwanda", "Réunion",
    "Saint Barthélemy", "Saint Kitts and Nevis",
    "Samoa", "San Marino",
    "Syrian Arab Republic", "Taiwan",
    "Tajikistan", "Tanzania",
    "Thailand", "Timor-Leste",
    "Togo", "Tokelau",
    "Vietnam", "Virgin Islands",
    "Wallis and Futuna", "Western Sahara",
    "Yemen", "Zambia",
    "Zimbabwe", "Zambiesta"
];
let position;
let element, elementOne, elementTwo;

console.log("El numero de elementos del array son: " + countElements(shortCountryList));
console.log(showElements(shortCountryList));

console.log(showElementsReverse(shortCountryList));
console.log(orderElements(shortCountryList));
addValue(shortCountryList);
console.log("The new country added is: " + shortCountryList[0]);
addLastValue(shortCountryList);
console.log("The last country added is: " + shortCountryList.at(-1));
console.log("The value that was deleted was: " + deleteFirstValue(shortCountryList));
console.log("The value that was deleted was: " + deleteLastValue(shortCountryList));
position = prompt("Write the position of the value of array: ");
console.log("The value of position is: " + showPosition(shortCountryList,position));

element = prompt("Enter the name of the country: ");
console.log("The position of valueOf is: " + showIndexOf(shortCountryList,element));

elementOne = prompt("Enter the interval number one: ")
elementTwo = prompt("Enter the interval number two: ")
console.log("The slice of the list is: " + showIntervals(shortCountryList,elementOne,elementTwo))

