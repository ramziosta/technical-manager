import React, { useState, ChangeEvent, FormEvent } from 'react';
import { auth, firestore, storage } from '../server/firebase';
import { UploadTaskSnapshot, ref } from 'firebase/storage';
import { uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { UserCredential, signInAnonymously } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';



const Demo: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [productInfo, setProductInfo] = useState("");
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [productLink, setProductLink] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [approved, setApproved] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Sign in anonymously
    const userCredential: UserCredential = await signInAnonymously(auth);
    const user = userCredential.user;
    const folderName = email;

    interface FileData {
      url: string;
      status: string;
    }
    const uploadedFiles: FileData[] = [];

    // Upload each file to Firebase Storage
    const uploadPromises = files.map((file) => {
      return new Promise<FileData>(async (resolve, reject) => {
        const storageRef = ref(storage, `${folderName}/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
          (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
          },
          (error) => {
            console.error(error);
            reject(error);
          },
          async () => {
            // Upload completed successfully, now we can get the download URL
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            resolve({
              url,
              status: 'Uploaded'
            });
          }
        );
      });
    });

    const results = await Promise.all(uploadPromises);
    uploadedFiles.push(...results);

    const res = await addDoc(collection(firestore, "Customers"), {
      name: name,
      email: email,
      productInfo: productInfo,
      productName: productName,
      comments: description,
      productLink: productLink,
      files: uploadedFiles,
      approved_to_use_images: approved,
    });

    console.log(res);
    await auth.signOut();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);

    selectedFiles.forEach((file, index) => {
      if (file.type.startsWith('image/')) {  // Check if the file is an image
        const url = URL.createObjectURL(file);  // Create a URL for the file
        const img = new Image();  // Create a new Image object

        img.onload = () => {  // Set the onload event handler
          if (img.width > 512 || img.height > 512) {
            alert(`The image number ${index + 1} uploaded is not 512px X 512px! Its dimensions are ${img.width}x${img.height}. Please upload the correct image size.`);
            // Optionally remove the file from selectedFiles here
          }

          URL.revokeObjectURL(url);  // Clean up the object URL
        };

        img.src = url;  // Start loading the image
      }
    });

    setFiles(selectedFiles);
  };



  return (
    <div>

      <div className="" style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ margin: "0 auto", width: "90%" }}>
          <h2>How to Request a Product Demo</h2>

          <p>Do you want us to visualize your product? Here is how you can request a demo in a few easy steps:</p>

          <ol>
            <li><strong>Enter your Name:</strong> or your company name.</li>

            <li><strong>Provide your Email</strong>to send updates and arrange a time for your product demonstration.</li>

            <li><strong>Product Name:</strong> Every great product has a name. Let us know what yours is called.</li>

            <li><strong>Product Description:</strong> Tell us a little bit about your product.</li>

            <li><strong>Share the Product Link:</strong> If there is a webpage for your product, share it with us.</li>

            <li><strong>Any Additional Comments:</strong> Any extra information about the product? Let us know in the comments.</li>

            <li><strong>Upload Images:</strong>Please upload at least 6 images of your product. If possible, take pictures from different angles to help us fully visualize it. Just a quick note before you upload your images: to make sure everything looks just right, please ensure your images are 512px by 512px. Images of different sizes might not show up as well as they should, and we want your pictures to look their best! Thanks for your understanding and happy uploading! </li>

            <li><strong>Hit Request Demo:</strong> All set! Just click on The Request Demo button to send us your information. We will get in touch with you soon to set up your product demonstration. We srere looking forward to seeing your product!</li>
          </ol>

          <p>Note: We value your privacy and assure you that your details will be kept confidential.</p>



          <form
            onSubmit={handleSubmit}
            style={{
              border: "solid 4px rgb(250, 200,65)",
              padding: "25px",
            }}
            target="_blank"
          >


            <p>
              <label>Name:
                <input
                  className="form-control w3-input w3-padding-16 w3-border"
                  type="text"
                  id="title"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="User name"
                  required
                  name="username"
                  aria-describedby="user name"
                />
              </label>
            </p>

            <p>
              <label>Email:
                <input
                  className="form-control w3-input w3-padding-16 w3-border"
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  name="Email"
                  aria-describedby="Email"
                />
              </label>
            </p>

            <p>
              <label>Product Name:
                <input
                  className="form-control w3-input w3-padding-16 w3-border"
                  type="text"
                  id="ProductName"
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="ProductName"
                  required
                  name="ProductName"
                  aria-describedby="ProductName"
                />
              </label>
            </p>

            <p>
              <label>Product Link</label>
              <input
                className="form-control w3-input w3-padding-16 w3-border"
                type="url"
                id="Product_link"
                onChange={(e) => setProductLink(e.target.value)}
                placeholder="Product Link"
                required
                name="Product_link"
                aria-describedby="Product_link"
              />
            </p>

            <p>
              <label>Product Description:
                <textarea
                  className="w3-input w3-padding-16 w3-border"
                  id="Product Info"
                  onChange={(e) => setProductInfo(e.target.value)}
                  placeholder="Product Info"
                  required
                  name="product Info"
                  aria-describedby="product Info"
                />
              </label>
            </p>

            <p>
              <label>Comments:
                <textarea
                  className="form-control w3-input w3-padding-16 w3-border"
                  id="product_description"
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Comments"
                  required
                  name="product_description"
                  aria-describedby="product_description"
                />
              </label>
            </p>



            <p>
              <label> Upload Images:
                <input
                  className="form-control w3-input w3-padding-16 w3-border"
                  type="file"
                  accept="image/*"
                  multiple
                  id="file"
                  onChange={handleFileChange}
                  placeholder="Images"
                  name="file"
                  aria-describedby="file"
                />
              </label>
            </p>

            <p>
              <label>Allow us to use these images for training purposes?</label>
              <input
                className="form-control w3-input w3-padding-16 w3-border"
                type="checkbox"
                id="Product_link"
                checked={approved} onChange={e => setApproved(e.target.checked)}
                placeholder="Product Link"

                name="Product_link"
                aria-describedby="Product_link"
              />
            </p>

            <p>
              <button
                // disabled={disabled}
                // onClick={(e) => setDisabled(true)}
                type="submit"
                value="send"
                className=""
                style={{
                  border: "solid 4px rgb(250, 200,65)",
                }}
              >
                Request Demo{" "}
              </button>
            </p>
          </form>
        </div>


      </div>



    </div>
  );
};

export default Demo;

