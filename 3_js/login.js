let signInForm = document.querySelector(".signInForm");

// submit 이벤트는 form 안에서 엔터키를 누르거나 submit 버튼을 누르면 일어난다.
signInForm.addEventListener("submit", function (e) {
  e.preventDefault(); // form 태그의 submit 이벤트는 새로고침이 일어나기 때문에 막는다.
  console.log("submit!");

  let form = new FormData(signInForm);
  console.log(form.entries());
  // for ~ of : 반복 가능한 객체의 값들을 차례대로 참조할 수 있다.
  // FormData.prototype.values() : form 태그 안의 input태그들의 입력값들을 반복 가능한 객체로 반환한다.
  // FormData.prototype.keys() : form 태그 안의 input태그들의 name 속성값을 반복 가능한 객체로 반환한다.
  // FormData.prototype.entires() : input의 name값과 입력값을 배열 형태로 반복 가능한 객체로 반환한다.
  let obj = {};
  for (let pair of form.entries()) {
    obj[pair[0]] = pair[1];
  }

  axios.post("http://101.101.218.43/users", obj).then(function (res) {
    console.log(res);
  });
});
