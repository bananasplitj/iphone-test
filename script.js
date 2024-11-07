// 팝업 열기 함수
function showPopup(type) {
  const popup = document.getElementById("popup");
  const popupText = document.getElementById("popup-text");

  // 팝업 내용 설정
  if (type === "ingredients") {
    popupText.innerHTML = `
      1 pound penne rigate<br>
      3 Tablespoons olive oil<br>
      3 cloves garlic<br>
      1/4 teaspoon crushed red pepper flakes (depending on how spicy you want it)<br>
      1 28-ounce can whole peeled tomatoes (or 1 ½ cups fresh chopped tomatoes)
    `;
  } else if (type === "instructions") {
    popupText.innerHTML = `
      Cook pasta in a large pot of boiling water, according to package instructions, until tender.<br><br>
      Meanwhile, heat olive oil in a large skillet over medium heat. Add garlic and crushed red pepper; cook, stirring for 30 seconds.<br><br>
      Add tomatoes, crushing them roughly with the back of a wooden spoon, and tomato paste.<br><br>
      Bring to a simmer over low heat and cook for 5-10 minutes. Remove from heat and add fresh chopped basil.<br><br>
      When pasta is cooked, drain the water and add it to the sauce. Toss well. Taste and add more red pepper flakes or salt and pepper, if needed.<br><br>
      Serve immediately topped with a generous portion of grated pecorino or parmesan cheese and fresh chopped parsley.
    `;
  } else if (type === "spin") {
    popupText.textContent = "Spinning for a new recipe!";
  }

  // 팝업 보이기
  popup.style.display = "flex";
}

// 팝업 닫기 함수
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

