document.addEventListener("DOMContentLoaded", function () {
  let depositCount = 0;
  let savingCount = 0;
  let stockCount = 0;

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
      const container = event.target.parentElement;

      if (event.target.checked) {
        const ratioInput = document.createElement("input");
        ratioInput.type = "text";
        ratioInput.placeholder = `${selectedValue} 비율 입력 (예: 2:3:5)`;
        ratioInput.classList.add("ratio-input");
        container.appendChild(ratioInput);
      } else {
        const existingInput = container.querySelector(".ratio-input");
        if (existingInput) {
          existingInput.remove();
        }
      }
    });
  });

  // 예금 추가 버튼 클릭 이벤트 핸들러
  document.getElementById("add-deposit").addEventListener("click", function () {
    depositCount++;
    const depositContainer = document.getElementById("deposit-container");
    const depositDiv = document.createElement("div");
    depositDiv.classList.add("deposit-entry");
    depositDiv.innerHTML = `
      <label for="deposit-${depositCount}">예금${depositCount}</label>
      <input type="text" id="deposit-${depositCount}" name="deposit-${depositCount}" placeholder="예금상품명(사용목적)">
      <input type="number" id="deposit-amount-${depositCount}" name="deposit-amount-${depositCount}" placeholder="예치한 금액">
    `;
    depositContainer.appendChild(depositDiv);
  });

  // 적금 추가 버튼 클릭 이벤트 핸들러
  document.getElementById("add-saving").addEventListener("click", function () {
    savingCount++;
    const savingContainer = document.getElementById("saving-container");
    const savingDiv = document.createElement("div");
    savingDiv.classList.add("saving-entry");
    savingDiv.innerHTML = `
      <label for="saving-${savingCount}">적금${savingCount}</label>
      <input type="text" id="saving-${savingCount}" name="saving-${savingCount}" placeholder="적금상품명(사용목적)">
      <input type="number" id="saving-amount-${savingCount}" name="saving-amount-${savingCount}" placeholder="저축금액">
      <input type="number" id="saving-monthly-${savingCount}" name="saving-monthly-${savingCount}" placeholder="매월납입금액">
    `;
    savingContainer.appendChild(savingDiv);
  });

  // 주식 추가 버튼 클릭 이벤트 핸들러
  document.getElementById("add-stock").addEventListener("click", function () {
    stockCount++;
    const stockContainer = document.getElementById("stock-container");
    const stockDiv = document.createElement("div");
    stockDiv.classList.add("stock-entry");
    stockDiv.innerHTML = `
      <label for="stock-${stockCount}">주식${stockCount}</label>
      <input type="text" id="stock-${stockCount}" name="stock-${stockCount}" placeholder="증권명(종목명)">
      <input type="number" id="stock-amount-${stockCount}" name="stock-amount-${stockCount}" placeholder="투자금액">
    `;
    stockContainer.appendChild(stockDiv);
  });
});
