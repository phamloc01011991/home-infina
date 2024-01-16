const starsContainer = document.querySelector('.stars');

for (let n = 1; n <= 100; n++) {
  const container = document.createElement('div');
  container.classList.add('container');

  const star = document.createElement('div');
  star.classList.add('star');

  container.appendChild(star);
  starsContainer.appendChild(container);
}