// scripting funtionality for love counting 

document.querySelectorAll(".heart-icon").forEach((icon) => {
  icon.addEventListener("click", () => {

    let love = parseInt(document.getElementById("love-count").innerText) + 1;
    document.getElementById("love-count").innerText = love;
  });
});

// scripting funtionality for Call button


