class Person {
  name;
  constructor(name) {
    this.name = name;
  }
  greeting() {
    console.log(`Hola me llamo ${this.name}`);
  }
}

class Professor extends Person {
  teaches;
  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(
      `Mi nombre es ${this.name}, yo seré tu profesor de ${this.teaches}`
    );
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }
}

const walsh = new Professor("Walsh", "Psicología");
walsh.introduceSelf();
walsh.grade("mi tarea");

class Student extends Person {
  //Las propiedades de datos privadas deben ser declaradas en la propia declaración de la clase y debe comenzar con #
  #year;

  constructor(name, year) {
    super(name);
    this.#year = year;
  }

  introduceSelf() {
    console.log(`Hola, me llamo ${this.name} y estoy en el año ${this.year} `);
  }

  canStudyArchery() {
    return this.#year > 1;
  }
}

const summers = new Student("Summers", 2);

summers.introduceSelf(); // ¡Hola! me llamo Summers y estoy en el año 2.
summers.canStudyArchery(); // true

//MÉTODOS PRIVADOS

class Example {
  somePublicMethod() {
    this.#somePrivateMethod();
  }

  #somePrivateMethod() {
    console.log("Me llamaste?");
  }
}

const example = new Example();

example.somePublicMethod();

//Esto devuelve error por que el método es privado
// example.#somePrivateMethod();
