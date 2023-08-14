//Parent Shape class with setColor function
class Shape{
  constructor(){
    this.color = '';
  }

  setColor(color){
    this.color = color;
  }
}

//Circle class inherites setColor and the variable color from Shape
class Circle extends Shape{
  render(){
    return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
  }
}

//Square class inherites setColor and the variable color from Shape
class Square extends Shape{
  render(){
    return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
  }
}

//Triangle class inherites setColor and the variable color from Shape
class Triangle extends Shape{
  render(){
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

//Export the shapes
module.exports = {Circle, Square, Triangle};