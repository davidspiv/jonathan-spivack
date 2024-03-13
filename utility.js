// https://www.freecodecamp.org/news/javascript-debounce-example/
const debounce = (func, delay = 300) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

const debounceLeading = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    if (!timer) {
      func.apply(this, args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
    }, timeout);
  };
};

// https://johnkavanagh.co.uk/articles/throttling-scroll-events-in-javascript/
const throttle = (fn, delay = 300) => {
  let time = Date.now();
  return () => {
    if (time + delay - Date.now() <= 0) {
      fn();
      time = Date.now();
    }
  };
};
