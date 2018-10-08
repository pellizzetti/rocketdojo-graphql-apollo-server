const coursesData = [
  {
    id: 1,
    title: "O guia completo do desenvolvedor Node.js",
    author: "Claudio Orlandi",
    description:
      "Aprenda Node.js construindo aplicações com Node, Express, Mocha e muito mais!",
    topic: "Node.js",
    url: "https://rocketseat.com/courses/nodejs/"
  },
  {
    id: 2,
    title: "Node.js, Express & MongoDB: Dev ao deployment",
    author: "Diego Fernandes",
    description:
      "Aprenda por examplo contruíndo e fazendo deploy de aplicações reais usando Node.js, Express e MongoDB",
    topic: "Node.js",
    url: "https://rocketseat.com/courses/nodejs-dev-deploy/"
  },
  {
    id: 3,
    title: "JavaScript: Entendendo as partes esquisitas",
    author: "Higo Ribeiro",
    description:
      "An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.",
    topic: "JavaScript",
    url: "https://rocketseat.com/courses/understand-javascript/"
  }
];

const resolvers = {
    Query: {
        allCourses: () => coursesData,
        course: (_, { id }) => coursesData.find(course => course.id === id)
    }
}

export default resolvers