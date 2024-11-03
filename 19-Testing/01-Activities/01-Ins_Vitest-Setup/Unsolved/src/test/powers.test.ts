import Powers from '../powers.js';



describe('Powers', () => {
  describe('square', () => {
    it('should return the power of a number', () => {
      const powers = new Powers();
      expect(powers.square(3)).toBe(9);
    });
  });
});

