export const getMedicationHistory = functions.https.onRequest(async (req, res) => {
    const { uid } = req.body;
  
    try {
      const prescriptionsRef = admin.firestore().collection('prescriptions').where('userId', '==', uid);
      const prescriptions = await prescriptionsRef.get();
  
      res.json(prescriptions.docs.map(doc => doc.data()));
    } catch (error) {
      console.error('Error fetching medication history:', error);
      res.status(500).json({ error: 'Failed to fetch medication history' });
    }
  });
  
  // Implement functions for adherence stats and side effect stats