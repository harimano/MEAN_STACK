


function userLanguages(data){

    for(var i = 0; i<data.length;i++){
        var printstr = data[i]['fname']+data[i]['lname']+"knows"
        for(var j =0;j<data[i]['languages'].length;j++){
            console.log(printstr+data[i]['languages'][j])
        }            
    }
    
}

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

 userLanguages(users)
