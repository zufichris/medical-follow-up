export const getPatientProfile = functions.https.onRequest(async (req, res) => {
    const { uid } = req.body;
  
    try {
      const user = await admin.auth().getUser(uid);
      const patientRef = admin.firestore().collection('patients').doc(uid);
      const patientData = await patientRef.get();
  
      res.json({ user, patientData });
    } catch (error) {
      console.error('Error fetching patient profile:', error);
      res.status(500).json({ error: 'Failed to fetch patient profile' });
    }
  });
  
  export const updatePatientProfile = functions.https.onRequest(async (req, res) => {
    const { uid, updatedData } = req.body;
  
    try {
      const patientRef = admin.firestore().collection('patients').doc(uid);
      await patientRef.update(updatedData);
  
      res.json({ message: 'Patient profile updated successfully' });
    } catch (error) {
      console.error('Error updating patient profile:', error);
      res.status(500).json({ error: 'Failed to update patient profile' });
    }
  });