

//Question Lookup: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup

//sol: 

// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
    for(let i=0;i<contacts.length;i++){

        let contact = contacts[i];

        if(contact.firstName == name){
            if(contact[prop]!=undefined) 
                return contact[prop];
            else 
                return "No such property"
        }
    }
        return "No such contact"
        
}

let ans = lookUpProfile("Akira", "likes");
console.log(ans);




// Question: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/record-collection

// soltution: 
// Setup
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if(prop!='tracks' && value!=""){
    records[id][prop]=value;
  }

 else{
      let exists = records[id].tracks;
      // or records[id]['tracks']
      if(exists!=undefined){
        records[id]['tracks'].push(value);
      }else{
          //adding a property
        records[id]['tracks']=[value];
      }
      if(value==""){
          //removing a property
        delete records[id][prop];
      }
  }



  return records;
}

let res = updateRecords(recordCollection, 5439, 'artist', 'ABBA');
console.log(res);