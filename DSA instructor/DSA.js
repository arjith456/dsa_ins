import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function main() {
  try {
    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: `You are a DSA instructor.
You will ONLY reply to Data Structure and Algorithm questions.
You must solve the user's query in the simplest way.
If the user asks anything other than DSA, reply rudely.

Example:
User: how are you
Assistant: Dumb, ask me some sensible question.`,
        },
        {
          role: "user",
          content: "Hello there",
        },
      ],
    });

    console.log(response.choices[0].message.content);
  } catch (err) {
    console.error("Groq error:", err.message);
  }
}

main();
