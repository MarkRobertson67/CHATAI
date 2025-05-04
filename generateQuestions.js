//  To run   node generateQuestions.js


const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config(); // Load environment variables from .env file

async function generateQuestions() {
  try {
    // Set up OpenAI configuration
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY, // Use the API key from environment variable
    });
    const openai = new OpenAIApi(configuration);

    // Make API call to generate questions
    const response = await openai.createCompletion({
      model: "gpt-3.5-turbo-instruct",
      prompt: "Book: Eloquent JavaScript\nQuestion:",
      max_tokens: 64,
    });

    
    // console.log("API Response:", response); // Log the entire response object

    // Extract and display the generated question
        const generatedQuestion = response.data.choices[0]?.text.trim();
        console.log(`Generated Question: ${generatedQuestion}`);

  } catch (error) {
    console.error("Error:", error);
  }
}
generateQuestions();
