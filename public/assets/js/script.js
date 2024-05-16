const userName = document.getElementById("user-name");

const userCity = document.getElementById("user-city");

const greetings = document.getElementById("greetings");
const clock = document.getElementById("clock");
const clockSymbol = document.getElementById("clock-symbol");

const formControl = document.getElementById("chart-control");

const numbersInput = document.querySelectorAll(".input-number-group");

formControl.addEventListener("submit", (ev) => ev.preventDefault());

numbersInput.forEach((inputGroup) => {
  const buttonSubtract = inputGroup.querySelector(
    ".input-number-button-subtract"
  );

  const buttonAdd = inputGroup.querySelector(".input-number-button-add");
  const input = inputGroup.querySelector(".input-number");

  if (input && buttonAdd) {
    buttonAdd.addEventListener("click", (ev) => {
      ev.preventDefault();
      input.value++;
    });
  }

  if (input && buttonSubtract) {
    buttonSubtract.addEventListener("click", (ev) => {
      ev.preventDefault();
      input.value--;
    });
  }
});

function getGreetings(date) {
  const hours = date.getHours();

  if (hours < 12) {
    return "Bom Dia";
  }

  if (hours < 18) {
    return "Boa Tarde";
  }

  return "Boa Noite";
}

function timeColor(date) {
  const hours = date.getHours();

  if (hours < 12) {
    return "yellow";
  }

  if (hours < 18) {
    return "red";
  }

  return "purple";
}

function updateClock(date, clock) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const minute = minutes < 10 ? `0${minutes}` : minutes;
  clock.innerHTML = `${hours}:${minute}`;
}

function updateClockSymbol(date, clockSymbol) {
  clockSymbol.style = "color:" + timeColor(date);
}

function updateGreetings(date, greetings) {
  greetings.innerHTML = getGreetings(date) + ", ";
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const userId = getRandomInt(1, 10);

setInterval(() => {
  const date = new Date();
  updateClock(date, clock);
  updateClockSymbol(date, clockSymbol);
  updateGreetings(date, greetings);
}, 1000);

const ctx = document.getElementById("statistics");

let sales = {
  janeiro: 10,
  fevereiro: 7,
  março: 14,
  abril: 21,
  maio: 31,
};

new Chart(ctx, {
  type: "line",
  data: {
    labels: Object.keys(sales),
    datasets: [
      {
        label: "# of Votes",
        data: Object.values(sales),
        borderWidth: 1,
        borderColor: "rgba(49, 28, 132, 1)",
        backgroundColor: "rgba(49, 28, 132, 1)",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  .then((response) => {
    if (response.ok != true) {
      console.error(`Erro ${response.status}: Conexão mal sucedida`);
      return null;
    }
    return response.json();
  })

  .then((user) => {
    if (user == null) {
      console.warn("Dados de usuários não encontrados");

      return;
    }

    userName.innerHTML = `${user.name}!`;

    userCity.innerHTML = ` em ${user.address.city}`;
  });

function addCardPost(id, title, imageURL) {
  const postCard = document.getElementById(id);
  const postCardTitle = postCard.querySelector(".post-card-title");
  postCardTitle.innerHTML = title;
  postCard.style.background = `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)),  url(${imageURL})`;
  postCard.style.backgroundSize = `cover`;
}

function cardText(id, text) {
  const cardtext = document.getElementById(id);
  cardtext.innerHTML = text;
}

cardText("information-card", "chuva");

addCardPost(
  "post-card",
  "teste",
  "https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2022/10/erik-jan-leusink-IbPxGLgJiMI-unsplash-scaled.jpg"
);

addCardPost(
  "post-teste",
  "tanto faz",
  "https://www.petz.com.br/blog/wp-content/uploads/2017/04/comportamento-dos-gatos-1.jpg"
);
