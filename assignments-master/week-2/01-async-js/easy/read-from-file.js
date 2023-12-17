var fs = require('fs');

function readFiles(filePath, callback) {
    fs.readFile(filePath, 'utf-8', function (err, data) {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        callback(data);

        for (let i = 0; i < 100000000; i++) {
            // Expensive operation (e.g., mathematical calculations)
            const result = Math.sqrt(i);
        }

        console.log('Expensive operation completed.');
    });
}

// Replace 'a.txt' with the actual path to your file
readFiles('a.txt', function (data) {
    console.log(data);
});
