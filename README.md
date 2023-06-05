# Money Quiz
![amiresponsive screenshot](/assets/images/readmeimages/amiresponsive_final.png)


This website was created as my second coding project with the Code Institute. The purpose of the project is to demonstrate my understanding of JavaScript, along with HTML and CSS. The website is a hypothetical quiz on thetopic of basic investing terms and genal knowledge.

## Contents
- [Money Quiz](#money-quiz)
  * [Contents](#contents)
  * [User Experience (UX)](#user-experience--ux-)
    + [Initial Discussion](#initial-discussion)
    + [Key information for the site](#key-information-for-the-site)
    + [User Stories](#user-stories)
  * [Technologies used](#technologies-used)
    + [Languages Used](#languages-used)
    + [Frameworks, Libraries & Programs Used](#frameworks--libraries---programs-used)
  * [Design](#design)
    + [Colour scheme](#colour-scheme)
    + [Imagery](#imagery)
    + [Videos](#videos)
    + [Responsiveness](#responsiveness)
  * [Features](#features)
    + [Home Page.](#home-page)
    + [Projects Page.](#projects-page)
    + [Knit along page](#knit-along-page)
    + [Tutorials Page](#tutorials-page)
    + [Contact Us Page.](#contact-us-page)
  * [Future Implementations.](#future-implementations)
  * [Accessibility](#accessibility)
  * [Deployment and local deployment](#deployment-and-local-deployment)
    + [Deployment](#deployment)
  * [Testing](#testing)
    + [W3C Validator](#w3c-validator)
    + [Solved Bugs](#solved-bugs)
    + [Lighthouse](#lighthouse)
    + [Full Testing](#full-testing)
  * [Credits](#credits)
    + [Content](#content)
    + [Media](#media)
  * [Acknowledgments](#acknowledgments)
  * [Authors](#authors)

## User Experience (UX)
### Initial Discussion
Money Quiz is an fictional online quiz and that aims to test the basic investment knowledge of the user. To add to the experience, the quiz is timed, allowing 15 seconds for each question.

The quiz allows for the user to create a username, however this is optional, and the user can opt to go ahead and take the quiz without creating a username.

### Key information for the site
- Username creation
- Interactive Quiz 
- Result with number of correct answers
- Feedback option

### User Stories
#### Client Goals
- To be able to view the site on a range of device sizes.
- To make it easy for people with who want to test basic knowledge reating to invesmtent to do so in a visually pleasing and engaging manner.
- To be easily navigated
- To allow the perticipant to get an understanding of the rules and the structure of the quiz before starting.

## Technologies used
### Languages Used
JavaScript, HTML and CSS were used to create this website.

### Frameworks, Libraries & Programs Used
- Git - For version control.
- Github - To save and store the files for the website.
- Google Fonts - To import the fonts used on the website.
- Font Awesome - For the iconography on the website.
- Google Dev Tools - To troubleshoot and test features, solve issues with responsiveness and styling.
- YouTube - To find videos on JavaScript: https://www.youtube.com/watch?v=WUBhpSRS_fk&t=1166s. 
- <a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a>

## Design
### Colour scheme
The website uses a palette of grey colors and coral colours, inspired by colors which are typically considered feminine, to further encourage equiality in all ares of finance.

Google Fonts was used for the following fonts:
- Raleway is used as a font on the site.
- Sans serif is used as a back-up font on the site.

### Imagery
No images are included in the page, the icons are freely availiable from FontAwesome.

### Responsiveness
Adaptations were made to fit screens of different sizes.

## Features
The website is comprised of one page, with buttons which takes the user though the different elements of the quiz.

The website has:

A responsive navigation bar at the top which allows the user to navigate through the site. To the left of the navigation bar is the Knots and Loops text. To the right of the navigation bar are the links to the websites pages (home, projects, and knit along). When viewing with mobile devices the navigation links appear below the logo text on the left.

![navigation menu](/assets/images/readmeimages/navigationmenu.png)

A footer which contains social media icon links to social media (Facebook, Instagram, Twitter and Youtube). There is also an envelope icon which takes the user to the contact us page. Icons were used to keep the footer clean and because they are universally recognisable.

![footer](/assets/images/readmeimages/footer.png)

### Home Page.
#### Welcome image and about us

![index](/assets/images/readmeimages/index.png)

The welcome image is a picture of yarn, keeping with the theme of the page and color scheme. The picture also includes a text book with a short description of Knots and Loops.

This section is broken down into two columns of text and reflects the purpose of the page and on knitting through knit alongs. On large screens the subsections are laid out side by side, however on mobile devices the subsections are stacked vertically. Links to pages relevant to the content is inluced in the text, differentiated in bold.

#### Knit along section.

![knit along times](/assets/images/readmeimages/index_knitalong_timeline.png)

This section gives the user more information on the current knit along and how they can join future knit alongs with Knots and Koops.

### Projects Page. 

![projects](/assets/images/readmeimages/projects.png)

This takes the user to the project galary, where pictures of past projects are included. On large screens the projects are shown in 4 columns, on smaller screens the projects are shown in 3 or 2 columns, depending on the size of the screen.

### Knit along page

![knit along introduction](/assets/images/readmeimages/knitalong.png)

This page provides the user with more inforamtion about the knit along and contains a form where the user can join the next knit along and provide their project preferences. 

![knit along form empty](/assets/images/readmeimages/knitalong_form_empty.png)

The form contains fields for the users name, email address, checkboxes indicating the users project prefernces and radio boxes for indicating the users level of experience. The form responds to the curser hovering over the fields, and the background changes to white when active.

![knit along form filled](/assets/images/readmeimages/knitalong_form_filled.png)

The user submits the form using the submit button. Users must fill in the name, email and indicate their level of experience with the radio buttons to be able to submit the form.

### Tutorials Page
This page allows the user to request a mentor and access videos on basic knitting techniques. The form contains fields for the users name, email address, and message. The form responds to the curser hovering over the fields, and the background changes to white when active. The user submits the form using the submit button. Users must fill in the name, email and text area fields to be able to submit the form.

![mentor form](/assets/images/readmeimages/tutorials_form.png)

The videos are YouTube videos, which can be played by clicking on the depicted video. The videos are instructional and without sound from the content creator. The videos allow the user to access YouTube.

![tutorial videos](/assets/images/readmeimages/tutorials_videos.png)

### Feedback.

![contact us form](/assets/images/readmeimages/contactus_form.png)

The result page allows the user to provide feedback on the quiz. The user submits the form using the submit button. Users must fill in the name and text area fields to be able to submit the form.

## Future Implementations. 
Future implimentations include the possiblility to add a calculator to estimate returnon investment based on current availiable funds, monthly saving and risk profile. 

## Accessibility 
I have been mindful during coding to ensure that the website is as accessible friendly as possible. I have achieved this by:
- Using semantic HTML.
- Ensuring that there is a sufficient colour contrast throughout the site.

## Deployment and local deployment
### Deployment
Github Pages was used to deploy the live website. The instructions to achieve this are below:

Log in (or sign up) to Github.
- Find the repository for this project, money-quiz.
- Click on the Settings link.
- Click on the Pages link in the left hand side navigation bar.
- In the Source section, choose main from the drop down select branch menu. Select Root from the drop down select folder menu.
- Click Save. Your live Github Pages site is now deployed at the URL shown.

#### Local Development
##### How to Fork
To fork the money-quiz repository:
- Log in (or sign up) to Github.
- Go to the repository for this project, JohanneKnz/money-quiz.
- Click the Fork button in the top right corner.

##### How to Clone
To clone the money-quiz repository:
- Log in (or sign up) to GitHub.
- Go to the repository for this project, JohanneKz/money-quiz.
- Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
- Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
- Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

## Testing
Testing was ongoing throughout the entire build. I utilised Chrome developer tools while building to pinpoint and troubleshoot any issues as I went along.

### W3C Validator
The W3C validator was used to validate the HTML on all pages of the website. It was also used to validate CSS in the style.css file.

Initial testing:


![W3C index](/assets/images/readmeimages/w3c_index.png)


Initial tutorial W3C test:

![W3C tutorials](/assets/images/readmeimages/w3c_tutorials.png)

Final tutorial W3C test:

![W3C tutorials final validator](/assets/images/readmeimages/w3c_tutorials_secondtry.png)

### Solved Bugs
User selection options in quiz: The code was not loading correctly, thus not allowing the user to select options in the quiz. Attempts to correct the code relating to user clicking on the answers were not working. Having gone through the code and looking for material on the topic, the problem was fixed by amending the code to ensure that all elements were correctly defined. 

### Known Bugs


### Lighthouse
I used Lighthouse within the Chrome Developer Tools to allow me to test the performance, accessibility, best practices and SEO of the website.

#### Index Page


Final lighthouse testing:

![final lighthouse test index](/assets/images/readmeimages/lighthouse_final_index.png)


### Full Testing
To fully test my website I performed the following testing using a number of browsers (google chrome, safari, firefox) and on an MacBook Air and iPhone 13 mini and  I went through each page using google chrome developer tools to ensure that they responsive on all different screen sizes.

#### Links.


#### Forms.

Test the knit along form. 
- I tried to submit the form without filling in any input fields. The form worked correctly and directed users to fill in the name field. 


Test the contact us form. 
- I tried to submit the form without filling in any input fields. The form worked correctly and directed users to fill in the name field. 
- I then filled in the name field and tried to submit the form. Again the form worked correctly and directed the user to fill out the email field.  
- I filled out the email field and tried to submit the form. Again the form worked correclty and directed the user to fill out the message field.
I filled in the message field to submit the form. The form then opens in the code instetute formdump to demonstrate the selctors have been coded correctly.

## Credits
### Code Used
- Tutorials from code institute.
- tutorials from Code Nepal
- Jos'e Fernando Costa on login pages: https://medium.com/swlh/how-to-create-your-first-login-page-with-html-css-and-javascript-602dd71144f1

### Content
Content for the website was written by Johanne Knudtzon. Money Quiz is a fictional name and concept.

### Media
#### Background Images
Background images have been sourced from freepik.com and are the creative property of pvproductions.

All images used in the project page are pictures belonging to Johanne Knudtzon who gave permission for them to be used in this project.

## Acknowledgments
I would like to acknowledge the great videos from code nepal which were great help me to complete my JavaScript project:
- https://www.youtube.com/watch?v=WUBhpSRS_fk&t=1166s
-


## Authors
@johanneknz