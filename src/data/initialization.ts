import { Strapi } from "@strapi/strapi";
import { tagsData } from "./realData";
import { createRandomPosts, createRandomMapCoordinate } from "./fakerData";

export const dataInitialization = async (strapi: Strapi) => {
  const posts = await strapi.entityService.findMany("api::content.content");
  const maps = await strapi.entityService.findMany("api::map.map");
  const tag = await strapi.entityService.findMany("api::tag.tag");
  console.log("get maps ", posts.length, maps.length, tag.length);
  //take all of the independent table and fill it first. Just to make sure
  //not to have constraint error
  if (tag.length == 0) {
    tagsData().map(async (data) => {
      await strapi.entityService.create("api::tag.tag", {
        data,
      });
    });
  }

  if (posts.length == 0) {
    console.log("entity dioesnt post ? ");

    for (let index = 0; index < 15; index++) {
      await strapi.entityService.create("api::content.content", {
        data: {
          ...createRandomPosts(),
        },
      });
    }
  }

  if (maps.length === 0) {
    for (let index = 0; index < 15; index++) {
      await await strapi.entityService.create("api::map.map", {
        data: {
          ...createRandomMapCoordinate(),
        },
      });
    }
  }
};
