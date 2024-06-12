"use server";

export default async function Config() {
  return {
    token: "token",
    api: {
      url: "http://localhost:8080",
      toy: {
        list: "/toy/list"
      },
      color: {
        list: "/color/list"
      },
      accessory: {
        list: "/accessory/list"
      },
      userToy: {
        ranking: `/user-toy/ranking/${1}/${3}`,
        list: "/user-toy/list/{page}/{limit}",
      },
      auth: {
        login: "/auth/login",
      },
      user: {
        info: "/user/",
      },
    },
  }
};
