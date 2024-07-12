document.addEventListener("DOMContentLoaded", function () {
  // 초기 페이지 로드
  showHomePage();

  // '시작하기' 버튼 클릭 시 showLoginPage 호출
  document.addEventListener("click", function (event) {
    if (event.target && event.target.id === "start-button") {
      showLoginPage();
    }
  });

  // 닫기 버튼 클릭 이벤트 추가
  const closeModalButton = document.getElementById("close-modal");
  if (closeModalButton) {
    closeModalButton.addEventListener("click", closeModal);
  }

  // Sign Up 탭 클릭 이벤트 추가
  const signUpTab = document.getElementById("signUpTab");
  if (signUpTab) {
    signUpTab.addEventListener("click", showSignUpForm);
  }

  // Sign In 탭 클릭 이벤트 추가
  const signInTab = document.getElementById("signInTab");
  if (signInTab) {
    signInTab.addEventListener("click", showSignInForm);
  }

  // 로그인 버튼 클릭 이벤트 추가
  const signInButton = document.getElementById("signInButton");
  if (signInButton) {
    signInButton.addEventListener("click", handleLogin);
  }

  // 애니메이션 블롭 초기화
  initBlobs();
});

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("fadeIn");
  modal.classList.add("fadeOut");
  // 애니메이션이 끝난 후 display: none 설정
  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove("fadeOut");
  }, 500); // fadeOut 애니메이션 시간과 동일하게 설정
}

function showHomePage() {
  document.getElementById("content").innerHTML = `
      <div class="bouncing-blobs-container">
          <div class="bouncing-blobs-glass"></div>
          <div class="bouncing-blobs">
              <div class="bouncing-blob bouncing-blob--dark-gray"></div>
              <div class="bouncing-blob bouncing-blob--medium-gray"></div>
              <div class="bouncing-blob bouncing-blob--teal"></div>
              <div class="bouncing-blob bouncing-blob--light-gray"></div>
              <div class="bouncing-blob bouncing-blob--teal"></div>
              <div class="bouncing-blob bouncing-blob--dark-gray"></div>
              <div class="bouncing-blob bouncing-blob--white"></div>
          </div>
      </div>
      <div class="hero">
          <h1>SaveBuddy</h1>
          <p>당신의 목표 달성을 위해 가장 스마트한 저축 파트너,<br>체계적인 자산 관리로 미래를 위한 저축을 지금 시작하세요</p>
          <button class="btn-3 raise" id="start-button"><span>시작하기</span></button>
      </div>
  `;

  const startButton = document.getElementById("start-button");
  if (startButton) {
    startButton.addEventListener("click", showLoginPage);
  }

  initBlobs();
}

function showLoginPage() {
  const modal = document.getElementById("modal");
  modal.style.display = "flex"; // 모달을 flex로 설정하여 가운데 정렬
  modal.classList.remove("fadeOut");
  modal.classList.add("fadeIn");
}

function showSignUpForm() {
  document.getElementById("signInForm").style.display = "none";
  document.getElementById("signUpForm").style.display = "block";
  document.getElementById("signInTab").classList.remove("active");
  document.getElementById("signUpTab").classList.add("active");
}

function showSignInForm() {
  document.getElementById("signInForm").style.display = "block";
  document.getElementById("signUpForm").style.display = "none";
  document.getElementById("signInTab").classList.add("active");
  document.getElementById("signUpTab").classList.remove("active");
}

function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById("login").value;
  const password = document.getElementById("password").value;

  // 여기에 로그인 로직 추가
  // 현재는 로그인 버튼을 누르면 페이지가 두 번째 페이지로 넘어가도록 설정
  // 실제 로그인 검증 로직은 주석 처리
  /*
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        window.location.href = '../public/page2.html';
      } else {
        alert('로그인 실패: ' + data.message);
      }
    })
    .catch(error => {
      console.error('로그인 중 오류 발생:', error);
    });
  */

  // 테스트를 위해 로그인 버튼을 누르면 바로 페이지 2로 이동
  window.location.href = "../public/page2.html";
}

// Blob animation code 생략

// Blob animation code
const MIN_SPEED = 1.5;
const MAX_SPEED = 2.5;

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

class Blob {
  constructor(el) {
    this.el = el;
    const boundingRect = this.el.getBoundingClientRect();
    this.size = boundingRect.width;
    this.initialX = randomNumber(0, window.innerWidth - this.size);
    this.initialY = randomNumber(0, window.innerHeight - this.size);
    this.el.style.top = `${this.initialY}px`;
    this.el.style.left = `${this.initialX}px`;
    this.vx =
      randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1);
    this.vy =
      randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1);
    this.x = this.initialX;
    this.y = this.initialY;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x >= window.innerWidth - this.size) {
      this.x = window.innerWidth - this.size;
      this.vx *= -1;
    }
    if (this.y >= window.innerHeight - this.size) {
      this.y = window.innerHeight - this.size;
      this.vy *= -1;
    }
    if (this.x <= 0) {
      this.x = 0;
      this.vx *= -1;
    }
    if (this.y <= 0) {
      this.y = 0;
      this.vy *= -1;
    }
  }

  move() {
    this.el.style.transform = `translate(${this.x - this.initialX}px, ${
      this.y - this.initialY
    }px)`;
  }
}

function initBlobs() {
  const blobEls = document.querySelectorAll(".bouncing-blob");
  const blobs = Array.from(blobEls).map((blobEl) => new Blob(blobEl));

  function update() {
    requestAnimationFrame(update);
    blobs.forEach((blob) => {
      blob.update();
      blob.move();
    });
  }

  requestAnimationFrame(update);
}
