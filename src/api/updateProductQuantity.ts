const updateProductQuantity = (id: string, quantity: number) => {
  const data = {
    "fields": {
      "productQuantity": {
        "integerValue": `${quantity}`
      },
      "updatedAt": {
        "timestampValue": `${new Date().toISOString()}`
      }
    }
  }

  fetch(`https://firestore.googleapis.com/v1/projects/hh-ecommerce/databases/(default)/documents/products/${id}?currentDocument.exists=true&updateMask.fieldPaths=productQuantity&updateMask.fieldPaths=updatedAt&key=[${import.meta.env.VITE_firebase_apiKey}] HTTP/1.1`, {
    method: 'PATCH',
    mode: 'cors',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
    keepalive: true
  })
}

export default updateProductQuantity