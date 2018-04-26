function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const selected = document.querySelectorAll('.ranked-list li');

  for (let i = 0; i < selected.length; i++) {
    selected[i].innerHTML = parseInt(selected[i].innerHTML) + n;
  }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}
