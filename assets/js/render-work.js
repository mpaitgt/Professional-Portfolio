const myJobs = [
  {
    title: 'Software UI Developer',
    company: 'Bearclaw',
    duration: 'August 2020 - Present',
    technologies: ['SCSS', 'jQuery', 'PHP', 'MySQL'],
    type: 'Freelance',
    github_link: '',
    production_link: '',
    description: 'I was brought onto this project to bring a UI design to life. Recruiting software in its development phase, Bearclaw needed a frontend-focused developer to improve the application\'s design and the user experience.',
    bullets: [
      'I abandoned Bootstrap and developed a complex dashboard with CSS Grid, and built the foundation of the software\'s codebase with the SCSS preprocessor making use of variables, mixins, functions, and more.',
      'I revisited jQuery and built new functionality like pop up forms, stylish navigation, and setting responsive table heights.',
      'I learned PHP and used MySQL queries to add new full-stack features, including a kanban board and an appointment calendar, using third-party APIs.',
      'Most recently, I developed a user setting to toggle light/dark mode. I also extended this feature to our custom Chrome extension.',
      'I continue today, improving on older features and building new ones.'
    ]
  },
  {
    title: 'Frontend Web Developer',
    company: 'The Floor Is Yours',
    duration: 'February 2020 - Present',
    technologies: ['React', 'Material UI', 'Node.js/Express'],
    type: 'Freelance',
    github_link: 'https://github.com/mpaitgt/tfiy',
    production_link: 'https://tfiy.herokuapp.com',
    description: 'Through Bootcamp, I was connected with the owner of a dance studio who asked me to develop a beautiful website for her new business. I was on a roll with learning React at the time, and didn\'t want this opportunity to stop me in my tracks.',
    bullets: [
      'I built this project with React, using the Material UI component library.',
      'I familiarized myself with the advantages of using a component library, and used it to do everything from make the site mobile-friendly to creating page transition animations and a class accordion.',
      'I used the Google Maps API to display the studio\'s location on the contact page, and set up a simple Node.js/Express server to handle contact form submissions with the Nodemailer npm.'
    ]
  },
  {
    title: 'Frontend Web Developer',
    company: 'Salvage Boy',
    duration: 'July 2020',
    technologies: ['HTML', 'SCSS'],
    type: 'Freelance',
    github_link: '',
    production_link: 'https://salvageboy.com',
    description: 'A small software company that helps used motor part sellers better manage eBay accounts, I was hired to re-design the home page of the website.',
    bullets: []
  },
  {
    title: 'Digital Marketing Specialist',
    company: 'HearingLife',
    duration: 'April 2018 - Present',
    technologies: ['HTML', 'CSS', 'JavaScript', 'APIs', 'Email Analytics'],
    type: 'Full-Time',
    github_link: '',
    production_link: 'https://salvageboy.com',
    description: 'I started with HearingLife as coordinator in 2018, and got promoted to email/web around the time I enrolled at bootcamp. While not a "developer" by job title, in 2020 I spearheaded the marketing team\'s effort to integrate the Podium Reviews API on our over 400 location web pages. This included:',
    bullets: [
      'Writing the script to fetch review data from the Podium API with location IDs and parsing the JSON response.',
      'Structuring HTML and designing for style and mobile-friendly functionality.',
      'A team-wide QA testing process in which all data was matched with its source to ensure accuracy.',
      'I\'ve also done a lot of fun work in email, designing creative layouts in XD and implementing strong and consistent analytics reporting.'
    ]
  },
];

function renderJobs(arr) {
  const work = document.querySelector('.work-container');

  work.innerHTML = arr.map((job, index) => {
    return `
      <div class="job-wrapper">
        <div class="job-header">
          <div class="job-headline-wrapper">
            <div>
              <h3 class="section__headline large">
                ${job.company}
              </h3>
            </div>
          </div>
          <div style="display: flex; justify-content: flex-start; align-items: flex-start;">
            <div>
              <h3 class="job-title">${job.title}</h3>
              <div class="job-details">
                <h4>${job.duration}<br>
                ${job.type}</h4>
                <div class="job__tech-container">
                  ${job.technologies.map((tech) => {
                    return `<span class="job__tech">${tech}</span>`;
                  }).join('')}
                </div>
                </h4>
              </div>
            </div>
          </div>
          <div class="job-description${index === 0 ? " is-visible" : ""}">
            <p class="section__copy">
              ${job.description}
            </p>
            <ul class="work-bullets">
              ${job.bullets.map((bullet) => {
                return `<li>${bullet}</li>`;
              }).join('')}
            </ul>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function attachShowEvent() {
  document.querySelectorAll('.job-wrapper').forEach(function(item, index, array) {
    item.addEventListener('click', function(e) {
  
      const allJobs = document.querySelectorAll('.job-description');
      const thisJob = item.querySelector('.job-description');
  
      if (thisJob.classList.contains('is-visible')) {
        hideElement(thisJob);
      } else {
        for (let i = 0; i < allJobs.length; i++) {
          if (allJobs[i].classList.contains('is-visible')) {
            hideElement(allJobs[i]);
          }
        }
        showElement(thisJob);
      }
    });
  
  });
}

// work job description height animation
const showElement = (el) => {

  const getHeight = () => {
    el.style.display = 'block';
    let height = el.scrollHeight + 'px';
    el.style.display = '';
    return height;
  }

  let height = getHeight();
  el.classList.add('is-visible');
  el.style.height = height;
  // el.querySelector('.fading-arrow').classList.add('close');
};

const hideElement = (el) => {
  el.style.height = el.scrollHeight + 'px';

  window.setTimeout(function () {
		el.style.height = '0';
	}, 1);

	window.setTimeout(function () {
		el.classList.remove('is-visible');
    // el.querySelector('.fading-arrow').classList.remove('close');
	}, 200);
};