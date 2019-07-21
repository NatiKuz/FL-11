class Fighter {
    constructor(obj) {
        this._name = obj.name;
        this.damage = obj.damage;
        this.hp = obj.hp;
        this.hpTotal = obj.hp;
        this.agility = obj.agility;
        this.win = 0;
        this.losses = 0; 
    }  

    getName() {
        return this._name;
    }

    setName(name) {
        this._name = name;
    }

    getDamage() {
        return this.damage;
    }

    getAgility() {
        return this.agility;
    }

    getHealth() {
        return this.hp;
    }

    attack(fighterOther) {
        const oneHundredPercent = 100;
        const posibilityPercent = Math.floor(Math.random() * (oneHundredPercent + 1));

        if (posibilityPercent > oneHundredPercent - fighterOther.getAgility()) {
            fighterOther.dealDamage(this.getDamage());
            console.log(`${this.getName()} make ${this.getDamage()} to ${fighterOther.getName()}`);
        } else {
            console.log(`${this.getName()} attack missed`);
        }
    }

    logCombatHistory() {
        console.log(`Name: ${this.getName()}, Wins: ${this.win}, Losses: ${this.losses}`);
    }

    heal(health) {

        if (this.getHealth() + health < this.hpTotal) {
            this.hp = this.getHealth() + health;
        } else {
            this.hp = this.hpTotal;
        }
    }

    dealDamage(health) {
        
        if (this.getHealth() - health > 0) {
            this.hp = this.getHealth() - health;
        } else {
            this.hp = 0;
        }
    }

    addWin() {
        this.win++;
    }

    addLoss() {
        this.losses++;
    }
}

function bigBattle(f1, f2) {
    let f1attack = true;

    if (f1.getHealth() === 0) {
        console.log(`${f1.getName()} is dead and can\`t fight.`);
        return;
    }

    if (f2.getHealth() === 0) {
        console.log(`${f2.getName()} is dead and can\`t fight.`);
        return;
    }

    while (f1.getHealth() > 0 && f2.getHealth() > 0) {
        if (f1attack) {
            f1.attack(f2);
        } else {
            f2.attack(f1);
        }
        f1attack = !f1attack; 
    }

    if (f1.getHealth() === 0) {
        f1.addLoss();
        f2.addWin();
    } else {
        f1.addWin();
        f2.addLoss();
    }
}