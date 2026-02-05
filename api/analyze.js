export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { imageBase64 } = req.body;

    const fakeResponse = `
      AI Analysis (demo): The uploaded image shows a potential repair issue. 
      Step 1: Inspect the area carefully. 
      Step 2: Identify the broken part. 
      Step 3: Gather materials and tools needed. 
      Step 4: Follow step-by-step instructions to fix it.
    `;

    res.status(200).json({ result: fakeResponse });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}
