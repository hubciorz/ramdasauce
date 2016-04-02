/**
 * Prints the parameter to console.log.
 *
 * Useful when placed inside pipe or compose to inspect
 * the value as it passes on through.
 *
 * @since v0.1.0
 * @sig * -> *
 * @param {*} the value to log
 * @return {*} the same value passed in
 * @example
 * R.pipe(
 *  R.concat('!!')
 *  RS.log,  // <-- prints 'HI!!' to your console
 *  R.toLower
 * )('HI') //=> 'hi!!'
 */
export default (x) => {
  console.log(x)
  return x
}