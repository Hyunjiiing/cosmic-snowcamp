pink = document.getElementById("pink");
gray = document.getElementById("gray");
text = document.getElementById("text");
ent = document.getElementById("enter");
temp = document.getElementById("board");

var i = 0;
ent.addEventListener("click", () => {
  let memo = document.createElement("div");
  let title = document.createElement("div");
  let content = document.createElement("div");
  let script = document.createElement("div");
  let erase = document.createElement("input");

  let titleString = document.createTextNode(new Date());
  title.appendChild(titleString);

  let scriptString = document.createTextNode(text.value);
  script.appendChild(scriptString);

  if (pink.checked) {
    title.style.backgroundColor = "pink";
  } else if (gray.checked) {
    title.style.backgroundColor = "gray";
  }
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
  content.appendChild(script);
  content.appendChild(erase);
  memo.appendChild(title);
  memo.appendChild(content);
  temp.appendChild(memo);
});
