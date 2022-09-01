import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import SocialFlow from "../SocialFlow";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../../assets/somijeon.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./Resume.css"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/TripToCodes/personal_website_template/dev/src/assets/somijeon.pdf";


export default function Resume() {
  return (
    <>
      <div className="resume-body-container">
        <div className="stars-resume">
          <Container className="pt-10 pb-10" style={{backgroundColor:"transparent", marginTop:"9%"}}>
            <Row className="justify-center relative pb-10">
              <Document file={resumeLink} className="flex justify-center">
                <Page pageNumber={1} />
              </Document>
            </Row>

            <Row className="justify-center relative">
              <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
                Download CV
              </Button>
            </Row>
          </Container>
          <SocialFlow/>
        </div>
      </div>
    </>
  );
}
