const fs = require('node:fs').promises;
const pt = require('node:path');

let PathToFileBoys = pt.join(__dirname,'folder/Boys');
let PathToFileGirls = pt.join(__dirname,'folder/Girls');

function GenderSort(PathFrom, PathTo, gen)
{
    let PathToUnordinary = pt.join(__dirname,'folder/Unordinary');

    gen = gen.toLowerCase();
    
    fs.readdir(PathFrom)
        .then(NameOfFile =>
        {

            for(const FileNamePointer of NameOfFile)
            {
                
                fs.readFile(pt.join(PathFrom, FileNamePointer))
                    .then(NameOfGenderInFile =>
                    {
                        

                        if(NameOfGenderInFile.toString() == gen)
                        {
                           fs.rename(pt.join(PathFrom, FileNamePointer), pt.join(PathTo, FileNamePointer));
                        }
                        else if(NameOfGenderInFile.toString() != "female" && NameOfGenderInFile.toString() != "male")
                        {
                            fs.rename(pt.join(PathFrom, FileNamePointer), pt.join(PathToUnordinary, FileNamePointer));
                        }

                    })
                    .catch(Error => console.log("Error 101"));
        
            }
        
        })
        .catch(Error => console.log("Error 202"));

        console.log(`${gen} are sorted.`);
}




GenderSort(PathToFileBoys, PathToFileGirls, "FeMaLe");
GenderSort(PathToFileGirls, PathToFileBoys, "male");





