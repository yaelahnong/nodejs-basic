const fs = require('fs');
const path = require('path');

const readableStream = fs.createReadStream(path.resolve(__dirname, 'input.txt'), {
    highWaterMark: 15
});

const writableStream = fs.createWriteStream('./stream/output.txt');

readableStream.on('readable', () => {
    try {
        process.stdout.write(writableStream.write(`${readableStream.read()} \n`));
        // writableStream.write(`${readableStream.read()} \n`);
        // writableStream.end();
        

    } catch (error) {
        
    }
});

readableStream.on('end', (data) => {
    console.log('Done');
});