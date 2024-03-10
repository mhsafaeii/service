import { run } from 'k6';
import {homePage} from '../scenarios/home.js';
//const k6 = require('../../node_modules/k6/package.json');



async function runTest(testConfig) {
  const { name, users, duration } = testConfig;
  const options = {
    vus: users,
    duration: duration,
  };

  try {
    run(name, options);
    console.log(`Test ${name} completed successfully.`);
  } catch (error) {
    console.error(`Error running test ${name}:`, error);
  }
}

export default runTest;
