const fs = require('node:fs').promises;

let PathToFileBoys = ("./folder/Boys/");
let PathToFileGirls = ("./folder/Girls/");


fs.readdir(PathToFileBoys)
.then(NameOfFile =>
{

    for(const string of NameOfFile)
    {

        fs.readFile("./folder/Boys/" + string)
        .then(NameOfFile =>
        {
            if(NameOfFile.toString() == "female")
            {
                fs.rename(PathToFileBoys+string, PathToFileGirls+string)  
            }
        })
        .catch(Error =>
        {
            console.log("Error");
        })

    }

})

.catch(Error =>
{
    console.log("Error");
})

console.log("Successful, all found girls goes to \'Girls\' folder.");



fs.readdir(PathToFileGirls)
.then(NameOfFile =>
{

    for(const string of NameOfFile)
    {

        fs.readFile("./folder/Girls/" + string)
        .then(NameOfFile =>
        {
            if(NameOfFile.toString() == "male")
            {
                fs.rename(PathToFileGirls+string, PathToFileBoys+string)  
            }
        })
        .catch(Error =>
        {
            console.log("Error");
        })

    }

})

.catch(Error =>
{
    console.log("Error");
})

console.log("Successful, all found boys goes to \'Boys\' folder.");




