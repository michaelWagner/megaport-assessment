/**
 * Get the value of the data at the specified path in the supplied object.
 *
 * @param {String} path - the object path e.g. 'address.office.state'
 * @param {Object} obj - the object to search within
 * @returns {*} - the value at the specified path or undefined if not found
 */
export function getValue(path, obj) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj)
}