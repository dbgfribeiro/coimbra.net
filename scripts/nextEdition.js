const newEdition = {
  date: 'October 25th',
  time: '05:30 PM',
  description: {
    title: 'We are back after a rejuvenating break!',
    highlight: 'back',
    text: "Get ready for another insightful event where we'll explore the latest trends, technologies, and best practices in the .NET ecosystem. Whether you're a seasoned developer or just starting your journey, there's something for everyone in our vibrant community."
  },
  location: {
    place: 'Instituto Pedro Nunes',
    link: 'https://www.ipn.pt/',
    address: 'R. Pedro Nunes Edifício C, Coimbra',
    image: 'img/map_s2.png'
  },
  speakers: [
    {
      name: 'Sergey Chubarov',
      role: 'Ethical Hacker',
      talk: 'AI for Next-Gen Security: OpenAI and Copilot for Security Synergy',
      talkLink: 'https://sessionize.com/s/schubarov/ai-for-next-gen-security-openai-and-copilot-for-se/93437',
      linkedin: 'https://www.linkedin.com/in/schubarov',
      image: 'https://cache.sessionize.com/image/918e-400o400o2-4b-e84f-4024-92c6-32bf91e5cf73.1f82d05d-52d9-476a-9205-084d2a62abdb.jpg'
    },
    {
      name: 'André Melancia',
      role: 'Human Being (Dev/DBA @Microsoft MCT)',
      talk: 'Develop for Inclusion using AI: An Azure Story',
      talkLink: 'https://sessionize.com/s/Andy/develop-for-inclusion-using-ai-an-azure-story/95930',
      linkedin: 'https://www.linkedin.com/in/andremelancia',
      image: 'https://cache.sessionize.com/image/d1f9-400o400o2-66-7c67-4961-9c5d-e8706292aaaf.f8c99bf5-1f75-4301-8488-1d66c63ebb60.PNG'
    }
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