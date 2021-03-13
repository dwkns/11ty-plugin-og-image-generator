const createOGImage = (text = 'default text') => {
  const output = createImage(text); 
  return output;
};

function createImage(text) {
  return `Image will be created with: ${ text }`;
}

exports.createOGImage = createOGImage;