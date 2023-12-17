const fs = require('fs');

const path = 'a.txt';
function reading(path){
    fs.readFile(path,'utf-8',function(err,data){
        if(err){console.error("there is error",err);
    return;}
        
    
    const cleanedContent = data.replace(/\s+/g,' ');
    fs.writeFile(path,cleanedContent,'utf-8',function(err){
        if(err){
            console.log('Error writing to file: ',err);
            return;
        }
        console.log('File cleaned and written successfully. ')
    });
});
}
reading(path);