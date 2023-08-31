//네비게이션 스크롤바 애니메이션
const lastScrollTop = 0; // 스크롤 위치를 추적하기 위한 변수
navBar = document.getElementById("navBar");
window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY && document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navBar.style.top = "-80px";
  } else {
    navBar.style.top = "0px";
  }
  lastScrollTop = scrollTop;
}); // 오래된 브라우저 값도 평가 (document.~Top)
