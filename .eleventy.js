 const img = require("./og-image-generator");


module.exports = {
 

    initArguments: {},
    configFunction: function(eleventyConfig, options = {}) {

      if(!options.name) {
        options.name = "default name from plugin";
      }
  
      eleventyConfig.addShortcode("ogImage", function(template, imageURL) {
      
        console.log('-----------------createImage-----------------');
        console.log( createOGImage(img.template, imageURL) );
        // console.log('-----------------someData-----------------');
        // console.log( this.page.someData );
        // console.log('-----------------someVal-----------------');
        // console.log(`template: ${template}, imageURL:${imageURL}`  );

        //process each image here


        let returnVal = `template: ${template}, imageURL:${imageURL} ${options.name}`
        console.log(returnVal)
        return returnVal
      });

    }
  
};
