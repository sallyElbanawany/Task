var today = new Date();
var year = today.getFullYear();
let developer = {
    name: "Ahmed",
    birthYear: 1992,
    skills: ["PhotoShop", "HTML", "CSS", "JS"],
    getAge: function () {
        return (year) - this.birthYear;
    },
    newSkills: ["ES6", "ES7", "ES😎"],
    devideSkills: function () {
        [this.designSkills, ...this.devSkills] = this.skills
        console.log(this.designSkills);
        console.log(this.devSkills);
        devSkills = [...this.devSkills, ...this.newSkills];
        return devSkills
    }
};


/*----------------------------------------------------------------------------------------------------------*/
const restaurant = {
    name: "Elbanawany",
    drinks: {
        hot: ["coffee", "tea"],
        cold: ["pepsi", "7up", "fanta", "juice"],
    },
    meals: ["burger", "pizza"],
    //  {name: 'Shehab', order: {meal: 1, drink: {c: 1}}}
    addOrder(obj) {
        const {
            name,
            order: {
                meal,
                drink: {
                    c: cold,
                    h: hot
                },
            },
        } = obj;
        setTimeout(() => {
            console.log(
                `Thank you for ordering from ${this.name}​​​​​​​​
        
                        Order Summary
                        =============
                        Mr/Ms: "${name}​​​​​​​​"
                        Order: "${cold ? this.drinks.cold[cold - 1] : this.drinks.hot[hot - 1]
                }​​​​​​​​", "${this.meals[meal - 1]}​​​​​​​​"
        
                        have a great day!`
            );
        }, 2000);
    },
};
const order = {};
const handler = {

    set(obj, property, value) {
        if (property != "meal" && property != "drink") {
            throw `${property} does not exist in the current object`;
        }
        if (property === "meal") {
            if (typeof value !== "number") {
                throw "only numbers are allowed";
            }
            if (value > 2 || value < 0) {
                throw "only number 1 and 2  are allowed";
            }
        }
        if (property == "drink") {
            if (typeof value != "object") {
                throw "only object are allowed";
            }
        }
    },
};
const myObj = {
    name: 'Shehab',
    order: {
        meal: 1,
        drink: {
            c: 1
        }
    }
}
console.log(restaurant.addOrder(myObj));
const test = new Proxy(order, handler);
console.log(test.meal = 2)
console.log(test.drink = {
    h: 2
});


//Has u 
const {
    name,
    drinks: {
        hot,
        cold: coldDrinks
    },
    meals
} = restaurant

function coldDrinksHasU() {
    let newArray = [];
    for (let i in coldDrinks) {
        if (coldDrinks[i].includes('u')) {
            newArray.push(coldDrinks[i]);
        }
    }
    return newArray;
}
console.log(coldDrinksHasU());

/*----------------------------------------------------------------------------------------------------------*/
function styled(strings, ...keys) {
    const theme = {
        color: {
            primary: "red",
            secondary: "blue",
        },
        fontSize: {
            small: "10px",
            large: "20px",
        },
    };
    return strings.map((x, y) => keys[y] ? x += keys[y](theme) : x).join("")
}
console.log(
    styled `
  .h1 {
      color: ${ theme => theme.color.primary},
      font-size: ${ theme => theme.fontSize.large},
  }`)
/** */
