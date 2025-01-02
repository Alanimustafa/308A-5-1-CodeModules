// CALENDAR FUNCTION
export function theCalendarFunction () {
  const calendarContainer = document.createElement('div');
  calendarContainer.setAttribute("class", "calendarContainer");
  todoMainRight.replaceWith(calendarContainer);

  const calendarBackButton = document.createElement ('button');
  calendarBackButton.setAttribute('class', 'calendarBackButton');
  calendarBackButton.textContent= "< Back";
  calendarBackButton.style.paddingLeft = "1em";
  calendarContainer.appendChild(calendarBackButton);
  calendarBackButton.addEventListener("click", () => {
    calendarContainer.replaceWith(todoMainRight);
  })

  // Adding the year Callendar
  const calendarSubContainer = document.createElement('div');
  calendarSubContainer.setAttribute("class", "calendarSubContainer");
  calendarSubContainer.style.backgroundImage = 'url(./images/2024-Calendar.jpg)';
  calendarSubContainer.style.backgroundSize = "cover";
  calendarContainer.appendChild(calendarSubContainer);

}