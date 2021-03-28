// mappers
function map(src, fn) {
  let out = [];

  for (const val of src) {
    out.push(fn(val));
  }

  return out;
}

// reducers
function reduce(src, fn, start) {
  let out = start ? start : src[0];
  let i = start ? 0 : 1;

  for (; i < src.length; i++) {
    out = fn(src[i], out);
  }

  return out;
}
