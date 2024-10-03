class Animal {
    constructor(species, hungry, amount, weight) {
        this.species = species;
        this.hungry = hungry;
        this.amount = amount;
        this.weight = weight;
    }
    createAnimal() {
        return [
            new Animal('Foxes', true, 3, 10),
            new Animal('Tigers', false, 220, 5),
            new Animal('Zebras', true, 300, 15),
        ];
    }
}
export default Animal;
