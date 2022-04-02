
<p align="center">
  <a href="https://5hraddha.github.io/awesome-container-company/" target="_blank">
    <img src="https://raw.githubusercontent.com/5hraddha/misc/master/images/acc-logo.png" width=600 alt="awesome container company logo" />
  </a>
  <p align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" height=20 alt="react">
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" height=20 alt="tailwind css">
    <img src="https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue" height=20  alt="framer motion">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" height=20  alt="node js">
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" height=20  alt="express">
    <img src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" height=20  alt="aws ses">
  </p>
</p>

## About the Project
A landing page for **Awesome Container Company** (ACC), whose mission is *to eliminate plastic and single use packaging in the food and beverage industry*. For restaurants offering takeout, ACC offers recurring delivery of clean, reusable metal containers and pickup of used containers from customers, cutting packaging costs by 50% and eliminating millions of tons of single-use packaging. 

https://user-images.githubusercontent.com/27571141/161324457-fe6f0d73-9ab3-4fa9-9e87-1465ea2750cf.mp4


## Features
<details><summary><b>Responsive Webpage</b></summary>

The webpage is responsive from desktop screen sizes to the mobile (minimum - 375px).

</details>

<details><summary><b>Chat Animation to mimic the enquiry</b></summary>

The page has a beautiful chat animation to mimic the general enquiry conversation between the guest and the company.

<img src="https://raw.githubusercontent.com/5hraddha/misc/master/images/chat-animation.png" width=600>

</details>

<details><summary><b>Lists out the problem</b></summary>

The page lists out the problem we are facing today because of single-use packaging.

<img src="https://raw.githubusercontent.com/5hraddha/misc/master/images/problems.png" width=600>

</details>

<details><summary><b>Features, Sizing and Pictures of the containers</b></summary>

The page has a slider that shows the features, sizing and pictures of the containers that the company offers, to solve the problems.

<img src="https://raw.githubusercontent.com/5hraddha/misc/master/images/sustainable-soln.png" width=600>

</details>

<details><summary><b>Circular work flow of the company</b></summary>

The page illustrates the circular work flow of the company in a step by step process. 

<img src="https://raw.githubusercontent.com/5hraddha/misc/master/images/how-it-works.png" width=600>

</details>

<details><summary><b>Benefits for the businesses and the user</b></summary>

The page lists down the benefits that the businesses and users can have from the service.

<img src="https://raw.githubusercontent.com/5hraddha/misc/master/images/impact.png" width=600>

</details>

<details><summary><b>A table that brings about how the competition is in the market</b></summary>

We have illustrated a table that brings about how the competition is in the market to give a clear picture of how ACC beats them all.

<img src="https://raw.githubusercontent.com/5hraddha/misc/master/images/competition.png" width=600>

</details>

<details><summary><b>Animated welcome screen</b></summary>

The webpage has beautifully animated welcome screen with the ACC logo. 

<img src="https://raw.githubusercontent.com/5hraddha/misc/master/images/pageLoadAnimation.png" width=600>

</details>

<details><summary><b>Subtle animations on page scroll</b></summary>

The page responds with subtle animations as the user scroll through it.

</details>

<details><summary><b>Editable data file as a single source of truth</b></summary>

- All the data on the page is populated dynamically from a single file, that could be edited if required to change the texts on the webpage.
- The file is located at - `src/constants/data.js`

</details>

<details><summary><b>Webpage has accessibility and SEO score</b></summary>

The webpage has accessibility score of 97 and SEO score of 90 in Google Lighthouse's Web performance Audit result. 

<img src="https://raw.githubusercontent.com/5hraddha/misc/master/images/lighthouse-report.png" width=600>

</details>

<details><summary><b>A contact form for users to enquire the company</b></summary>

The webpage also gives an *option for users to contact the company, if they are interested in the service via a contact form. On the submission of the form, a mail is triggered via AWS SES. 

<img src="https://raw.githubusercontent.com/5hraddha/misc/master/images/contact-form.png" width=600>

</details>

## Technologies and Standards Used
The technologies that have been used are:  
| Technology | Description |
|---|---|
| ReactJS | An open-source JavaScript library that is used for building user interfaces specifically for single-page applications |
| Tailwind CSS | A utility-first CSS framework for rapidly building custom user interfaces |
| Framer Motion | Production-ready animation library for React on the web that makes creating animations easy |
| NodeJS | An open-source runtime environment that allows developers to create all kinds of server-side tools and applications in JavaScript |
| Express | The most popular Node web framework, and is the underlying library for a number of other popular Node web frameworks. |
| AWS Simple Email Service (SES) | A cost-effective, flexible, and scalable email service from AWS that enables developers to send mail from within any application |

## Product Design Specification
You can view the product specification document [here](https://www.figma.com/file/MVxWrCBVC2rsfgSAsA7IsY/Awesome-Container-Company?node-id=1730%3A2009)

## Steps to setup AWS SES
### 1. setting up a free account:
Click [here](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all) to create an AWS free tier account. The free tier gives access up to 62,000 emails, so you might upgrade if you anticipate heavy user traffic.
### 2. setting up AWS SES IAM User:
Once your account is completed, you will have access 
to the "AWS Management Console", click the search bar at the top of the page and search for "IAM".
1. click add user, enter any username (example: ses-user)
2. select programmatic access only, then hit next
3. select "attach existing policies directly", search SES, and select the AmazonSESFullAccess Policy. Click next
4. Do not worry about adding tags, hit next again, then hit create user
5. You will get a message with "Success". **SAVE THE ACCESS KEY AND SECRET KEY SOMEWHERE**, these are extremely important and you only can see the secret key here. If you lose it, you need to generate another one. (generating another key is not difficult but you will need to change the access keys in the code as well)
### 3. Setting Up AWS SES:
Search for SES or Simple Email Service in the search bar. Once there, select "verified identities" under configuration and create an identity. This is the email that has access to the service and will serve as the source. This is the email address that the email will be coming from. Inside the repository, go to:
```
server/constants/email.js
```
and change the emailToSend email to whatever email you want to have receive the emails, and change the emailSource email to whatever email you authorized on AWS.
Also go to:
```
server/.env
```
and put in you access key and secret access key. **MAKE SURE** not to just ctrl+C the codes, as the system will recognize ctrl+C as a keystroke, and you access key will be wrong. Finally, npm install aws-sdk and the form should work on your system with the addresses you inputted.
## Setting up Heroku
If you would like to have heroku set up under a different account, follow these steps.
1. go to [heroku](www.heroku.com) and create a free account. Enter your information, and under Primary development language, enter Node.js
2. Go to your dashboard, and click "New" in the top right corner
3. Name the app "awesome-container-company" or any other name the client would like
4. Follow the instructions under deploy. You are finished once you use the following line of code in the terminal:
```
git push heroku main
```
Now Heroku should be set up under your account


## Other options for sending Email
If you choose not to use the AWS SES Service, here is a list of alternative options:
1. [EmailJs](https://www.emailjs.com/)
2. [Serverless](https://www.serverless.com/)
3. Using restyled google forms


## Team Members  
1. [Alec Drosu](https://github.com/AlecDrosu) | Web Developer
2. [Ekaterina Cratcha](https://github.com/cratcha) | Web Developer
3. [Shraddha](https://github.com/5hraddha) | Web Developer
## Live Demo
Checkout the live URL - [here](https://5hraddha.github.io/awesome-container-company/)
