// taking input from command line
// const inputArr = process.argv.slice(2);
// console.log(inputArr);

// node main.js tree "directoryPath"
// node main.js organize "directoryPath"
// node main.js help

const fs = require("fs");
const path = require("path");
const inputArr = process.argv.slice(2);
const command = inputArr[0];
const Utility = require("./utility");

// console.log(typeof Utility.types);

if (command === "tree") {
  treeFn(inputArr[1]);
} else if (command === "organize") {
  organizeFn(inputArr[1]);
} else if (command === "help") {
  helpFn();
} else {
  console.log("Please 🙏🙏 input a valid command");
}

function treeFn(dirPath) {}

function organizeFn(dirPath) {
  if (dirPath == undefined) {
    console.log("enter valid path");
    return;
  }
  const { media, archives, documents, app } = Utility.types;

  const files = fs.readdirSync(dirPath);
  fs.mkdirSync(path.join(dirPath, "Organise"));
  fs.mkdirSync(path.join(dirPath, `Organise/media`));
  fs.mkdirSync(path.join(dirPath, `Organise/archieves`));
  fs.mkdirSync(path.join(dirPath, `Organise/documents`));
  fs.mkdirSync(path.join(dirPath, `Organise/app`));

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    for (let m = 0; m < media.length; m++) {
      if (path.extname(path.join(dirPath, file)) === `.${media[m]}`) {
        fs.copyFileSync(
          `${dirPath}/${file}`,
          `${dirPath}/organise/media/${file}`
        );
        break;
      }
    }
    for (let ar = 0; ar < archives.length; ar++) {
      if (path.extname(path.join(dirPath, file)) === `.${archives[ar]}`) {
        fs.copyFileSync(
          `${dirPath}/${file}`,
          `${dirPath}/organise/archives/${file}`
        );
        break;
      }
    }
    for (let d = 0; d < documents.length; d++) {
      if (path.extname(path.join(dirPath, file)) === `.${documents[d]}`) {
        fs.copyFileSync(
          `${dirPath}/${file}`,
          `${dirPath}/organise/documents/${file}`
        );
        break;
      }
    }
    for (let a = 0; a < app.length; a++) {
      if (path.extname(path.join(dirPath, file)) === `.${app[a]}`) {
        fs.copyFileSync(
          `${dirPath}/${file}`,
          `${dirPath}/organise/app/${file}`
        );
        break;
      }
    }
  }
}

function helpFn() {
  console.log(`
List of All the commands:
     node main.js tree "directoryPath"
     node main.js organize "directoryPath"
     node main.js help
  `);
}
