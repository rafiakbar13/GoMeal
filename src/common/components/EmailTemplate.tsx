import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import { baseUrl } from "../lib/api";
interface EmailTemplateProps {
  name?: string;
  redirectUrl?: string;
  linkText?: string;
  description?: string;
  subject?: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name = "",
  redirectUrl = "/login",
  linkText,
  description,
  subject,
}) => (
  <Html>
    <Head />
    <Preview>{subject}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/static/github.png`}
          width="32"
          height="32"
          alt="Github"
        />

        <Text style={title}>{linkText}</Text>

        <Section style={section}>
          <Text style={text}>
            Hey <strong>{name}</strong>!
          </Text>
          <Text style={text}>{description}</Text>

          <Link style={button} href={`${baseUrl}/${redirectUrl}`}>
            {linkText}
          </Link>
        </Section>
        <Text style={links}>
          <Link style={link}>Your security audit log</Link> ・{" "}
          <Link style={link}>Contact support</Link>
        </Text>

        <Text style={footer}>
          Auth System By JB, Inc. ・88 Colin P Kelly Jr Street ・San Francisco,
          CA 94107
        </Text>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;

const main: React.CSSProperties = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container: React.CSSProperties = {
  width: "480px",
  margin: "0 auto",
  padding: "20px 0 48px",
};

const title: React.CSSProperties = {
  fontSize: "24px",
  lineHeight: 1.25,
};

const section: React.CSSProperties = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "center",
};

const text: React.CSSProperties = {
  margin: "0 0 10px 0",
  textAlign: "left",
};

const button: React.CSSProperties = {
  fontSize: "14px",
  backgroundColor: "#28a745",
  color: "#fff",
  lineHeight: 1.5,
  borderRadius: "0.5em",
  padding: "0.75em 1.5em",
};

const links: React.CSSProperties = {
  textAlign: "center",
};

const link: React.CSSProperties = {
  color: "#0366d6",
  fontSize: "12px",
};

const footer: React.CSSProperties = {
  color: "#6a737d",
  fontSize: "12px",
  textAlign: "center",
  marginTop: "60px",
};
