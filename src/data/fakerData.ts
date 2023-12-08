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
    category: [1],
  };
};

export const createRandomMapCoordinate = () => {
  return {
    title: faker.lorem.words({ min: 5, max: 10 }),
    stravaId: "10316315852",
    komootId: "1364788446",
    longitude: "-84.86879",
    latitude: "50.655182",
    post: Math.floor(Math.random() * 10) + 1,
    tag: [1],

    // longitude , latitude
    // coordinates: [faker.location.longitude, faker.location.latitude],
  };
};
