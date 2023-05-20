import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

export const FlashCard = () => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getTest() {
      try {
        const result = await axios.get("http://localhost:8080/flashcards/1");
        setData(result.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getTest();
  }, []);

  return (
    <Fragment>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <p>{data.question}</p>
        </div>
      )}
    </Fragment>
  );
};
