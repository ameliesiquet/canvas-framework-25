<<<<<<< Updated upstream
import {Rgb} from "./Rgb";

export class Rgba extends Rgb {
    private _alpha: number;

    constructor(red: number, green: number, blue: number, alpha: number) {
        super(red, green, blue);
        this.alpha = alpha;
    }

    set alpha(value: number) {
        if (value >= 0 && value <= 1) {
            this._alpha = value;
        } else {
            this._alpha = 0;

        }
    }

    toString() {
=======

export class Rgba {
    red:number;
    green:number;
    blue:number;
    alpha:number;

    constructor(red: number, green: number, blue: number, alpha: number) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }

    toString(){
>>>>>>> Stashed changes
        return `rgba(${this.red},${this.green},${this.blue},${this.alpha})`;
    }
}