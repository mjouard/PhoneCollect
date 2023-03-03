import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import { useNavigate } from 'react-router-dom';
import { total, list } from 'cart-localstorage'
import constants from "../../utils/constants";
import { getCurrentUser } from "../../utils/utils";
import DrawerAppBar from "../common/Navbar";
import HistoryNav from "../common/HistoryNav";

const server_host = constants.server_host
const static_files = constants.static_files
const deliveryPrice = 9.99;

export default function PaymentPage() {
  const navigate = useNavigate()
  const user = getCurrentUser();
  const history = [{title: "Acceuil", link: "/"}, {title: "Paiement", link: "/payment"}]

  return (
    <>
      <DrawerAppBar />
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee", minHeight: "85vh" }}>
        <HistoryNav history={history} />
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol>
              <MDBCard>
                <MDBCardBody className="p-4">
                  <MDBRow>
                    <MDBCol lg="7">
                      <MDBTypography tag="h5">
                        <div onClick={() => navigate(-1)} className="text-body" style={{ cursor: "pointer" }}>
                          <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continuer mes achats
                        </div>
                      </MDBTypography>

                      <hr />

                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Votre panier</p>
                          <p className="mb-0">Vous avez {list().length} articles dans votre panier</p>
                        </div>
                        <div>
                          <p>
                            <span className="text-muted">Sort by:</span>
                            <a href="#!" className="text-body">
                              price
                              <MDBIcon fas icon="angle-down mt-1" />
                            </a>
                          </p>
                        </div>
                      </div>
                      <div style={{maxHeight: "600px", overflowY: "scroll"}}>
                      {list().map(product => {
                        return (
                          <MDBCard key={product.id} className="mb-3">
                            <MDBCardBody>
                              <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                  <div>
                                    <MDBCardImage
                                      src={server_host + static_files + product.image[0]}
                                      fluid className="rounded-3" style={{ width: "65px" }}
                                      alt="Shopping item" />
                                  </div>
                                  <div className="ms-3">
                                    <MDBTypography tag="h5">
                                      {product.name}
                                    </MDBTypography>
                                    <p className="small mb-0">{product.capacity}GB, Navy Blue</p>
                                  </div>
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                  <div style={{ width: "50px" }}>
                                    <MDBTypography tag="h5" className="fw-normal mb-0">
                                      1
                                    </MDBTypography>
                                  </div>
                                  <div style={{ width: "80px" }}>
                                    <MDBTypography tag="h5" className="mb-0">
                                      {product.price}€
                                    </MDBTypography>
                                  </div>
                                  <a href="#!" style={{ color: "#cecece" }}>
                                    <MDBIcon fas icon="trash-alt" />
                                  </a>
                                </div>
                              </div>
                            </MDBCardBody>
                          </MDBCard>
                        )
                      })}
                      </div>
                    </MDBCol>

                    <MDBCol lg="5">
                      <MDBCard className="text-white rounded-3" style={{ backgroundColor: "#533294" }}>
                        <MDBCardBody>
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <MDBTypography tag="h5" className="mb-0">
                              Carte bancaire
                            </MDBTypography>
                          </div>
                          <p>Veuillez vous connecter pour régler votre commande</p>
                          <p className="small">Card type</p>
                          <a href="#!" type="submit" className="text-white">
                            <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <MDBIcon fab icon="cc-visa fa-2x me-2" />
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <MDBIcon fab icon="cc-amex fa-2x me-2" />
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                          </a>

                          <form className="mt-4">
                            <MDBInput disabled={!user} className="mb-4" label="Cardholder's Name" type="text" size="lg"
                              placeholder="Cardholder's Name" contrast />

                            <MDBInput disabled={!user} className="mb-4" label="Card Number" type="text" size="lg"
                              minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />

                            <MDBRow className="mb-4">
                              <MDBCol md="6">
                                <MDBInput disabled={!user} className="mb-4" label="Expiration" type="text" size="lg"
                                  minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                              </MDBCol>
                              <MDBCol md="6">
                                <MDBInput disabled={!user} className="mb-4" label="Cvv" type="text" size="lg" minLength="3"
                                  maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                              </MDBCol>
                            </MDBRow>
                          </form>

                          <hr />

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Prix</p>
                            <p className="mb-2">{total()}€</p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Livraison</p>
                            <p className="mb-2">{deliveryPrice}</p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Total(Incl. livraison)</p>
                            <p className="mb-2">{total()+deliveryPrice}€</p>
                          </div>

                          <MDBBtn disabled={!user} color="info" block size="lg">
                            <div className="d-flex justify-content-between">
                              <span>{total()+deliveryPrice}€</span>
                              <span>
                                <i className="fas fa-long-arrow-alt-right ms-2"></i>
                              </span>
                            </div>
                          </MDBBtn>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  )
}