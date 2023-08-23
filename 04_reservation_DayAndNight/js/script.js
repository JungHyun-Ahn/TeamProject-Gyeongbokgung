// === Reservation ===

// === Item4 Input Auto ===

function changePhone1() {
  const phone1 = document.querySelector("#phone1").value;
  if(phone1.length === 3) {
    document.querySelector("#phone2").focus();
  }
}
function changePhone2() {
  const phone2 = document.querySelector("#phone2").value;
  if(phone2.length === 4) {
    document.querySelector("#phone3").focus();
  }
}
function changePhone3() {
  const phone3 = document.querySelector("#phone3").value;
  if(phone3.length === 4) {
    document.querySelector("#email").focus();
  }
}

          //  ### calender  ###

let current_year ;
let current_month;

let eventStart;  
let event_year;
let event_month;

let end_month;
let end_date;

window.addEventListener("DOMContentLoaded", ()=>{

  event_calender()
})


let url ;
let urlParams ;

function event_calender() {
  url = location.search;
  urlParams = new URLSearchParams(url)
  let idx = +urlParams.get('event') + 1


  console.log(idx, url.includes("day"))
  if(url.includes("day")) {
    select_event.selectedIndex = 1;
    displayTime(select_item,select_event,events)

    select_item.selectedIndex = idx;
    displayTime(timeBox,select_item,day_time)

    event_year =  new Date(events[0][idx].start).getFullYear()
    event_month = new Date(events[0][idx].start).getMonth() + 1
    eventStart = new Date(events[0][idx].start).getDate();
    end_month = new Date(events[0][idx].end).getMonth() + 1;
    end_date = new Date(events[0][idx].end).getDate();


  } else if(url.includes("night")) {
    console.log(url)
    select_event.selectedIndex = 2;
    displayTime(select_item,select_event,events)

    select_item.selectedIndex = idx;
    displayTime(timeBox,select_item,night_time)

    event_year =  new Date(events[1][idx].start).getFullYear()
    event_month = new Date(events[1][idx].start).getMonth() + 1
    eventStart = new Date(events[1][idx].start).getDate();
    end_month = new Date(events[1][idx].end).getMonth() + 1;
    end_date = new Date(events[1][idx].end).getDate();

    console.log(idx, new Date(events[1][idx].start))
  }
  current_year = event_year;
  current_month = event_month;
  document.querySelector(".year").innerText = event_year;
  document.querySelector(".month").innerText = event_month < 10 ? "0" +event_month : event_month;
  changeYearMonth(current_year, current_month);

  console.log(event_year,event_month, end_date, end_month, event_month)
}


// 윤년 계산
function checkLeapYear(year) {
  if (year % 400 == 0) {
    return true;
  } else if (year % 100 == 0) {
    return false;
  } else if (year % 4 == 0) {
    return true;
  } else {
    return false;
  }
}

function changeYearMonth(year, month) {
  let month_day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  if(month == 2) {
    if(checkLeapYear(year)) month_day[1] = 29;
  }
  // 1일의 요일 구하기
  let first_day = new Date(`${year}-${month}-01`).getDay();
  
  let arr_calendar = [];


  for(let i = 0; i < first_day; i++) {
    arr_calendar.push("");
  }

  for(let i = 1; i <= month_day[month-1]; i++){
    arr_calendar.push(i)
  }

  let blank_day = 7 - arr_calendar.length % 7
  // console.log(blank_day);

  if(blank_day < 7) {
    for(let i = 0; i < blank_day; i++){
      arr_calendar.push("")
    }
  }
    Calendar(arr_calendar);

    select();
  };
  

function Calendar(data) {

  let display = "";
  for(let i = 0; i < data.length; i++){
    if(i === 0) {
      display += "<tr>"
    } else if(i % 7 === 0) {
      display += "</tr>"
      display += "<tr>"
    }

    display +=`<td><a href="#">${data[i]}</a></td>`
  }
  display += "</tr>";

  document.querySelector("#calendar-table tbody").innerHTML = display;
}

//달력 월 바꾸기
function changeMonth(e) {
  current_month = current_month + e;

  if(current_month == 0) {
    current_year = current_year - 1;
    current_month = 12;
  } else if(current_month == 13) {
    current_year = current_year + 1;
    current_month = 1 
  }

  document.querySelector(".year").innerText = current_year
  document.querySelector(".month").innerText = current_month < 10 ? "0" + current_month : current_month;

  timeBox.selectedIndex = 0;
  changeYearMonth(current_year, current_month);


  // 월 변경후 빈공간 클릭 막기
  let days = document.querySelectorAll("#calendar-table td");
  days.forEach(day => {
    if(day.innerText == "") {
      day.style.pointerEvents = "none"
    }
  })
  paymentText()
}






          //날짜 선택
function select() {
  let days = document.querySelectorAll("#calendar-table td a");
  let calenderYear = document.querySelector(".year")
  let calenderMonth = document.querySelector(".month")
  let today = new Date();
// 이전 날짜 비활성화 & 선택 날짜 표시
  if((today.getFullYear() > current_year) || today.getFullYear() < current_year) {
    days.forEach(el =>{
      el.style.color = "#ccc";
      el.style.pointerEvents = "none"
      })
  }
  if(current_year == event_year) {
    if((current_month < event_month || current_month > end_month)) {
    days.forEach(el => {
        el.style.color = "#ccc";
        el.style.pointerEvents = "none"
    })
  }
  else if(current_month == event_month) {
    days.forEach(el => {
      if(el.innerText < eventStart) {
        el.style.color = "#ccc";
        el.style.pointerEvents = "none"
      }
    })
  }
  else if (current_month == end_month) {
    days.forEach(el => {
      if(el.innerText > end_date) {
        el.style.color = "#ccc";
        el.style.pointerEvents = "none"
      }
    })
  }
}  



  //선택날짜 선택 표시 및 행사선택 띄우기
  for(let el of days) {
  
    let tds = document.querySelectorAll("#calendar-table td")
    el.addEventListener("click", (e)=> {
      e.preventDefault()
      tds.forEach(td =>  td.classList.remove('select'));
      el.parentElement.classList.add('select');

        timeBox.selectedIndex = 0;


      paymentText()
    })
  }
}


// 낮, 밤 선택시 행사 선택
let select_event = document.querySelector("#select-event"); //낮,밤 선택
let select_item = document.querySelector('#select-event-day'); //행사
let timeBox = document.querySelector("#select-time");//회차
let ticketBox =  document.querySelector(".select-box2") //티켓


// 셀렉트 박스 선택시 행사 셀렉트 박스 띄우는 함수
function displayTime(select1, select2, variable) {
  select1.innerHTML = ""
  let idx = select2.selectedIndex - 1

  
  if(select_event.selectedIndex !== 0) {
  
    variable[idx].forEach(el =>{
      let option = document.createElement("option");
      option.innerText = el.title;
      option.value = el.value;
      select1.appendChild(option); 
    });

    public.innerText = 0
    discount.innerText = 0 
    select1.options[0].disabled = true;
  } 
  payBtnDisabled();
}






      // 셀렉트 이벤트
//낮 ,밤
select_event.addEventListener('change',()=>{
  //낮 밤 행사 선택시 url dn 파라미터값 >> day , night
  let event_day_night = select_event.value;
  //url dn 파라미터 값 변경
  urlParams.set('dn', event_day_night)
  displayTime(select_item,select_event,events)
  let time_option =  `<option value="0" disabled selected>회차를 선택해 주세요</option>`
  timeBox.innerHTML = time_option
  paymentText();
})

//낮, 밤 행사선택
select_item.addEventListener('change',()=>{
  let event_idx = select_item.selectedIndex - 1;
  //url event 파라미터 값 변경
  urlParams.set('event', event_idx)
  //변경된 파라미터 값 url에 적용하기
  window.history.pushState(null, null, `?dn=${urlParams.get('dn')}&event=${urlParams.get('event')}`);
  //달력 함수 실행
  event_calender()
  select_event.selectedIndex < 2 ? displayTime(timeBox,select_item,day_time) :
  displayTime(timeBox,select_item,night_time)
  paymentText()
})

//회차선택
timeBox.addEventListener("change",()=>{
  if(document.querySelector('.select') === null) {
    timeBox.selectedIndex = 0
      alert('날짜를 선택해주세요');
      return
  }
  paymentText()
});


//행사 회차 선택시, 금액표시
function paymentText(){
  let value = +timeBox[timeBox.selectedIndex].value;

  //일반
  document.querySelector(".public-price").innerText = value.toLocaleString();
  //할인
  document.querySelector(".discount-price").innerText = (value / 2).toLocaleString();


  totalPrice()
}


//티켓 버튼 함수
function addTicket(num,event) {
  let count = event.currentTarget.parentNode.children[1]
  const text = +count.innerText + num
  text < 0 || text > 4 ? text = count.innerText  : false


  count.innerText = text
 // console.log(event.currentTarget)
  totalPrice()
  payBtnDisabled()
}


  let public = document.querySelector(".public.count");
  let discount = document.querySelector(".discount.count");

  function totalPrice() {
  //총 인원, 가격 뿌려주기

  //가격 계산
  const origin_price =+timeBox[timeBox.selectedIndex].value
  const public_price = origin_price * +public.innerText
  const discount_price = (origin_price / 2) * +discount.innerText

  const total_price = public_price + discount_price

  //console.log(origin_price,public_price,discount_price,total_price);
  //console.log(timeBox.selectedIndex)
  
  if(timeBox.selectedIndex === 0) {
    public.innerText = 0
    discount.innerText = 0 
  }
  
  document.querySelector(".total-person").innerText = +public.innerText + +discount.innerText
  //결제금액
  document.querySelector(".total-price").innerText =  total_price.toLocaleString() + "원";
}





// ####### 필수동의 #######

//전체동의 박스
const agree = document.getElementById('agree');

// 체크박스들
const checkboxes = document.querySelectorAll('.item input[type=checkbox]');

//전체동의
agree.addEventListener("click", ()=> {
  if(agree.checked === true){
    checkboxes.forEach(el =>{
      el.checked = true;
    })
  } else {
    checkboxes.forEach(el =>{
      el.checked = false
    })
  }
});

//체크박스중 하나 해제되면 약관동의 박스 해제 
function checkSelectAll()  {
  // 선택된 체크박스
  const checked 
    = document.querySelectorAll('.item input[type=checkbox]:checked');
  if(checkboxes.length === checked.length)  {
    agree.checked = true;
  }else {
    agree.checked = false;
  }
}

const viewDetail = document.querySelectorAll('.view-detail');
const textBox = document.querySelectorAll('.text');

  viewDetail.forEach((view, idx) =>{
    view.addEventListener("click", ()=>{
      textBox[idx].classList.toggle("show")
    })
  })


// ####### 결제 버튼 #######
const paymentBtn = document.getElementById('reservation-button-submit');

// 결제버튼 활성화
function payBtnDisabled() {
  let check_bool = true;
  let public = document.querySelector(".public.count");
  let discount = document.querySelector(".discount.count");
  const checked 
  = document.querySelectorAll('input[type=checkbox]:checked')
  const payment =  document.querySelector("#select-payment");

  if(public.innerText < 1 && discount.innerText < 1) check_bool = false;
  if(userName.value === "") check_bool = false;
  if(phone1.value =="" || phone2.value =="" || phone3.value =="") check_bool = false
  if(email.value === "") check_bool = false;
  if(password.value ==="") check_bool = false;
  if(checked.length < 5) check_bool = false;
  if(payment.selectedIndex < 1) check_bool = false;

  check_bool === true ? paymentBtn.disabled = false : paymentBtn.disabled = true

  // console.log(check_bool,public.innerText, discount.innerText)
}




//input
const userName = document.querySelector("#name");
const phone1 = document.querySelector("#phone1");
const phone2 = document.querySelector("#phone2");
const phone3 = document.querySelector("#phone3");
const email = document.querySelector("#email");
const password = document.querySelector("#password");


const phones = document.querySelectorAll(".phoneNum")
userName.addEventListener("focusout",payBtnDisabled);
email.addEventListener("focusout",payBtnDisabled);
password.addEventListener("focusout",payBtnDisabled);
phones.forEach(phone =>{
  phone.addEventListener("focusout",payBtnDisabled)
})




//결제버튼 눌렀을때
paymentBtn.addEventListener("click", (e)=>{
  e.preventDefault()
  payment()
})

function payment() {
  let check_bool = true
  
  if(userName.value.length < 2 || +userName.value === NaN) {check_bool = false; userName.focus();}
  if(phone1.value !== "010" || phone2.value.length < 4 || phone3.value.length < 4)
    {check_bool = false; phone1.focus();}
  if(!email.value.includes("@")){ check_bool = false; email.focus();}
  if(password.length < 5) {check_bool = false; password.focus()}

  if(check_bool) {
    completeReservation();
 
  } else {
    alert("예매자 정보를 다시 확인해주세요.");
  }
}

// Modal
const completeModal = document.querySelector(".modal-wrap");
function completeReservation() {
  // 행사정보 - 낮/밤
  let eventSelect = document.getElementById("select-event");
  // let eventSelectValue = (eventSelect.options[eventSelect.selectedIndex].value);
  let eventSelectValue = (eventSelect.options[eventSelect.selectedIndex].innerText);
  // 행사정보 - 행사이름
  let eventNameSelect = document.getElementById("select-event-day");
  let eventNameSelectValue = (eventNameSelect.options[eventNameSelect.selectedIndex].value);
  // 행사일시 - 날짜
  let dateValue = document.querySelector("#calYyyyMM .year").innerText + "-" + document.querySelector("#calYyyyMM .month").innerText + "-" + document.querySelector("td.select").innerText;
  let dayOfDate = new Date(dateValue).getDay();
  let dayValue = "";
  console.log(dayOfDate);
  function getDay(dayOfDate) {
    switch (dayOfDate) {
      case 1:
        dayValue = "(월)";
        break;
      case 2:
        dayValue = "(화)";
        break;
      case 3:
        dayValue = "(수)";
        break;
      case 4:
        dayValue = "(목)";
        break;
      case 5:
        dayValue = "(금)";
        break;
      case 6:
        dayValue = "(토)";
        break;
      case 0:
        dayValue = "(일)";
        break;
    }
    return dayValue;
  }
  getDay(dayOfDate);
  // 행사일시 - 회차
  let timeSelect = document.getElementById("select-time");
  let timeSelectValue = (timeSelect.options[timeSelect.selectedIndex].innerText).substr(0, 18);
  //총 인원
  let totalPerson = document.querySelector(".total-person").innerText;
    //예매번호 랜덤발생
  let reserveNumberValue = `RS${String(Math.ceil(Math.random() * 100000000)).padStart(8, '0')}`

  // modal 내용 삽입
  // 예매자
  document.querySelector(".reserved-name").innerText = `${userName.value}`;
  // 행사 정보
  document.querySelector(".reserved-event").innerText = `${eventSelectValue} : ${eventNameSelectValue}`;
  // 행사 일시
  document.querySelector(".reserved-event-date").innerText = `${dateValue}${dayValue} ${timeSelectValue}`;
  // 총 인원
  document.querySelector(".reserved-personnel").innerText = `${totalPerson} 명`;
  // 예매 번호
  document.querySelector(".reserved-number").innerText = reserveNumberValue;

  //modal 보이기
  completeModal.classList.add("active");

  // 로컬스토리지 저장~~~~~~~~~~~~~~~~
  //신용or계좌
  let payMethodSelect = document.getElementById("select-payment");
  let payMethodSelectValue = (payMethodSelect.options[payMethodSelect.selectedIndex].innerText);
  
  let dataList = [];
  let data = {
    isDone: true,
    name: userName.value,
    phone: phone1.value+phone2.value+phone3.value,
    email: email.value,
    password: password.value,
    eventDate : `${dateValue}${dayValue} ${timeSelectValue}`,
    eventName : `${eventNameSelectValue}`,
    totalPrice : document.querySelector(".reservation-total-price .total-price").innerText,
    reserveDate : `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
    reserveNumber : `${reserveNumberValue}`,
    payMethod : `${payMethodSelectValue}`,
    // 정현수정
    cancelPrice: 0
  };

  if(localStorage.getItem('dataList') === null) {
    dataList = [];
  } else {
    dataList = JSON.parse(localStorage.getItem('dataList'));
  }

  dataList.push(data);
  localStorage.setItem('dataList', JSON.stringify(dataList));
}

// modal (예매내역 조회) 버튼
const modalConfirmReserveBtn = document.querySelector(".Ticketing-check");
modalConfirmReserveBtn.addEventListener("click", (e) => {
  //예매 번호 >>>>> 민욱수정
  const reservationNumber =  document.querySelector(".reserved-number").innerText;
  //예매 번호 >>>>> 민욱수정
  e.preventDefault();
  completeModal.classList.remove("active");
  // 임의추가
  location.href = `/04_reservation_DayAndNight/reservation-confirm-info.html?${reservationNumber}`;
})

// modal 닫기
const modalCloseBtn = document.querySelector(".booking-modal-content .modal-buttons button.close");
modalCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  completeModal.classList.remove("active");
  // 임의추가
  location.href = "/04_reservation_DayAndNight/dayReserve.html?type=dayReserve";
})


