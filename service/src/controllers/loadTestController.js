import LoadTest from '../models/loadTest.js';
import runTest from '../utils/runTest.js';

export default (app) => {
  app.post('/create', async (req, res) => {
    const { name, users, duration, baseUrl, token } = req.body;
    const newTest = new LoadTest(name, users, duration);

    // Implement logic to save test configuration (e.g., database)
    // ... (Optional, if desired)

    const timestamp = new Date().toISOString().replace(/:/g, '-');
    const reportDir = path.join(__dirname, '../../report', timestamp);
    const reportPath = path.join(reportDir, `${name}.html`);

    try {
      await createReportDir(reportDir);

      await runTest({ ...newTest, output: reportPath, baseUrl, token });
      console.log(`Test ${name} completed successfully. Report saved to ${reportPath}`);
      res.json({ message: `Test ${name} created and executed successfully. Report saved to ${reportPath}` });
    } catch (error) {
      console.error(`Error running test ${name}:`, error);
      res.status(500).json({ message: `Error running test: ${error.message}` });
    }
  });

  async function createReportDir(dirPath) {
    const fs = require('fs').promises;
    try {
      await fs.mkdir(dirPath, { recursive: true });
    } catch (error) {
      console.error(`Error creating report directory:`, error);
    }
  }
};
