import cn from '../cn';

describe('cn', () => {
  it('merges classNames appropriately', () => {
    expect(
      cn('base', null, 9, 'another', false && 'nope', true && 'yup')
    ).toEqual(
      'base another yup'
    );
  });
})
