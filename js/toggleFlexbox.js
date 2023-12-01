document.addEventListener('DOMContentLoaded', function () {
  let container = document.querySelector('.container'),
    dirs = document.querySelector('.dir').querySelectorAll('input');

  document.querySelector('button').addEventListener(
    'click',
    function () {
      container.classList.toggle('flexcontainer');
    },
    false
  );

  for (let i of dirs) {
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
    for (let i of cl) {
      el.classList.remove(i.value);
    }
  }
});
