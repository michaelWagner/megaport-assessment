/**
 * Get the value of the data at the specified path in the supplied object.
 *
 * @param {String} path - the object path e.g. 'address.office.state'
 * @param {Object} obj - the object to search within
 * @returns {any | undefined} - the value at the specified path or undefined if not found
 */
export function getValue(path, obj) {
  // Check if the object is not an object or is null
  if (typeof obj !== 'object' || obj === null) {
    return undefined
  }

  // Return the entire object if the path is an empty string
  if (!path) {
    return obj
  }

  // Use the reduce function to traverse the object according to the path
  return path.split('.').reduce((acc, part) => acc && acc[part], obj)
}