import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { imageBase64 } = req.body;

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Authorization": `Bearer YOUR_OPENAI_API_KEY_HERE`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: [
          {
            role: "user",
            content: `Analyze this image of a home repair problem and give a step-by-step fix, materials list, and what’s broken: ${imageBase64}`
          }
        ]
      })
    });

    const data = await response.json();
    const text = data.output_text || "AI could not analyze the image.";
    res.status(200).json({ result: text });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}
