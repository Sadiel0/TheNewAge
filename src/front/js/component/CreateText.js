import React from "react";
import ReactPlayer from "react-player";
import "../../styles/CreateText.css";

import {
  Card,
  Row,
  Col,
  FormControl,
  InputGroup,
  Button,
  Form,
  Container,
} from "react-bootstrap";
export function CreateText() {
  return (
    <div>
      <Container>
        <h2>What are NFTs?</h2>
        <Row id="row1">
          <Col xs={12} md={6} >
            <p id="colored-p">
              NFTs are tokens that we can use to represent ownership of unique
              items. They let us tokenise things like art, collectibles, even
              real estate. They can only have one official owner at a time and
              they're secured by the Ethereum blockchain – no one can modify the
              record of ownership or copy/paste a new NFT into existence. NFT
              stands for non-fungible token. Non-fungible is an economic term
              that you could use to describe things like your furniture, a song
              file, or your computer. These things are not interchangeable for
              other items because they have unique properties. Fungible items,
              on the other hand, can be exchanged because their value defines
              them rather than their unique properties. For example, ETH or
              dollars are fungible because 1 ETH / $1 USD is exchangeable for
              another 1 ETH / $1 USD.
            </p>
          </Col>
          <Col xs={6} md={6}>
            <div>
              <ReactPlayer
                id="video"
                url="https://www.youtube.com/watch?v=zpROwouRo_M"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <h2 id="h2">Want to create your own NFT?</h2>
          <Col className="column" xs={12} md={3} >
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://lh3.googleusercontent.com/bg3zw3vfnqIZtgLbTMNRDSOP1_sjqIcIqsCus7VY_rpq57i8FwL8iWk65w4CQm6rvwWa232XvYAEH5Ew83U5AS2n5eOnFhnAWFGPRg=w600"
              />
              <Card.Body>
                <Card.Title>HAPE #312</Card.Title>
                <Card.Text>
                  Unique, fully 3D and built to unite the ape multiverse.
                  Designed and styled by Digimental.
                </Card.Text>
                <Button
                  variant="info"
                  href="https://opensea.io/assets/0x4db1f25d3d98600140dfc18deb7515be5bd293af/312"
                >
                  Go To NFT
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="column" xs={12} md={3} >
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://lh3.googleusercontent.com/TcwFLcDikKyFYx5gdYyRrCkl8i0shTYCJX15hPBGEJElTPCqbrD3k0C_Zthe9fkuAkyIFDRNMND2LisWjzMRniMKnMPDwGM3LGqm0g=w600"
              />
              <Card.Body>
                <Card.Title>CLoneX #18060</Card.Title>
                <Card.Text>
                  20,000 next-gen Avatars, by RTFKT and Takashi Murakami
                </Card.Text>
                <Button
                  href="https://opensea.io/assets/0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b/3975"
                  variant="info"
                >
                  Go to NFT
                </Button>
              </Card.Body>
            </Card>
          </Col  >
          <Col className="column"  xs={12} md={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://lh3.googleusercontent.com/Zu7KtP_NGPeAGXzFYSW9jHA-klSipL3cnM-jmYj2dUKu9bxb93RIS23CwV5ypaVMHifWs8M9tWQJjHIQsGICKnv4b_r4fTeTpHoX=w600"
              />
              <Card.Body>
                <Card.Title>Azuki #1313</Card.Title>
                <Card.Text>
                  A brand for the metaverse. Built by the community. View the
                  collection at{" "}
                  <a href="azuki.com/gallery">azuki.com/gallery.</a>
                </Card.Text>
                <Button
                  variant="info"
                  href="https://opensea.io/assets/0xed5af388653567af2f388e6224dc7c4b3241c544/1313"
                >
                  Go To NFT
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="column" xs={12} md={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://lh3.googleusercontent.com/t4cUUlYupjxl06T79EXxCtSdq8Vnfx7rEB_TqM37sbXVtuuAGJLE2-L064EkFkOGqKUCegRSH_Yetw3aVl6hJYSGmWn0WBkkCP30glg=w600"
              />
              <Card.Body>
                <Card.Title> Ape #29664</Card.Title>
                <Card.Text>
                  Funk, meet web 3. A collection of 8,888 unique digital hippies
                  that are building the new free world before our eyes.
                </Card.Text>
                <Button
                  variant="info"
                  href="https://opensea.io/assets/0x82f5ef9ddc3d231962ba57a9c2ebb307dc8d26c2/6486"
                >
                  Go to NFT
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
