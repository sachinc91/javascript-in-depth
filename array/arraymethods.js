
const deskArray = [
    "berlin",
    "munich",
    "frankfruit"
]

function deskArrayOperation(){
    console.log(`deskArray :: ${ deskArray}`);

    deskArray.unshift(deskArray.pop());

    console.log(`After moving last element to first deskArray :: ${ deskArray}`);


    let isCityPresent = deskArray.find(function (item){
        return item === "munich";
    })

    console.log(`Find city is present or not :: ${ isCityPresent}`);

    let remove = "munich";

    deskArray.splice(deskArray.indexOf(remove),1);

    console.log(`After moving ${remove} from deskArray :: ${ deskArray}`);
}

deskArrayOperation();


// Number operations
let numbers=[1, 2, 3, 4, 5];
numbers.push(6); // add element into last position
numbers.unshift(7); // Add element into first position
numbers.pop();  // Remove Last Element from array
numbers.shift();  // Remove First Element from array

console.log(`Numbers ::  ${numbers}`);