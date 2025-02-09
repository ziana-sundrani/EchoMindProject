import React, { useState } from 'react';
import './Journal.css';

function Journal() {
    const [entry, setEntry] = useState(''); // State for user input
    const [recommendation, setRecommendation] = useState(''); // State for recommendation

    const API_KEY =

    async function callOpenAIAPI(journal) {
        console.log("Calling the OpenAi API");
        const APIBody = {
            "model": "gpt-4o-mini",
            "messages": [
                { "role": "system", "content": "This is a journal where someone will share their feelings. " +
                        "Imagine you are a therapist. Respond with empathy." +
                        "If it seems they are struggling, refer them to a mental health resource " +
                        "such as the 998 Suicide Hotline number and ask them to look at the provided resources on the " +
                        "next page of the website you are embedded in. " +
                        "We have resources for anxiety, depression, stress, and loneliness " +
                        "but there are many more available online" +
                        "If they are happy, share their joy and motivate them to stay positive." },
                { "role": "user", "content": journal }
            ],
            "temperature": 0.7,
            "max_tokens": 100
        }
        await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers:  {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + API_KEY
            },
            body: JSON.stringify(APIBody)
        }).then((data) =>
        {
            return data.json();
        }).then((data) => {
            console.log(data);
            setRecommendation(data.choices?.[0]?.message?.content?.trim() || "No response available.");
        });
    }
    const handleInputChange = (e) => {
        setEntry(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //getRecommendation(entry);
        callOpenAIAPI(entry);
    };


    const textArea = document.querySelector('textarea')
    const textRowCount = textArea ? textArea.value.split("\n").length : 0
    const rows = textRowCount + 1
    return (
        <div className="journal-container">
            <h1 className="PageTitle"> Your EchoMind Journal</h1>
            <h3>Type how you are feeling and receive a personalized message.
                Please keep in mind that this is an AI generated response and may not be 100% accurate.
                If you or a friend need further support, please check out provided resources on the next tab.</h3>


            <form onSubmit={handleSubmit}>
                <textarea
                value={entry}
                onChange={handleInputChange}
                placeholder="How are you feeling today? Input your thoughts and we'll respond with support!"
                rows={rows}
                ></textarea>
                        <button type="submit">Get a Response!</button>
                    </form>

                    {recommendation && (
                        <div className="recommendation-section">
                            <h2>Some Support for you:</h2>
                            <p>{recommendation}</p>
                        </div>
                    )}
                <form/>
        </div>
    );
}

export default Journal;
