export function debounce(func, delay) {
  let timer = null;
  return function (...args) {
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}//防抖动(防止函数频繁的调用)