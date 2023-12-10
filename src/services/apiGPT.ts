const apiGPT = async (question) => {
    const prompt = `
        Generate 10 questions with their answers with the following theme ${question} in brazilian portuguese.
        Furthermore, I want a json formatter to come along like the example below:
        {"response": [{"question": "","response": ""},{"question": "","response": ""},{"question": "","response": ""},{"question": "","response": ""},{"question": "","response": ""},{"question": "","response": "" },{"question": "","response": ""},{"question": "","response": ""},{"question": "","response": ""}, {"question": "","response": ""}]}
    `;

    const request = await fetch("https://api.openai.com/v1/engines/text-davinci-003-playground/completions", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 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`
        },
        body: JSON.stringify({
            prompt,
            temperature: 0.22,
            max_tokens: 500,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })
    });

    const result = await request.json();

    console.log("Result: ", result);

    return result;
};

export default apiGPT;