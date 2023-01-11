var idx = document.getElementById("idx");
var enter = document.getElementById("enter");

const config = {
  method: "get",
};

enter.addEventListener("click", function () {
  fetch(
    "https://my-json-server.typicode.com/smashh712/json_placeholder/members/",
    config
  )
    .then((response) => response.json())
    .then((data) => {
      var result = document.getElementById("result");
      result.innerText =
        data[idx.value].name +
        "님의 생일은 " +
        data[idx.value].birth.slice(0, 2) +
        "년 " +
        data[idx.value].birth.slice(2, 4) +
        "월 " +
        data[idx.value].birth.slice(4, 6) +
        "일 입니다";
    });
});
