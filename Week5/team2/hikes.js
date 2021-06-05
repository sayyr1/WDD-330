 //create an array of hikes
// noinspection JSVoidFunctionReturnValueUsed

 const hikeList = [
    {
        name: "Bechler Falls",
        imgSrc: "https://byui-cit.github.io/cit261/examples/falls.jpg",
        imgAlt: "Image of Bechler Falls",
        distance: "3 miles",
        difficulty: "Easy",
        description:
            "Beautiful short hike along the Bechler river to Bechler Falls",
        directions:
            "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead."
    },
    {
        name: "Teton Canyon",
        imgSrc: "https://byui-cit.github.io/cit261/examples/falls.jpg",
        imgAlt: "Image of Bechler Falls",
        distance: "3 miles",
        difficulty: "Easy",
        description: "Beautiful short (or long) hike through Teton Canyon.",
        directions:
            "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead."
    },
    {
        name: "Denanda Falls",
        imgSrc: "https://byui-cit.github.io/cit261/examples/falls.jpg",
        imgAlt: "Image of Bechler Falls",
        distance: "7 miles",
        difficulty: "Moderate",
        description:
            "Beautiful hike through Bechler meadows river to Denanda Falls",
        directions:
            "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead."
    }
];


 function showHikeList() {
    const hikeListElement = document.getElementById("hikes");
    hikeListElement.innerHTML = hikeList.map(createHikeComponent).join('');
}

function showHikeDetails () {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const hikeName = urlParams.get("name")
    const hikeDetails = document.getElementById("hike-detail");
    const [hike] = hikeList.filter(({ name }) => name === hikeName)
    hikeDetails.innerHTML = `
        ${createDetailComponent(hike)}
        <a href="index.html">Back</a>`
    const addBtn = document.getElementById('addBtn');
    addBtn.addEventListener('click', addComment);

}

function createHikeComponent (hike) {
    return `
        <li class="hike">
            <a href="details.html?name=${hike.name}">
            <h2> ${hike.name}</h2>
            <div>
                <div class="image column"><img src="${hike.imgSrc}" alt="${hike.imgAlt}"></div>
                <div class="column">
                  <h3>Distance</h3>
                  <p>${hike.distance}</p>
                   <h3>Difficulty</h3>
                    <p>${hike.difficulty}</p>
                </div>
            </div>   
            </a>
        </li>`;
}

function createDetailComponent(hike) {
    return `<div>
                <p>Name: ${hike.name}</p>
                <p>Distance: ${hike.distance}</p>
                <p>Difficulty: ${hike.difficulty}</p>
                <p>Description: ${hike.description}</p>
                <p>Directions: ${hike.directions}</p>
            </div>
            <div class="comments">
            
            </div> 
            <h3>Comments</h3>
            <input id="entry" type="text"> <button id="addBtn"> </button> 
                     `


}



function addComment (e) {
    const commentsContent = document.querySelector('.comments');
    const commentsEntry = document.getElementById('entry').value;


   commentsContent.appendChild(createCommentElement(comment.toString()));
   const commentToLocalStore = comments(commentsEntry, null);
    comment.push(commentToLocalStore);
    console.log(comment)
    createCommentElement();
    save();

}

function saveComment (content){

}

createCommentElement();

 function createCommentElement (comment) {
     const list = document.createElement('li');
     const entry = document.createElement('span')
     const date = document.createElement('span');
     entry.innerHTML = comment;
     list.appendChild(entry);
     return list;
}

// function addComment() {
//     const input = document.querySelector('.add');
//     const commentInput = input.value;
//     const listComments = comments(commentInput, null)
//     console.log(listComments);
//     comment.push(listComments);
// }

 function comments(input, hike){
   return{
       name: hike,
       date: new Date(),
       content: input
   }
 }


 // Function save to Local Storage
 function save(){
     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(comment))
 }
 // New comment Object
 const object = {
     name: 'hikeName',
     date: new Date(),
     content: 'comment'
 }
 // To the Local Storage
 const LOCAL_STORAGE_KEY = 'tasks-key';
 let comment = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
 console.log(comment);


