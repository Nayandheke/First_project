# nayandheke.com.np

Personal portfolio for **Nayan Dheke**, a BCA student and AWS Certified Solutions Architect – Associate focused on Cloud and DevOps.

It is a plain static site with no build step, so the same folder can be served using Cloudflare Pages, nginx, or a simple local web server.

## Preview locally

From this folder, run one of these commands and open http://localhost:8000

```
python3 -m http.server 8000
```

or

```
npx serve .
```

## What to edit

Open `index.html` and update these sections when needed:

* **Hero section:** Update the role, introduction, and links to match your current career focus.
* **Technical skills:** Update the technology chips to reflect the tools and technologies you are actively using or learning.
* **Education and experience:** Keep your BCA education, AWS certification, and relevant practical projects up to date.
* **Certifications:** Add new certifications when completed. Currently listed:

  * AWS Certified Solutions Architect – Associate — Amazon Web Services, Dec 2025
  * MERN Stack Web Development — Broadway Infosys, Aug 2023
* **Contact section:** GitHub and LinkedIn links are already connected to your profiles. Update your email or phone number if they change.
* **Contact form:** The Formspree endpoint is still a placeholder. Create a form at Formspree and replace the form action with your endpoint, or remove the form and keep the direct contact links.

## Technical focus

The portfolio currently highlights:

* AWS Cloud
* Linux
* Bash
* Python
* Git and GitHub
* GitHub Actions and CI/CD
* Networking fundamentals
* Infrastructure and cloud automation
* Docker fundamentals
* AWS services including EC2, S3, IAM, VPC, Lambda, RDS and SQS

The skills section should represent your **actual hands-on experience and current learning**, rather than listing technologies only for the sake of the portfolio.

## Projects

Relevant projects can be added to the portfolio as they are completed.

Current areas of practical work include:

* AWS serverless image compression using S3 and Lambda
* Static website hosting using S3 and CloudFront
* GitHub-based CI/CD workflows
* Linux server monitoring and alerting
* Linux system administration and Bash scripting
* AWS hands-on labs and cloud architecture exercises

## Replace the resume link

Add your latest resume PDF to the `assets` folder and link it from the hero or contact section if you want a **Download Resume** button.

For example:

```
assets/Nayan-Dheke-Resume.pdf
```

Keep the resume updated as your education, certifications, projects, and DevOps experience grow.

## Deploy

Two simple deployment options are supported:

### 1. Cloudflare Pages

Cloudflare Pages is the easiest option for this static portfolio.

1. Push the portfolio folder to a GitHub repository.
2. Create a Cloudflare Pages project.
3. Connect the GitHub repository.
4. Leave the build command empty.
5. Set the output directory to the repository root.
6. Attach your custom domain:

   * `nayandheke.com.np`
   * `www.nayandheke.com.np`

Cloudflare can then handle HTTPS and CDN delivery.

### 2. EC2 with nginx

You can also deploy the portfolio to an AWS EC2 instance as a practical DevOps project.

Copy the website files to:

```
/var/www/portfolio
```

Then configure nginx to serve the directory and point your domain's DNS record to the EC2 instance.

This approach is useful for practicing Linux administration, nginx, DNS, HTTPS, and AWS infrastructure.

## Files

```
index.html              markup and portfolio content
css/styles.css          styling, layout and theme tokens
js/main.js              theme toggle, mobile navigation and page interactions
assets/favicon.svg      website favicon
assets/og-image.png     social sharing image
assets/og-image.svg     source for the social sharing image
robots.txt              crawler rules
sitemap.xml             single-page sitemap
```

## About

This portfolio is intended to document **Nayan Dheke's journey from software development into Cloud and DevOps**, while showcasing practical AWS projects, Linux work, certifications, and continuous learning.
