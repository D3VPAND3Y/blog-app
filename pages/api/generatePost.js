import { Configuration,OpenAIApi } from "openai"

export default async function  handler(req, res) {
    const config = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(config);
    const response = await openai.createCompletion({
        engine: 'davinci',
        prompt: 'This is a test',
        max_tokens: 5,
        temperature: 0.3,
    });
    console.log(response);
    res.status(200).json({ post: response.choices[0].text })
  }
