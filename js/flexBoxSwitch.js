document.addEventListener('DOMContentLoaded', function () {
  let btns = document.querySelector('.btns').querySelectorAll('input'),
    dirs = document.querySelector('.dir').querySelectorAll('input'),
    container = document.querySelector('.container');

  for (i of btns) {
    (function (i) {
      i.addEventListener(
        'click',
        function () {
          clearClasses(container, btns);
          container.classList.add(i.value);
        },
        false
      );
    })(i);
  }

  for (i of dirs) {
    (function (i) {
      i.addEventListener(
        'click',
        function () {
          clearClasses(container, dirs);
          container.classList.add(i.value);
        },
        false
      );
    })(i);
  }

  function clearClasses(el, cl) {
    for (i of cl) {
      el.classList.remove(i.value);
    }
  }
});
