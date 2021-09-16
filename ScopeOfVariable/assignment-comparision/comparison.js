function checkMatch(a,b){
    console.log('checkMatch');
    console.log(`let a: ${a} (${typeof a})`);
    console.log(`let b: ${b} (${typeof b})`);

    if (a == b) {
        console.log(`Match! let a and let b are the same value.`);
    } else {
        console.error(`No match: let a and let b are NOT same value.`);
    }
}

function checkStrictMatch(a,b){
    console.log('checkStrictMatch');
    console.log(`let a: ${a} (${typeof a})`);
    console.log(`let b: ${b} (${typeof b})`);

    if (a === b) {
        console.log(`Match! let a and let b are the same value.`);
    } else {
        console.error(`No match: let a and let b are NOT same value.`);
    }
}

checkMatch(55,"55");
checkStrictMatch(55,"55");


