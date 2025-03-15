<<<<<<< Updated upstream
import {settings} from "../settings";

=======
>>>>>>> Stashed changes
export class Hsl {
    private _hue: number;
    private _saturation: number;
    private _lightness: number;

<<<<<<< Updated upstream
    constructor(hue: number, saturation: number, lightness: number) {
        this.hue = hue;
        this.saturation = saturation;
        this.lightness = lightness;
    }

    set lightness(value: number) {
        if (value >= 0 && value <= 100) {
            this._lightness = value;
        } else {
            this._lightness = settings.defaultColorValue;
        }
    }

    get lightness() {
        return Math.trunc(this._lightness);
    }


=======

    constructor(hue: number, saturation: number, lightness: number) {
        this._hue = hue;
        this._saturation = saturation;
        this.lightness = lightness;
    }

    toString() {
        return `hsl(${this._hue}deg,${this._saturation}%,${this.lightness}%)`;
    }

    set lightness(value: number) {
        if (value >= 0 && value <= 100) {
            this._lightness = value;
        }
    }
    get lightness(){
        return Math.trunc(this._lightness);
    }

>>>>>>> Stashed changes
    get hue(): number {
        return Math.trunc(this._hue);
    }

    set hue(value: number) {
<<<<<<< Updated upstream
        if (value >= 0 && value <= 360) {
            this._hue = value;
        } else {
            this._hue = settings.defaultColorValue;
=======
        if (value >=0 && value<= 360){
            this._hue = value;
>>>>>>> Stashed changes
        }
    }

    get saturation(): number {
        return Math.trunc(this._saturation);
    }

    set saturation(value: number) {
        if (value >= 0 && value <= 100) {
            this._saturation = value;
<<<<<<< Updated upstream
        } else {
            this._saturation = settings.defaultColorValue;
        }
    }

    toString() {
        return `hsl(${this.hue}deg,${this.saturation}%,${this.lightness}%)`
    }
}

=======
        }
    }
}
>>>>>>> Stashed changes
