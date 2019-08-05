document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-player-form');
  newItemform.addEventListener('submit', handleNewCompetitorFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewCompetitorFormSubmit = function (event) {
event.preventDefault();

const competitorNew = createCompetitor(event.target);
const competitor = document.querySelector('#competitors');
competitor.appendChild(competitorNew);

event.target.reset();
}

const createCompetitor = function (form) {
const competitorItem = document.createElement('li');
competitorItem.classList.add('competitor-list');

const fullName = document.createElement('h2');
fullName.textContent = form.full_name.value;
competitorItem.appendChild(fullName);

// const lastName = document.createElement('h3');
// lastName.textContent = form.last_name.value;
// competitorItem.appendChild(lastName);

const handedness = document.createElement('h4');
handedness.textContent = form.category.value;
competitorItem.appendChild(handedness);

const gender = document.createElement('p');
gender.textContent = form.gender.value;
competitorItem.appendChild(gender);

return competitorItem;
}

const handleDeleteAllClick = function (event) {
const competitor = document.querySelector('#competitors');
competitor.innerHTML = '';
}
