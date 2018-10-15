import { COURSE_DATA } from "../database";

const resolvers = {
  Query: {
    allCourses: () => COURSE_DATA,
    course: (_, { id }) => COURSE_DATA.find(course => course.id === id)
  },
  Mutation: {
    addCourse: (_, { title, author, topic }) => {
      const course = {
        id: COURSE_DATA.length + 1,
        title,
        author,
        topic
      };

      COURSE_DATA.push(course);

      return course;
    }
  }
};

export default resolvers;
