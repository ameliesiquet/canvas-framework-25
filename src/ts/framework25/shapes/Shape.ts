<<<<<<< Updated upstream
import {iPosition} from "../iPosition";
=======
import {IPosition} from "../IPosition";
>>>>>>> Stashed changes
import {Rgba} from "../colors/Rgba";
import {Hsl} from "../colors/Hsl";

export abstract class Shape {
    ctx: CanvasRenderingContext2D;
<<<<<<< Updated upstream
    position: iPosition;
    color: Rgba | Hsl;


    protected constructor(ctx: CanvasRenderingContext2D, position: iPosition, color: Rgba | Hsl) {
        this.ctx = ctx;
        this.position = position;
        this.color = color;
    }
}
=======
    position: IPosition;
    color: Rgba|Hsl;


    constructor(ctx: CanvasRenderingContext2D, position: IPosition, color: Rgba|Hsl) {
        this.ctx = ctx;
        this.position = position;
        this.color = Rgba;
    }
}
>>>>>>> Stashed changes
