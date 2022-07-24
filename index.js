//you just convert your image to base64, append data:image/png;base64, to the front of it, and then create a new variable with your data url.
//Then, open the upload window and sign in, and DON'T NAME IT YET.
//then you can assign the image as such:


let myImage = //your base64-encoded image in a string
window.UI.state.data.dataURL = myImage;
window.UI.state.data.cells = myImage;


//Then change the name of the upload and it will update the image. you can then upload it as normal.
