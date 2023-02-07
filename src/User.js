class User {
  #titre;
  #prenom;
  #nom;
  #ville;
  #pays;
  #age;
  #email;
  #photo;
  #present;
  #generUtilisateur;

  constructor(data) {
    this.#titre = data.titre;
    this.#prenom = data.prenom;
    this.#nom = data.nom;
    this.#ville = data.ville;
    this.#pays = data.pays;
    this.#age = data.age;
    this.#email = data.email;
    this.#photo = data.photo;
    this.#present = false;
    this.#generUtilisateur = this.#generer();
    this.changePresent = document
      .querySelector(".user")
      .addEventListener("click", (e) => {
        console.log("Ca marche ? ");
        if (!this.#present) {
          this.#present = true;
          e.target.style.background = "#06d6a0";
        } else if (this.#present) {
          this.#present = false;
          e.target.style.background = "#ffffff";
        }
      });
  }

  #generer() {
    /*<div class="user" data-present="false">
            <img src="https://randomuser.me/api/portraits/women/37.jpg">
            <div class="user--info">
                    <h1>Miss Mareike Bottenberg</h1>
                    <p>76 years old</p>
                    <p>Baak, Netherlands</p>
            </div>
            <a href="mailto:mareike.bottenberg@example.com">
                    <span class="mail">✉️</span>
            </a>
        </div> */
    const main = document.querySelector("main");
    const html = `<div class="user" data-present="${this.#present}">
            <img src="${this.#photo}">
            <div class="user--info">
                    <h1>${this.#titre} ${this.#nom} ${this.#prenom}</h1>
                    <p>${this.#age} years old</p>
                    <p>${this.#ville}, ${this.#pays}</p>
            </div>
            <a href="mailto:${this.#email}">
                    <span class="mail">✉️</span>
            </a>
        </div>`;

    main.insertAdjacentHTML("afterbegin", html);

    // je voulais faire de la manière suivante mais cela n'a pas foncitonné donc j'ai préféré utilisé la technique numéro 1
    /*   const container = document.createElement("div");
    container.dataset.present = this.#present;

    const photo = document.createElement("img");
    photo.textContent = this.#photo;
    container.appendChild(photo);

    const container2 = document.createElement("div");
    container2.classList.add("user--info");

    const titre = document.createElement("h1");
    titre.textContent = `${this.#titre} ${this.#nom} ${this.#prenom}`;
    container2.appendChild(titre);

    const paragraphe1 = document.createElement("p");
    paragraphe1.textContent = `${this.#age} years old`;
    container2.appendChild(paragraphe1);

    const paragraphe2 = document.createElement("p");
    paragraphe2.textContent = `${this.#ville}, ${this.#pays}`;
    container2.appendChild(paragraphe2);

    // pas sûr du suivant
    const mail = document.createElement("a");
    mail.textContent = `mailto:${this.#email}`;
    container.appendChild(mail);
    const span = document.createElement("span");
    span.classList.add("mail");
    span.textContent = "✉️";
    mail.appendChild(span);
    container.appendChild(container2);
    container.appendChild(mail);
    main.appendChild(container);

    return container;
  }
  // ne fonctionne pas mais je n'ai pas pu comprendre pourquoi donc j'ai fait autrement
  render(parentElement) {
    console.log(this.#generer);
    parentElement.appendChild(this.#generer);
    return this;
    // this.#users.push() */
  }

  changePresence() {
    if ((this.#present = true)) {
      this.#present = false;
    }
  }

  set present(value) {
    this.#present = value;
    return value;
  }
}

export default User;
