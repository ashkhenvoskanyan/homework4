//1. Use While loop to create a function called 
// 'triangleStars' that prints an upside-down
 // triangle to the console of the given height.


const stars = function (symbols , spaces){
  let string = "";
  while(spaces > 0){
    string = string + symbols;
    spaces = spaces - 1;
  };
  return string;
};

const typeStr = function (spaceCount , starCount){
  console.log (stars (" ", spaceCount )+ stars ("*", starCount));
};

const triangleStars = function (hight){
  let starCount = hight*2-1;
  let spaceCount = 0
 
  while (hight > 0){
    typeStr(spaceCount, starCount);
    hight = hight-1;
    starCount = starCount - 2;
    spaceCount = spaceCount + 1;
  };
  return " "j
};
console.log (triangleStars (5))


// version 2
const getStars = function (num){
  let stars = "";
  while (num > 0) {
    num = num - 1;
    stars = stars + "*"
  };
  return stars;
    };

const getSpace = function (num){
  let space = "";
  while (num > 0){
    num = num -1
    space = space + " "
  };
  return space;
};
 const triangleStars = function (hight){
   let line = "";
   let spaceNum = hight 
   while (hight > 0){
     line = getSpace (spaceNum - hight) + getStars (hight*2-1);
     hight = hight -1
     console.log (line);
   };
 };
 console.log (triangleStars (5))




// 2.Write a function that takes a two dimensional
 // array and returns a single array with
  // all the values in the child arrays.



const array = function (arr){
  let x = 0;
  let newArr = [];
  while (x < arr.length){
    let y = 0;
    while (y < arr[x].length){
      newArr;[newArr.length]= arr[x][y];
      y = y + 1;
    };
    x = x + 1
  };
  return newArr
};
console.log(array([[1,2,3], [4,5,6]]))

// 3.Create a function 'findMinMax' that returns 
// the largest number from the given array if the 
// second argument is true.
// It returns the smallest number in the given array 
// if the second argument is false.

const findMinMax = function(arr,boolean){
  let minmax = arr[0];
  let index = 1;
  if (boolean){
    while (index < arr.length){
      if (minmax < arr[index]){
        minmax = arr[index];
      };
      index = index + 1;
    };
    return minmax;
  }
  else {
    while (index < arr.length){
      if (minmax > arr[index]){
        minmax = arr[index];
      };
      index = index + 1
    };
    return minmax
  };
};
console.log (findMinMax([4, 2, 66, -44, 8], true))
console.log (findMinMax([4, 2, 66, -44, 8], false))

// 4.Create a function 'forEach' that takes an array
// and a function and then calls the given function 
// once with each value in the given array.

const forEach = function (arr, func){
  let x = 0
  while (x < arr.length){
    func(arr[x]);
    x = x +1
  };
};
forEach([4,3,2], function(val){
  console.log(val)
})

//5. Create a function 'sum' that takes an 
// array of numbers and returns their sum. 

const sum = function(arr){
  let getSum = 0;
  let index = 0;
  while ( index < arr.length){
    getSum = getSum + arr[index];
    index = index + 1;
  };
  return getSum
};
console.log(sum([4, 3, 2]))

// 6. Write a function 'reverse' 
// that reverses the given string.

const reverse = function (str){
  let index = str.length - 1;
  let newStr = '';
   while(index >= 0){
    newStr =newStr + str[index];
    index = index -1;
  };
  return newStr
};
console.log(reverse("abcd"))

// 7.Create a function called checkerboard using While loop which,
// given a size argument, will draw an n by n checkerboard on the screen

const func1 = function(val){
  let index = 0;
  let line = "";
  while (index < val){
    line = line + "*";
    index = index + 1;
  };
  return line ;
};

const checkerboard = function(h){
  let index2 = 0;
  while(index2 < h){
    let raw = func1(h)
    if(index2 % 2 ===0){
      raw = " " + raw;
      console.log (raw);
    }
    else { console.log (raw);}
    index2 = index2 + 1;
  };

};
console.log(checkerboard(5))






