import React from 'react';

const About = () => {
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
      <h1 style={styles.header}>Privacy Information Statement</h1>
      <p style={styles.paragraph}>
        Your privacy is of the utmost importance to us. We follow strict data protection policies and practices to safeguard your personal information. For a more detailed understanding of how we collect, use, and protect your data, please refer to our Privacy Policy available on our website.      </p>
      <hr style={styles.hr} />
      <h2 style={styles.header}>The technology behind chatbot</h2>
      <p style={styles.paragraph}>
        Our chatbot, is powered by a combination of cutting-edge technologies, including Google's Dialogflow for natural language understanding, JavaScript for programming, HTML and CSS for structuring and styling, and ReactJS for creating a dynamic and responsive user interface. This advanced technological stack enables Umibot to effectively understand and process user inputs, providing accurate and relevant responses to your questions.      </p>
      <hr style={styles.hr} />
      <h2 style={styles.header}>Chatbot Purpose</h2>
      <p style={styles.paragraph}>
        The chatbot is specifically designed to focus on student admission consultancy. Our chatbot aims to assist prospective students in navigating the university admission process, offering guidance on scholarships, tuition fees, and other relevant information pertaining to university life. By providing a user-friendly and informative platform, Umibot streamlines the journey towards higher education and ensures that all necessary information is easily accessible.
        We hope that serves as a valuable resource for you as you embark on your academic journey. If you have any questions or concerns, please do not hesitate to reach out to our support team.      </p>
    </div>
  );
};

export default About;
