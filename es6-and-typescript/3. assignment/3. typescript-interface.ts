interface iPrintable {
  print: () => void;
}

const circle: iPrintable = {
  print: function () {
    console.log("print from circle");
  },
};
const employee: iPrintable = {
  print: function () {
    console.log("print from employee");
  },
};

function printAll(...objectList: iPrintable[]) {
  objectList.map((obj: iPrintable) => obj.print());
}


printAll(circle,employee);