const newEdition = {
  date: 'October 13th',
  time: '05:30 PM',
  description: {
    title: 'We are back after a rejuvenating break!',
    highlight: 'back',
    text: "Get ready for another insightful event where we'll explore the latest trends, technologies, and best practices in the .NET ecosystem. Whether you're a seasoned developer or just starting your journey, there's something for everyone in our vibrant community."
  },
  // location: {
  //   place: 'Nest Collective',
  //   link: 'https://www.nestcollective.co/',
  //   address: 'Rua da Sota 2A - Coimbra',
  //   image: 'img/Map.png'
  // },
  // speakers: [
  //   {
  //     name: 'Pedro Sousa',
  //     role: 'Tech Lead @ Valtech',
  //     talk: 'Unleashing the Cloud Beast: Maximizing Efficiency with VMSS Hosted Agents',
  //     talkLink: 'https://sessionize.com/s/pmsousa/unleashing-the-cloud-beast-maximizing-efficiency-w/77214',
  //     linkedin: 'https://www.linkedin.com/in/pmsousa/'
  //   }
  // ]
}

/*------------- Date -------------*/
const newEditionContainer = document.getElementById('new-edition');
const date = newEditionContainer.querySelector('#new-date');
date.textContent = newEdition.date;

const description = newEditionContainer.querySelector('#new-description');
const descriptionTitle = description.querySelector('h2');
const title = newEdition.description.title.split(' ');
const highlightedTitle = title.map(word => {
  if (word === newEdition.description.highlight) {
    return `<span>${word}</span>`;
  }
  return word;
});
descriptionTitle.innerHTML = highlightedTitle.join(' ');
const text = description.querySelector('p');
text.textContent = newEdition.description.text;

/*------------- Location (Where to) -------------*/
const locationContainer = document.querySelector('#where-to');
if (newEdition.location) {
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

if (newEdition.speakers) {
  newEdition.speakers.forEach(speaker => {
    const card = `
  <div class="card">
    <div class="speaker-info">
      <div class="photo">
        <img src="img/PedroSousa.png" alt="Pedro Sousa's profile picture">
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