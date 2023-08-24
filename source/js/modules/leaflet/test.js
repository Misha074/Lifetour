const options = {
  rootMargin: '200px',
  threshold: 0,
};

const trueCallback = function (entries, observer) {
  entries.forEach((entry) => {
    const {isIntersecting} = entry;

    if (isIntersecting) {
      // eslint-disable-next-line no-console
      console.log('сработало');
    }
  });
};

const observer = new IntersectionObserver(trueCallback, options);

const target = document.querySelector('.contacts');
observer.observe(target);
