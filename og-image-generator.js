
const createOGImage = (template, imageURL,text = 'default text from inside lib file') => {
  const output = createImage(template, imageURL,text); 
  return output;
};

function createImage(template, imageURL,text) {
  return `Image ${imageURL }will be created with template ${ template } : ${ text }`;
}

exports.createOGImage = createOGImage;




