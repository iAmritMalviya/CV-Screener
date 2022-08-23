let employee = [
  {
    name: "Amrit Malviya",
    age: 21,
    language: "Javascript",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Jatin",
    age: 24,
    language: "php",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Bhavesh",
    age: 21,
    language: "Javascript",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    name: "Amrit ",
    age: 21,
    language: "python",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
  },
];
let comman = 0;

function CVit(data) {
  let nextIndex = comman;
  return {
    next: function () {
      return nextIndex < data.length
        ? { value: data[nextIndex++], done: false }
        : { done: true };

      //     if (nextIndex < data.length)
      //     return {
      //         value: data[nextIndex++],
      //         done: false
      //     }
      //     else
      //    return {
      //         done: true
      //     }
    },
  };
}



let previous = document.getElementById('previous');



let candidate = CVit(employee);
// console.log(candidate.next());

nextCV();



function CVinverse(data) {
    let pre = comman + data.index - 1;
    
    
    return {
        previous: function () {
            if (pre > -1) 
            return {
                value: data[pre--],
                done: false
            }
            else
           return {
                done: true
            }
        }
    }
}
let preCan = CVinverse(employee);



previous.addEventListener('click', previousCV);
function previousCV() {
    let currentCandidate = preCan.previous().value;
    console.log(currentCandidate);
    
  let image = document.getElementById("image");
  let profile = document.getElementById("profile");

   if (currentCandidate != undefined) {
       
  
    image.innerHTML = `<img src="${currentCandidate.image}" alt=""/>  `;
    profile.innerHTML = `<li class="list-group-item">${currentCandidate.name}</li>
        <li class="list-group-item">${currentCandidate.language}</li>
        <li class="list-group-item">${currentCandidate.age}</li>`;

   }
   else{
       window.location.reload()
   }
  
}






let next = document.getElementById("next");
next.addEventListener("click", nextCV);
function nextCV() {
  currentCandidate = candidate.next().value;
  
  let image = document.getElementById("image");
  let profile = document.getElementById("profile");

  if (currentCandidate != undefined) {
    image.innerHTML = `<img src="${currentCandidate.image}" alt=""/>  `;
    profile.innerHTML = `<li class="list-group-item">${currentCandidate.name}</li>
        <li class="list-group-item">${currentCandidate.language}</li>
        <li class="list-group-item">${currentCandidate.age}</li>`;
  } else {
    window.location.reload();
  }
}
