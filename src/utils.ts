export function deepMerge<T extends object>(target: T, source: T): T {
  for (const key in source) {
    if (Object.hasOwn(source, key)) {
      if (source[key] instanceof Object && target[key] instanceof Object) {
        target[key] = deepMerge(target[key], source[key])
      } else {
        target[key] = source[key]
      }
    }
  }
  return target
}
