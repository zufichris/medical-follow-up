export const reportSideEffect = functions.https.onRequest(async (req, res) => {
    const { prescriptionId, sideEffect } = req.body;
  
    try {
      const prescriptionRef = admin.firestore().collection('prescriptions').doc(prescriptionId);
      await prescriptionRef.update({ sideEffects: admin.firestore.FieldValue.arrayUnion(sideEffect) });
  
      res.json({ message: 'Side effect reported successfully' });
    } catch (error) {
      console.error('Error reporting side effect:', error);
      res.status(500).json({ error: 'Failed to report side effect' });
    }
  });