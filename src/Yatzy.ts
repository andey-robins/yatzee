const count = (list: number[], val: number) => list.filter(x => x === val).length

export default class Yatzy {
    private dice: number[];
  
    constructor(d1: number, d2: number, d3: number, d4: number, d5: number) {
      this.dice = [d1, d2, d3, d4, d5];
    }
  
    chance(): number {
      // this reduce lambda sums values in this.dice
      return this.dice.reduce((acc, val) => acc += val)
    }
  
    yatzy(): number {
      const roll = this.dice[0];
      if (this.count(roll) === 5) {
        return 50
      }
      return 0
    }
  
    ones(): number {
      return this.count(1) * 1
    }
  
    twos(): number {
      return this.count(2) * 2
    }
  
    threes(): number {
      return this.count(3) * 3
    }

    fours(): number {
      return this.count(4) * 4
    }
  
    fives(): number {
      return this.count(5) * 5
    }
  
    sixes(): number {
      return this.count(6) * 6
    }
  
    one_pair(): number {
      const counts = [0, 0, 0, 0, 0, 0].map((_, idx) => this.count(idx+1));
      for (let i = 5; i >= 0; i--) {
        if (counts[i] >= 2) {
          return (i+1) * 2
        }
      }
      return 0;
    }
  
    two_pair(): number {
      const counts = [0, 0, 0, 0, 0, 0].map((_, idx) => this.count(idx+1));
      
      // if we don't have the possibility of two pair, exit early
      if (count(counts, 2) + count(counts, 3) != 2) {
        return 0;
      }

      let score = 0;
      for (let i = 0; i < 6; i++) {
        if (counts[i] >= 2) {
          score += (i+1) * 2
        }
      }
      return score;
    }
  
    three_of_a_kind(): number {
      for (let i = 1; i <= 6; i++) {
        if (this.count(i) >= 3) {
          return i * 3
        }
      }
      return 0;
    }

    four_of_a_kind(): number {
      for (let i = 1; i <= 6; i++) {
        if (this.count(i) >= 4) {
          return i * 4
        }
      }
      return 0;
    }
  
    small_straight(): number {
      if (
        this.count(1) == 1 && 
        this.count(2) == 1 && 
        this.count(3) == 1 && 
        this.count(4) == 1 && 
        this.count(5) == 1) 
      {
        return 15;
      }
      return 0;
    }
  
    large_straight(): number {
      if (
        this.count(2) == 1 && 
        this.count(3) == 1 && 
        this.count(4) == 1 && 
        this.count(5) == 1 && 
        this.count(6) == 1) 
      {
        return 20;
      }
      return 0;
    }
  
    full_house(): number {
      const counts = [0, 0, 0, 0, 0, 0].map((_, idx) => this.count(idx+1));
      if (count(counts, 2) != 1 && count(counts, 3) != 1) {
        return 0;
      }
  
      let score = 0;
      for (let i = 0; i < 6; i++) {
        if (counts[i] != 0) {
          score += counts[i] * (i+1)
        }
      }
      return score;
    }

    /** count will return the number of elements with the value val
     *  present in this.dice */
    private count(val: number) {
      return count(this.dice, val);
    }

  }