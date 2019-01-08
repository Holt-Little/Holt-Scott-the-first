
// Fetch using the entire parks API as the endpoint
fetch("https://data.nashville.gov/resource/xbru-cfzi.json", {
  method: "GET", //this part could be POST, DELETE, PUT etc...
  // Headers could include multiple things but we will just use ours for our authentication key
  headers: {
    "X-App-Token": "7CNk9w2QWkMBKtP4LgAr0r8Ku"
  },
}).then((response) => {
  // .then catches the reponse, so in this syntax whatever is put in the parentheses, in this case "reponse is
  // is passed in to the function that this comment is within. The following line returns so we can chain
  // another .then, all we do here is run .json() on the response which ironically converts it OUT of json
  // and in to a javascript object"
  return response.json()
}).then((response) => {
  // here we catch our return from line 14 with the same variable "response", this could be any variable name though,
  // and then console log it. In the console you will see a gigantic nested object of all our data.
  console.log(response)
})