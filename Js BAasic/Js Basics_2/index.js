console.log('Helloooooo jiiiiii');


// create Object

// let rectangle ={
//     length:1, 
//     breadth:2,

//     draw:function()
//     {
//         console.log('Draw');
//     }

// };


//Factory Funtion

// function createRectangle(len,bre) {
//     return rectangle = {
//         length: len,
//         breadth: bre,

//         draw: function () {
//             console.log('Draw Rectangle');
//         }
//     };

// }

// let rectangleobj1=createRectangle(5,4);
// let rectangleobj2=createRectangle(6,5);
// let rectangleobj3=createRectangle(7,6);


// Constructor

// function Rectangle(len, bre) {
//     this.length = len;
//     this.breadth = bre;

//     this.draw = funtion()
//     {
//         console.log('Drawing');
//     }
// }


// let rectangleObject = new Rectangle(4, 6);

// rectangleObject.color = 'yellow';
// console.log(rectangleObject);




//FOR IN LOOP

// let rectangle=
// {
//     length:4,
//     breadth:2,
// };
// for( let key in rectangle)
// {
//     console.log(key,rectangle[key]);
// }



// FOR OF LOOP
// let rectangle=
// {
//     length:4,
//     breadth:2,
// }

// for(let key of Object.entries(rectangle))
// {
//     console.log(key);
// }


// OBJECT CLONING--------1

// let src={
//     a:10,
//     b:20,
//     c:30,
// };

// let dest={};

// for(let key in src)
// {
//     dest[key]=src[key];
// }
// console.log(dest);


// OBJECT CLONING--------2

// let src={
//     a:40,
//     b:50,
//     c:60,
// };

// let dest=Object.assign({},src);
// console.log(dest);


// OBJECT CLONING--------3
// let src={

//     a:70,
//     b:80,
//     c:90,
// };

// let dest={...src};
// console.log(dest);

