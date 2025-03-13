import { Button, Reply, Text, RequestContext } from "@botonic/react";
import React, { useEffect, useState, useContext } from "react";
import { fetchApi } from "./api.jsx";
import { isWithinCharBoundary, sanitizeQuestion } from "./validations.jsx";
import SpellChecker from "./spellchecker.jsx";
import PostProcessor from "./postprocessor.jsx";

export default function Start() {
  const [data, setData] = useState("");
  const context = useContext(RequestContext);

  useEffect(() => {
    async function init() {
      let inputData = context.input?.data;
      if (inputData && isWithinCharBoundary(inputData)) {
        //Spellcheck the input before we continue and send the question to the api
        const spellChecker = new SpellChecker();
        inputData = spellChecker.correct(inputData);

        console.log(inputData);
        let antwort = await fetchApi(inputData);
        console.log(antwort);
        //for testing uncomment the next line
        //antwort.answer = "Versuche es mit http://google.com";

        //change http to https://
        const postProcessor = new PostProcessor();
        antwort.answer = postProcessor.correct(antwort.answer);

        const feedbackParams = new URLSearchParams();
        feedbackParams.append("question_track_id", antwort.question_track_id);
        feedbackParams.append("question", antwort.question);
        feedbackParams.append("answer", antwort.answer);
        antwort.feedbackData = feedbackParams;

        setData(antwort);
      } else if (!isWithinCharBoundary(inputData)) {
        setData({
          answer:
            "Ihr Anfrage ist leider zu komplex. Bitte stellen sie eine kürzere Anfrage.",
        });
      } else {
        console.error("Input data is not available.");
      }
    }

    init();
  }, []);

  return (
    <>
      <Text>{data.answer}</Text>
      <Text>
        War die Antwort hilfreich?
        <Button
          url={`https://cxs.moresophy.com/context-cloud-api/v3/question-answering/feedback?${data.feedbackData}&rating=positive`}
        >
          Ja
        </Button>
        <Button
          url={`https://cxs.moresophy.com/context-cloud-api/v3/question-answering/feedback?${data.feedbackData}&rating=negative`}
        >
          Nein
        </Button>
      </Text>
    </>
  );
}
