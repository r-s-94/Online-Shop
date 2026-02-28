import "../index.scss";
import "./payment.scss";
import { Link, useNavigate } from "react-router-dom";
import MasterCard from "../assets/MasterCard.png";
import Maestro from "../assets/Maestro.png";
import PayPal from "../assets/paypal-3384015_1920.png";
import AmazonPay from "../assets/amazon-pay.png";
import GooglePay from "../assets/google-pay.png";
import Visa from "../assets/visa.png";
import Klarna from "../assets/Klarna.png";
import LogoShoppingcartEl from "../logoShoppingcart/logoShoppingcartEl";
import { useState } from "react";

export default function Payment() {
  interface PaymentOptionObject {
    mastercard: boolean;
    maestrocard: boolean;
    paypal: boolean;
    amazonpay: boolean;
    googlepay: boolean;
    visa: boolean;
    klarna: boolean;
  }

  const navigate = useNavigate();

  const [paymentObject, setPaymentObject] = useState<PaymentOptionObject>({
    mastercard: false,
    maestrocard: false,
    paypal: false,
    amazonpay: false,
    googlepay: false,
    visa: false,
    klarna: false,
  });

  function choosePayment(payment: string) {
    switch (payment) {
      case "Mastercard":
        setPaymentObject({
          ...paymentObject,
          mastercard: true,
          maestrocard: false,
          paypal: false,
          amazonpay: false,
          googlepay: false,
          visa: false,
          klarna: false,
        });
        break;

      case "Maestrocard":
        setPaymentObject({
          ...paymentObject,
          maestrocard: true,
          mastercard: false,
          paypal: false,
          amazonpay: false,
          googlepay: false,
          visa: false,
          klarna: false,
        });
        break;

      case "PayPal":
        setPaymentObject({
          ...paymentObject,
          paypal: true,
          mastercard: false,
          maestrocard: false,
          amazonpay: false,
          googlepay: false,
          visa: false,
          klarna: false,
        });
        break;

      case "AmazonPay":
        setPaymentObject({
          ...paymentObject,
          amazonpay: true,
          mastercard: false,
          maestrocard: false,
          paypal: false,
          googlepay: false,
          visa: false,
          klarna: false,
        });
        break;

      case "GooglePay":
        setPaymentObject({
          ...paymentObject,
          googlepay: true,
          mastercard: false,
          maestrocard: false,
          paypal: false,
          amazonpay: false,
          visa: false,
          klarna: false,
        });
        break;

      case "Visa":
        setPaymentObject({
          ...paymentObject,
          visa: true,
          mastercard: false,
          maestrocard: false,
          paypal: false,
          amazonpay: false,
          googlepay: false,
          klarna: false,
        });
        break;
      case "Klarna":
        setPaymentObject({
          ...paymentObject,
          klarna: true,
          mastercard: false,
          maestrocard: false,
          paypal: false,
          amazonpay: false,
          googlepay: false,
          visa: false,
        });
        break;
    }
  }

  function toCheckOut() {
    navigate("/checkOut");
  }

  return (
    <section className="payment-section">
      <LogoShoppingcartEl />
      <Link
        to="/shoppingStorage"
        className="payment-section__to-shopping-cart-link link center-content no-underline"
      >
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="payment-section__to-shopping-cart-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>{" "}
        zurück zum Warrenkorb
      </Link>
      <div className="payment-section__payment-main-div">
        <div
          onClick={() => {
            choosePayment("Mastercard");
          }}
          className={`payment-section__payment-div center-content ${paymentObject.mastercard ? "interaction-payment-div" : ""}`}
        >
          {" "}
          <input
            type="radio"
            onClick={() => {
              choosePayment("Mastercard");
            }}
            checked={paymentObject.mastercard}
            className="payment-section__input"
            name=""
            id=""
          />{" "}
          <img
            src={MasterCard}
            className="payment-section__payment-img"
            alt=""
          />
        </div>
        <div
          onClick={() => {
            choosePayment("Maestrocard");
          }}
          className={`payment-section__payment-div center-content ${paymentObject.maestrocard ? "interaction-payment-div" : ""}`}
        >
          {" "}
          <input
            type="radio"
            onClick={() => {
              choosePayment("Maestrocard");
            }}
            checked={paymentObject.maestrocard}
            className="payment-section__input"
            name=""
            id=""
          />{" "}
          <img
            src={Maestro}
            className="payment-section__payment-img"
            alt=""
          />{" "}
        </div>
        <div
          onClick={() => {
            choosePayment("PayPal");
          }}
          className={`payment-section__payment-div center-content ${paymentObject.paypal ? "interaction-payment-div" : ""}`}
        >
          {" "}
          <input
            type="radio"
            onClick={() => {
              choosePayment("PayPal");
            }}
            checked={paymentObject.paypal}
            className="payment-section__input"
            name=""
            id=""
          />{" "}
          <img
            src={PayPal}
            className="payment-section__payment-img"
            alt=""
          />{" "}
        </div>
        <div
          onClick={() => {
            choosePayment("AmazonPay");
          }}
          className={`payment-section__payment-div center-content ${paymentObject.amazonpay ? "interaction-payment-div" : ""}`}
        >
          {" "}
          <input
            type="radio"
            onClick={() => {
              choosePayment("AmazonPay");
            }}
            checked={paymentObject.amazonpay}
            className="payment-section__input"
            name=""
            id=""
          />{" "}
          <img
            src={AmazonPay}
            className="payment-section__payment-img"
            alt=""
          />{" "}
        </div>
        <div
          onClick={() => {
            choosePayment("GooglePay");
          }}
          className={`payment-section__payment-div center-content ${paymentObject.googlepay ? "interaction-payment-div" : ""}`}
        >
          {" "}
          <input
            type="radio"
            onClick={() => {
              choosePayment("GooglePay");
            }}
            checked={paymentObject.googlepay}
            className="payment-section__input"
            name=""
            id=""
          />{" "}
          <img
            src={GooglePay}
            className="payment-section__payment-img"
            alt=""
          />{" "}
        </div>
        <div
          onClick={() => {
            choosePayment("Visa");
          }}
          className={`payment-section__payment-div center-content ${paymentObject.visa ? "interaction-payment-div" : ""}`}
        >
          {" "}
          <input
            type="radio"
            onClick={() => {
              choosePayment("Visa");
            }}
            checked={paymentObject.visa}
            className="payment-section__input"
            name=""
            id=""
          />{" "}
          <img
            src={Visa}
            className="payment-section__payment-img"
            alt=""
          />{" "}
        </div>
        <div
          onClick={() => {
            choosePayment("Klarna");
          }}
          className={`payment-section__payment-div center-content ${paymentObject.klarna ? "interaction-payment-div" : ""}`}
        >
          {" "}
          <input
            type="radio"
            onClick={() => {
              choosePayment("Klarna");
            }}
            checked={paymentObject.klarna}
            className="payment-section__input"
            name=""
            id=""
          />{" "}
          <img
            src={Klarna}
            className="payment-section__payment-img"
            alt=""
          />{" "}
        </div>
      </div>{" "}
      <button
        onClick={toCheckOut}
        disabled={
          !(
            paymentObject.mastercard ||
            paymentObject.maestrocard ||
            paymentObject.paypal ||
            paymentObject.amazonpay ||
            paymentObject.googlepay ||
            paymentObject.visa ||
            paymentObject.klarna
          )
        }
        className={`payment-section__to-check-out-button button ${
          paymentObject.mastercard ||
          paymentObject.maestrocard ||
          paymentObject.paypal ||
          paymentObject.amazonpay ||
          paymentObject.googlepay ||
          paymentObject.visa ||
          paymentObject.klarna
            ? "primary-button"
            : "disabled-button no-hover"
        }`}
      >
        Bestellung abschließen
      </button>{" "}
    </section>
  );
}
