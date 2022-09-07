// taken from https://stackoverflow.com/a/68761911
function getImagePaths(directory) {
  let images = [];
  directory.keys().map((item, index) => images.push(item.replace("./", "")));
  return images;
}

const directory = require.context("../", false, /\.(png|jpe?g|svg)$/);
let imagePaths = getImagePaths(directory);

let images = [];
imagePaths.map((path) => images.push(require("../" + path)));

export default images;
