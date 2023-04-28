import React from 'react';

const Privacy = () => {
    const styles = {
        container: {
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            backgroundColor: '#f0f4f9',
        },
        header: {
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '20px',
        },
        paragraph: {
            fontSize: '18px',
            lineHeight: '1.5',
            marginBottom: '10px',
            textAlign: "justify",
        },
        hr: {
            borderTop: '1px solid #ccc',
            margin: '30px 0',
        },
    };

    return (
        <div style={styles.container}>
            <hr style={styles.hr} />
            <h1 style={styles.header}>The information we collect</h1>
            <p style={styles.paragraph}>
                Your conversation with chatbot is private. The chatbot purpose is not to collect, store, use or disclose any personal information about you. chatbot does not record or store your conversation. No one other than you can see your conversation with chatbot.
            </p>
            <p style={styles.paragraph}>
                We use Google Analytics to collect and store de-identified and aggregate information, including but not limited to:
            </p>
            <ul style={styles.paragraph}>
                <li>Information about how chatbot is used, including: the total number of users; average time and length of use.</li>
                <li>Technical information, including where exactly users left their conversation with chatbot, and bugs or other technical issues that might impact how well Umi works.</li>
            </ul>
            <p style={styles.paragraph}>
                The only information we may collect directly from you is feedback in the form of an optional and anonymous Exit Survey that is hosted by Qualtrics.
            </p>
            <hr style={styles.hr} />
            <h2 style={styles.header}>The information we collect</h2>
            <p style={styles.paragraph}>
                We store the information we collect from users in two forms: hard copy documents and electronic data. We maintain strict security measures to protect the integrity and confidentiality of your information, whether it is stored in physical or digital form.
            </p>
            <h3 style={styles.header}>The information we collect</h3>
            <p style={styles.paragraph}>
                The de-identified and aggregate information that we collect serves two main purposes:
                <ul style={styles.paragraph}>
                    <li style={styles.paragraph}>Improving Chatbot Functionality: We use the collected data to enhance the chatbot's performance, ensuring that it remains helpful, safe, and secure for all users. By analyzing user interactions and feedback, we can make necessary adjustments and improvements to provide a better user experience.</li>
                    <li style={styles.paragraph}> Publishing Research: The anonymized and aggregated data that we collect also contributes to research efforts in the field of chatbot development and artificial intelligence. By sharing our findings, we aim to contribute to the advancement of knowledge and inspire further innovation in the industry.</li>
                </ul>
            </p>
        </div>
    );
};

export default Privacy;