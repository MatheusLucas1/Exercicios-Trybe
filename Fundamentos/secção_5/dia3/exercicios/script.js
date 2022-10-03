function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  


  // Escreva seu código abaixo.
  

  function createCalendar() {
    const decemberDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const decemberDaysList = document.querySelector('#days');

    for ( let i = 0; i < decemberDays.length; i+=1){
      const daysOfDecember = decemberDays[i];
      const dayListItemDecember = document.createElement('li');
      dayListItemDecember.innerHTML = daysOfDecember;
      
      if (decemberDays === 24||decemberDays === 31){
      dayListItemDecember.className = 'day holiday'
      decemberDaysList.appendChild(dayListItemDecember)
      }
      else if (decemberDays === 4||decemberDays === 11||decemberDays === 18){
        dayListItemDecember.className = 'day friday'
        decemberDaysList.appendChild(dayListItemDecember)
      }
      else if (decemberDays === 25) {
        dayListItemDecember.className = 'day holiday friday'
        decemberDaysList.appendChild(dayListItemDecember)
      }
      else {
        dayListItemDecember.className = 'day'
        decemberDaysList.appendChild(dayListItemDecember)
      }

    }
  }

  createCalendar()

  function createHolidayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-holiday';
  
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    
    buttonContainer.appendChild(newButton);
  }
  
  createHolidayButton('Feriados');

  function displayHolidays() {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'white';
  
    getHolidayButton.addEventListener('click', function() {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === setNewColor) {
          getHolidays[index].style.backgroundColor = backgroundColor;
        } else {
          getHolidays[index].style.backgroundColor = setNewColor;
        }
      }
    });
  }

  displayHolidays ()

  function createFridayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-friday';
  
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    buttonContainer.appendChild(newButton); //adiciona o botão como filho do container de botões
  }

  createFridayButton('Sexta-feira')


  function displayFridays(fridaysArray){
    let getFridayButton = document.querySelector('#btn-friday');
    let fridays = document.getElementsByClassName('friday');
    let newFridayText = 'SEXTOU o/'


    getFridayButton.addEventListener('click', function() {
      for (let i = 0; i < fridays.length; i+=1){
        if (fridays[i].innerHTML !== newFridayText){
          fridays[i].innerHTML = newFridayText
        }
        else {
          fridays[i].innerHTML = fridaysArray[i]
        }
       
      }

    })
  
  let decemberFridays = [ 4, 11, 18, 25 ];
  displayFridays(decemberFridays);