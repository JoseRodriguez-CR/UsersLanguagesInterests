users = [
    {
        fname: "Kermit",
        lname: "the Frog",
        languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
        interests: {
            music: ["guitar", "flute"],
            dance: ["tap", "salsa"],
            television: ["Black Mirror", "Stranger Things"]
        }
    },
    {
        fname: "Winnie",
        lname: "the Pooh",
        languages: ["Python", "Swift", "Java"],
        interests: {
            food: ["honey", "honeycomb"],
            flowers: ["honeysuckle"],
            mysteries: ["Heffalumps"]
        }
    },
    {
        fname: "Arthur",
        lname: "Dent",
        languages: ["JavaScript", "HTML", "Go"],
        interests: {
            space: ["stars", "planets", "improbability"],
            home: ["tea", "yellow bulldozers"]
        }
    }
]

function userLanguages(array){
    resultArray = [];
    interestsArray = [];
    for(i = 0; i < array.length; i++){
        //console.log(array.length);
        languages = (array[i].fname + " " + array[i].lname + " knows " + array[i].languages + ".")
        console.log(languages);
        for(j = 0; j < array.length; j++){
            let keys = Object.keys(array[i].interests);
            //console.log(keys);
            interests = ( array[i].interests[keys[j]] + " ")
            interestsArray.push(interests);
            interestsResult = array[i].fname + " is also interested in "+ " " + interestsArray
            
            
        }
        resultArray.push(languages+interestsResult);
        console.log(interestsResult);
    }
    return resultArray;
}

resultArray = userLanguages(users);
console.log(resultArray);