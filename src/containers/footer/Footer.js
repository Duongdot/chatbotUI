import React from "react";

const Footer = () => {
  const styles = {
    container: {
      backgroundColor: "#f0f4f9",
      padding: "40px 0",
    },
    title: {
      fontWeight: "bold",
      fontSize: "1.5rem",
      marginBottom: "20px",
      color: "#1c4e78",
    },
    description: {
      fontSize: "1rem",
      color: "#3f6a91",
    },
  };

  return (
    <section style={styles.container}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <h3 style={styles.title}>About Us</h3>
            <p style={styles.description}>
              Greenwich Vietnam is an international alliance between the
              University of Greenwich, United Kingdom and FPT University,
              Vietnam. Until now, it has had a global network of nearly 20.000
              students and alumni from over 12 countries in the world
            </p>
          </div>

          <div className="col-lg-3">
            <h3 style={styles.title}>Campuses</h3>
            <p style={{ ...styles.description, fontWeight: "bold" }}>Ha Noi</p>
            <p style={styles.description}>
              Golden Park Tower, 2 Pham Van Bach, Yen Hoa, Cau Giay, Hanoi
              Telephone: 024.7300.2266 Hotline: 0971.274.545 | 0981558080
            </p>
            <p style={{ ...styles.description, fontWeight: "bold" }}>Da Nang</p>
            <p style={styles.description}>
              Location 1: 658 Ngo Quyen, Son Tra, Da Nang
            </p>
            <p style={styles.description}>
              Location 2: FPT Building, Road No.1, An Don Industrial Park, An
              Hai Bac, Son Tra, Da Nang Telephone: 0236.730.2266 Hotline:
              0934.892.687
            </p>
          </div>

          <div className="col-lg-3">
            <p
              style={{
                ...styles.description,
                fontWeight: "bold",
                marginTop: "46px",
              }}
            >
              Ho Chi Minh
            </p>
            <p style={styles.description}>
              G20 Cong Hoa, Ward 12, Tan Binh, HCMC Telephone: 028.7300.2266
              Hotline: 0933.108.554 | 0971.294.545
            </p>
            <p style={{ ...styles.description, fontWeight: "bold" }}>Can Tho</p>
            <p style={styles.description}>
              160, 30/4 Street, An Phu, Ninh Kieu, Can Tho Telephone:
              0292.730.0068 Hotline: 0968.670.804 | 0936.600.861
            </p>
          </div>

          <div className="col-lg-3">
            <h3 style={styles.title}>Contact Us</h3>
            <p style={styles.description}>
              Hotline: 086.779.1686 info@greenwich.edu.vn
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
