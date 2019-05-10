import { closestParent, getClassList, closestParentWithClass } from '../dom';

let div;
let classTarget;
let contentChild;
let baby;

describe('DOM Helpers', () => {
  beforeEach(() => {
    div = document.createElement('div');
    div.className = 'target';

    classTarget = document.createElement('div');
    classTarget.className = 'target before parent';
    div.appendChild(classTarget);

    contentChild = document.createElement('div');
    contentChild.innerText = 'BOOYAH';
    classTarget.append(contentChild);

    baby = document.createElement('div');
    contentChild.append(baby);
  });

  it('closestParent - finds the parent arbitarily', () => {
    const found = closestParent(baby, el => el.innerText === 'BOOYAH');
    expect(found).toEqual(contentChild);
  });

  it('closestParentWithClass - finds the parent by class, stopping at first', () => {
    const found = closestParentWithClass(baby, 'target');
    expect(found).toEqual(classTarget);
  });

  it('getClassList - returns array of class strings', () => {
    expect(getClassList(classTarget.className)).toEqual(['target', 'before', 'parent']);
  });
});
