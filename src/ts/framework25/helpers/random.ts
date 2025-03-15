<<<<<<< Updated upstream
export function randomInt(min: number, max: number) {
    return Math.ceil(Math.random() * (max - min) + min);
=======
export function randomInt(min:number, max:number){
    return Math.floor(Math.random()*(max-min)+min)
>>>>>>> Stashed changes
}