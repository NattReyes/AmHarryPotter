const griffindorBackground= "linear-gradient(135deg, #FF0000 0%, #FED482 100%)";
const slytherinBackground=  "linear-gradient(135deg, #1C792B 0%, #82E95E 100%)";
const ravenclawBackground=  "linear-gradient(135deg, #0597B7 0%, #66D1FF 100%)";
const hufflepuffBackground= "linear-gradient(135deg, #FFC700 0%, #FFF388 100%)";

function getBackgroundColor(house){
    let color=""
    switch(house){
        case 'GRYFFINDOR':
            color=griffindorBackground;
            break;
        case 'SLYTHERIN':
            color=slytherinBackground;
            break;
        case 'RAVENCLAW':
            color=ravenclawBackground;
            break;
        case 'HUFFLEPUFF':
            color=hufflepuffBackground;
            break;
        default:
            color=griffindorBackground;
            break;
    }
    return color;
}

export default getBackgroundColor;