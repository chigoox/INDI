import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text
} from '@react-email/components';


function NewEmail({ userData }) {

    return (
        <Html>
            <Head />
            <Preview>
                Another client signed up!
            </Preview>
            <Body style={main}>
                <Container style={container}>
                    <Img
                        src={'/Images/emailLogo.jpg'}
                        width="170"
                        height="50"
                        alt="IKCO"
                        style={logo}
                    />
                    <Text style={paragraph}>Hi {userData.name},</Text>
                    <Text style={paragraph}>
                        You have a new client waiting to be contacted.
                    </Text>
                    <Text style={paragraph}>
                        {`Phone: ${userData.phone}`}
                    </Text>
                    <Text style={paragraph}>
                        {`Email: ${userData.email}`}
                    </Text>
                    <Section style={btnContainer}>
                        <Button style={button} href="https://ikcocabinets.com/Catalog">
                            View Catalog
                        </Button>
                    </Section>
                    <Text style={paragraph}>
                        Best,
                        <br />
                        The IKCO team
                    </Text>
                    <Hr style={hr} />
                    <Text style={footer}>
                        Wholesaler of Refined Cabinetry in New Jersey. High Quality Solid Wood Cabinets When You Need Them!
                    </Text>
                </Container>
            </Body>
        </Html>
    )
}



export default NewEmail




const main = {
    backgroundColor: "#ffffff",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
};

const logo = {
    margin: "0 auto",
    borderRadius: '100%'
};

const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
};

const btnContainer = {
    textAlign: "center",
};

const button = {
    backgroundColor: "#5F51E8",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center",
    display: "block",
    padding: "12px",
};

const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
};

const footer = {
    color: "#8898aa",
    fontSize: "12px",
};