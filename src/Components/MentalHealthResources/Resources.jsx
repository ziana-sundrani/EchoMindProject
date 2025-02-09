import React, { useState } from "react";
import "./Resources.css"; // Ensure your styles are properly linked

function Resources() {
    const [activeTab, setActiveTab] = useState("general");

    const changeTab = (tab) => {
        setActiveTab(tab);
    };

    const resourceContent = {
        general: [
            {
                title: "General Resources",
                image: "https://media.istockphoto.com/id/1479494606/vector/mental-health-concept.jpg?s=612x612&w=0&k=20&c=frJSKdP-5fNTvhqHEuSFVB47wxMRH_y866ebJhuUTTU=", // Replace with actual image URL
                description: "Here are some comprehensive resources to help manage emotional wellbeing.",
                link: "https://www.nih.gov/health-information/emotional-wellness-toolkit",
            },
            {
                title: "Meditation for Calmness",
                image: "https://media.istockphoto.com/id/175590369/photo/pebble-on-beach.jpg?s=612x612&w=0&k=20&c=HUghk-nzB8lRi_Ctv0wqPGpAdxjON_byXpHVRLGFNW8=",
                description: "Here, you can find guided meditations to reduce anxiety and stress.",
                link: "https://www.headspace.com/meditation",
            },
        ],
        anxiety: [
            {
                title: "Anxiety Resources",
                image: "https://t4.ftcdn.net/jpg/02/96/07/89/360_F_296078935_98m3UP4TBCavNTm767y9mfSd6xDqyKay.jpg", // Replace with actual image URL
                description: "Here are some comprehensive resources to help manage anxiety.",
                link: "https://www.nhsinform.scot/illnesses-and-conditions/mental-health/mental-health-self-help-guides/anxiety-self-help-guide/",
            },
            {
                title: "Meditation for Calmness",
                image: "https://media.istockphoto.com/id/1409401867/vector/conscious-woman-concept.jpg?s=612x612&w=0&k=20&c=Fhh0ei7e59RJYzeelAJXU8amKb75RaleabRk1y_IXH0=",
                description: "Guided meditations to reduce anxiety and stress.",
                link: "https://www.gaiam.com/blogs/discover/calming-the-mind-a-meditation-exercise",
            },
        ],
        stress: [
            {
                title: "Coping with Stress",
                image: "https://media.istockphoto.com/id/1439858352/vector/stress-level-mood-and-emotions-scale-tiny-businesswoman-pushing-with-effort-arrow.jpg?s=612x612&w=0&k=20&c=YfT8cmVgdFr5BZC0Y0FOP7QYuX6C5W-IeWp8ErhiNlI=",
                description: "Here, you can easily how to effectively cope with stress.",
                link: "https://www.cdc.gov/mental-health/living-with/index.html",
            },
            {
                title: "Mindful Practices",
                image: "https://media.istockphoto.com/id/1457842724/vector/stress-management-meditation-or-relaxation-to-reduce-anxiety-control-emotion-during-problem.jpg?s=612x612&w=0&k=20&c=idmSUfQdcLMywZpakXV5DXa5p24N3qAnvse62aMRD2g=",
                description: "Mindfulness techniques to help reduce stress.",
                link: "https://www.mindful.org/take-a-mindful-moment-5-simple-practices-for-daily-life/",
            },
        ],
        sadness: [
            {
                title: "Dealing with Sadness",
                image: "https://media.istockphoto.com/id/1166335598/vector/sad-lonely-woman-in-depression-with-flying-hair.jpg?s=612x612&w=0&k=20&c=LqnjPZoNcKBSFVtDreUyPtaPdK67dvsNr4FvVOKabHk=",
                description: "Here, you can find effective ways to cope with sadness.",
                link: "https://www.talkspace.com/blog/how-to-deal-with-sadness/",
            },
            {
                title: "Talk to a Therapist",
                image: "https://media.istockphoto.com/id/1304726157/vector/psychotherapy-counseling-and-mental-health.jpg?s=612x612&w=0&k=20&c=qHeXkRmiYWDeG5Oyq_zXsVQ3hsRdsOfLGaiqqrHNBDM=",
                description: "Online therapy options to help you navigate sadness.",
                link: "https://www.betterhelp.com",
            },
        ],
        loneliness: [
            {
                title: "How to Deal with Loneliness",
                image: "https://media.istockphoto.com/id/1224548497/vector/stop-cyberbullying-depressed-girl-suffering-from-online-harassment-isolated-vector.jpg?s=612x612&w=0&k=20&c=2ZnuiM54Bjvrkuq5SIE9ItPj7fxhSZnOUTIUk0fznWc=",
                description: "Here are some psychology-backed techniques for overcoming loneliness.",
                link: "https://www.mind.org.uk/information-support/tips-for-everyday-living/loneliness/tips-to-manage-loneliness/",
            },
            {
                title: "Join a Community",
                image: "https://media.istockphoto.com/id/1412778148/vector/online-meeting.jpg?s=612x612&w=0&k=20&c=bTK4nlDMQE-MBPzxVbzGt_FJYvkVVVmitVRW17zWXiI=",
                description: "It might be helpful to meet new people and find support groups near you! Here is a resource.",
                link: "https://www.meetup.com",
            },
        ],
    };

    return (
        <div className="resources-section">
            <h1 className = 'PageTitle'>Mental Health Resources</h1>

            {/* Tabs for Different Topics */}
            <div className="tabs">
                {Object.keys(resourceContent).map((tab) => (
                    <button
                        key={tab}
                        className={activeTab === tab ? "active-tab" : ""}
                        onClick={() => changeTab(tab)}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>

            {/* Display Resource List for Active Tab */}
            <div className="resource-list">
                {resourceContent[activeTab].map((resource, index) => (
                    <div key={index} className="resource-card">
                        <img src={resource.image} alt={resource.title} />
                        <h3>{resource.title}</h3>
                        <p>{resource.description}</p>
                        <a href={resource.link} target="_blank" rel="noopener noreferrer">
                            Learn More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Resources;
