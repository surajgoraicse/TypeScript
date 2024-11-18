"use strict";
// one way of implementation
function getShapeArea(shape) {
    if (shape.type === "square") {
        return shape.side * shape.side;
    }
    else if (shape.type === "rectangle") {
        return shape.length * shape.bredth;
    }
    else {
        return shape.radius * shape.radius * Math.PI;
    }
}
// another way
function getArea(shape) {
    switch (shape.type) {
        case "circle": {
            return shape.radius * shape.radius * Math.PI;
            break;
        }
        case "rectangle": {
            return shape.length * shape.bredth;
            break;
        }
        case "square": {
            return shape.side * shape.side;
            break;
        }
        default:
            const _exhaustiveCheck = shape; // should have a default case
    }
}
