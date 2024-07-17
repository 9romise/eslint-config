export function deepMerge<T>(target: T, source: T) {
  for (const key in source) {
    if (Object.hasOwnProperty.call(source, key)) {
      if (source[key] instanceof Object && target[key] instanceof Object) {
        target[key] = deepMerge(target[key], source[key])
      } else {
        target[key] = source[key]
      }
    }
  }
  return target
}
