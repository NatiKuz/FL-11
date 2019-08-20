'use strict';

function Charmander() {
    this.type = Charmander.TYPE;
    this.specie = Charmander.SPECIE;
    this.hasWings = Charmander.HAS_WINGS;

    this.getType = function() {
        return this.type;
    }
    
    this.getSpecie = function() {
        return this.specie;
    }

    this.canFly = function() {
        return this.hasWings;
    }
}

Charmander.prototype.evolve = function () {
    return this.prototype;
}

Charmander.TYPE = 'Fire';
Charmander.SPECIE = 'Lizard Pokémon';
Charmander.HAS_WINGS = false;

function Charmeleon() {
    Charmander.apply(this, arguments);

    this.specie = Charmeleon.SPECIE;
}

Charmeleon.SPECIE = 'Flame Pokémon';
Charmeleon.prototype = Object.create(Charmander.prototype);
Charmeleon.prototype.constructor = Charmeleon;

Charmander.prototype.evolve = function () {
    return Charmeleon.prototype;
}

function Charizard() {
    Charmeleon.apply(this, arguments);

    this.hasWings = Charizard.HAS_WINGS;
}

Charizard.HAS_WINGS = true;
Charizard.prototype = Object.create(Charmeleon.prototype);
Charizard.prototype.constructor = Charizard;

Charmeleon.prototype.evolve = function () {
    return Charizard.prototype;
}


function Pichu() {
    this.specie = Pichu.SPECIE;

    this.getSpecie = function() {
        return this.specie;
    }
}

Pichu.prototype.evolve = function() {
    return this.prototype;
}

Pichu.prototype.getPokemonType = function() {
    return this;
}

Pichu.SPECIE = 'Mouse Pokemon';

function Pikachu() {
    Pichu.apply(this, arguments);
}

Pikachu.prototype = Object.create(Pichu.prototype);
Pikachu.prototype.constructor = Pikachu;

Pichu.prototype.evolve = function() {
    return Pikachu.prototype;
}

function Raichu() {
    Pikachu.apply(this, arguments);
}

Raichu.prototype = Object.create(Pikachu.prototype);
Raichu.prototype.constructor = Raichu;
Pikachu.prototype.evolve = function() {
    return Raichu.prototype;
}