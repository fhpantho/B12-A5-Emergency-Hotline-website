// scripting funtionality for love counting

document.querySelectorAll(".heart-icon").forEach((icon) => {
  icon.addEventListener("click", () => {
    let love = parseInt(document.getElementById("love-count").innerText) + 1;
    document.getElementById("love-count").innerText = love;
  });
});

// scripting funtionality for Call button

document.querySelectorAll(".call-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    let coinElement = document.getElementById("coin");
    let currentCoins = parseInt(coinElement.innerText);

    if (currentCoins < 20) {
      alert("Not enough coins! You need at least 20 coins to make a call.");
      return;
    }

    const card = btn.closest(".card-container");
    const serviceName = card.querySelector(".service-name").innerText;
    const serviceNumber = card.querySelector(".service-number").innerText;

    let newCoins = currentCoins - 20;
    coinElement.innerText = newCoins;

    alert(`📞 Calling ${serviceName} at ${serviceNumber}`);

    // adding the history section
    let history = document.getElementById("Call-history");
    history.className = "mt-5 flex flex-col gap-5"
    let historyCard = document.createElement("div");
    historyCard.className = "flex justify-between px-4 py-5 bg-[#cdc6c636] rounded-xl items-baseline";
    let historyDetails = document.createElement("div");
    let h1 = document.createElement("h1");
    h1.innerText = serviceName;
    h1.className = "font-bold text-[20px]"
    let h2 = document.createElement("h2");
    h2.innerText = serviceNumber;
    let currentTime = document.createElement("div")

    // current time funtionality 
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; 

    currentTime.innerText = `${hours}:${minutes}:${seconds} ${ampm}`;

    // appending all the child node to the parrent node
    historyDetails.appendChild(h1);
    historyDetails.appendChild(h2);
    historyCard.appendChild(historyDetails);
    historyCard.appendChild(currentTime);
    history.appendChild(historyCard);
  });
});

// history section clear button funtionality


document.getElementById("clear-btn").addEventListener("click", () => {
  document.getElementById("Call-history").innerHTML = "";
});

// copy section funtionality 

document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card-container");
    const serviceNumber = card.querySelector(".service-number").innerText;

    // Copy to clipboard
    navigator.clipboard.writeText(serviceNumber)

    
      // Increase copy counter
      const copy = document.getElementById("copy-counter");
      let copyCounter = parseInt(copy.innerText) || 0;
      copy.innerText = copyCounter + 1;


      alert(`✅ Number ${serviceNumber} copied to clipboard!`);

  });
});
