{/* <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <rect x="90" y="40" width="120" height="120" fill="blue" /> <text x="150" y="125" font-size="50" text-anchor="middle" fill="red">YO</text>
</svg> */}

class Shape{
  constructor(){
    this.color = '';
  }

  setColor(color){
    this.color = color;
  }
}

class Circle extends Shape{
  constructor(){

  }

  render(){
    return `<circle cx="25" cy="75" r="20">`;
  }
}

class Square extends Shape{
  constructor(){

  }

  render(){

  }
}

class Triangle extends Shape{
  constructor(){

  }

  render(){

  }
}