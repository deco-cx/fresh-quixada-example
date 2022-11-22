import { HandlerContext } from "https://deno.land/x/fresh@1.1.2/server.ts";
import {Game, GameDetail} from "./model.tsx";

const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdiYjA5MDQ4NzA5MjMzZmQ3MmM4Y2MiLCJpYXQiOjE2NjkwNTA1MTMsImV4cCI6MTY2OTEzNjkxM30.93hPmo09qpsXEpAgUvAQgk8a3m3bYTojax8v_y727zg");

const requestOptions = {
  method: 'GET',
  headers: myHeaders
};

const fetch_games = async () => {
    //const project  = await fetch("http://api.cup2022.ir/api/v1/match", requestOptions)
    // const json = await project.json();
    const text = await Deno.readTextFile("./result.json");
    return (await JSON.parse(text)).data;
};


const fetch_game = async (id: string) => {
    //const project  = await fetch("http://api.cup2022.ir/api/v1/match/" + id, requestOptions)
    // const json = await project.json();
    const text = await Deno.readTextFile("./1.json");
    return (await JSON.parse(text)).data;
};

export {fetch_games, fetch_game};