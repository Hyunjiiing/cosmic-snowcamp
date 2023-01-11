pink = document.getElementById("pink");
gray = document.getElementById("gray");
text = document.getElementById("text"); // 텍스트필드st
save = document.getElementById("save"); // 저장 버튼
board = document.getElementById("board"); // 메모지 보드

var i = 0;
save.addEventListener("click", () => {
  //버튼이 눌리면 밑 함수가 실행되면서 저장됨
  let memo = document.createElement("div");
  let title = document.createElement("div"); // title = 제목 (날짜)
  let content = document.createElement("div"); // content = 내용 + 버튼
  let script = document.createElement("div"); //script = 내용
  let erase = document.createElement("input");

  title.innerHTML = new Date();
  if (pink.checked) {
    title.style.backgroundColor = "pink";
  } else if (gray.checked) {
    title.style.backgroundColor = "gray";
  }
  script.innerHTML = text.value; // 입력한거 가져와서 보여지게
  memo.setAttribute("id", "memo" + i);
  erase.setAttribute("type", "button");
  erase.setAttribute("value", "삭제");
  erase.setAttribute("id", i++);

  memo.setAttribute("class", "card");
  title.setAttribute("class", "card-header");
  content.setAttribute("class", "card-body");
  script.setAttribute("class", "card-text");
  erase.setAttribute("class", "btn btn-primary");

  erase.addEventListener("click", () => {
    let eraseDiv = document.getElementById("memo" + erase.id);
    eraseDiv.remove();
  });

  //DOM구조 합췌~~
  content.appendchild(script);
  content.appendchild(erase);
  memo.appendchild(title);
  memo.appendchild(content);
  board.appendchild(memo);
});
