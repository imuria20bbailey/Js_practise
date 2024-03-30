//dynamic 
fetch() //only works with json

import { babyDummyData } from "./babiesdata.js"
console.log(babyDummyData);
//get where to push baby list
const babyList = document.getElementById('babies-list');

//send it in this formart

babyDummyData.babies.forEach(baby =>{
    const babyDataLi = document.createElement('div');
    babyDataLi.innerHTML = ` 
    <img src ="${baby.image}"  alt"${baby.name}" style="max-width:150px;">         
    <h4>${baby.name}</h4>                  
    <p>Age:${baby.age}</p>
    <p>Gender:${baby.gender}</p>
    <p>Location:${baby.location}</p>
    
    `;
    
    //get babylist and add it to the ul
    babyList.appendChild(babyDataLi);
    

})


