class SpellChecker {
    constructor() {
      this.corrections = {
        "cola": "Coca-Cola",
        "coca": "Coca-Cola",
        "coca cola": "Coca-Cola",
        "COCA COLA": "Coca-Cola"
      };
    }
  
    correct(input) {
      const normalizedInput = input.toLowerCase();
      return this.corrections[normalizedInput] || input;
    }
  }
  export default SpellChecker;
 