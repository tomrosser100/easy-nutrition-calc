import React, { useEffect } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import eventEmitter from "../eventEmitter";
import type {
  ListElement,
  Nutrient,
  OrderedContribution,
  StoreData,
} from "../types";
import { ThemeProvider } from "styled-components";
import Nav from "./Nav";
import Main from "./Main";
import Bot from "./Bot";
import { theme } from "../styledComponents";

export async function loader() {
  console.log("app loader fired");
  const response = (await new Promise((resolve) => {
    eventEmitter.emit("retrieve", (response: StoreData) => {
      resolve(response);
    });
  })) as StoreData;
  console.log(response);
  return response;
}

export default () => {
  const { sex, ageRange, list, userReport } = useLoaderData() as StoreData;

  useEffect(() => {
    function fillEdit(id: string, callback: (response: ListElement) => void) {
      return callback(getListElementById(id));
    }

    function fillMore(
      nutrient: Nutrient,
      callback: (response: OrderedContribution) => void
    ) {
      return callback(
        userReport[nutrient].orderedContributors as OrderedContribution
      );
    }

    eventEmitter.on("fillEdit", fillEdit);
    eventEmitter.on("fillMore", fillMore);

    return () => {
      eventEmitter.off("fillEdit", fillEdit);
      eventEmitter.off("fillMore", fillMore);
    };
  });

  const getListElementById = (id: string) => {
    let target = {};
    list.forEach((entry) => {
      if (entry.id === id) {
        return (target = entry);
      }
    });
    return target as ListElement;
  };

  return (
    <ThemeProvider theme={theme}>
      <div id="app">
        <Outlet />
        <Nav />
        <Main userReport={userReport} list={list} />
        <Bot />
      </div>
    </ThemeProvider>
  );
};
