// Objective: Go down in multiples of 4

// ============================================= //

// This is the simplest way of doing things.
for (var i = 48; i > 0; i = i - 4){
    console.log(i);
}

// ============================================= //

// This is the same thing but we use modulous instead.
for (var i = 48; i > 0; i--){
        if(i % 4 === 0){
                console.log(i);
            }
        }

// ============================================= //

// This is, I think, the best way cuz it can be modified the easiest. Dont know if its the fastest tho.
function flexCountdown2(highNum, lowNum, mult){
    for (var i = highNum; i > lowNum; i--){
        if(i % mult === 0){
            console.log(i);
        }
    }
}

flexCountdown2(1000, 0, 7);

// ============================================= //

// Apparantley a little faster but less readable. Just put the mult inside of the for loop line instead of having its own line.
function flexCountdown(highNum, lowNum, mult){
    for (var i = highNum; i > lowNum; i = i-mult){
        console.log(i)
    }
}

flexCountdown(1000, 0, 7);

// I just ran it and it actually ran .01 ms slower lmao
// Nvm, it just ran a 0.42 ms. Weird. Idk. 