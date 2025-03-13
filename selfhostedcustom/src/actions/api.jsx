import { RequestContext } from "@botonic/react";
import React from "react";

export async function fetchApi(question) {
  const uuid = crypto.randomUUID();

  const search = new URLSearchParams();
  search.append("question", question);
  search.append("question_track_id", uuid);

  const url = `https://cxs.moresophy.com/context-cloud-api/v3/question-answering/answer?${search.toString()}`;
  console.log("start to fetch");

  return await fetch(url, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmYzkyZTI4Yy0wNGMyLTQ0MTYtYTk4YS01Nzg5NWUyYmQ0ZjEiLCJhY2Nlc3NfdG9rZW5fdmVyc2lvbiI6bnVsbH0.qSrKbUdi7GLWoUel9w7nTg8N3_C4tvM6r4EwaLuqqUc",
    },
  })
    .then((response) => {
      if (!response.ok) {
        return {
          answer: "Es ist ein Fehler aufgetreten.",
        };
      }
      return response.json(); // Parse JSON response
    })
    .catch((err) => {
      return {
        answer: "Es ist ein Fehler aufgetreten error: " + err,
      };
    });
}
