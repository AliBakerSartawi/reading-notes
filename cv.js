class AliSartawi extends FullStackDev {
  constructor() {
    this.phoneNum = "0770096918"
    this.email = "alisartawi@live.com"
    this.linkedIn = "linkedin.com/in/alisartawi"
    this.github = "github.com/alibakersartawi"
    this.residence = "Amman, Jubeiha"
  }
  
  get bio() {
    return employer.intention === "serious" && {
      one: "I’m a quick learner with a knack to master my craft.",
      two: "Working with me is fun because I get stuff done.",
      three: "If my code doesn’t look like art, then it ain’t my code.",
      four: "I leave my ego at home when it’s team-time.",
      five: "If I’m not coding, I’m learning about coding…",
      six: "or sometimes… writing fantasy novels about faraway universes."
    }
  }
  
  get languages() {
    return employer.intendedLanguages === "programming-languages"
      ? ["JavaScript", "TypeScript", "HTML", "CSS"]
      : [{arabic: "native"}, {english: "fluent"}]
  }
  
  get libsAndFrameworks() {
    return employer.frameworkPref === "angular sucks" && [
      "Node", "React", "Express", "MongoDB", "Socket.io", "Redux",
      "React-Three-Fiber", "Sass", "jQuery", "Jest", "EJS", "etc etc..."
    ]
  }
  
  get education() {
    return employer.educationPref === "proven skill over education" && {
      type: "certificate",
      from: "Code Fellows",
      desc: "Advanced Software Development in Full-Stack JavaScript & React"
    }
  }
  
  get background() {
    return employer.backgroundPref === "interested" &&
      ["Graphic Design", "UI/UX", "Translation", "Ghostwriting"]
  }
  
  get projects() {
    return employer.creativityDesc === "thinks outside the box" && [
      {
        deployed: "falak-social.netlify.app", 
        repo: "github.com/spaghetti-code-401/falak"
      },
      {
        deployed: "spaghetti-code.herokuapp.com", 
        repo: "github.com/spaghetti-code-401/spaghetti-code"
      },
    ]
  }
}