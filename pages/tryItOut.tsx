// UploadForm.jsx
import React, { useState } from 'react';
import { storage } from '../server/firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { items } from '../constants/data';
import ProductCard from '../components/ProductCard/productCard';

const UploadForm = () => {
  // const [file, setFile] = useState(null);
  // const [text, setText] = useState('');
  // const [selectedProduct, setSelectedProduct] = useState(null);

  // const handleFileChange = (e) => {
  //   setFile(e.target.files ? e.target.files[0] : null);
  // };

  // const handleTextChange = (e) => {
  //   setText(e.target.value);
  // };

  // const handleProductSelect = (product) => {
  //   setSelectedProduct(product);
  // };

  // const handleSubmit = async () => {
  //   if (!file || !text || !selectedProduct) {
  //     alert('Please fill in all fields');
  //     return;
  //   }

    // const storageRef = ref(storage, `images/${file.name}`);
    // await uploadBytes(storageRef, file);

    // Send the data to the Transform API
  //   const response = await fetch('https://your-transform-api-url', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       // Add your API key or any other required headers
  //     },
  //     body: JSON.stringify({
  //       text,
  //       imageUrl: `https://firebasestorage.googleapis.com/v0/b/your-bucket-name/o/images%2F${encodeURIComponent(file.name)}?alt=media`,
  //       product: selectedProduct,
  //     }),
  //   });

  //   if (response.ok) {
  //     alert('Data sent successfully');
  //   } else {
  //     alert('Error sending data');
  //   }
  // };

  // const itemsArray = Object.values(items);

  return (
    <div>
      <h3>User Upload Form</h3>
      {/* <label htmlFor="upload-image">Upload your image:</label>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <label htmlFor="enter prompt">Create your own scene:</label>
      <input type="text" value={text} onChange={handleTextChange} />
      <div>
        {itemsArray.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            onClick={() => handleProductSelect(item)}
            isSelected={selectedProduct?.id === item.id}
          />
        ))}
      </div>
      <button onClick={handleSubmit}>Submit</button> */}
    </div>
  );
};

export default UploadForm;
