// 3. Нужно написать скрипт на веб-странице,
//  который должен обмениваться данными с сервером.
//   При этом нужно послать два разных xhr-запроса подряд,
//    а затем выполнить какой-то код. 

// Задача: написать пример кода,
//  который отправит на сервер сразу два
//   асинхронных запроса подряд и выведет
//    один раз после получения обоих ответов
//     в консоль сообщение “оба ответа получены”.


const apikeyLocation = 'e26cec2d0bb949';
const backgroundKey = "bdh2TlFy9TZ4xGp1_oIGeP7Wc0AUJZr8ueWWpjrfHpQ";
const urlLocation = `https://ipinfo.io/json?token=${apikeyLocation}`;
const responseLocation = fetch(urlLocation);
const urlBackground =
  `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=july/Amsterdam&client_id=${backgroundKey}`;

const responseBackground = fetch(urlBackground);
const city = document.createElement("h1");
city.className = "city";
const body = document.getElementsByTagName("body")[0];
body.append(city);

const getAllData = async () => {
  try {
    const response = await Promise.all([responseLocation, responseBackground]);
    const data1 = await response[0].json();
    const data2 = await response[1].json();
    console.log("Оба ответа получены");
    city.innerHTML = `${data1.city}`;
    body.style.backgroundImage = `url(${data2.urls.regular}) `;
  } catch {
    console.log("Какой-то из запросов явно отвалился");
  }
};
getAllData();
