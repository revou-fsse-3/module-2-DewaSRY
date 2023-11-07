import { Container, Children } from "/src/components/utils/type.js";

/**
 * @type {{
 *  root : HTMLElement,
 * setContent:(el:string)=>void,
 * getContent : (id:string)=> HTMLElement
 * getContents : (selector:string)=> HTMLElement[]
 * setAtt:(att:string, name:string)=>void
 * }}
 */
export default class Calender extends Children {
  constructor() {
    super();
    this.setContent = `
    <div class="calender-wrapper">
      <div class="header">
        <p class="current-date" id="calender-current-date"></p>
        <div class="icons">
        <span id="prev" class="material-symbols-rounded"> &lsaquo; </span>
        <span id="next" class="material-symbols-rounded"> &rsaquo;</span>
        </div>
      </div>
      <div class="calendar">
        <ul class="weeks">
          <li>Sun</li><li>Mon</li><li>Tue</li><li>Wed</li><li>Thu</li><li>Fri</li><li>Sat</li>
        </ul>
        <ul class="days" id="calender-day"></ul>
      </div>
    </div>
        `;
    this.daysTag = this.getContent("calender-day");
    this.currentDate = this.getContent("calender-current-date");
    this.prevNextIcon = this.getContents(".icons span");
    this.date = new Date();
    this.currYear = this.date.getFullYear();
    this.currMonth = this.date.getMonth();
    this.months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    this.renderCalendar();
    this.prevNextIcon.forEach((icon) => {
      icon.addEventListener("click", () => {
        this.currMonth =
          icon.id === "prev" ? this.currMonth - 1 : this.currMonth + 1;
        if (this.currMonth < 0 || this.currMonth > 11) {
          this.date = new Date(
            this.currYear,
            this.currMonth,
            new Date().getDate()
          );
          this.currYear = this.date.getFullYear();
          this.currMonth = this.date.getMonth();
        } else {
          this.date = new Date();
        }
        this.renderCalendar();
      });
    });
  }

  renderCalendar = () => {
    const { currYear, currentDate, currMonth, date, daysTag, months } = this;
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let lastDayofMonth = new Date(
      currYear,
      currMonth,
      lastDateofMonth
    ).getDay();
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
      // creating li of previous month last days
      liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
      let isToday =
        i === date.getDate() &&
        currMonth === new Date().getMonth() &&
        currYear === new Date().getFullYear()
          ? "active"
          : "";
      liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
      liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
  };
}
