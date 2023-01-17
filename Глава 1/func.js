let dogName = 'rover';
let dogWeight = 23;


function countWeightDog (name, weight) {
    if (weight > 20) {
        console.log(name + ' says WOOF WOOF')
    } else {
        console.log(name + ' says woof woof')
    }
}

countWeightDog(dogName, dogWeight);


dogName = 'spike';
dogWeight = 53;

countWeightDog(dogName, dogWeight);

countWeightDog('spot', 13);
countWeightDog('lady', 17);


