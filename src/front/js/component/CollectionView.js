import React,{useEffect} from "react";
import {
  Card,
  Row,
  Col,
  FormControl,
  InputGroup,
  Button,
} from "react-bootstrap";
export function CollectionView(props) {
  useEffect(() => {
    return (
      <div>
    <div className="modal" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">Save changes</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      </div>
  
    )

  },[])
  return (
    <Card>
      <Card.Body id="collection-card">
        <Row>
          <Col>
            <InputGroup size="sm" className="mb-3">
              <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Name"
                value={props.value.name}
                readOnly={props.readOnly}
                onChange={(ev) =>
                  props.onChange({
                    ...props.value,
                    name: ev.target.value,
                  })
                }
              />
            </InputGroup>

            <InputGroup size="sm" className="mb-3">
              <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Description"
                readOnly={props.readOnly}
                value={props.value.description}
                onChange={(ev) =>
                  props.onChange({
                    ...props.value,
                    description: ev.target.value,
                  })
                }
              />
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
              <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Attributes"
                readOnly={props.readOnly}
                value={props.value.atttributes}
                onChange={(ev) =>
                  props.onChange({
                    ...props.value,
                    attributes: ev.target.value,
                  })
                }
              />
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
              <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Url"
                readOnly={props.readOnly}
                value={props.value.url}
                onChange={(ev) =>
                  props.onChange({
                    ...props.value,
                    url: ev.target.value,
                  })
                }
              />
            </InputGroup>
          </Col>
          {props.minted ? (
            <Col>
              <h2>
                Collection was minted on {""}
                {props.value.mainnet ? "MainNet" : "TestNet"}
              </h2>
            </Col>
          ) : (
            <Col>
              <Button
                id="mint"
                variant="primary"
                size="lg"
                onClick={props.onMint}
                disabled={props.isMinting}
              >
                {props.isMinting ? "Minting..." : "Mint"}
              </Button>
              <Button
                id="save"
                variant="success"
                size="lg"
                onClick={props.onSave}
                disabled={props.isMinting}
              >
                Save
              </Button>
            </Col>
          )}
        </Row>
      </Card.Body>
    </Card>
  );
}
/// https://testnets-api.opensea.io/api/v1/asset/0xe6217730066481F119DF5F7a0B14f72F1A9639E6/98850428836407784553050907173420271601140332659758010777662168625444928194600/?force_update=true
/// https://testnets-api.opensea.io/api/v1/asset/0xe6217730066481F119DF5F7a0B14f72F1A9639E6/93735162273891872365242155050658751987858262278702072001032611869719857076759/?force_update=true
