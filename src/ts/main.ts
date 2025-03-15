<<<<<<< Updated upstream
import {randomInt} from "./framework25/helpers/random";

const canvas = document.getElementById('test-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
=======
import {Rectangle} from "./framework25/shapes/Rectangle";
import {Circle} from "./framework25/shapes/Circle";
import {randomInt} from "./framework25/helpers/random";
import {settings} from "./framework25/settings";
import {Rgba} from "./framework25/colors/Rgba";
import {Hsl} from "./framework25/colors/Hsl";

const canvas = document.getElementById('test-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


for (let i = 0; i < 40; i++) {
    const hue = randomInt(0,255);
    const radius = randomInt(settings.circle.radius.min, settings.circle.radius.max);

}
>>>>>>> Stashed changes
