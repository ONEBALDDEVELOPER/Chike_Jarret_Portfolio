# Chike Jarret Andy | Portfolio

A single-page personal portfolio site — hero intro, about/skills, projects, and a contact form — built with plain HTML, CSS, and JavaScript (no build step, no framework).

## Sections

- **Header/Nav** — sticky nav with anchor links (Home, About, Projects, Contact) and a mobile hamburger menu.
- **Hero** — profile photo, a `typed.js`-animated role title, intro blurb, links to the Projects section and CV download, and social links (LinkedIn, GitHub).
- **About** — bio and a grid of skill tags (HTML, CSS, JavaScript, React, Node, Express, SQL, PostgreSQL, MongoDB, Bootstrap, Git, GitHub, Jest).
- **Projects** — cards rendered dynamically from `projects.js` (see "Adding a project" below).
- **Contact** — a form that posts to Formspree, with an inline success/error message instead of a page redirect.
- **Footer** — social links and copyright.

## Running locally

```bash
npm install
npm start
```

`npm start` runs [live-server](https://github.com/tapio/live-server), which serves the site and auto-reloads on file changes.

## Project structure

```
index.html        Page markup
style.css          All styling
function.js        Page behavior (nav menu, typing effect, project rendering)
projects.js         Your project data — edit this to add/update projects
assets/             Images, icons, project screenshots, and the CV PDF
```

## Adding a project

Projects aren't hardcoded into `index.html`. Instead, `function.js` reads a list of project objects from `projects.js` and builds the project cards on page load. To add a project, open `projects.js` and add an object to the `projects` array:

```js
const projects = [
  {
    title: "Lightweight",
    image: "./assets/images/project-placeholder.svg",
    description:
      "Lightweight is a full stack database-driven application I created for users to search and plan their daily workouts routine.",
    link: "#"
  }
  // add another project here
]
```

Each field:

| Field         | Description                                                                 |
| ------------- | ---------------------------------------------------------------------------- |
| `title`       | Project name, shown as the card heading                                     |
| `image`       | Path to a screenshot (drop the image in `assets/images/` and reference it here) |
| `description` | A short paragraph describing the project                                    |
| `link`        | Where the "View Project" button goes — a live demo, repo, or case study URL |

No other file needs to change — the project section on the page updates automatically based on what's in this array.

## Contact form

The contact form submits to [Formspree](https://formspree.io) (`index.html`'s `#contact-form`), which forwards submissions to the email used to create the Formspree form. `function.js` intercepts the submit with `fetch` so visitors see an inline "message sent" confirmation instead of being redirected to Formspree's page.

To point the form at a different Formspree form (or a new account), update the `action` attribute on `#contact-form` in `index.html` with your form's endpoint from the Formspree dashboard.

Although free tier is capped at 50 submissions/month, it was a good way to test the form submissions worked just fine.

## Notes

- "Download CV" button links to `#` — add a real resume file and update the `href` in `index.html` when you have one.
