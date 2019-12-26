import isUndefined from './isUndefined';

describe('isUndefined', () => {
  it('should return true when value is a undefined', () => {
    expect(isUndefined(undefined)).toBeTruthy();
  });

  it('should return false when value is not a undefined', () => {
    expect(isUndefined(null)).toBeFalsy();
    expect(isUndefined('')).toBeFalsy();
    expect(isUndefined(-1)).toBeFalsy();
    expect(isUndefined(0)).toBeFalsy();
    expect(isUndefined(1)).toBeFalsy();
    expect(isUndefined({})).toBeFalsy();
    expect(isUndefined([])).toBeFalsy();
    expect(isUndefined(new String('test'))).toBeFalsy();
    expect(isUndefined(() => null)).toBeFalsy();
  });
});
