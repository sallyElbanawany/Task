const arrayOfFood = ["burger", "pizza", "donuts", "pizza", "koshary", "donuts", "seafood", "burger"]
const newSet = new Set(arrayOfFood);
console.log(newSet);
newSet.add("pasta");
console.log(newSet);
newSet.delete("burger");
console.log(newSet);
const clearSet = set => {
    if (set.size > 2) {
        set.clear();
    }
}
console.log(clearSet(newSet));
/**--------------------------2---------------------------------- */
class Vehicle {
    static counter = 0;
    constructor(wheels = 4, speed = 100) {
        this.wheels = wheels;
        this.speed = speed;
        Vehicle.counter++;
    }
    static compareSpeed(...obj) {
        let max = obj[0].speed;
        const result = obj.map(function (item, index) {
            if (item.speed > max) {
                max = item;
            }

        })
        console.log(max);

    }
    static numberOfCreatedObject() {
        return `Created ${Vehicle.counter} times`;
    }

}
class Bike extends Vehicle {
    constructor(wheels = 2, speed = 10, basket = "true") {
        super(wheels, speed)
        this.basket = basket;
    }
}

const x = new Vehicle(5, 9);
const y = new Vehicle(5, 19);
const z = new Vehicle(5, 39);
Vehicle.compareSpeed(x, y, z);

/**----------------------3---------------------------- */
const getData = async () => {
    const response = await fetch('users.json');
    const data = await response.json();
    const result = data['results'];


    for(let item of result){
        let fullName=`${item['name']['first']}${item['name']['last']}`;
        item['name'].fulName=fullName;
    }


    for(let item of result){
        if(item['dob']['age']>50&& item['gender']=='male')
        console.log(item)
    }

    
    let sum=0;
    for(let item of result){
        if(item['location']['country']=='France')
        if(sum<item['dob']['age'])
            sum=item['dob']['age']
    }
    console.log(sum)}
 
    getData();

/**-----------------------4--------------------------- */

const range = {
    from: 1,
    to: 10,
    [Symbol.iterator]() {
        return {
            number: 0,
            next() {
                if (this.number < 10) {
                    this.number++;
                    return {
                        value: this.number,
                        done: false
                    };
                } else {
                    return {
                        value: undefined,
                        done: true
                    };
                }
            },
        };
    },

};

for (let item of range) {
    console.log(item)
}


