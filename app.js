//dynamic 
fetch() //only works with json

import { babyDummyData } from "./babiesdata.js"
console.log(babyDummyData);
//get where to push baby list
const babyaList = document.getElementById('babies-list');

//send it in this formart
const babyDataLi = document.createElement('li');
//push only baby with index 0
const babyIndex = 0;

//run through the array, pick babay 0 and then push it into the html
const baby = babyDummyData.babies[babyIndex];

//then we print in the html, so we do the following/ only use back ticks when you are going to hard code html in javascript
//${}, means placeholder
babyDataLi.innerHTML = `
<h2>${baby.name}</h2>                  
<p>Age:${baby.age}</p>
<p>Gender:${baby.gender}</p>
<img src ="${baby.image}"  alt"${baby.name}" style="max-width:100px;">
`;

//get babylist and add it to the ul
babyList.appendChild(babyDataLi);

