C# Money Quiz
![amiresponsive screenshot](/assets/images/readme/amiresponsive.png)


This website was created as my second coding project with the Code Institute. The purpose of the project is to demonstrate my understanding of JavaScript, along with HTML and CSS. The website is a hypothetical quiz on thetopic of basic investing terms and genal knowledge.

## Contents
- [Money Quiz](#money-quiz)
  * [Contents](#contents)
  * [User Experience (UX)](#user-experience--ux-)
  * [Technologies used](#technologies-used)
  * [Design](#design)
  * [Features](#features)
  * [Future Implementations.](#future-implementations)
  * [Accessibility](#accessibility)
  * [Deployment and local deployment](#deployment-and-local-deployment)
  * [Testing](#testing)
  * [Credits](#credits)
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
- CodeNepal - https://www.codingnepalweb.com/quiz-app-with-timer-javascript/
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

### Home Page.
#### Start button

![start](/assets/images/readme/start.png)

The home page is a simple button, which when clicked allows the user to start the quiz.

#### Username window.

The user name section allows the user to enter an optional username. 

#### Rules window. 

![rules](/assets/images/readme/rules.png)

The rules are presentedin a list which gives the user an indication of how the quiz will run.

#### Quiz window

![questions](/assets/images/readme/questions.png)

The quiz window is the main widow of the quiz, whereby the user will be guided through 5 questions.
The quiz has a timer which starts when the user begins the quiz. The user is afforded 15 seconds to answer each question.

![incorrect answer](/assets/images/readme/incorrect.png)

If the user selects an incorrect answer, the correct answer will appear. If the user runs out of time, the answers will appear.

![correct answer](/assets/images/readme/correct.png)

The quiz includes a counter which indicates how far along in the quiz the user is.
The user will select the next button to get to the next question.

#### Results window
The results of the quiz is displayed in a results window. 

![results](/assets/images/readme/completedsucessful.png)

If the user got 4 out of 5 correct andswers, they are congratulated on getting the required amount of answers correct.

![results](/assets/images/readme/completednotsuccessful.png)

If the user did not get 4 answers correct, they are encouraged to try again.

The result page allows the user to provide feedback on the quiz. The user submits the form using the submit button. Users must fill in the name and text area fields to be able to submit the form.

## Future Implementations. 
Future implimentations include the possiblility to add a calculator to estimate returnon investment based on current availiable funds, monthly saving and risk profile. 

I would also like to remove the time indication from the timer when the time is up.

Further, I would like to remove the next button, not just inactivate it when the quiz is ongoing.

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
The timer function has an empty value, the timer does work, however the implimentation for this was not fixed. 

The next button should be hidden when the quiz is ongoing. The next button cannot be clicked when the quiz is ongoing, however it is still visible to the user.

The username and feedback options are not utilized for any part of the code, and there are no specific responses to this. I would like to add a function for getting the username and adding this to the results, and further to set up specific resonses to the forms.

### Lighthouse
I used Lighthouse within the Chrome Developer Tools to allow me to test the performance, accessibility, best practices and SEO of the website.

#### Index Page


Final lighthouse testing:

![final lighthouse test index](/assets/images/readmeimages/lighthouse_final_index.png)


### Full Testing
To fully test my website I performed the following testing using a number of browsers (google chrome, safari, firefox) and on an MacBook Air and iPhone 13 mini and  I went through each page using google chrome developer tools to ensure that they responsive on all different screen sizes.

#### Links.


#### Forms.

Test the username form. 
- The username form does not return a value, thus whenthe submit button is selected, no further response for this is incorporated.


Test the feedback form. 
I filled in the message field to submit the form. The form then opens in the code instetute formdump to demonstrate the selctors have been coded correctly.

## Credits
### Code Used
- Tutorials from code institute.
- tutorials from Code Nepal: https://www.codingnepalweb.com/quiz-app-with-timer-javascript/
- Jos'e Fernando Costa on login pages: https://medium.com/swlh/how-to-create-your-first-login-page-with-html-css-and-javascript-602dd71144f1

### Content
Content for the website was written by Johanne Knudtzon. Money Quiz is a fictional name and concept.

### Media
No media outside of Icond were used in the project.

## Acknowledgments
I would like to acknowledge the great tutorial from code nepal which were great help me to complete my JavaScript project: https://www.codingnepalweb.com/quiz-app-with-timer-javascript/


## Authors
@johanneknz