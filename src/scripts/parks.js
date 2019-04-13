
//VARIABLES*********************************************************************
// ********************************************************************************************
// ********************************************************************************************
// const activities = [
//   baseball_fields = 'baseball',
//   basketball_courts = 'basketball',
//   camping_available_by_permit = 'camping',
//   disc_golf = 'disc golf',
//   dog_park = 'dog park',
//   fishing_by_permit = 'fishing',
//   football_multi_perupose_fields = 'football',
//   golf_course = 'golf',
//   hiking_trails = 'hiking',
//   mountain_bike_trails = 'mountain-biking',
//   picnic_shelters = 'picnic',
//   playground = 'playground',
//   skate_park = 'skatepark',
//   soccer_fields = 'soccer',
//   swimming_pool = 'swimming',
//   tennis_courts = 'tennis',
//   volleyball = 'volleyball'

// ]; 

const activities = [
  'baseball_fields',
  'basketball_courts',
  'camping_available_by_permit',
  'disc_golf',
  'dog_park',
  'fishing_by_permit',
  'football_multi_purpose_fields',
  'golf_course',
  'hiking_trails',
  'mountain_bike_trails',
  'picnic_shelters',
  'playground',
  'skate_park',
  'soccer_fields',
  'swimming_pool',
  "tennis_courts",
  'volleyball'

];

// const activities = [
//   baseball_fields
//   basketball_courts,
//   camping_available_by_permit
//   'disc_golf',
//   'dog_park',
//   'fishing_by_permit',
//   'football_multi_purpose_fields',
//   'golf_course',
//   'hiking_trails',
//   'mountain_bike_trails',
//   'picnic_shelters',
//   'playground',
//   'skate_park',
//   'soccer_fields',
//   'swimming_pool',
//   "tennis_courts",
//   'volleyball'

// ];




const config = {
  method: 'GET',
  headers: {
    "X-App-Token": "7CNk9w2QWkMBKtP4LgAr0r8Ku"
  },
};

const selector = document.getElementById('drop-down');

const dataArray = [];

/////////////////////////////////////////////////////////////////////////////////
//////////////////////////HELPER FUNCTIONS///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////


fetch("https://data.nashville.gov/resource/xbru-cfzi.json", config)
  .then(res => res.json())
  .then(data => data.map(park =>
    dataArray.push(park)
  ))
  .then(data => console.log(dataArray));



function createOptionList(arr) {
  let options = arr.map(activity =>
    `<option value=${activity}>${activity}</option>`
  );

  selector.innerHTML = options;
}

function loopThroughParks(e) {
  let selectedOption = e.target.value;
  console.log(typeof selectedOption);
  console.log(dataArray[0].selectedOption)

}



//IF dataArray[0].dog_park === 'Yes' then do something

/////////////////////////////////////////////////////////////////////////////////
//////////////////////////EVENT LISTENERS///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

selector.addEventListener('change', loopThroughParks);
window.addEventListener('load', createOptionList(activities));





































/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////


///HERE IS THE GOTCHA THAT I WAS TRYING TO EXPLAIN BEFORE VERY POORLY
//WHICH IS DOWN BELOW. //I KEEP RUNNING INTO THIS CALLBACK FUCNTION ISSUE
//WITH MAP AND IM SURE ID RUN INTO IT WITH ANY OTHER METHOD WHERE I NEED
//TO INVOKE A CALL BACK FUNCTION. 
//HERE IS THE JIST THAT I'VE SEEMED TO NOTICE. IF YOU ARE WRITING AN
//ARROW FUNTION WITH CURLY BRACES FOLLOWING THE ARROW, THEN YOU HAVE TO
//ICLUDE THE EXPRESSION "RETURN". HOWEVER, IF YOU GET RID OF THE CURLY
//BRACES AFTER AN ARROW FUNCTION, THEN YOU DONT INCLUDE THE WORD 'RETURN'




// // Fetch using the entire parks API as the endpoint
// fetch("https://data.nashville.gov/resource/xbru-cfzi.json", {
//   method: "GET", //this part could be POST, DELETE, PUT etc...
//   // Headers could include multiple things but we will just use ours for our authentication key
//   headers: {
//     "X-App-Token": "7CNk9w2QWkMBKtP4LgAr0r8Ku"
//   },
// }).then((response) => {
//   // .then catches the reponse, so in this syntax whatever is put in the parentheses, in this case "reponse is
//   // is passed in to the function that this comment is within. The following line returns so we can chain
//   // another .then, all we do here is run .json() on the response which ironically converts it OUT of json
//   // and in to a javascript object"
//   return response.json()
// }).then((response) => {
//   // here we catch our return from line 14 with the same variable "response", this could be any variable name though,
//   // and then console log it. In the console you will see a gigantic nested object of all our data.
//   console.log(response)
// })

//populate an options list in the HTML myself with
{/* <option> baseballl </option>
<option> camping </option>
etc.. */}
//THEN, my array can be strings of the park activites
//i.e. [ 'baseball_fields' , 'basektball_courts' ]
//THEN event listener listens for a change in the select menu
// if the selected item is