import User from "./User.js";

const main = document.querySelector("main");

fetch(`https://randomuser.me/api/?results=20`).then(function (res) {
  console.log(res);
  res.json().then(function (data) {
    for (let i = 0; i < 20; i++) {
      const finalData = parseData(data, i);
      new User(finalData);
    }
  });
});

const parseData = (rawData, index) => {
  const data = {
    titre: rawData.results[index].name.title,
    prenom: rawData.results[index].name.first,
    nom: rawData.results[index].name.last,
    ville: rawData.results[index].location.city,
    pays: rawData.results[index].location.country,
    age: rawData.results[index].dob.age,
    email: rawData.results[index].email,
    photo: rawData.results[index].picture.large,
  };

  return data;
};
