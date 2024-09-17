export const markMedicationTaken = functions.https.onRequest(async (req, res) => {
    const { prescriptionId, date } = req.body;
  
    try {
      const prescriptionRef = admin.firestore().collection('prescriptions').doc(prescriptionId);
      await prescriptionRef.update({ taken: true, takenDate: date });
  
      res.json({ message: 'Medication marked as taken' });
    } catch (error) {
      console.error('Error marking medication taken:', error);
      res.status(500).json({ error: 'Failed to mark medication taken' });
    }
  });
  
  export const markMedicationMissed = functions.https.onRequest(async (req, res) => {
    const { prescriptionId, date } = req.body;
  
    try {
      const prescriptionRef = admin.firestore().collection('prescriptions').doc(prescriptionId);
      await prescriptionRef.update({ missed: true, missedDate: date });
  
      res.json({ message: 'Medication marked as missed' });
    } catch (error) {
      console.error('Error marking medication missed:', error);
      res.status(500).json({ error: 'Failed to mark medication missed' });
    }
  });