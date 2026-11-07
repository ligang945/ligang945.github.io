'use strict'

/**
 * Serialize a value for safe embedding inside an inline <script> element.
 * JSON.stringify alone does not prevent a string containing "</script>"
 * from terminating the script element.
 */
hexo.extend.helper.register('json_script', function jsonScript(value) {
  const json = JSON.stringify(value)
  if (json === undefined) {
    throw new TypeError('json_script requires a JSON-serializable value')
  }

  return json
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
})
