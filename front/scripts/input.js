document.addEventListener("DOMContentLoaded", function () {
  function scrollToElement(element) {
    element.scrollIntoView({ behavior: "smooth" });
  }

  // 금액 입력 폼의 다음 버튼 클릭 이벤트 핸들러
  document
    .getElementById("nextToHabit")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const habitSection = document.getElementById("habit-section");
      habitSection.classList.remove("hidden");
      scrollToElement(habitSection);
    });

  // 저축 성향 파악 섹션의 다음 버튼 클릭 이벤트 핸들러
  document
    .getElementById("nextToAssets")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const assetsSection = document.getElementById("assets-section");
      assetsSection.classList.remove("hidden");
      scrollToElement(assetsSection);
    });

  // 저축 성향 체크박스 선택 이벤트 핸들러
  document.querySelectorAll(".chip").forEach(function (chip) {
    chip.addEventListener("change", function (event) {
      const selectedValue = event.target.value;
      const ratioInput = document.createElement("input");
      ratioInput.type = "text";
      ratioInput.placeholder = `${selectedValue} 비율 입력 (예: 2:3:5)`;
      event.target.parentElement.appendChild(ratioInput);
    });
  });
});
