const events = [
  {
    title: "Season 1",
    episodes: [
      {
        title: "Episode 1",
        date: "21-04-2023",
        location: 'Nest Collective',
        adress: 'Rua da Sota 2A - Coimbra',
        talks: [
          {
            speaker: "Joana Carvalho",
            avatar: "img/JoanaCarvalho.png",
            role: "Site Reliability Engineer @ Virtuoso",
            topic: "Observability from the ground up with Otel and .NET",
            url: "https://www.linkedin.com/in/jc-performance",
            video: "https://www.youtube.com/embed/iG1It1JkVBQ?si=1mwA1bjl-7SQiUYA"
          },
          {
            speaker: "João Antunes",
            avatar: "img/JoaoAntunes.png",
            role: "Software Architect @ Openvia Mobility",
            topic: "OOPs, I did it again",
            url: "https://www.linkedin.com/in/joaofbantunes",
            video: "https://www.youtube.com/embed/ZBGuKGsVqTQ?si=aYy30QiKa5Hq_kz-"
          }
        ]
      },
      {
        title: "Episode 2",
        date: "13-10-2023",
        location: 'Nest Collective',
        adress: 'Rua da Sota 2A - Coimbra',
        talks: [
          {
            speaker: "Pedro Sousa",
            avatar: "img/PedroEmanuelSousa.png",
            role: "Team Lead @ OutSystems",
            topic: "Are you using LINQ as you should?",
            url: "https://www.linkedin.com/in/pedroemsousa",
            thumb: "img/pedro_sousa_thumb.png",
          },
          {
            speaker: "Pedro Sousa",
            avatar: "img/PedroSousa.png",
            role: "Tech Lead @ Valtech",
            topic: "Unleashing the Cloud Beast: Maximizing Efficiency with VMSS Hosted Agents",
            url: "https://www.linkedin.com/in/pmsousa",
            video: "https://www.youtube.com/embed/OA5-Y7Z3jAA?si=WTedhsw_WQ3nGyB4"
          }
        ]
      },
      {
        title: "Episode 3",
        date: "25-10-2024",
        location: 'Instituto Pedro Nunes',
        adress: 'R. Pedro Nunes Edifício C, Coimbra',
        talks: [
          {
            speaker: "Sergey Chubarov",
            avatar: "https://cache.sessionize.com/image/918e-400o400o2-4b-e84f-4024-92c6-32bf91e5cf73.1f82d05d-52d9-476a-9205-084d2a62abdb.jpg",
            role: "Ethical Hacker",
            topic: "AI for Next-Gen Security: OpenAI and Copilot for Security Synergy",
            url: "https://www.linkedin.com/in/schubarov",
            thumb: "img/sergey_chubarov_thumb.png",
          },
          {
            speaker: "André Melancia",
            avatar: "https://cache.sessionize.com/image/d1f9-400o400o2-66-7c67-4961-9c5d-e8706292aaaf.f8c99bf5-1f75-4301-8488-1d66c63ebb60.PNG",
            role: "Human Being (Dev/DBA @Microsoft MCT)",
            topic: "Develop for Inclusion using AI: An Azure Story",
            url: "https://www.linkedin.com/in/andremelancia",
            thumb: "img/andre_melancia_thumb.png",
          }
        ]
      }
    ]
  },
]

const eventsContainer = document.querySelector('.events-container');

events.forEach(season => {
  seasonWrapper = `
    <div class="season-wrapper">
      <span class="timeline"></span>
      <span class="timeline-end"></span>
      ${season.episodes.map(episode => {
    return `
          <div class="episode-container">
            <div class="episode-container-header">
              <div class="episode-title">
                <span>${episode.date}</span>
                <h3>${episode.title}</h3>
                <p>${season.title}</p>
              </div>
              <div class="episode-location">
                <span>${episode.location}</span>
                <p>
                  <img src="img/location-pin.svg" alt="Location icon">
                  ${episode.adress}
                </p>
              </div>
            </div>
            <div class="episode-container-body">
              ${episode.talks.map(talk => {
      return `
                  <div class="talk">
                    <div class="talk-header">
                      <div class="avatar-wrapper">
                        <img src="${talk.avatar}" alt="${talk.speaker}">
                      </div>
                      <div class="talk-details">
                        <h4>${talk.speaker}</h4>
                        <p class="role">${talk.role}</p>
                        <p class="topic">${talk.topic}</p>
                        <a href="${talk.url}">Learn more</a>
                      </div>
                    </div>
                    <div class="talk-body">
                      ${!talk.video ? `
                        <img src="${talk.thumb}" alt="${talk.speaker}">
                      ` : `
                        <iframe 
                          src="${talk.video}"
                          title='YouTube video player' 
                          frameborder='0' 
                          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' 
                          allowfullscreen
                        /></iframe>
                      `}
                    </div>
                  </div>
                `
    }).join('')}
            </div>
          </div>
        `
  }).join('')}
    </div>
  `
  eventsContainer.innerHTML += seasonWrapper;
});