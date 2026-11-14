import axios from "axios";

export const getQuizData = async () => {
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.get("http://localhost:3000/quiz", {
      headers: {
        Authorization: token,
      },
    });

    return data;
  } catch (err) {
    console.error("Quiz fetch error:", err.response?.data || err.message);
  }
};
