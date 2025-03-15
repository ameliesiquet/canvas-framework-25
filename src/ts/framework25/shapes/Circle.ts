<<<<<<< Updated upstream
import {Shape} from "./Shape";
import {iPosition} from "../iPosition";
import {Rgba} from "../colors/Rgba";
import {Hsl} from "../colors/Hsl";

export class Circle extends Shape {
    radius: number;

    constructor(ctx: CanvasRenderingContext2D, position: iPosition, color: Rgba | Hsl, radius: number) {
=======
import {IPosition} from "../IPosition";
import {Shape} from "./Shape";
import {Rgba} from "../colors/Rgba";
import {Hsl} from "../colors/Hsl";

export class Circle extends Shape{
    radius: number;

    constructor(ctx: CanvasRenderingContext2D, position: IPosition, color: Rgba | Hsl, radius: number) {
>>>>>>> Stashed changes
        super(ctx, position, color);
        this.radius = radius;
    }

<<<<<<< Updated upstream
    draw() {
        this.ctx.beginPath();
        this.ctx.save();
        this.ctx.fillStyle = this.color.toString();
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
=======


    draw(){
        this.ctx.beginPath();
        this.ctx.save();
        this.ctx.fillStyle = this.color.toString();
        this.ctx.arc(this.position.x,this.position.y,this.radius,0,Math.PI*2);
>>>>>>> Stashed changes
        this.ctx.fill();
        this.ctx.restore();
    }
}