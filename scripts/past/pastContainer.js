const pastEvents = [
  {
    id: 0,
    quote: "Observability is the hability you have to ask questions to your system",
    keyWords: ["ask", "questions"],
    author: "Joana Carvalho",
    role: "Software Architect @ Openvia Mobility",
    image: "../img/talks/s1ep1t1.png"
  },
  {
    id: 1,
    quote: "Don’t hate what you are not doing",
    keyWords: ["not"],
    author: "João Antunes",
    role: "Site Reliability Engineer @ Virtuoso",
    image: "../img/talks/s1ep1t2.png"
  },
  {
    id: 2,
    quote: "Are you using LINQ like you should?",
    keyWords: ["LINQ"],
    author: "Pedro Sousa",
    role: "Team Lead @ Valtech",
    image: "../img/talks/s1ep2t1.png"
  },
  {
    id: 3,
    quote: "Unleashing the Cloud Beast",
    keyWords: ["Unleashing"],
    author: "Pedro Sousa",
    role: "Team Lead @ Valtech",
    image: "../img/talks/s1ep2t2.png"
  }
]

/*-------------------------DESKTOP-------------------------*/

const pastContainer = document.querySelector('.past-container');
pastEvents.forEach(event => {
  const pastCard = document.createElement('div');
  pastCard.classList.add('past-card');
  const quote = event.quote.split(' ');
  const highlightedQuote = quote.map(word => {
    if (event.keyWords.includes(word)) {
      return `<span class="highlight">${word}</span>`;
    }
    return word;
  });
  pastCard.innerHTML = `
    <img src="${event.image}" alt="placeholder" class="event-thumb">
    <div class="event-info">
      <h1>${highlightedQuote.join(' ')}</h1>
      <div class="author-info">
        <h4>${event.author}</h4>
        <p>${event.role}</p>
        <img src="../img/quote.svg" alt="quote-symbol" class="quote">
      </div>
    </div>
  `;
  pastContainer.appendChild(pastCard);
});

$('.past-container').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1,
  speed: 20000,
  centerMode: true,
  infinite: true,
  cssEase: 'linear',
  pauseOnHover: false,
  dots: false,
  arrows: false,
  spaceBetween: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        speed: 8000,
      }
    },
  ]
});

/*-------------------------MOBILE-------------------------*/
const pastContainerMobile = document.querySelector('.past-container-mobile');
pastEvents.forEach(event => {
  const pastCard = document.createElement('div');
  pastCard.classList.add('past-card');
  const quote = event.quote.split(' ');
  const highlightedQuote = quote.map(word => {
    if (event.keyWords.includes(word)) {
      return `<span class="highlight">${word}</span>`;
    }
    return word;
  });
  pastCard.innerHTML = `
    <img src="${event.image}" alt="placeholder" class="event-thumb">
    <div class="event-info">
      <h1>${highlightedQuote.join(' ')}</h1>
      <div class="author-info">
        <h4>${event.author}</h4>
        <p>${event.role}</p>
        <img src="../img/quote.svg" alt="quote-symbol" class="quote">
      </div>
    </div>
  `;
  pastContainerMobile.appendChild(pastCard);
});

$('.past-container-mobile').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  dots: false,
  arrows: false,
});
