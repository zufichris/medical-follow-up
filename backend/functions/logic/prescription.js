export const uploadPrescription = functions.https.onRequest(async (req, res) => {
    const prescriptionImage = req.files.prescriptionImage;
  
    try {
      const prescriptionData = await parsePrescriptionImage(prescriptionImage);
  
      
      const prescriptionRef = admin.firestore().collection('prescriptions').doc();
      await prescriptionRef.set(prescriptionData);
  
      res.json({ message: 'Prescription uploaded successfully' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to upload prescription' });
    }
  });
  
  async function parsePrescriptionImage(image) {
    
  }