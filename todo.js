import { mainHomeButton } from "./mainButton.js";


// ToDo (body) | Has one main container 
const todoBody = document.querySelector('body');
todoBody.setAttribute('class','todoBody');

  // Todo Main Container | Width 80% - Height 80% | Has (2) Containers | LEFT: Todo Form | RIGHT: Todo List
  const todoMainContainer = document.createElement('div');
  todoMainContainer.setAttribute('class', 'todo-Main-Container');
  todoBody.appendChild(todoMainContainer);
  

      // The Header | TOP | Width 100% - Height 10% 
      const todoHeader = document.createElement('div');
      todoHeader.setAttribute('class', 'todoHeader');
      todoMainContainer.appendChild(todoHeader);
      todoHeader.textContent = "SBA Todo List";


      // The Main | BOTTOM | Width 100% - Height 90% 
      const todoMainBottom = document.createElement('div');
      todoMainBottom.setAttribute('class', 'todoMainBottom');
      todoMainContainer.appendChild(todoMainBottom);


          // Todo Buttons | LEFT | Width: 25% - Height: 100% | Has (2) Containers | TOP: 4 Buttons | BOTTOM: My Account 
          const buttonsMainLeft = document.createElement('div');
          buttonsMainLeft.setAttribute('class', "buttonMainLeft");
          todoMainBottom.appendChild(buttonsMainLeft);


              // Todo Buttons | TOP | Buttons |  Width: 100% - Height: 80% | Has (3) Buttons | LEFT: New Todo | CENTER: Show Calendar | RIGHT: Settings
              const homeButtonsTopLeft = document.createElement('div');
              homeButtonsTopLeft.setAttribute('class', "homeButtonsTopLeft")
              buttonsMainLeft.appendChild(homeButtonsTopLeft);
              
                    // Todo Operation | Buttons | 1 | Home | Width: 80% - Height: 90%
                    const homeButton = document.createElement ('button');
                    homeButton.setAttribute('class', 'homeButton');
                    homeButton.classList.add('allButtonsHover');
                    homeButton.textContent= "Home";
                    homeButtonsTopLeft.appendChild(homeButton);
                    homeButton.addEventListener("click", () => {
                      setTimeout (()=> {
                        mainHomeButton ();
                      },50)
                      
                    });
                    

                    // Todo Operation | Buttons | 2 | Calendar |Width: 80% - Height: 90%
                    const homeCalendarButton = document.createElement ('button');
                    homeCalendarButton.setAttribute('class', 'homeCalendarButton');
                    homeCalendarButton.classList.add('allButtonsHover');
                    homeCalendarButton.textContent= "Calendar";
                    homeButtonsTopLeft.appendChild(homeCalendarButton);
                    homeCalendarButton.addEventListener ("click" , () => {
                      theCalendarFunction ();
                    });

                    // Todo Operation | Buttons | 3 | Contacts | Width: 80% - Height: 90%
                    const homeContactsButton = document.createElement ('button');
                    homeContactsButton.setAttribute('class', 'homeContactsButton');
                    homeContactsButton.classList.add('allButtonsHover');
                    homeContactsButton.textContent= "Contacts";
                    homeButtonsTopLeft.appendChild(homeContactsButton);
                    homeContactsButton.addEventListener ("click" , () => {
                      theContactsFunction ();
                    });



                    // Todo Operation | Buttons | 4 | Whiteboard | Width: 80% - Height: 90%
                    const homeWhiteboardButton = document.createElement ('button');
                    homeWhiteboardButton.setAttribute('class', 'homeWhiteboardButton');
                    homeWhiteboardButton.classList.add('allButtonsHover');
                    homeWhiteboardButton.textContent= "Whiteboard";
                    homeButtonsTopLeft.appendChild(homeWhiteboardButton);

                    // Adding the Event Listener Click to the Whiteboard Button |
                      homeWhiteboardButton.addEventListener("click", () => {
                        whiteBoardFunction();
                        
                      });
                    


              // Todo Buttons | BOTTOM | My Account |  Width: 100% - Height: 20%
              const myAccountContainer = document.createElement('div');
              myAccountContainer.setAttribute('class', "myAccountContainer")
              buttonsMainLeft.appendChild(myAccountContainer);

                    // Todo Buttons | Button | My Account | Width 100% - Height: 50%

                    const myAccountButton = document.querySelector ('.myAccountButton');

                    myAccountButton.classList.add('allButtonsHover');
                    myAccountButton.textContent= "My account";
                    myAccountButton.style.color= "darkRed";
                    myAccountContainer.appendChild(myAccountButton);
                    myAccountContainer.addEventListener('click', () => {
                      myAccountFunction();
                    })

            


          // DONE -Todo Main Operation | RIGHT | Width: 75% - Height: 100% | Has (2) Sub Containers | TOP: Greetings and Schedule | BOTTOM: Calendar and Invitations
          const todoMainRight = document.createElement('div');
          todoMainRight.setAttribute('class', "todoMainRight");
          todoMainRight.id ="todoMainRightEmpty";
          todoMainBottom.appendChild(todoMainRight);
          export default todoMainRight          
    
            // DONE - Todo Operation | Container 1 | TOP | Greeting and Scheduel | Width: 100% - Height: 50% | Has (2) Containers | LEFT: The Agenda | RIGHT: Schedule 
            const mainRightTop = document.createElement('div');
            mainRightTop.setAttribute('class', "mainRightTop");
            todoMainRight.appendChild(mainRightTop);


              // DONE -Todo Operation | Container 1 | LEFT | Greeting and Scheduel | The Agenda | Width: 60% - Height: 100% | Has (2) Containers | TOP - Picture | BOTTOM: Today Agenda
              const greetScheduleMain = document.createElement('div');
              greetScheduleMain.setAttribute('class', 'greetScheduleMain');
              mainRightTop.appendChild(greetScheduleMain);

                  // Todo Operation | Container 1 | TOP | Greeting and Scheduel | The Agenda | TOP Picture | Width: 100% - Height: 40% | Has (2) Containers | Greeting Message and Photo
                  const greetingContainer = document.createElement('div');
                  greetingContainer.setAttribute('class', 'greetingContainer');
                  greetScheduleMain.appendChild(greetingContainer);

                        // Todo Operation | Container 1 | TOP | Greeting and Scheduel | Greeting Message | TOP |Width 100% - Height 20%
                        const greetingMessage = document.createElement('div');
                        greetingMessage.setAttribute('class', 'greetingMessage');
                        greetingMessage.textContent = "Hello Per Scholas!";
                        greetingContainer.appendChild(greetingMessage);
      

                        // Todo Operation | Container 1 | TOP | Greeting and Scheduel | Photo | BOTTOM |Width 100% - Height 80%
                        const userPhoto = document.createElement('div');
                        userPhoto.setAttribute('class', 'userPhoto');
                        userPhoto.style.backgroundImage = "url('./images/PersonalPhoto.jpeg')";
                        greetingContainer.appendChild(userPhoto);


                  // Todo Operation | Container 1 | BOTTOM | Greeting and Scheduel | The Agenda | Today Agenda | Width: 100% - Height: 60%
                  const todayAgenda = document.createElement('div');
                  todayAgenda.setAttribute('class', 'todayAgenda');
                  greetScheduleMain.appendChild(todayAgenda);

                        // Todo Operation | Container 1 | BOTTOM | Greeting and Scheduel | The Agenda | Today Agenda Text| Width: 100% - Height: 10%
                        const theAgendaText = document.createElement('div');
                        theAgendaText.setAttribute('class', 'theAgendaText');
                        theAgendaText.textContent = "Your agenda:";
                        todayAgenda.appendChild(theAgendaText);

                        // Todo Operation | Container 1 | BOTTOM | Greeting and Scheduel | The Agenda | Today Agenda contents| Width: 100% - Height: 90%
                        const agendaContents = document.createElement('div');
                        agendaContents.setAttribute('class', 'agendaContents');
                        agendaContents.style.backgroundImage = "url(./images/AgendaScreenShot.JPG)";
                        agendaContents.style.backgroundSize = "98%";
                        agendaContents.style.backgroundPosition = "center";
                        // agendaContents.textContent = "The agenda contents";
                        todayAgenda.appendChild(agendaContents);


                      

              // Todo Operation | Container 1 | RIGHT | Greeting and Scheduel | Schedule | Width: 40% - Height: 100% | Has (3) Buttons | TOP: Start A Meeting | CENTER: Join A Meeting | BOTTOM: Schedule A Meeting
              const meetingSchedule = document.createElement('div');
              meetingSchedule.setAttribute('class', 'meetingSchedule');
              mainRightTop.appendChild(meetingSchedule);

                    // Todo Operation | Container 1 | RIGHT | Greeting and Scheduel | Schedule | TOP: Start A Meeting
                    const startMeetingButton = document.createElement ('button');
                    startMeetingButton.setAttribute('class', 'startMeetingButton');
                    startMeetingButton.classList.add('allButtonsHover');
                    startMeetingButton.textContent= "Start a meeting";
                    meetingSchedule.appendChild(startMeetingButton);
                    startMeetingButton.addEventListener("click" , () => {
                      startAmeetingFunction ();
                    })

                    // Todo Operation | Container 1 | RIGHT | Greeting and Scheduel | Schedule | CENTER: Join A Meeting
                    const joinMeetingButton = document.createElement ('button');
                    joinMeetingButton.setAttribute('class', 'joinMeetingButton');
                    joinMeetingButton.classList.add('allButtonsHover');
                    joinMeetingButton.textContent= "Join a meeting";
                    meetingSchedule.appendChild(joinMeetingButton);
                    joinMeetingButton.addEventListener("click", () => {
                      joinAmeetingFunction ();
                    })
                    


                    // Todo Operation | Container 1 | RIGHT | Greeting and Scheduel | Schedule | BOTTOM: Schedule A Meeting
                    const scheduleMeetingButton = document.createElement ('button');
                    scheduleMeetingButton.setAttribute('class', 'scheduleMeetingButton');
                    scheduleMeetingButton.classList.add('allButtonsHover');
                    scheduleMeetingButton.textContent= "Schedule a meeting";
                    meetingSchedule.appendChild(scheduleMeetingButton);
                    meetingSchedule.addEventListener ("click", () => {
                      scheduleAmeeting ();
                    })




              // Todo operation | Container 2 | BOTTOM | Calendar and Invitations | Width: 100% - Height: 50% | Has (2) Containers | LEFT: Calendar | RIGHT: Todo List
              const mainRightBottom = document.createElement('div');
              mainRightBottom.setAttribute('class', "mainRightBottom");
              todoMainRight.appendChild(mainRightBottom);

              


                // Todo operation | Container 2 | Calendar and Invitations | LEFT | Next and Previous Buttons | Width: 40% - Height: 100%
                const theCalendar = document.createElement('div');
                theCalendar.setAttribute('class', "theCalendar");
                mainRightBottom.appendChild(theCalendar);

                      // The Calendar Months
                      const yearCalendar = [
                        'url(./images/01-JAN.png)',
                        'url(./images/02-FEB.png)',
                        'url(./images/03-MAR.png)',
                        'url(./images/04-APR.png)',
                        'url(./images/05-MAY.png)',
                        'url(./images/06-JUN.png)',
                        'url(./images/07-JUL.png)',
                        'url(./images/08-AUG.png)',
                        'url(./images/09-SEP.png)',
                        'url(./images/10-OCT.png)',
                        'url(./images/11-NOV.png)',
                        'url(./images/12-DEC.png)',
                      ]

                      
                      // Months Array Index
                      let month = 0;
                      function monthsCounter () {
                        calMonths.style.backgroundImage = yearCalendar[month];
                      }

                      // Todo operation | Container 2 | Calendar and Invitations | LEFT | Next and Previous Buttons Container | Height 10% - Width 100%
                      const calPrevNexContainer = document.createElement('div');
                      calPrevNexContainer.setAttribute('class', "calPrevNexContainer");
                      theCalendar.appendChild(calPrevNexContainer);
                            
                      

                          // The Calendar | Previous Button
                          const calPreviousButton = document.createElement ('button');
                          calPreviousButton.setAttribute('class', 'calPreviousButton');
                          // calPreviousButton.classList.add('allButtonsHover');
                          calPreviousButton.textContent= "Previous";
                          calPrevNexContainer.appendChild(calPreviousButton);
                          calPreviousButton.addEventListener ("click", () => {
                            month = (month - 1 + yearCalendar.length) % yearCalendar.length;
                            monthsCounter();
                          })


                          // The Calendar | Next Button
                          const calNextButton = document.createElement ('button');
                          calNextButton.setAttribute('class', 'calNextButton');
                          // calNextButton.classList.add('allButtonsHover');
                          calNextButton.textContent= "Next";
                          calPrevNexContainer.appendChild(calNextButton);
                          calNextButton.addEventListener ("click", () => {
                            month = (month + 1) % yearCalendar.length;
                            monthsCounter();
                          })

                      // Todo operation | Container 2 | Calendar and Invitations | LEFT | Calendar Months | Height 90% - Width 100%
                      const calMonths = document.createElement('div');
                      calMonths.setAttribute('class', "calMonths");
                      calMonths.style.backgroundImage = yearCalendar[11]; // The default Month
                      theCalendar.appendChild(calMonths);
                  
                 

                // Todo operation | Container 2 | Calendar and Invitations | RIGHT | Todo List | Width: 60% - Height: 100% | Has (2) Containers | TOP: The Title | BOTTOM: ToDo List Table
                const toDoList = document.createElement('div');
                toDoList.setAttribute('class', "toDoList");
                mainRightBottom.appendChild(toDoList);


                        // Todo operation | Container 2 | Calendar and Invitations | RIGHT | Todo List | TOP: The Title 
                        const todoListTitle = document.createElement('div');
                        todoListTitle.setAttribute('class', "todoListTitle");
                        todoListTitle.textContent = "Upcoming meetings";
                        toDoList.appendChild(todoListTitle);

                        // Todo operation | Container 2 | Calendar and Invitations | RIGHT | Todo List |  BOTTOM: ToDo List Table Container
                        const todoListTable = document.createElement('div');
                        todoListTable.setAttribute('class', "todoListTable");
                        toDoList.appendChild(todoListTable);

                        // Todo operation | Container 2 | Calendar and Invitations | RIGHT | Todo List |  BOTTOM: ToDo List Table
                        const todoListTableCells = document.createElement('table');
                        todoListTableCells.setAttribute('class', "todoListTableCells");
                        todoListTable.appendChild(todoListTableCells);
                        




// ------------------------------ ALL FUNCTIONS ---------------------------------------------

// HOME BUTTON FUNCTION - Transfered to mainButton.js

// CALENDAR FUNCTION - Transferred to theCalendar.js

// CONTACTS FUNCTION - This function Can NOT be fransferred becuase it has DOM constants.
  function theContactsFunction () {
  const contactsContainer = document.createElement('div');
  contactsContainer.setAttribute("class", "contactsContainer");
  todoMainRight.replaceWith(contactsContainer);

  const contactsBackButton = document.createElement ('button');
  contactsBackButton.setAttribute('class', 'contactsBackButton');
  contactsBackButton.textContent= "< Back";
  contactsBackButton.style.paddingLeft = "1em";
  contactsContainer.appendChild(contactsBackButton);
  contactsBackButton.addEventListener("click", () => {
      contactsContainer.replaceWith(todoMainRight);
  })

  // Adding Contact list
  const contacsSubContainer = document.createElement('div');
  contacsSubContainer.setAttribute("class", "contacsSubContainer");
  contacsSubContainer.style.backgroundImage = 'url(./images/contactListImage.png)';
  contacsSubContainer.style.backgroundSize = "cover";
  contactsContainer.appendChild(contacsSubContainer);

 };
 

// WHITEBOARD FUNCTION
function whiteBoardFunction () {

      // One Cotainer Clear | Has (2) Containers | 1- Home Button | 2- Whiteboard
      const todoMainRightEmpty = document.createElement('div');
      todoMainRightEmpty.setAttribute('class', "todoMainRightEmpty");
      
      todoMainRight.replaceWith(todoMainRightEmpty);

          // Whiteboard Container | Home Button
          const whiteboardHomButton = document.createElement ('button');
          whiteboardHomButton.setAttribute('class', 'whiteboardHomButton');
          whiteboardHomButton.textContent= "< Back";
          todoMainRightEmpty.appendChild(whiteboardHomButton);

          // The Click Event Listener to Go Back To The Home Page
          whiteboardHomButton.addEventListener("click", () => {
            todoMainRightEmpty.replaceWith(todoMainRight);
          })

          // Whiteboard Container | Whiteboard
          const theWhiteboard = document.createElement('div');
          theWhiteboard.setAttribute('class', "theWhiteboard");
          theWhiteboard.style.backgroundImage = 'url("https://i.pinimg.com/736x/46/d8/5c/46d85cc0cdcd655156180e602ded7471.jpg")';
          todoMainRightEmpty.appendChild(theWhiteboard);
}

// MY ACCOUNT FUNCTION
      function myAccountFunction () {

        // Copying todoMAinRight container 
        const todoMainRight = document.getElementById ("todoMainRightEmpty");
        const myAccountSubContainer = todoMainRight.cloneNode();
        myAccountSubContainer.style.backgroundColor = "rgb(255, 254, 250)";
        myAccountSubContainer.style.border = "solid orange 3px";
        todoMainRight.replaceWith(myAccountSubContainer);

        // Adding the back button 
        const myAccountButton = document.createElement ('button');
        myAccountButton.setAttribute('class', 'myAccountButton');
        myAccountButton.textContent= "< Back";
        myAccountSubContainer.appendChild(myAccountButton);

            // The Click Event Listener to Go Back To The Home Page
            myAccountButton.addEventListener("click", () => {
              mainHomeButton ();
            });

        // Adding the Login Container to My account Empty Container
        const myAccountLogin = document.querySelector('.myAccountLogin');
        myAccountLogin.innerText ="User Account";
        myAccountSubContainer.appendChild(myAccountLogin);

        // Login Container - Style
        myAccountLogin.style.display ="block";
        myAccountLogin.style.border= "double orange 2px";
        myAccountLogin.style.width=  "35%";
        myAccountLogin.style.height= "70%";
        myAccountLogin.style.justifySelf= "center";
        myAccountLogin.style.margin= "5%";
        myAccountLogin.style.backgroundImage= "linear-gradient(rgb(235, 249, 253), rgb(230, 230, 255))";
        myAccountLogin.style.color= "rgb(0, 132, 255)";
        myAccountLogin.style.boxshadow= "lightgray 5px 5px 5px";

        // Adding LoginUsername Div
          // Adding LoginUsername | Title
          const userNameTitle = document.querySelector('.userNameTitle');
          userNameTitle.textContent ="Username";
          userNameTitle.style.marginTop="15%";
          userNameTitle.style.marginLeft="10%";
          userNameTitle.style.width="50%";
          userNameTitle.style.height="5%";
          myAccountLogin.appendChild(userNameTitle);
          
          // Adding LoginUsername | Input Field
          const userNameForm = document.createElement('input');
          userNameForm.type="text";
          userNameForm.setAttribute("class", "userNameForm");
          userNameForm.placeholder ="Username";
          userNameForm.style.marginTop="5%";
          userNameForm.style.marginLeft="10%";
          userNameForm.style.width="75%";
          userNameForm.style.height="25px";
          userNameForm.required = true ;
          myAccountLogin.appendChild(userNameForm);
            // Username form Activation
            userNameForm.addEventListener("change", (event) => {
              const userNameFormValue = event.target.value;
              console.log(userNameFormValue);
              if (!userNameFormValue) {
                alert ("Username can not be empty");
              } else {
                console.log("Username is :", userNameFormValue);
              }
            })

          // Adding LoginPassword | Forgot Username
          const userForgetUsername = document.querySelector('.userForgetUsername');
          userForgetUsername.textContent ="Forgot Username?";
          userForgetUsername.style.marginLeft="45%";
          userForgetUsername.style.fontSize = "12px";
          userForgetUsername.style.color = "rgb(0, 132, 255)";
          myAccountLogin.appendChild(userForgetUsername);
          

        
          // Adding LoginPassword Div
          // Adding LoginPassword | Title
          const userPassword = document.querySelector('.userPassword');
          userPassword.textContent ="Password";
          userPassword.style.marginTop="10%";
          userPassword.style.marginLeft="10%";
          userPassword.style.width="50%";
          userPassword.style.height="5%";
          myAccountLogin.appendChild(userPassword);
          
          // Adding LoginPassword | Input Field
          const passwordForm = document.createElement('input');
          passwordForm.type="password";
          passwordForm.setAttribute("class", "passwordForm");
          passwordForm.placeholder ="Password";
          passwordForm.style.marginTop="5%";
          passwordForm.style.marginLeft="10%";
          passwordForm.style.width="75%";
          passwordForm.style.height="25px";
          myAccountLogin.appendChild(passwordForm);
            // Activate the Password Field
            passwordForm.addEventListener("submit", (event) => {
              const passwordFormValue = event.target.value;
              passwordFormValue.required = true;
              console.log(passwordFormValue);
              if (!passwordFormValue) {
                prompt ("Invalid Password. Please enter your password and press OK. ");
              } else {
              }

            })



          // Adding LoginPassword | Forgot Password
          const userForgetPassword = document.querySelector('.userForgetPassword');
          userForgetPassword.textContent ="Forgot assword?";
          userForgetPassword.style.marginLeft="50%";
          userForgetPassword.style.fontSize = "12px";
          userForgetPassword.style.color = "rgb(0, 132, 255)";
          myAccountLogin.appendChild(userForgetPassword);


          // Adding the Login Button
          const loginButton = document.createElement('button');
          loginButton.setAttribute("class", "loginButton");
          loginButton.textContent = "Login"
          loginButton.style.marginTop="18%";
          loginButton.style.marginLeft="25%";
          loginButton.style.width="45%";
          loginButton.style.height="auto";
          loginButton.style.justifySelf ="center";
          loginButton.style.border = "solid rgb(0, 132, 255) 1px";
          loginButton.style.borderRadius = "5px"
          loginButton.style.color = "rgb(0, 132, 255)";
          loginButton.style.cursor = "pointer";
          myAccountLogin.appendChild(loginButton);
          // Activating the Login Button
          loginButton.addEventListener("click", (event) => {
            let usernameValue = passwordForm.value;
            let passwordValue = userNameForm.value;
            if ((!usernameValue) || (!passwordValue)) {
              alert("No Username and/or Password");
            } else {
              myAccountSubContainer.replaceWith(todoMainRight);
            }
          })

        

          // Adding Create an account link
          const createanAccount = document.querySelector('.createanAccount');
          createanAccount.textContent ="Create an account";
          createanAccount.style.marginLeft="30%";
          createanAccount.style.marginTop="20%";
          createanAccount.style.fontSize = "12px";
          createanAccount.style.color = "rgb(0, 132, 255)";
          myAccountLogin.appendChild(createanAccount);
      }

// START A MEETING FUNCTION
function startAmeetingFunction () {

  // Schedule a meeting Container
  const meetingScheduleEmpty = document.createElement('div');
  meetingScheduleEmpty.setAttribute('class', 'meetingScheduleEmpty');
  meetingSchedule.replaceWith(meetingScheduleEmpty);

      // Schedule a Meeting | Back Button
      const scheduleMeetingHomButton = document.createElement ('button');
      scheduleMeetingHomButton.setAttribute('class', 'scheduleMeetingHomButton');
      scheduleMeetingHomButton.textContent= "< Back";
      meetingScheduleEmpty.appendChild(scheduleMeetingHomButton);

          // The Click Event Listener to Go Back To The Home Page
          scheduleMeetingHomButton.addEventListener("click", () => {
            meetingScheduleEmpty.replaceWith(meetingSchedule);
          })

      // Schedule a Meeting | Form Container | Has (2) Containers | 1- Form Name | 2- Form Fields
      const scheduleFormContainer = document.createElement('div');
      scheduleFormContainer.setAttribute('class', 'scheduleFormContainer');
      meetingScheduleEmpty.appendChild(scheduleFormContainer);

            // Schedule a Meeting | Form Container | 1- Form Name 
            const scheduleFormName = document.createElement('div');
            scheduleFormName.setAttribute('class', 'scheduleFormName');
            scheduleFormName.textContent = "Start a Zoom meeting";
            scheduleFormName.style.color = "rgb(59, 121, 255)";
            scheduleFormContainer.appendChild(scheduleFormName);
                  

            // Schedule a Meeting | Form Container | 2- Form Fields
            const scheduleFormField = document.createElement('div');
            scheduleFormField.setAttribute('class', 'scheduleFormField');
            scheduleFormContainer.appendChild(scheduleFormField);

                  // Schedule a Meeting | Form Container | Form Fields | Fields Names
                  const scheduleFormFieldtheTitles = document.createElement('div');
                  scheduleFormFieldtheTitles.setAttribute('class', 'scheduleFormFieldtheTitles');
                  scheduleFormField.appendChild(scheduleFormFieldtheTitles);

                      
                      // Schedule a Meeting | Form Container | Form Fields | Fields Names | Person Name
                      const scheduleFormFieldtheName = document.createElement('div');
                      scheduleFormFieldtheName.setAttribute('class', 'scheduleFormFieldtheName');
                      scheduleFormFieldtheName.classList.add('formsTitles');
                      scheduleFormFieldtheName.textContent = "Name :";
                      scheduleFormFieldtheName.style.marginTop = "60%";
                      scheduleFormFieldtheTitles.appendChild(scheduleFormFieldtheName);

                      
                      // Schedule a Meeting | Form Container | Form Fields | Fields Names | Person Phone Email
                      const scheduleFormFieldEmail = document.createElement('div');
                      scheduleFormFieldEmail.setAttribute('class', 'scheduleFormFieldEmail');
                      scheduleFormFieldEmail.classList.add('formsTitles');
                      scheduleFormFieldEmail.textContent = "Zoom Link :";
                      scheduleFormFieldtheTitles.appendChild(scheduleFormFieldEmail);



                  // Schedule a Meeting | Form Container | Form Fields | Has (7) forms
                  const scheduleFormFieldtForms = document.createElement('div');
                  scheduleFormFieldtForms.setAttribute('class', 'scheduleFormFieldtForms');
                  scheduleFormField.appendChild(scheduleFormFieldtForms);
                        

                      
                      // Form Fields | Meet with Person Name
                      const meetingFormPersonName = document.createElement('input');
                      meetingFormPersonName.setAttribute('class', 'meetingFormPersonName');
                      meetingFormPersonName.setAttribute("type", "text");
                      meetingFormPersonName.setAttribute("placeholder", "Person Name");
                      meetingFormPersonName.style.marginTop = "35%";
                      scheduleFormFieldtForms.appendChild(meetingFormPersonName);

                      meetingFormPersonName.addEventListener("change", (event) => {
                        const meetingPersonNameValue = event.target.value;
                        console.log("Person Name:", meetingPersonNameValue);
                        return meetingPersonNameValue;
                      });


                      // Form Fields | Person ZoomLink
                      const meetingFormPersonZoomLink = document.createElement('input');
                      meetingFormPersonZoomLink.setAttribute('class', 'meetingFormPersonZoomLink');
                      meetingFormPersonZoomLink.setAttribute("type", "eamil");
                      meetingFormPersonZoomLink.setAttribute("placeholder", "ZoomLink");
                      meetingFormPersonZoomLink.style.width = "98%";
                      scheduleFormFieldtForms.appendChild(meetingFormPersonZoomLink);

                      // 
                      meetingFormPersonZoomLink.addEventListener("change", (event) => {
                        event.preventDefault();
                        const meetingFormPersonZoomLink = event.target.value;

                            if (meetingFormPersonZoomLink.includes('https://')) {
                              const meetingFormPersonZoomLink = event.target.value;
                              return meetingFormPersonZoomLink;
                            } else {
                              alert("invalid ZoomLink Address");
                            }
                      });

                      // Form Fields | Confirm Button
                      const scheduleMeetingSubmitButton = document.createElement ('button');
                      scheduleMeetingSubmitButton.setAttribute('class', 'scheduleMeetingSubmitButton');
                      scheduleMeetingSubmitButton.textContent= "Submit";
                      scheduleMeetingSubmitButton.classList.add('allButtonsHover');
                      scheduleMeetingSubmitButton.style.marginLeft = "70%";
                      scheduleFormFieldtForms.appendChild(scheduleMeetingSubmitButton);
                      
                      // Form Fields | Confirm Button | Activation
                      scheduleMeetingSubmitButton.addEventListener('click', (event) => {
                        
                        // Table Row
                        const upcomingMeetingTableRow = document.createElement('tr');
                        upcomingMeetingTableRow.setAttribute('class', "upcomingMeetingTableRow");
                        todoListTableCells.append(upcomingMeetingTableRow)

                        // Table Cell 1
                        const upcomingMeetingTableRowCell1 = document.createElement('td');
                        upcomingMeetingTableRowCell1.setAttribute('class', "upcomingMeetingTableRowCell1");
                        upcomingMeetingTableRow.append(upcomingMeetingTableRowCell1);

                        // Table Cell 2
                        const upcomingMeetingTableRowCell2 = document.createElement('td');
                        upcomingMeetingTableRowCell2.setAttribute('class', "upcomingMeetingTableRowCell2");
                        upcomingMeetingTableRow.append(upcomingMeetingTableRowCell2);

                        // Submiting the Meeting to the table.
                        const upcomingMeeting = document.createElement('li');
                        upcomingMeeting.setAttribute('class', "upcomingMeeting");
                        upcomingMeeting.textContent = `${meetingFormDate.value}   at   ${meetingFormTime.value}   with   ${meetingFormPersonName.value}.`;
                        
                        upcomingMeetingTableRowCell1.appendChild(upcomingMeeting);

                        // Meeting Details Button
                        const meetingDetails = document.createElement ('button');
                        meetingDetails.setAttribute('class', 'meetingDetails');
                        meetingDetails.textContent= "Details";
                        meetingDetails.classList.add('allButtonsHover');
                        upcomingMeetingTableRowCell2.append(meetingDetails);
                        
                        // Meeting Details Button Function
                        meetingDetails.addEventListener('click', (event) => {

                          // Quick Notes Meeting Details Container | Has (2) Containers | TOP: Meeting Details Table | BOTTOM: operational Buttons


                    // Quick Notes Meeting Details Container | Has (2) Containers | TOP: Meeting Details Table | BOTTOM: operational Buttons
                    const quickNotesTableContainer = document.createElement('div');
                    quickNotesTableContainer.setAttribute('class', 'quickNotesTableContainer');
                    agendaContents.replaceWith(quickNotesTableContainer);

                    

                        // Quick Notes Table
                        const quickNotesTable = document.createElement('table');
                        quickNotesTable.setAttribute('class', "quickNotesTable");
                        // quickNotesTable.textContent = "I'm here";
                        quickNotesTableContainer.append(quickNotesTable);



                          // Quick Notes Table | Row 1
                          const quickNotesTableRow1 = document.createElement('tr');
                          quickNotesTableRow1.setAttribute('class', "quickNotesTableRow1");
                          quickNotesTable.append(quickNotesTableRow1);

                              // Quick Notes Table | Row 1 | Cell 1
                              const quickNotesTableRow1Cell1 = document.createElement('td');
                              quickNotesTableRow1Cell1.setAttribute('class', "quickNotesTableRow1Cell1");
                              quickNotesTableRow1Cell1.textContent = "Name"
                              quickNotesTableRow1.append(quickNotesTableRow1Cell1);
                      
                              
                              // Quick Notes Table | Row 1 | Cell 2
                              const quickNotesTableRow1Cell2 = document.createElement('td');
                              quickNotesTableRow1Cell2.setAttribute('class', "quickNotesTableRow1Cell2");
                              quickNotesTableRow1Cell2.textContent = meetingFormPersonName.value;
                              quickNotesTableRow1.append(quickNotesTableRow1Cell2);

                              // Quick Notes Table | Row 1 | Cell 3
                              const quickNotesTableRow1Cell3 = document.createElement('td');
                              quickNotesTableRow1Cell3.setAttribute('class', "quickNotesTableRow1Cell3");
                              quickNotesTableRow1Cell3.textContent = "Subject"
                              quickNotesTableRow1.append(quickNotesTableRow1Cell3);

                              // Quick Notes Table | Row 1 | Cell 4
                              const quickNotesTableRow1Cell4 = document.createElement('td');
                              quickNotesTableRow1Cell4.setAttribute('class', "quickNotesTableRow1Cell4");
                              quickNotesTableRow1Cell4.textContent= meetingFormMeetingSubject.value;
                              //  = meetingSubject;
                              
                              quickNotesTableRow1.append(quickNotesTableRow1Cell4);



                          // Quick Notes Table | Row 2
                          const quickNotesTableRow2 = document.createElement('tr');
                          quickNotesTableRow2.setAttribute('class', "quickNotesTableRow2");
                          quickNotesTable.append(quickNotesTableRow2);

                              // Quick Notes Table | Row 2 | Cell 1
                              const quickNotesTableRow2Cell1 = document.createElement('td');
                              quickNotesTableRow2Cell1.setAttribute('class', "quickNotesTableRow2Cell1");
                              quickNotesTableRow2Cell1.textContent ="Date"
                              quickNotesTableRow2.append(quickNotesTableRow2Cell1);
// ---------------- Date -----------
                              // Quick Notes Table | Row 2 | Cell 2
                              const quickNotesTableRow2Cell2 = document.createElement('td');
                              quickNotesTableRow2Cell2.setAttribute('class', "quickNotesTableRow2Cell2");
                              quickNotesTableRow2Cell2.textContent = meetingFormDate.value ;
                              quickNotesTableRow2.append(quickNotesTableRow2Cell2);

                              // Quick Notes Table | Row 2 | Cell 3
                              const quickNotesTableRow2Cell3 = document.createElement('td');
                              quickNotesTableRow2Cell3.setAttribute('class', "quickNotesTableRow2Cell3");
                              quickNotesTableRow2Cell3.textContent = "Time";
                              quickNotesTableRow2.append(quickNotesTableRow2Cell3);

                              // Quick Notes Table | Row 2 | Cell 4
                              const quickNotesTableRow2Cell4 = document.createElement('td');
                              quickNotesTableRow2Cell4.setAttribute('class', "quickNotesTableRow2Cell4");
                              quickNotesTableRow2Cell4.textContent = meetingFormTime.value;
                              quickNotesTableRow2.append(quickNotesTableRow2Cell4);



                          // Quick Notes Table | Row 3
                          const quickNotesTableRow3 = document.createElement('tr');
                          quickNotesTableRow3.setAttribute('class', "quickNotesTableRow3");
                          quickNotesTable.append(quickNotesTableRow3);

                              // Quick Notes Table | Row 3 | Cell 1
                              const quickNotesTableRow3Cell1 = document.createElement('td');
                              quickNotesTableRow3Cell1.setAttribute('class', "quickNotesTableRow3Cell1");
                              quickNotesTableRow3Cell1.textContent ="Phone"
                              quickNotesTableRow3.append(quickNotesTableRow3Cell1);

                              // Quick Notes Table | Row 3 | Cell 2
                              const quickNotesTableRow3Cell2 = document.createElement('td');
                              quickNotesTableRow3Cell2.setAttribute('class', "quickNotesTableRow3Cell2");
                              quickNotesTableRow3Cell2.textContent = meetingFormPersonPhone.value;
                              quickNotesTableRow3.append(quickNotesTableRow3Cell2);

                              // Quick Notes Table | Row 3 | Cell 3
                              const quickNotesTableRow3Cell3 = document.createElement('td');
                              quickNotesTableRow3Cell3.setAttribute('class', "quickNotesTableRow3Cell3");
                              quickNotesTableRow3Cell3.textContent= "Email";
                              quickNotesTableRow3.append(quickNotesTableRow3Cell3);

                              // Quick Notes Table | Row 3 | Cell 4
                              const quickNotesTableRow3Cell4 = document.createElement('td');
                              quickNotesTableRow3Cell4.setAttribute('class', "quickNotesTableRow3Cell4");
                              quickNotesTableRow3Cell4.textContent = meetingFormPersonEmail.value ;
                              quickNotesTableRow3.append(quickNotesTableRow3Cell4);



                    // Quick Notes Meeting Details Container | Buttons | Has (2) buttons | 1- Reschedule | 2- Cancel
                    const quickNotesOPButtons = document.createElement('div');
                    quickNotesOPButtons.setAttribute('class', 'quickNotesOPButtons');
                    quickNotesTableContainer.appendChild(quickNotesOPButtons);


                        // Quick Notes Meeting Details Container | Buttons | Has (2) buttons | 1- Reschedule
                        const quickNotesMeetingREscheduleButton = document.createElement ('button');
                        quickNotesMeetingREscheduleButton.setAttribute('class', 'quickNotesMeetingREscheduleButton');
                        quickNotesMeetingREscheduleButton.textContent= "Reschedule";
                        quickNotesMeetingREscheduleButton.classList.add('allButtonsHover');
                        quickNotesMeetingREscheduleButton.style.marginLeft = "20%";
                        quickNotesOPButtons.appendChild(quickNotesMeetingREscheduleButton);
                        
                        
                        
                        // Quick Notes Meeting Details Container | Buttons | Has (2) buttons | 2- Cancel
                        const quickNotesMeetingCancelButton = document.createElement ('button');
                        quickNotesMeetingCancelButton.setAttribute('class', 'quickNotesMeetingCancelButton');
                        quickNotesMeetingCancelButton.textContent= "Cancel";
                        quickNotesMeetingCancelButton.classList.add('allButtonsHover');
                        quickNotesMeetingCancelButton.style.color = "darkred";
                        quickNotesMeetingCancelButton.style.marginLeft = "30%";
                        quickNotesOPButtons.appendChild(quickNotesMeetingCancelButton);
                        quickNotesMeetingCancelButton.addEventListener ("click", () => {
                          mainHomeButton ();
                        });
                        

                        })

                      })
}

// JOIN A MEETING FUNCTION
function joinAmeetingFunction () {

  // Schedule a meeting Container
  const meetingScheduleEmpty = document.createElement('div');
  meetingScheduleEmpty.setAttribute('class', 'meetingScheduleEmpty');
  meetingSchedule.replaceWith(meetingScheduleEmpty);

      // Schedule a Meeting | Back Button
      const scheduleMeetingHomButton = document.createElement ('button');
      scheduleMeetingHomButton.setAttribute('class', 'scheduleMeetingHomButton');
      scheduleMeetingHomButton.textContent= "< Back";
      meetingScheduleEmpty.appendChild(scheduleMeetingHomButton);

          // The Click Event Listener to Go Back To The Home Page
          scheduleMeetingHomButton.addEventListener("click", () => {
            meetingScheduleEmpty.replaceWith(meetingSchedule);
          })

      // Schedule a Meeting | Form Container | Has (2) Containers | 1- Form Name | 2- Form Fields
      const scheduleFormContainer = document.createElement('div');
      scheduleFormContainer.setAttribute('class', 'scheduleFormContainer');
      meetingScheduleEmpty.appendChild(scheduleFormContainer);

            // Schedule a Meeting | Form Container | 1- Form Name 
            const scheduleFormName = document.createElement('div');
            scheduleFormName.setAttribute('class', 'scheduleFormName');
            scheduleFormName.textContent = "Join a Zoom meeting";
            scheduleFormName.style.color = "darkred";
            scheduleFormContainer.appendChild(scheduleFormName);
                  

            // Schedule a Meeting | Form Container | 2- Form Fields
            const scheduleFormField = document.createElement('div');
            scheduleFormField.setAttribute('class', 'scheduleFormField');
            scheduleFormContainer.appendChild(scheduleFormField);

                  // Schedule a Meeting | Form Container | Form Fields | Fields Names
                  const scheduleFormFieldtheTitles = document.createElement('div');
                  scheduleFormFieldtheTitles.setAttribute('class', 'scheduleFormFieldtheTitles');
                  scheduleFormField.appendChild(scheduleFormFieldtheTitles);

                      
                      // Schedule a Meeting | Form Container | Form Fields | Fields Names | Person Name
                      const scheduleFormFieldtheName = document.createElement('div');
                      scheduleFormFieldtheName.setAttribute('class', 'scheduleFormFieldtheName');
                      scheduleFormFieldtheName.classList.add('formsTitles');
                      scheduleFormFieldtheName.textContent = "Name :";
                      scheduleFormFieldtheName.style.marginTop = "60%";
                      scheduleFormFieldtheTitles.appendChild(scheduleFormFieldtheName);

                      
                      // Schedule a Meeting | Form Container | Form Fields | Fields Names | Person Phone Email
                      const scheduleFormFieldEmail = document.createElement('div');
                      scheduleFormFieldEmail.setAttribute('class', 'scheduleFormFieldEmail');
                      scheduleFormFieldEmail.classList.add('formsTitles');
                      scheduleFormFieldEmail.textContent = "Zoom Link :";
                      scheduleFormFieldtheTitles.appendChild(scheduleFormFieldEmail);



                  // Schedule a Meeting | Form Container | Form Fields | Has (7) forms
                  const scheduleFormFieldtForms = document.createElement('div');
                  scheduleFormFieldtForms.setAttribute('class', 'scheduleFormFieldtForms');
                  scheduleFormField.appendChild(scheduleFormFieldtForms);
                        

                      
                      // Form Fields | Meet with Person Name
                      const meetingFormPersonName = document.createElement('input');
                      meetingFormPersonName.setAttribute('class', 'meetingFormPersonName');
                      meetingFormPersonName.setAttribute("type", "text");
                      meetingFormPersonName.setAttribute("placeholder", "Person Name");
                      meetingFormPersonName.style.marginTop = "35%";
                      scheduleFormFieldtForms.appendChild(meetingFormPersonName);

                      meetingFormPersonName.addEventListener("change", (event) => {
                        const meetingPersonNameValue = event.target.value;
                        console.log("Person Name:", meetingPersonNameValue);
                        return meetingPersonNameValue;
                      });


                      // Form Fields | Person ZoomLink
                      const meetingFormPersonZoomLink = document.createElement('input');
                      meetingFormPersonZoomLink.setAttribute('class', 'meetingFormPersonZoomLink');
                      meetingFormPersonZoomLink.setAttribute("type", "eamil");
                      meetingFormPersonZoomLink.setAttribute("placeholder", "ZoomLink");
                      meetingFormPersonZoomLink.style.width = "98%";
                      scheduleFormFieldtForms.appendChild(meetingFormPersonZoomLink);

                      // 
                      meetingFormPersonZoomLink.addEventListener("change", (event) => {
                        event.preventDefault();
                        const meetingFormPersonZoomLink = event.target.value;

                            if (meetingFormPersonZoomLink.includes('https://')) {
                              const meetingFormPersonZoomLink = event.target.value;
                              return meetingFormPersonZoomLink;
                            } else {
                              alert("invalid ZoomLink Address");
                            }
                      });

                      // Form Fields | Confirm Button
                      const scheduleMeetingSubmitButton = document.createElement ('button');
                      scheduleMeetingSubmitButton.setAttribute('class', 'scheduleMeetingSubmitButton');
                      scheduleMeetingSubmitButton.textContent= "Submit";
                      scheduleMeetingSubmitButton.classList.add('allButtonsHover');
                      scheduleMeetingSubmitButton.style.marginLeft = "70%";
                      scheduleFormFieldtForms.appendChild(scheduleMeetingSubmitButton);
                      
                      // Form Fields | Confirm Button | Activation
                      scheduleMeetingSubmitButton.addEventListener('click', (event) => {
                        
                        // Table Row
                        const upcomingMeetingTableRow = document.createElement('tr');
                        upcomingMeetingTableRow.setAttribute('class', "upcomingMeetingTableRow");
                        todoListTableCells.append(upcomingMeetingTableRow)

                        // Table Cell 1
                        const upcomingMeetingTableRowCell1 = document.createElement('td');
                        upcomingMeetingTableRowCell1.setAttribute('class', "upcomingMeetingTableRowCell1");
                        upcomingMeetingTableRow.append(upcomingMeetingTableRowCell1);

                        // Table Cell 2
                        const upcomingMeetingTableRowCell2 = document.createElement('td');
                        upcomingMeetingTableRowCell2.setAttribute('class', "upcomingMeetingTableRowCell2");
                        upcomingMeetingTableRow.append(upcomingMeetingTableRowCell2);

                        // Submiting the Meeting to the table.
                        const upcomingMeeting = document.createElement('li');
                        upcomingMeeting.setAttribute('class', "upcomingMeeting");
                        upcomingMeeting.textContent = `${meetingFormDate.value}   at   ${meetingFormTime.value}   with   ${meetingFormPersonName.value}.`;
                        
                        upcomingMeetingTableRowCell1.appendChild(upcomingMeeting);

                        // Meeting Details Button
                        const meetingDetails = document.createElement ('button');
                        meetingDetails.setAttribute('class', 'meetingDetails');
                        meetingDetails.textContent= "Details";
                        meetingDetails.classList.add('allButtonsHover');
                        upcomingMeetingTableRowCell2.append(meetingDetails);
                        
                        // Meeting Details Button Function
                        meetingDetails.addEventListener('click', (event) => {

                          // Quick Notes Meeting Details Container | Has (2) Containers | TOP: Meeting Details Table | BOTTOM: operational Buttons


                    // Quick Notes Meeting Details Container | Has (2) Containers | TOP: Meeting Details Table | BOTTOM: operational Buttons
                    const quickNotesTableContainer = document.createElement('div');
                    quickNotesTableContainer.setAttribute('class', 'quickNotesTableContainer');
                    agendaContents.replaceWith(quickNotesTableContainer);

                    

                        // Quick Notes Table
                        const quickNotesTable = document.createElement('table');
                        quickNotesTable.setAttribute('class', "quickNotesTable");
                        // quickNotesTable.textContent = "I'm here";
                        quickNotesTableContainer.append(quickNotesTable);



                          // Quick Notes Table | Row 1
                          const quickNotesTableRow1 = document.createElement('tr');
                          quickNotesTableRow1.setAttribute('class', "quickNotesTableRow1");
                          quickNotesTable.append(quickNotesTableRow1);

                              // Quick Notes Table | Row 1 | Cell 1
                              const quickNotesTableRow1Cell1 = document.createElement('td');
                              quickNotesTableRow1Cell1.setAttribute('class', "quickNotesTableRow1Cell1");
                              quickNotesTableRow1Cell1.textContent = "Name"
                              quickNotesTableRow1.append(quickNotesTableRow1Cell1);
                      
                              
                              // Quick Notes Table | Row 1 | Cell 2
                              const quickNotesTableRow1Cell2 = document.createElement('td');
                              quickNotesTableRow1Cell2.setAttribute('class', "quickNotesTableRow1Cell2");
                              quickNotesTableRow1Cell2.textContent = meetingFormPersonName.value;
                              quickNotesTableRow1.append(quickNotesTableRow1Cell2);

                              // Quick Notes Table | Row 1 | Cell 3
                              const quickNotesTableRow1Cell3 = document.createElement('td');
                              quickNotesTableRow1Cell3.setAttribute('class', "quickNotesTableRow1Cell3");
                              quickNotesTableRow1Cell3.textContent = "Subject"
                              quickNotesTableRow1.append(quickNotesTableRow1Cell3);

                              // Quick Notes Table | Row 1 | Cell 4
                              const quickNotesTableRow1Cell4 = document.createElement('td');
                              quickNotesTableRow1Cell4.setAttribute('class', "quickNotesTableRow1Cell4");
                              quickNotesTableRow1Cell4.textContent= meetingFormMeetingSubject.value;
                              //  = meetingSubject;
                              
                              quickNotesTableRow1.append(quickNotesTableRow1Cell4);



                          // Quick Notes Table | Row 2
                          const quickNotesTableRow2 = document.createElement('tr');
                          quickNotesTableRow2.setAttribute('class', "quickNotesTableRow2");
                          quickNotesTable.append(quickNotesTableRow2);

                              // Quick Notes Table | Row 2 | Cell 1
                              const quickNotesTableRow2Cell1 = document.createElement('td');
                              quickNotesTableRow2Cell1.setAttribute('class', "quickNotesTableRow2Cell1");
                              quickNotesTableRow2Cell1.textContent ="Date"
                              quickNotesTableRow2.append(quickNotesTableRow2Cell1);
// ---------------- Date -----------
                              // Quick Notes Table | Row 2 | Cell 2
                              const quickNotesTableRow2Cell2 = document.createElement('td');
                              quickNotesTableRow2Cell2.setAttribute('class', "quickNotesTableRow2Cell2");
                              quickNotesTableRow2Cell2.textContent = meetingFormDate.value ;
                              quickNotesTableRow2.append(quickNotesTableRow2Cell2);

                              // Quick Notes Table | Row 2 | Cell 3
                              const quickNotesTableRow2Cell3 = document.createElement('td');
                              quickNotesTableRow2Cell3.setAttribute('class', "quickNotesTableRow2Cell3");
                              quickNotesTableRow2Cell3.textContent = "Time";
                              quickNotesTableRow2.append(quickNotesTableRow2Cell3);

                              // Quick Notes Table | Row 2 | Cell 4
                              const quickNotesTableRow2Cell4 = document.createElement('td');
                              quickNotesTableRow2Cell4.setAttribute('class', "quickNotesTableRow2Cell4");
                              quickNotesTableRow2Cell4.textContent = meetingFormTime.value;
                              quickNotesTableRow2.append(quickNotesTableRow2Cell4);



                          // Quick Notes Table | Row 3
                          const quickNotesTableRow3 = document.createElement('tr');
                          quickNotesTableRow3.setAttribute('class', "quickNotesTableRow3");
                          quickNotesTable.append(quickNotesTableRow3);

                              // Quick Notes Table | Row 3 | Cell 1
                              const quickNotesTableRow3Cell1 = document.createElement('td');
                              quickNotesTableRow3Cell1.setAttribute('class', "quickNotesTableRow3Cell1");
                              quickNotesTableRow3Cell1.textContent ="Phone"
                              quickNotesTableRow3.append(quickNotesTableRow3Cell1);

                              // Quick Notes Table | Row 3 | Cell 2
                              const quickNotesTableRow3Cell2 = document.createElement('td');
                              quickNotesTableRow3Cell2.setAttribute('class', "quickNotesTableRow3Cell2");
                              quickNotesTableRow3Cell2.textContent = meetingFormPersonPhone.value;
                              quickNotesTableRow3.append(quickNotesTableRow3Cell2);

                              // Quick Notes Table | Row 3 | Cell 3
                              const quickNotesTableRow3Cell3 = document.createElement('td');
                              quickNotesTableRow3Cell3.setAttribute('class', "quickNotesTableRow3Cell3");
                              quickNotesTableRow3Cell3.textContent= "Email";
                              quickNotesTableRow3.append(quickNotesTableRow3Cell3);

                              // Quick Notes Table | Row 3 | Cell 4
                              const quickNotesTableRow3Cell4 = document.createElement('td');
                              quickNotesTableRow3Cell4.setAttribute('class', "quickNotesTableRow3Cell4");
                              quickNotesTableRow3Cell4.textContent = meetingFormPersonEmail.value ;
                              quickNotesTableRow3.append(quickNotesTableRow3Cell4);



                    // Quick Notes Meeting Details Container | Buttons | Has (2) buttons | 1- Reschedule | 2- Cancel
                    const quickNotesOPButtons = document.createElement('div');
                    quickNotesOPButtons.setAttribute('class', 'quickNotesOPButtons');
                    quickNotesTableContainer.appendChild(quickNotesOPButtons);


                        // Quick Notes Meeting Details Container | Buttons | Has (2) buttons | 1- Reschedule
                        const quickNotesMeetingREscheduleButton = document.createElement ('button');
                        quickNotesMeetingREscheduleButton.setAttribute('class', 'quickNotesMeetingREscheduleButton');
                        quickNotesMeetingREscheduleButton.textContent= "Reschedule";
                        quickNotesMeetingREscheduleButton.classList.add('allButtonsHover');
                        quickNotesMeetingREscheduleButton.style.marginLeft = "20%";
                        quickNotesOPButtons.appendChild(quickNotesMeetingREscheduleButton);
                        
                        
                        
                        // Quick Notes Meeting Details Container | Buttons | Has (2) buttons | 2- Cancel
                        const quickNotesMeetingCancelButton = document.createElement ('button');
                        quickNotesMeetingCancelButton.setAttribute('class', 'quickNotesMeetingCancelButton');
                        quickNotesMeetingCancelButton.textContent= "Cancel";
                        quickNotesMeetingCancelButton.classList.add('allButtonsHover');
                        quickNotesMeetingCancelButton.style.color = "darkred";
                        quickNotesMeetingCancelButton.style.marginLeft = "30%";
                        quickNotesOPButtons.appendChild(quickNotesMeetingCancelButton);
                        quickNotesMeetingCancelButton.addEventListener ("click", () => {
                          mainHomeButton ();
                        });
                        

                        })

                      })
}

// SCHEDULE A MEETING FUNCTION
function scheduleAmeeting () {

    // Schedule a meeting Container
    const meetingScheduleEmpty = document.createElement('div');
    meetingScheduleEmpty.setAttribute('class', 'meetingScheduleEmpty');
    meetingSchedule.replaceWith(meetingScheduleEmpty);

        // Schedule a Meeting | Back Button
        const scheduleMeetingHomButton = document.createElement ('button');
        scheduleMeetingHomButton.setAttribute('class', 'scheduleMeetingHomButton');
        scheduleMeetingHomButton.textContent= "< Back";
        meetingScheduleEmpty.appendChild(scheduleMeetingHomButton);

            // The Click Event Listener to Go Back To The Home Page
            scheduleMeetingHomButton.addEventListener("click", () => {
              meetingScheduleEmpty.replaceWith(meetingSchedule);
            })

        // Schedule a Meeting | Form Container | Has (2) Containers | 1- Form Name | 2- Form Fields
        const scheduleFormContainer = document.createElement('div');
        scheduleFormContainer.setAttribute('class', 'scheduleFormContainer');
        meetingScheduleEmpty.appendChild(scheduleFormContainer);

              // Schedule a Meeting | Form Container | 1- Form Name 
              const scheduleFormName = document.createElement('div');
              scheduleFormName.setAttribute('class', 'scheduleFormName');
              scheduleFormName.textContent = "Schedule a meeting";
              scheduleFormContainer.appendChild(scheduleFormName);
                    

              // Schedule a Meeting | Form Container | 2- Form Fields
              const scheduleFormField = document.createElement('div');
              scheduleFormField.setAttribute('class', 'scheduleFormField');
              scheduleFormContainer.appendChild(scheduleFormField);

                    // Schedule a Meeting | Form Container | Form Fields | Fields Names
                    const scheduleFormFieldtheTitles = document.createElement('div');
                    scheduleFormFieldtheTitles.setAttribute('class', 'scheduleFormFieldtheTitles');
                    scheduleFormField.appendChild(scheduleFormFieldtheTitles);

                        // Schedule a Meeting | Form Container | Form Fields | Fields Names | Date
                        const scheduleFormFieldtheDate = document.createElement('div');
                        scheduleFormFieldtheDate.setAttribute('class', 'scheduleFormFieldtheDate');
                        scheduleFormFieldtheDate.classList.add('formsTitles');
                        scheduleFormFieldtheDate.textContent = "Date :";
                        scheduleFormFieldtheTitles.appendChild(scheduleFormFieldtheDate);

                        // Schedule a Meeting | Form Container | Form Fields | Fields Names | Time
                        const scheduleFormFieldtheTime = document.createElement('div');
                        scheduleFormFieldtheTime.setAttribute('class', 'scheduleFormFieldtheTime');
                        scheduleFormFieldtheTime.classList.add('formsTitles');
                        scheduleFormFieldtheTime.textContent = "Time :";
                        scheduleFormFieldtheTitles.appendChild(scheduleFormFieldtheTime);

                        // Schedule a Meeting | Form Container | Form Fields | Fields Names | Person Phone Name
                        const scheduleFormFieldtheName = document.createElement('div');
                        scheduleFormFieldtheName.setAttribute('class', 'scheduleFormFieldtheName');
                        scheduleFormFieldtheName.classList.add('formsTitles');
                        scheduleFormFieldtheName.textContent = "Meet with :";
                        scheduleFormFieldtheTitles.appendChild(scheduleFormFieldtheName);

                        // Schedule a Meeting | Form Container | Form Fields | Fields Names | Person Phone Number
                        const scheduleFormFieldPhoneNumber = document.createElement('div');
                        scheduleFormFieldPhoneNumber.setAttribute('class', 'scheduleFormFieldPhoneNumber');
                        scheduleFormFieldPhoneNumber.classList.add('formsTitles');
                        scheduleFormFieldPhoneNumber.textContent = "Phone No :";
                        scheduleFormFieldtheTitles.appendChild(scheduleFormFieldPhoneNumber);

                        // Schedule a Meeting | Form Container | Form Fields | Fields Names | Person Phone Email
                        const scheduleFormFieldEmail = document.createElement('div');
                        scheduleFormFieldEmail.setAttribute('class', 'scheduleFormFieldEmail');
                        scheduleFormFieldEmail.classList.add('formsTitles');
                        scheduleFormFieldEmail.textContent = "Email :";
                        scheduleFormFieldtheTitles.appendChild(scheduleFormFieldEmail);


                        // Schedule a Meeting | Form Container | Form Fields | Fields Names | Meeting Subject
                        const scheduleFormFieldLocation = document.createElement('div');
                        scheduleFormFieldLocation.setAttribute('class', 'scheduleFormFieldLocation');
                        scheduleFormFieldLocation.classList.add('formsTitles');
                        scheduleFormFieldLocation.textContent = "Subject :";
                        scheduleFormFieldtheTitles.appendChild(scheduleFormFieldLocation);

                        

                    // Schedule a Meeting | Form Container | Form Fields | Has (7) forms
                    const scheduleFormFieldtForms = document.createElement('div');
                    scheduleFormFieldtForms.setAttribute('class', 'scheduleFormFieldtForms');
                    scheduleFormField.appendChild(scheduleFormFieldtForms);
                          

                        // Form Fields | Date
                        const meetingFormDate = document.createElement('input');
                        meetingFormDate.setAttribute('class', 'meetingFormDate');
                        meetingFormDate.style.width = "70%";
                        meetingFormDate.setAttribute("type", "date");
                        meetingFormDate.setAttribute("placeholder", "Select a date");
                        scheduleFormFieldtForms.appendChild(meetingFormDate);

                        meetingFormDate.addEventListener("change", (event) => {
                          const meetingDateValue = event.target.value;
                          console.log("Selected date:", meetingDateValue);
                          return meetingDateValue;
                        });


                        // Form Fields | Time
                        const meetingFormTime = document.createElement('input');
                        meetingFormTime.setAttribute('class', 'meetingFormTime');
                        meetingFormTime.style.width = "70%";                        
                        meetingFormTime.setAttribute("type", "time");
                        meetingFormTime.setAttribute("placeholder", "Select a time");
                        scheduleFormFieldtForms.appendChild(meetingFormTime);

                        meetingFormTime.addEventListener("change", (event) => {
                          const meetingTimeValue = event.target.value;
                          console.log("Selected Time:", meetingTimeValue);
                          return meetingTimeValue ;
                        });


                        // Form Fields | Meet with Person Name
                        const meetingFormPersonName = document.createElement('input');
                        meetingFormPersonName.setAttribute('class', 'meetingFormPersonName');
                        meetingFormPersonName.setAttribute("type", "text");
                        meetingFormPersonName.setAttribute("placeholder", "Person Name");
                        scheduleFormFieldtForms.appendChild(meetingFormPersonName);

                        meetingFormPersonName.addEventListener("change", (event) => {
                          const meetingPersonNameValue = event.target.value;
                          console.log("Person Name:", meetingPersonNameValue);
                          return meetingPersonNameValue;
                        });


                        // Form Fields | Person Phone Number
                        const meetingFormPersonPhone = document.createElement('input');
                        meetingFormPersonPhone.setAttribute('class', 'meetingFormPersonPhone');
                        meetingFormPersonPhone.setAttribute("type", "tel");
                        meetingFormPersonPhone.setAttribute("placeholder", "Phone Number");
                        scheduleFormFieldtForms.appendChild(meetingFormPersonPhone);
                        
                        meetingFormPersonPhone.addEventListener("change", (event) => {
                          
                          const meetingPersonPhoneValue = event.target.value;
                          
                          if (meetingPersonPhoneValue.replace(/[^0-9]/g, '')) {
                            const meetingFormPersonPhone = event.target.value;
                                return meetingFormPersonPhone;
                          } else {
                            alert("invalid Phone Number");
                          }
                        } 
                      );

                        
                        // Form Fields | Person Email
                        const meetingFormPersonEmail = document.createElement('input');
                        meetingFormPersonEmail.setAttribute('class', 'meetingFormPersonEmail');
                        meetingFormPersonEmail.setAttribute("type", "eamil");
                        meetingFormPersonEmail.setAttribute("placeholder", "Email");
                        meetingFormPersonEmail.style.width = "98%";
                        scheduleFormFieldtForms.appendChild(meetingFormPersonEmail);

                        // 
                        meetingFormPersonEmail.addEventListener("change", (event) => {
                          event.preventDefault();
                          const meetingFormPersonEmail = event.target.value;

                              if (meetingFormPersonEmail.includes('@')) {
                                const meetingFormPersonEmail = event.target.value;
                                return meetingFormPersonEmail;
                              } else {
                                alert("invalid Email Address");
                              }
                        });


                        // Form Fields | Meeting Subject
                        const meetingFormMeetingSubject = document.createElement('input');
                        meetingFormMeetingSubject.setAttribute('class', 'meetingFormMeetingSubject');
                        meetingFormMeetingSubject.setAttribute("type", "text");
                        meetingFormMeetingSubject.style.width = "98%";
                        meetingFormMeetingSubject.setAttribute("placeholder", "Meeting Subject");
                        scheduleFormFieldtForms.appendChild(meetingFormMeetingSubject);

                        meetingFormMeetingSubject.addEventListener("change", (event) => {
                          //event.preventDefault();
                          const meetingFormMeetingSubject = event.target.value;

                          return meetingFormMeetingSubject;
                        });

                        // Form Fields | Text Reminder
                        const meetingFormTextReminder = document.createElement('input');
                        meetingFormTextReminder.setAttribute('class', 'meetingFormTextReminder');
                        meetingFormTextReminder.setAttribute("type", "checkbox");
                        
                        // Form Fields | Text Reminder | Checkbox activation
                        meetingFormTextReminder.addEventListener("change", (event) => {
                          const textReminderEvent = event.target;
                            if (meetingFormTextReminder.checked) { 
                              prompt ("Please enter a phone number");
                            } else {
                              alert ("Text reminder has been cancelled");
                            }
                        })

                            // Label text
                            const reminderLabel = document.createElement('p');
                            reminderLabel.setAttribute('class', "reminderLabel")
                            reminderLabel.textContent ="Send me a text reminder";
                            reminderLabel.style.display = "inline";
                            reminderLabel.style.marginLeft = "0.5vw";
                            reminderLabel.style.marginRight = "0.5vw";
                            reminderLabel.style.marginTop = "1em";
                            reminderLabel.style.fontWeight = "bold";
                            scheduleFormFieldtForms.appendChild(reminderLabel);    
                            scheduleFormFieldtForms.appendChild(meetingFormTextReminder);    


                        // Form Fields | Confirm Button
                        const scheduleMeetingSubmitButton = document.createElement ('button');
                        scheduleMeetingSubmitButton.setAttribute('class', 'scheduleMeetingSubmitButton');
                        scheduleMeetingSubmitButton.textContent= "Submit";
                        scheduleMeetingSubmitButton.classList.add('allButtonsHover');
                        scheduleMeetingSubmitButton.style.marginLeft = "70%";
                        scheduleFormFieldtForms.appendChild(scheduleMeetingSubmitButton);
                        
                        // Form Fields | Confirm Button | Activation
                        scheduleMeetingSubmitButton.addEventListener('click', (event) => {
                          
                          // Table Row
                          const upcomingMeetingTableRow = document.createElement('tr');
                          upcomingMeetingTableRow.setAttribute('class', "upcomingMeetingTableRow");
                          todoListTableCells.append(upcomingMeetingTableRow)

                          // Table Cell 1
                          const upcomingMeetingTableRowCell1 = document.createElement('td');
                          upcomingMeetingTableRowCell1.setAttribute('class', "upcomingMeetingTableRowCell1");
                          upcomingMeetingTableRow.append(upcomingMeetingTableRowCell1);

                          // Table Cell 2
                          const upcomingMeetingTableRowCell2 = document.createElement('td');
                          upcomingMeetingTableRowCell2.setAttribute('class', "upcomingMeetingTableRowCell2");
                          upcomingMeetingTableRow.append(upcomingMeetingTableRowCell2);

                          // Submiting the Meeting to the table.
                          const upcomingMeeting = document.createElement('li');
                          upcomingMeeting.setAttribute('class', "upcomingMeeting");
                          upcomingMeeting.textContent = `${meetingFormDate.value}   at   ${meetingFormTime.value}   with   ${meetingFormPersonName.value}.`;
                          
                          upcomingMeetingTableRowCell1.appendChild(upcomingMeeting);

                          // Meeting Details Button
                          const meetingDetails = document.createElement ('button');
                          meetingDetails.setAttribute('class', 'meetingDetails');
                          meetingDetails.textContent= "Details";
                          meetingDetails.classList.add('allButtonsHover');
                          upcomingMeetingTableRowCell2.append(meetingDetails);
                          
                          // Meeting Details Button Function
                          meetingDetails.addEventListener('click', (event) => {

                // Quick Notes Meeting Details Container | Has (2) Containers | TOP: Meeting Details Table | BOTTOM: operational Buttons


                      // Quick Notes Meeting Details Container | Has (2) Containers | TOP: Meeting Details Table | BOTTOM: operational Buttons
                      const quickNotesTableContainer = document.createElement('div');
                      quickNotesTableContainer.setAttribute('class', 'quickNotesTableContainer');
                      agendaContents.replaceWith(quickNotesTableContainer);

                      

                          // Quick Notes Table
                          const quickNotesTable = document.createElement('table');
                          quickNotesTable.setAttribute('class', "quickNotesTable");
                          // quickNotesTable.textContent = "I'm here";
                          quickNotesTableContainer.append(quickNotesTable);



                            // Quick Notes Table | Row 1
                            const quickNotesTableRow1 = document.createElement('tr');
                            quickNotesTableRow1.setAttribute('class', "quickNotesTableRow1");
                            quickNotesTable.append(quickNotesTableRow1);

                                // Quick Notes Table | Row 1 | Cell 1
                                const quickNotesTableRow1Cell1 = document.createElement('td');
                                quickNotesTableRow1Cell1.setAttribute('class', "quickNotesTableRow1Cell1");
                                quickNotesTableRow1Cell1.textContent = "Name"
                                quickNotesTableRow1.append(quickNotesTableRow1Cell1);
                        
                                
                                // Quick Notes Table | Row 1 | Cell 2
                                const quickNotesTableRow1Cell2 = document.createElement('td');
                                quickNotesTableRow1Cell2.setAttribute('class', "quickNotesTableRow1Cell2");
                                quickNotesTableRow1Cell2.textContent = meetingFormPersonName.value;
                                quickNotesTableRow1.append(quickNotesTableRow1Cell2);

                                // Quick Notes Table | Row 1 | Cell 3
                                const quickNotesTableRow1Cell3 = document.createElement('td');
                                quickNotesTableRow1Cell3.setAttribute('class', "quickNotesTableRow1Cell3");
                                quickNotesTableRow1Cell3.textContent = "Subject"
                                quickNotesTableRow1.append(quickNotesTableRow1Cell3);

                                // Quick Notes Table | Row 1 | Cell 4
                                const quickNotesTableRow1Cell4 = document.createElement('td');
                                quickNotesTableRow1Cell4.setAttribute('class', "quickNotesTableRow1Cell4");
                                quickNotesTableRow1Cell4.textContent= meetingFormMeetingSubject.value;
                                //  = meetingSubject;
                                
                                quickNotesTableRow1.append(quickNotesTableRow1Cell4);



                            // Quick Notes Table | Row 2
                            const quickNotesTableRow2 = document.createElement('tr');
                            quickNotesTableRow2.setAttribute('class', "quickNotesTableRow2");
                            quickNotesTable.append(quickNotesTableRow2);

                                // Quick Notes Table | Row 2 | Cell 1
                                const quickNotesTableRow2Cell1 = document.createElement('td');
                                quickNotesTableRow2Cell1.setAttribute('class', "quickNotesTableRow2Cell1");
                                quickNotesTableRow2Cell1.textContent ="Date"
                                quickNotesTableRow2.append(quickNotesTableRow2Cell1);

                                // Quick Notes Table | Row 2 | Cell 2
                                const quickNotesTableRow2Cell2 = document.createElement('td');
                                quickNotesTableRow2Cell2.setAttribute('class', "quickNotesTableRow2Cell2");
                                quickNotesTableRow2Cell2.textContent = meetingFormDate.value ;
                                quickNotesTableRow2.append(quickNotesTableRow2Cell2);

                                // Quick Notes Table | Row 2 | Cell 3
                                const quickNotesTableRow2Cell3 = document.createElement('td');
                                quickNotesTableRow2Cell3.setAttribute('class', "quickNotesTableRow2Cell3");
                                quickNotesTableRow2Cell3.textContent = "Time";
                                quickNotesTableRow2.append(quickNotesTableRow2Cell3);

                                // Quick Notes Table | Row 2 | Cell 4
                                const quickNotesTableRow2Cell4 = document.createElement('td');
                                quickNotesTableRow2Cell4.setAttribute('class', "quickNotesTableRow2Cell4");
                                quickNotesTableRow2Cell4.textContent = meetingFormTime.value;
                                quickNotesTableRow2.append(quickNotesTableRow2Cell4);



                            // Quick Notes Table | Row 3
                            const quickNotesTableRow3 = document.createElement('tr');
                            quickNotesTableRow3.setAttribute('class', "quickNotesTableRow3");
                            quickNotesTable.append(quickNotesTableRow3);

                                // Quick Notes Table | Row 3 | Cell 1
                                const quickNotesTableRow3Cell1 = document.createElement('td');
                                quickNotesTableRow3Cell1.setAttribute('class', "quickNotesTableRow3Cell1");
                                quickNotesTableRow3Cell1.textContent ="Phone"
                                quickNotesTableRow3.append(quickNotesTableRow3Cell1);

                                // Quick Notes Table | Row 3 | Cell 2
                                const quickNotesTableRow3Cell2 = document.createElement('td');
                                quickNotesTableRow3Cell2.setAttribute('class', "quickNotesTableRow3Cell2");
                                quickNotesTableRow3Cell2.textContent = meetingFormPersonPhone.value;
                                quickNotesTableRow3.append(quickNotesTableRow3Cell2);

                                // Quick Notes Table | Row 3 | Cell 3
                                const quickNotesTableRow3Cell3 = document.createElement('td');
                                quickNotesTableRow3Cell3.setAttribute('class', "quickNotesTableRow3Cell3");
                                quickNotesTableRow3Cell3.textContent= "Email";
                                quickNotesTableRow3.append(quickNotesTableRow3Cell3);

                                // Quick Notes Table | Row 3 | Cell 4
                                const quickNotesTableRow3Cell4 = document.createElement('td');
                                quickNotesTableRow3Cell4.setAttribute('class', "quickNotesTableRow3Cell4");
                                quickNotesTableRow3Cell4.textContent = meetingFormPersonEmail.value ;
                                quickNotesTableRow3.append(quickNotesTableRow3Cell4);



                      // Quick Notes Meeting Details Container | Buttons | Has (2) buttons | 1- Reschedule | 2- Cancel
                      const quickNotesOPButtons = document.createElement('div');
                      quickNotesOPButtons.setAttribute('class', 'quickNotesOPButtons');
                      quickNotesTableContainer.appendChild(quickNotesOPButtons);


                          // Quick Notes Meeting Details Container | Buttons | Has (2) buttons | 1- Reschedule
                          const quickNotesMeetingREscheduleButton = document.createElement ('button');
                          quickNotesMeetingREscheduleButton.setAttribute('class', 'quickNotesMeetingREscheduleButton');
                          quickNotesMeetingREscheduleButton.textContent= "Reschedule";
                          quickNotesMeetingREscheduleButton.classList.add('allButtonsHover');
                          quickNotesMeetingREscheduleButton.style.marginLeft = "20%";
                          quickNotesOPButtons.appendChild(quickNotesMeetingREscheduleButton);
                          quickNotesMeetingREscheduleButton.addEventListener("click", () => {
                            mainHomeButton();
                            scheduleAmeeting ();  
                          })
                          
                          
                          
                          // Quick Notes Meeting Details Container | Buttons | Has (2) buttons | 2- Cancel
                          const quickNotesMeetingCancelButton = document.createElement ('button');
                          quickNotesMeetingCancelButton.setAttribute('class', 'quickNotesMeetingCancelButton');
                          quickNotesMeetingCancelButton.textContent= "Cancel";
                          quickNotesMeetingCancelButton.classList.add('allButtonsHover');
                          quickNotesMeetingCancelButton.style.color = "darkred";
                          quickNotesMeetingCancelButton.style.marginLeft = "30%";
                          quickNotesOPButtons.appendChild(quickNotesMeetingCancelButton);
                          quickNotesMeetingCancelButton.addEventListener ("click", () => {
                            mainHomeButton ();
                          });
                          })
                        })
}

