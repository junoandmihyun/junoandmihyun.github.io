// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// toggle show hide button
function triggerAccountGroom() {
  var x = document.getElementById("accountGroom");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function triggerAccountBride() {
  var x = document.getElementById("accountBride");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// 계좌복사
function copyAccountOne() {
  // Get the text field
  var copyText = document.getElementById("accountInput1");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  
  // Alert the copied text
  alert("복사되었습니다. " + copyText.value);
}

function copyAccountTwo() {
  // Get the text field
  var copyText = document.getElementById("accountInput2");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  
  // Alert the copied text
  alert("복사되었습니다. " + copyText.value);
}

function copyAccountThree() {
  // Get the text field
  var copyText = document.getElementById("accountInput3");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  
  // Alert the copied text
  alert("복사되었습니다. " + copyText.value);
}

function copyAccountFour() {
  // Get the text field
  var copyText = document.getElementById("accountInput4");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  
  // Alert the copied text
  alert("복사되었습니다. " + copyText.value);
}

function copyAccountFive() {
  // Get the text field
  var copyText = document.getElementById("accountInput5");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  
  // Alert the copied text
  alert("복사되었습니다. " + copyText.value);
}

function copyAccountSix() {
  // Get the text field
  var copyText = document.getElementById("accountInput6");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  
  // Alert the copied text
  alert("복사되었습니다. " + copyText.value);
}

// 목표 날짜 설정 (2026년 4월 11일 13시)
  const targetDate = new Date('2026-04-11T13:00:00').getTime();
  const displayElement = document.getElementById('d-day-display');

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // 목표 시간이 지나면 중단
    if (distance < 0) {
      clearInterval(countdownInterval);
      displayElement.innerText = "D-Day가 도달했습니다!";
      return;
    }

    // 시간 계산
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // [day] - [hour] - [minutes] - [seconds] 형식으로 출력
    // 1자리 수일 경우 앞에 0을 붙여 2자리로 유지 (padStart)
    displayElement.innerText = `${days} - ${String(hours).padStart(2, '0')} - ${String(minutes).padStart(2, '0')} - ${String(seconds).padStart(2, '0')}`;
  };

  // 1초마다 실행
  const countdownInterval = setInterval(updateCountdown, 1000);

  // 페이지 로드 즉시 한 번 실행 (1초 대기 방지)
  updateCountdown();