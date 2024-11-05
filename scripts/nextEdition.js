const newEdition = {
  date: 'Coming soon',
  time: '',
  description: {
    title: 'We just wrapped up our third episode!',
    highlight: ['third'],
    text: "Get ready for upcoming events! We're working hard to bring you the best content and speakers. Stay tuned for more information."
  },
  location: {
    place: '',
    link: '',
    address: '',
    image: ''
  },
  speakers: [
    // {
    //   name: '',
    //   role: '',
    //   talk: '',
    //   talkLink: '',
    //   linkedin: '',
    //   image: ''
    // },
  ]
}

/*------------- Date -------------*/
const newEditionContainer = document.getElementById('new-edition');
const date = newEditionContainer.querySelector('#new-date');
date.textContent = newEdition.date;

const description = newEditionContainer.querySelector('#new-description');
const descriptionTitle = description.querySelector('h2');
const title = newEdition.description.title.split(' ');
const highlightedTitle = title.map(word => {
  if (newEdition.description.highlight.includes(word.toLowerCase())) {
    return `<span>${word}</span>`;
  }
  return word;
});
descriptionTitle.innerHTML = highlightedTitle.join(' ');
const text = description.querySelector('p');
text.textContent = newEdition.description.text;

/*------------- Location (Where to) -------------*/
const locationContainer = document.querySelector('#where-to');
if (newEdition.location.place) {
  const map = locationContainer.querySelector('#location-map');
  map.src = newEdition.location.image;
  const place = locationContainer.querySelector('#location-place');
  place.textContent = newEdition.location.place;
  place.href = newEdition.location.link;
  const adressContainer = locationContainer.querySelector('.address');
  const address = adressContainer.querySelector('#location-address');
  newEdition.location.address ? address.textContent = newEdition.location.address : adressContainer.style.display = 'none';
  const time = locationContainer.querySelector('.time h4');
  time.textContent = newEdition.time;
} else {
  locationContainer.style.display = 'none';
}

/*------------- Speakers -------------*/
const speakersContainer = document.querySelector('#speakers');
const speakersList = document.querySelector('.speakers-list');

if (newEdition.speakers.length) {
  newEdition.speakers.forEach(speaker => {
    const card = `
  <div class="card">
    <div class="speaker-info">
      <div class="photo">
        <img src="${speaker.image}" alt="${speaker.name}'s profile picture">
      </div>
      <div class="text-info"></div>
      <div class="personal">
        <h2>${speaker.name}</h2>
        <p>${speaker.role}</p>
        <h3>${speaker.talk}</h3>
        <a href="${speaker.talkLink}" target="_blank">Learn more</a>
      </div>
      <div class="social-media">
        <a href="${speaker.linkedin}" target="_blank "><img src="img/linkedin.svg" alt="linkedin-logo"></a>
      </div>
    </div>
  </div>
  `;
    speakersList.innerHTML += card;
  });
} else {
  speakersContainer.style.display = 'none';
}