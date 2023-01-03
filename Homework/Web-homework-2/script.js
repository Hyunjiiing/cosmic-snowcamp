pink = document.getElementById("pink");
gray = document.getElementById("gray");
text = document.getElementById("text");
ent = document.getElementById("ent");
temp = document.getElementById("temp");

var i = 0;
ent.addEventListener("click", () => {
  let memo = document.createElement("div");
  let title = document.createElement("div");
  let content = document.createElement("div");
  let script = document.createElement("div");
  let erase = document.createElement("input");

  title.innerHTML = new Date();
  if (pink.checked) {
    title.style.backgroundColor = "pink";
  } else if (gray.checked) {
    title.style.backgroundColor = "gray";
  }
  script.innerHTML = text.value;
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
  content.append(script);
  content.append(erase);
  memo.append(title);
  memo.append(content);
  temp.append(memo);
});
