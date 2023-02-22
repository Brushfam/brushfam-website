import styles from "@/styles/rust-dev-hiring/HiringForm.module.css";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

let acceptedFile;

const Dropzone = () => {
  const { getRootProps, getInputProps, acceptedFiles, fileRejections } = useDropzone({
    multiple: false,
    accept: {
      "application/pdf": [],
      'image/jpeg': [],
      'image/png': [],
    },
    maxSize: 4000000,
  });

  const files = acceptedFiles.map((file) => (
      <div key={file.name}>{file.name}</div>
  ));

  acceptedFile = acceptedFiles[0]

  return (
      <div {...getRootProps({})} className={styles.dropzoneWrapper}>
        {fileRejections.length > 0 ? (
            <div className={styles.fileDivError}>
              <input {...getInputProps({})} />
              <p className={styles.uploadText}>Upload your file</p>
              <p className={styles.sizeTextError}>Maximum upload size: 4MB</p>
              <div className={styles.files}>{files}</div>
            </div>
        ) : (
            <div className={styles.fileDiv}>
              <input {...getInputProps({})} />
              <p className={styles.uploadText}>Upload your file</p>
              <p className={styles.sizeText}>Maximum upload size: 4MB</p>
              <div className={styles.files}>{files}</div>
            </div>
        )}
      </div>
  );
}

export default function HiringForm() {
  const [file, setFile] = useState([])
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [country, setCountry] = useState("");
  const [ln, setLn] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sent, setSent] = useState(false);

  const SubmitButton = ({ formName }) => {
    const handleSubmit = async (e) => {
      const form = document.getElementById(formName);
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      e.preventDefault();
      setSent(true);

      const formDataFile = new FormData();
      formDataFile.append('file', acceptedFile);
      let response = await fetch('https://httpbin.org/post', {
        method: 'POST',
        body: formDataFile,
      })
      const file = await response.json();
      setFile(file)
      console.log("Sending");
      let data = {
        name,
        lastname,
        country,
        ln,
        message,
        file
      };
      await sendContactForm(data);
    };

    const sendContactForm = async (data) => {
      fetch("/api/contact-hiring", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          console.log("Response succeeded!");
          setSubmitted(true);
          setName("");
          setLastname("");
          setCountry("");
          setLn("");
          setMessage("");
        }
      });
    };

    const DefaultSubmitButton = () => {
      return (
        <button
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
          className={styles.button}
        >
          Apply
        </button>
      );
    };

    return sent ? (
      submitted ? (
        <p className={styles.submittedText}>Submitted!</p>
      ) : (
        <p className={styles.submittedText}>Submitting...</p>
      )
    ) : (
      <DefaultSubmitButton />
    );
  };


  return (
    <section className={styles.section}>
      <div className={styles.divWrapper}>
        <form method="post" id={"hiringForm"} className={styles.formDiv}>
          <div className={styles.row}>
            <div className={styles.column}>
              <label htmlFor={"name"} className={styles.label}>
                First Name
              </label>
              <input
                type={"text"}
                name={"name"}
                placeholder={"Enter your name"}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.column}>
              <label htmlFor={"lastname"} className={styles.label}>
                Last Name
              </label>
              <input
                type={"text"}
                name={"lastname"}
                placeholder={"Enter your last name"}
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                className={styles.input}
                required
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              <label htmlFor={"country"} className={styles.label}>
                Your residence location
              </label>
              <input
                type={"text"}
                name={"country"}
                placeholder={"Enter your country"}
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.column}>
              <label htmlFor={"ln"} className={styles.label}>
                LinkedIn
              </label>
              <input
                type={"text"}
                name={"ln"}
                placeholder={"Enter link for your page"}
                onChange={(e) => {
                  setLn(e.target.value);
                }}
                className={styles.input}
                required
              />
            </div>
          </div>
          <div className={styles.lastColumn}>
            <label htmlFor={"message"} className={styles.label}>
              Tell more about yourself or attach a CV (PDF/PNG/JPG)
            </label>
            <textarea
              name={"message"}
              placeholder={"Tell more about yourself"}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className={styles.lastInput}
              required
            />
          </div>
          <Dropzone>
          </Dropzone>
          <SubmitButton formName={"hiringForm"}></SubmitButton>
        </form>
      </div>
    </section>
  );
}
