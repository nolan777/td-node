const myModule = require('./mymodule');
const [node, path, dir, filterExtension] = process.argv

const callback = (err, list) => {
    if (err) {
        return console.error(err);
    }
    list.forEach(file => console.log(file))
}

myModule(dir, filterExtension, callback);


