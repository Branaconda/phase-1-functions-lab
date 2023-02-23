// Code your solution in this file!
function distanceFromHqInBlocks (value) {
    if (value > 42) 
        return value - 42
    else value < 42
    return 42 - value;
}

function distanceFromHqInFeet (value) {
    if (value > 42) 
        return (value - 42) * 264;
    else (value < 42)
        return (42 - value) *264;
}

function distanceTravelledInFeet (start, destination) {
    if ((start > destination))
        return (start - destination) * 264;
    else (destination > start)
        return (destination - start) * 264;
}


function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if(distance > 400 && distance <= 2000) {
        return (distance - 400) * .02;
    } else if(distance > 2000 && distance <= 2500) {
        return 25;
    } else if(distance > 2500)
        return 'cannot travel that far'
}



// function calculatesFarePrice (start, destination) {
//     const blockDistance = (destination - start)
//     if(blockDistance <= 400) {
//         return 0;
//     } else if(blockDistance > 400 && blockDistance <= 2000) {
//         return(blockDistance - 400) * .02; 
//     }
// }