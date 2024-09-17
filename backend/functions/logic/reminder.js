export const generateReminders = functions.pubsub.schedule('*/10 * * * *').onRun(async (context) => {
    try {
      const prescriptions = await admin.firestore().collection('prescriptions').get();
  
      prescriptions.forEach(doc => {
        const prescriptionData = doc.data();
        // Generate reminders based on prescription data
        // ...
      });
    } catch (error) {
      console.error('Error generating reminders:', error);
    }
  });