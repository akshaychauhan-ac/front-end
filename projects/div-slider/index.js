const div1 = document.getElementById("div1");
  const div2 = document.getElementById("slider");
  const div3 = document.getElementById("div2");
  const div1Event = function (e) {
    const div1Width = div1.offsetWidth;
    const div3Width = div3.offsetWidth;
    const offset = div1Width - e.offsetX;
    if (offset > 0) {
      div1.style.width = div1Width - offset + "px";
      div3.style.width = div3Width + offset + "px";
    }
    div1.innerText = div1.offsetWidth;
    div3.innerText = div3.offsetWidth;
  };

  const div3Event = function (e) {
    const div1Width = div1.offsetWidth;
    const div3Width = div3.offsetWidth;
    const offset = e.offsetX;
    div1.style.width = div1Width + offset + "px";
    div3.style.width = div3Width - offset + "px";
    div1.innerText = div1.offsetWidth;
    div3.innerText = div3.offsetWidth;
  };

  // div1.innerText = div1.offsetWidth + " px";
  // div3.innerText = div3.offsetWidth + " px";

  document.getElementById("slider").addEventListener("mousedown", (e) => {
    div1.addEventListener("mousemove", div1Event);
    div3.addEventListener("mousemove", div3Event);
  });
  document.addEventListener("mouseup", function (e) {
    div1.removeEventListener("mousemove", div1Event);
    div3.removeEventListener("mousemove", div3Event);
  });