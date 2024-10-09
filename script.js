function Person(first, last, age, gender, interests) {
  this.name = {
    first: first,
    last: last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function () {
    let string = ` ${this.name.first} ${this.name.last} tiene ${this.age} años`;

    let pronoun = "";

    if (
      this.gender === "male" ||
      this.gender === "Male" ||
      this.gender === "m" ||
      this.gender === "M"
    ) {
      pronoun = " a el le gusta ";
    } else if (
      this.gender === "female" ||
      this.gender === "Female" ||
      this.gender === "f" ||
      this.gender === "F"
    ) {
      pronoun = " a ella le gusta ";
    } else {
      pronoun = " a ellos les gusta ";
    }
    string += pronoun;

    if (this.interests.length === 1) {
      string += this.interests[0] + ".";
    } else if (this.interests.length > 1) {
      for (let i = 0; i < this.interests.length; i++) {
        if (i === this.interests.length - 1) {
          string += "and " + this.interests[i] + ".";
        } else {
          string += " " + this.interests[i] + " ";
        }
      }
    }

    alert(string);
  };

  this.greeting = function () {
    alert("Hola me llamo " + this.name.first);
  };
}

const person1 = new Person("Matias", "Cardoso", 29, "m", [
  "Musica",
  "Videogames",
  "Sports",
]);
console.log(person1);
person1.bio();
