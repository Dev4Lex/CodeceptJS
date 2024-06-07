const fs = require('fs');
const { link } = require('fs/promises');
const FILE_PATH = './input/links.txt';

module.exports = {
    readContectFromFile() {
        try {
            return fs.readFileSync(FILE_PATH, 'utf8');
        }
        catch (err) {
            console.log(err);
        }
    },

    getArrayFromString(string){
        return string.split('\n');
    },

    getArrayOfProductLinkObjects(array) {
        let arrayOfObjects = [];
        for (const element of array) {
            arrayOfObjects.push({ link: element });
        }
        return arrayOfObjects;
    },

    getLinks(){
        return this.getArrayOfProductLinkObjects(this.getArrayFromString(this.readContectFromFile()));


    }
}