import { faker } from "@faker-js/faker";
import { ITag } from "../interfaces/tag.interface";

export const tags = [
  "beach",
  "bicycle",
  "bouldering",
  "brompton",
  "camping",
  "castle",
  "country",
  "cycling",
  "explore",
  "forest",
  "hiking",
  "lake",
  "mountain",
  "park",
  "sea",
  "snow",
  "ski",
  "other",
];
export const tagsData = (): ITag[] => {
  return tags.map((tag) => {
    return {
      tag,
      tagUrl: `blog/filter/tag/${tag}`,
      tagImageUrl: faker.image.urlLoremFlickr({ category: "nature" }),
    };
  });
};
