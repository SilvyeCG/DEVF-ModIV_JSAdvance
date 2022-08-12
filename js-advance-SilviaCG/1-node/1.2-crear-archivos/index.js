const fs = require('fs');
const path = './';
const nameFile = './my-file.txt';
const contentForFile = 'this is written from Node';

// PATH ABSOLUTE: C:\Users\scort\OneDrive\Desktop\PracticesDEVF\MODULO IV\1-node\1.2-crear-archivos
// PATH RELATIVE: 1-node\1.2-crear-archivos
//1-node\1.1-funciones-base

const filePath = path+nameFile;
fs.writeFile(filePath, contentForFile, (err) => {
    if(err){
        throw err
    }else{
        console.log('file created successfully')
    }
});

//throw es como un return pero dedicado a los errores