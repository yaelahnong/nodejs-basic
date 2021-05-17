const fs = require('fs');
const path = require('path');

// Asynchronous

const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }

    console.log(data);
};

const lokasi = path.resolve(__dirname, 'notes.txt');

// console.log(lokasi);

// fs.readFile('./filesystem/notes.txt', 'UTF-8', fileReadCallback);
fs.readFile(lokasi, 'UTF-8', fileReadCallback);


// Synchronous
// const data = fs.readFileSync('./filesystem/notes.txt', 'UTF-8');

// console.log(data);