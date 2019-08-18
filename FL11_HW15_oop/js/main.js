function Hamburger(type, calories, addedSecretIngredient = false) {
    const CHEESE_CALORIES = 120;
    const TOMATO_CALORIES = 20;
    const TOMATO_COUNT = 2;
    const SECRET_INGREDIENT_CALORIES = 100;

    this.type = type;
    let _calories = calories;

    let _canAddCheese = true;
    let _countAddedTomato = 0;
    let _canAddSecretIngredient = !addedSecretIngredient;
    let _countBited = 0;
        
    this.init = function() {
        
        if (addedSecretIngredient) {
            this.setCalories(this.getCalories() + SECRET_INGREDIENT_CALORIES);
        }    
    }

    this.getCalories = function() {
        return _calories;
    }

    this.setCalories = function(calories) {
        _calories = calories;
    }

    this.addCheese = function() {

        if (_isBited()) {
            console.log('Sorry, you cannot add cheese');
        } else if (_canAddCheese) {
            this.setCalories(this.getCalories() + CHEESE_CALORIES);
            _canAddCheese = false;
        } else {
            console.log('Sorry, you can add cheese only once.')
        }
    }

    this.addTomato = function() {

        if (_isBited()) {
            console.log('Sorry, you cannot add tomato');
        } else if (_countAddedTomato < TOMATO_COUNT) {
            this.setCalories(this.getCalories() + TOMATO_CALORIES);
            _countAddedTomato++;
        } else {
            console.log('Sorry, you can add tomato only twise.')
        }
    }

    this.addSecretIngredient = function() {

        if (_isBited()) {
            console.log('Sorry, you cannot add secret ingredient');
        } else if (_canAddSecretIngredient && _canAddCheese && _countAddedTomato === 0) {
            this.setCalories(this.getCalories() + SECRET_INGREDIENT_CALORIES);
            _canAddSecretIngredient = false;
        } else if (!(_canAddCheese && _countAddedTomato === 0)) {
            console.log('Sorry, you can add secret ingredient only before another ingredient');
        } else {
            console.log('Sorry, you can add secret ingredient only once.');
        }
    }

    function _isBited() {
        return _countBited > 0;
    }

    this.bite = function() {
        _countBited++;
    }

    this.info = function() {
        const actions = [
            !_canAddSecretIngredient ? 'with secret ingredient' : '',
            !_canAddCheese ? 'with cheese' : '',
            _countAddedTomato ? `with ${_countAddedTomato} tomato${_countAddedTomato > 1 ? 'es' : ''}`: '',
            _countBited ? `is bit ${_countBited} time${_countBited > 1 ? 's' : ''}` : ''
        ].filter(item => !!item);

        const messageActions = `${actions.length > 0 ? ': ' : ''}${actions.join(', ')}`;

        return `Classic hamburger${messageActions}. Total calories: ${this.getCalories()}.`;
    }

    // Initialization
    this.init();
}


    //// Step 1
const myHamburger = new Hamburger('clasic', 600);
console.log(myHamburger);

    //// Step 2
// console.log(myHamburger.getCalories());
// myHamburger.setCalories(700);
// console.log(myHamburger.getCalories());

    //// Step 3
// myHamburger.addCheese();
// console.log(myHamburger.getCalories());
// myHamburger.addCheese();

    //// Step 4
// myHamburger.addTomato();
// console.log(myHamburger.getCalories());
// myHamburger.addTomato();
// console.log(myHamburger.getCalories());
// myHamburger.addTomato();

    //// Step 5
// myHamburger.addSecretIngredient();
// console.log(myHamburger.getCalories());
// myHamburger.addSecretIngredient();

// myHamburger.addTomato();
// console.log(myHamburger.getCalories());
// myHamburger.addSecretIngredient();

    //// Step 6
// const myHamburger = new Hamburger('clasic', 600, true);
// myHamburger.addSecretIngredient();

// const myHamburger = new Hamburger('clasic', 600, true);
// console.log(myHamburger.getCalories());

    //// Step 7
// myHamburger.addSecretIngredient();
// myHamburger.addTomato();
// myHamburger.addTomato();
// myHamburger.addCheese();
// myHamburger.bite();
// myHamburger.bite();
// myHamburger.bite();
// myHamburger.addTomato();
// myHamburger.addCheese();
// myHamburger.addSecretIngredient();

    //// Step 8
myHamburger.addSecretIngredient();
myHamburger.addTomato();
myHamburger.addTomato();
myHamburger.addCheese();
myHamburger.bite();
myHamburger.bite();
myHamburger.bite();
console.log(myHamburger.info());