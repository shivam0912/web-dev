var fs = require('fs');

const contentToWrite = 'Hello, this is some content to write to the file.';

fs.writeFile('a.txt',contentToWrite,'utf-8',function(err){
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }

    console.log('Write operation completed. File written to:', "a.txt");
});