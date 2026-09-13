# bishnuthapa.info.np

Personal portfolio for Bishnu Thapa, DevOps Engineer, Trainer and DevSecOps Consultant.
It is a plain static site, no build step, so the same folder can be served by Cloudflare
Pages or by nginx on a server without any changes.

## Preview locally

From this folder run one of these, then open http://localhost:8000

    python3 -m http.server 8000

or

    npx serve .

## What to edit

Open index.html and search for these to make it yours:

- The hero blurb and role line near the top of the body.
- Monitored services section: swap the tool names in the chips to match your real stack.
- Service history section: two entries are marked TODO. Replace the company names, dates
  and descriptions with your real roles.
- Contact section: two links marked with data-todo are placeholders for your GitHub and
  LinkedIn URLs. The contact form action points at a placeholder Formspree endpoint;
  create a free form at formspree.io and paste your endpoint, or delete the form and keep
  email and phone only.
- Certifications are already filled in. RHCSA and RHCE are listed together; adjust if needed.

Colors and fonts live in css/styles.css at the top, under the Tokens section. The site
ships with a dark and a light theme and a toggle in the header.

## Replace the resume link

There is no resume file yet. Add your resume PDF to the assets folder and link to it from
the hero or contact area if you want a download button.

## Deploy

Two supported paths, both documented in the separate deployment guide:

1. Cloudflare Pages, free and easiest. Push this folder to a GitHub repo, create a Pages
   project with build command empty and output directory set to the repo root, then attach
   the custom domains bishnuthapa.info.np and www. Cloudflare creates the DNS and SSL.

2. Bare EC2 with nginx behind Cloudflare DNS, for learning. Copy this folder to
   /var/www/portfolio on the server and point an A record at the instance.

## Files

    index.html          markup and content
    css/styles.css      all styling and theme tokens
    js/main.js          theme toggle, mobile nav, active nav, uptime count up
    assets/favicon.svg  favicon
    assets/og-image.png social share image
    assets/og-image.svg source for the share image
    robots.txt          crawler rules
    sitemap.xml         single page sitemap
