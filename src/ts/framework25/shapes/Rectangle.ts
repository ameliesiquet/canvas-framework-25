<<<<<<< Updated upstream
import {iPosition} from "../iPosition";
=======
import {IPosition} from "../IPosition";
>>>>>>> Stashed changes
import {Shape} from "./Shape";
import {Rgba} from "../colors/Rgba";
import {Hsl} from "../colors/Hsl";

<<<<<<< Updated upstream
export class Rectangle extends Shape {
    width: number;
    height: number;
    rotation: number;


    constructor(ctx: CanvasRenderingContext2D, position: iPosition, color: Rgba | Hsl, width: number, height: number, rotation: number) {
=======
export class Rectangle extends Shape{
    width:number;
    height:number;
    rotation:number;

    constructor(ctx: CanvasRenderingContext2D, position: IPosition, color: Rgba|Hsl, width: number, height: number, rotation: number) {
>>>>>>> Stashed changes
        super(ctx, position, color);
        this.width = width;
        this.height = height;
        this.rotation = rotation;
    }

<<<<<<< Updated upstream
    draw() {
=======
    draw(){
>>>>>>> Stashed changes
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color.toString();
        this.ctx.translate(this.position.x, this.position.y);
<<<<<<< Updated upstream
        this.ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
        this.ctx.closePath();
        this.ctx.restore();
    }

=======
        this.ctx.fillRect(-this.width/2, -this.height/2, this.width,this.height);
        this.ctx.closePath();
        this.ctx.restore();
    }
>>>>>>> Stashed changes
}