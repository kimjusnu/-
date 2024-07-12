function loadLoginContent() {
  document.getElementById("modal").innerHTML = `
    <div class="modal-content">
      <span class="close-button" id="close-modal">&times;</span>
      <div id="formContent">
        <!-- 탭 제목 -->
        <h2 id="signInTab" class="active">Sign In</h2>
        <h2 id="signUpTab" class="inactive underlineHover">Sign Up</h2>

        <!-- 로그인 폼 -->
        <form id="signInForm" class="activeForm">
          <input
            type="text"
            id="login"
            class="fadeIn second"
            name="login"
            placeholder="login"
          />
          <input
            type="password"
            id="password"
            class="fadeIn third"
            name="login"
            placeholder="password"
          />
          <input
            type="button"
            class="fadeIn fourth"
            id="signInButton"
            value="Log In"
          />
        </form>

        <!-- 회원가입 폼 -->
        <form id="signUpForm" style="display: none;">
          <input
            type="text"
            id="signUpUsername"
            class="fadeIn second"
            name="username"
            placeholder="Username"
          />
          <input
            type="password"
            id="signUpPassword"
            class="fadeIn third"
            name="password"
            placeholder="Password"
          />
          <input
            type="password"
            id="signUpConfirmPassword"
            class="fadeIn third"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
          <input
            type="button"
            class="fadeIn fourth"
            id="signUpButton"
            value="Sign Up"
          />
        </form>

        <!-- 비밀번호 찾기 -->
        <div id="formFooter">
          <a class="underlineHover" href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
  `;

  // 모달 닫기 버튼 이벤트 리스너
  document.getElementById("close-modal").addEventListener("click", closeModal);

  // Sign In 탭 클릭 이벤트 리스너
  document
    .getElementById("signInTab")
    .addEventListener("click", showSignInForm);

  // Sign Up 탭 클릭 이벤트 리스너
  document
    .getElementById("signUpTab")
    .addEventListener("click", showSignUpForm);

  // 로그인 버튼 클릭 이벤트 리스너
  document
    .getElementById("signInButton")
    .addEventListener("click", handleLogin);

  // 회원가입 버튼 클릭 이벤트 리스너
  document
    .getElementById("signUpButton")
    .addEventListener("click", handleSignUp);
}

function handleLogin(event) {
  event.preventDefault();
  console.log("로그인 버튼 클릭됨"); // 콘솔 로그 추가
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
        window.location.href = './page2.html';
      } else {
        alert('로그인 실패: ' + data.message);
      }
    })
    .catch(error => {
      console.error('로그인 중 오류 발생:', error);
    });
  */

  // 테스트를 위해 로그인 버튼을 누르면 바로 페이지 2로 이동
  window.location.href = "./page2.html";
  console.log("페이지 이동 중"); // 콘솔 로그 추가
}

function showSignUpForm(event) {
  event.preventDefault();
  document.getElementById("signInForm").style.display = "none";
  document.getElementById("signUpForm").style.display = "block";
  document.getElementById("signInTab").classList.remove("active");
  document.getElementById("signUpTab").classList.add("active");
}

function showSignInForm(event) {
  event.preventDefault();
  document.getElementById("signInForm").style.display = "block";
  document.getElementById("signUpForm").style.display = "none";
  document.getElementById("signInTab").classList.add("active");
  document.getElementById("signUpTab").classList.remove("active");
}

function handleSignUp(event) {
  event.preventDefault();
  const username = document.getElementById("signUpUsername").value;
  const password = document.getElementById("signUpPassword").value;
  const confirmPassword = document.getElementById(
    "signUpConfirmPassword"
  ).value;

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  alert(
    `Register Username: ${username}\nPassword: ${password}\nPassword Confirm: ${confirmPassword}`
  );
  closeModal();
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.add("fadeOut");
  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove("fadeOut");
  }, 500); // fadeOut 애니메이션 지속 시간에 맞춤
}

// 페이지 로드 시 로그인 모달 콘텐츠 로드
window.addEventListener("DOMContentLoaded", loadLoginContent);
