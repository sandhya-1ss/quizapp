import axios from "axios";

const API_URL =  "https://opentdb.com/api.php?amount=10&type=multiple";
;

export const fetchQuizData = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching quiz data:", error);
        return null; // Return null or a fallback in case of an error
    }
};
