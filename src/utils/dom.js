export const closestParent = (el, predicate) =>
  el && (predicate(el) ? el : closestParent(el.parentNode, predicate));

export const getClassList = className => {
  let classList = [];

  if (typeof className === 'string') {
    classList = className.split(' ');
  } else if (typeof className === 'object' && className.baseVal) {
    classList = className.baseVal.split(' ');
  }

  return classList;
};

export const closestParentWithClass = (target, targetClass) =>
  closestParent(target, el => getClassList(el.className).includes(targetClass));
