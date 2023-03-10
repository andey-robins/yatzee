import assert from 'assert';

import Yatzy from '../src/Yatzy';

describe('Chance', () => {
  it('scores sum of all dice', () => {
    assert.strictEqual(new Yatzy(2, 3, 4, 5, 1).chance(), 15);
    assert.strictEqual(new Yatzy(3, 3, 4, 5, 1).chance(), 16);
    assert.strictEqual(new Yatzy(2, 6, 4, 5, 1).chance(), 18);
    assert.strictEqual(new Yatzy(2, 3, 6, 5, 1).chance(), 17);
    assert.strictEqual(new Yatzy(2, 3, 4, 4, 1).chance(), 14);
    assert.strictEqual(new Yatzy(2, 3, 4, 5, 3).chance(), 17);
  });
});

describe('Yatzy', () => {
  it('scores 50', () => {
    assert.strictEqual(0, new Yatzy(3, 6, 6, 6, 6).yatzy());
    assert.strictEqual(50, new Yatzy(1, 1, 1, 1, 1).yatzy());
    assert.strictEqual(50, new Yatzy(2, 2, 2, 2, 2).yatzy());
    assert.strictEqual(50, new Yatzy(3, 3, 3, 3, 3).yatzy());
    assert.strictEqual(50, new Yatzy(4, 4, 4, 4, 4).yatzy());
    assert.strictEqual(50, new Yatzy(5, 5, 5, 5, 5).yatzy());
    assert.strictEqual(50, new Yatzy(6, 6, 6, 6, 6).yatzy());
  });
});

describe('Ones', () => {
  it('score the sum of 1s', () => {
    assert.strictEqual(new Yatzy(6, 2, 2, 4, 5).ones(), 0);
    assert.strictEqual(new Yatzy(1, 2, 3, 4, 5).ones(), 1);
    assert.strictEqual(new Yatzy(1, 2, 1, 4, 5).ones(), 2);
    assert.strictEqual(new Yatzy(2, 1, 1, 1, 1).ones(), 4);
    assert.strictEqual(new Yatzy(1, 2, 1, 1, 1).ones(), 4);
  });
});

describe('Twos', () => {
  it('score the sum of 2s', () => {
    assert.strictEqual(new Yatzy(1, 4, 3, 5, 6).twos(), 0);
    assert.strictEqual(new Yatzy(1, 2, 3, 2, 6).twos(), 4);
    assert.strictEqual(new Yatzy(2, 2, 2, 2, 2).twos(), 10);
    assert.strictEqual(new Yatzy(1, 2, 2, 2, 6).twos(), 6);
    assert.strictEqual(new Yatzy(2, 1, 6, 1, 4).twos(), 2);
    assert.strictEqual(new Yatzy(2, 2, 3, 2, 2).twos(), 8);
  });
});

describe('Threes', () => {
  it('score the sum of 3s', () => {
    assert.strictEqual(new Yatzy(1, 2, 1, 2, 4).threes(), 0);
    assert.strictEqual(new Yatzy(1, 2, 3, 2, 3).threes(), 6);
    assert.strictEqual(new Yatzy(2, 3, 3, 3, 3).threes(), 12);
    assert.strictEqual(new Yatzy(3, 2, 3, 2, 3).threes(), 9);
    assert.strictEqual(new Yatzy(1, 3, 2, 2, 1).threes(), 3);
    assert.strictEqual(new Yatzy(1, 2, 6, 3, 6).threes(), 3);
    assert.strictEqual(new Yatzy(3, 3, 3, 3, 3).threes(), 15);
  });
});

describe('Fours', () => {
  it('score the sum of 4s', () => {
    assert.strictEqual(new Yatzy(1, 5, 5, 5, 5).fours(), 0);
    assert.strictEqual(new Yatzy(4, 4, 4, 5, 5).fours(), 12);
    assert.strictEqual(new Yatzy(4, 4, 5, 5, 5).fours(), 8);
    assert.strictEqual(new Yatzy(4, 5, 5, 5, 5).fours(), 4);
    assert.strictEqual(new Yatzy(5, 5, 5, 5, 4).fours(), 4);
    assert.strictEqual(new Yatzy(5, 4, 4, 5, 5).fours(), 8);
    assert.strictEqual(new Yatzy(6, 4, 4, 4, 4).fours(), 16);
  });
});

describe('Fives', () => {
  it('score the sum of 5s', () => {
    assert.strictEqual(new Yatzy(1, 1, 2, 3, 6).fives(), 0);
    assert.strictEqual(new Yatzy(4, 4, 4, 5, 5).fives(), 10);
    assert.strictEqual(new Yatzy(4, 4, 5, 5, 5).fives(), 15);
    assert.strictEqual(new Yatzy(5, 5, 5, 5, 5).fives(), 25);
    assert.strictEqual(new Yatzy(4, 1, 4, 5, 5).fives(), 10);
    assert.strictEqual(new Yatzy(5, 5, 5, 2, 5).fives(), 20);
  });
});

describe('Sixes', () => {
  it('score the sum of 6s', () => {
    assert.strictEqual(new Yatzy(4, 4, 4, 5, 5).sixes(), 0);
    assert.strictEqual(new Yatzy(4, 4, 6, 5, 5).sixes(), 6);
    assert.strictEqual(new Yatzy(6, 5, 6, 6, 5).sixes(), 18);
    assert.strictEqual(new Yatzy(4, 5, 6, 6, 5).sixes(), 12);
    assert.strictEqual(new Yatzy(6, 6, 6, 6, 5).sixes(), 24);
    assert.strictEqual(new Yatzy(6, 5, 6, 6, 6).sixes(), 24);
  });
});

describe('One pair', () => {
  it('scores the sum of the highest pair', () => {
    assert.strictEqual(new Yatzy(1, 2, 6, 3, 4).one_pair(), 0);
    assert.strictEqual(new Yatzy(1, 2, 2, 3, 4).one_pair(), 4);
    assert.strictEqual(new Yatzy(3, 4, 3, 5, 6).one_pair(), 6);
    assert.strictEqual(new Yatzy(5, 3, 3, 3, 5).one_pair(), 10);
    assert.strictEqual(new Yatzy(5, 3, 6, 6, 5).one_pair(), 12);
    assert.strictEqual(new Yatzy(4, 4, 6, 1, 2).one_pair(), 8);
  });
});

describe('Two pair', () => {
  it('scores the sum of the two pairs', () => {
    // refactor using the constructor
    assert.strictEqual(new Yatzy(3, 3, 5, 4, 5).two_pair(), 16);
    assert.strictEqual(new Yatzy(3, 3, 5, 5, 5).two_pair(), 16);
    // not enough coverage
  });
});

describe('Three of a kind', () => {
  it('scores the sum of the three of the kind', () => {
    assert.strictEqual(new Yatzy(3, 3, 3, 4, 5).three_of_a_kind(), 9);
    assert.strictEqual(new Yatzy(5, 3, 5, 4, 5).three_of_a_kind(), 15);
    assert.strictEqual(new Yatzy(3, 3, 3, 3, 5).three_of_a_kind(), 9);
    assert.strictEqual(new Yatzy(1, 2, 3, 4, 5).three_of_a_kind(), 0);
    assert.strictEqual(new Yatzy(1, 2, 2, 2, 3).three_of_a_kind(), 6);
    assert.strictEqual(new Yatzy(1, 2, 4, 4, 4).three_of_a_kind(), 12);
    assert.strictEqual(new Yatzy(2, 6, 6, 3, 6).three_of_a_kind(), 18);
  });
});

describe('Four of a kind', () => {
  it('scores the sum of the four of the kind', () => {
    assert.strictEqual(new Yatzy(1, 2, 3, 4, 5).four_of_a_kind(), 0);
    assert.strictEqual(new Yatzy(3, 3, 3, 1, 5).four_of_a_kind(), 0);
    assert.strictEqual(new Yatzy(3, 3, 3, 3, 5).four_of_a_kind(), 12);
    assert.strictEqual(new Yatzy(5, 5, 5, 4, 5).four_of_a_kind(), 20);
    assert.strictEqual(new Yatzy(3, 3, 3, 3, 3).four_of_a_kind(), 12);
    assert.strictEqual(new Yatzy(6, 3, 6, 6, 6).four_of_a_kind(), 24);
    assert.strictEqual(new Yatzy(3, 2, 2, 2, 2).four_of_a_kind(), 8);

  });
});

describe('Small straight', () => {
  it('scores 15 for a small straight', () => {
    assert.strictEqual(new Yatzy(1, 2, 3, 4, 5).small_straight(), 15);
    assert.strictEqual(new Yatzy(2, 3, 4, 5, 1).small_straight(), 15);
    assert.strictEqual(new Yatzy(1, 2, 2, 4, 5).small_straight(), 0);
  });
});

describe('Large straight', () => {
  it('scores 20 for a large straight', () => {
    assert.strictEqual(new Yatzy(6, 2, 3, 4, 5).large_straight(), 20);
    assert.strictEqual(new Yatzy(2, 3, 4, 5, 6).large_straight(), 20);
    assert.strictEqual(new Yatzy(1, 2, 2, 4, 5).large_straight(), 0);
  });
});

describe('Full house', () => {
  it('scores the sum of the full house', () => {
    assert.strictEqual(new Yatzy(6, 2, 2, 2, 6).full_house(), 18);
    assert.strictEqual(new Yatzy(2, 3, 4, 5, 6).full_house(), 0);
  });
});