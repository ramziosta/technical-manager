import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./contact.module.scss";
import emailjs from "@emailjs/browser";

function Contact() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const input = document.querySelectorAll("#first_name, #last_name");
    emailjs
      .sendForm(
        "service_eirar1m",
        "template_lb9v02w",
        form.current,
        "wbuyzv3SiIAVgnRc_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsFormSubmitted(true);
          setTimeout(() => {
            setIsFormSubmitted(false)}, 2500
          );
        },
        (error) => {
          console.log(error.text);
        }
      );

    //add clear form
    input.value = "";
  };

  return (
    <>
      <div className={styles.email}>
        {!isFormSubmitted ? (
          <>
            <h2 className={styles.header}>Contact Me</h2>
            <div>
              <form ref={form} onSubmit={sendEmail} className={styles.form}>
              <input
                className={styles.input}
                type="text"
                required
                name="user_name"
                placeholder="Name"
              />

              <input
                className={styles.input}
                type="text"
                placeholder="Email"
                required
                name="user_email"
              />

              <input
                className={styles.input}
                type="text"
                placeholder="Subject"
                required
                name="Subject"
              />

              <textarea
                className={styles.textarea}
                type="text"
                placeholder="Message"
                required
                name="message"
              />

              <button type="submit" value="send" className={styles.button}>
                Send
              </button>
              </form>
            </div>
          </>
        ) : (
          <div className={styles.confirmation}>
              <p className={styles.confirmationMessage}>Your email has been sent successfully.</p>
            <h3 className={styles.confirmationH3}>
              Thank you for getting in touch with me!
            </h3>
           <p className={styles.confirmationMessage}> I will get back to you as soon as possible.</p> 
          </div>
        )}
      </div>
    </>
);


}

export default Contact;
