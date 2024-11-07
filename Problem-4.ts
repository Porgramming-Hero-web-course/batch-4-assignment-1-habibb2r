{

type Circle = {
    shape: 'circle';
    radius: number;
}

type Ractangle = {
    shape: 'rectangle';
    width: number;
    height: number;
}

type Shape = Circle | Ractangle;

const calculateShapeArea = (shape: Shape): number | string =>{
    
    if(shape.shape === 'rectangle'){
        return shape.width * shape.height;
    }else if(shape.shape === 'circle'){
        return Math.PI * shape.radius * shape.radius;
    }else{
        return 'Only Calculate Circle and Ractangle shapes'
    }
}

const circleArea = calculateShapeArea({shape: 'circle', radius: 5});
const rectangleArea = calculateShapeArea({shape: 'rectangle', width: 5, height: 10});

console.log(rectangleArea);


}