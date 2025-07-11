import { toPoint, forward } from 'mgrs';

/**
 * @deprecated v3.0.0 - use proj4.toPoint instead
 * @param {number | import('./core').TemplateCoordinates | string} x
 * @param {number} [y]
 * @param {number} [z]
 */
function Point(x, y, z) {
  if (!(this instanceof Point)) {
    return new Point(x, y, z);
  }
  if (Array.isArray(x)) {
    this.x = x[0];
    this.y = x[1];
    this.z = x[2] || 0.0;
  } else if (typeof x === 'object') {
    this.x = x.x;
    this.y = x.y;
    this.z = x.z || 0.0;
  } else if (typeof x === 'string' && typeof y === 'undefined') {
    var coords = x.split(',');
    this.x = parseFloat(coords[0]);
    this.y = parseFloat(coords[1]);
    this.z = parseFloat(coords[2]) || 0.0;
  } else {
    this.x = x;
    this.y = y;
    this.z = z || 0.0;
  }
  console.warn('proj4.Point will be removed in version 3, use proj4.toPoint');
}

Point.fromMGRS = function (mgrsStr) {
  return new Point(toPoint(mgrsStr));
};
Point.prototype.toMGRS = function (accuracy) {
  return forward([this.x, this.y], accuracy);
};
export default Point;
