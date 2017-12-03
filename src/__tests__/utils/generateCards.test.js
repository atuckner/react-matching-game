import generateCards from '../../utils/generateCards';

describe('generateCards', () => {
  it('should create an array of 16 cards', () => {
    expect(generateCards().length).toEqual(16);
  });
});
