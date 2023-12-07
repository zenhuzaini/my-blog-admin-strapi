import { faker } from "@faker-js/faker";

export const createRandomPosts = () => {
  return {
    title: faker.lorem.words({ min: 5, max: 10 }),
    description: faker.lorem.sentences({ min: 2, max: 4 }),
    content: faker.lorem.paragraphs({ min: 3, max: 4 }),
    keyword: faker.lorem.words(10),
    komootId: "1364788446",
    url: faker.lorem.words({ min: 5, max: 10 }).replace(" ", "-"),
    headerPhoto: faker.image.urlLoremFlickr({ width: 1024 }),
    category: [1, 2],
  };
};
