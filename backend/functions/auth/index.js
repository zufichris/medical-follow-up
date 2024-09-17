
export const login = functions.https.onRequest(async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const userRecord = await admin.auth().createUserWithEmailAndPassword(email, password);
  
      // Generate a custom token for the user
      const token = await admin.auth().createCustomToken(userRecord.uid);
  
      res.json({ token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  exports.register = functions.https.onRequest(async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const userRecord = await admin.auth().createUserWithEmailAndPassword(email, password);
  
      res.json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });