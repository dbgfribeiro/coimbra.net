const newEdition = {
  date: 'March 20th',
  time: '06:00 PM',
  description: {
    title: 'We\'re back for an exclusive edition!',
    highlight: ['back'],
    text: "Coimbra.NET and Global AI + Power Platform Bootcamps are joining forces to bring an even more exciting event to our community! With events happening in both Coimbra and Lisboa, this partnership will bring even more high-quality content and insights to our community."
  },
  location: {
    place: 'Anfiteatro B1 - Departamento de Engenharia Informática',
    link: 'https://maps.app.goo.gl/QYPM6PnPfD66RCPb9',
    address: 'Pólo II da Universidade de Coimbra, R. Silvio Lima',
    image: 'img/map_dei.png'
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