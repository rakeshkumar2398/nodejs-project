const { execSync } = require('child_process');

describe('quote-cli', () => {
  it('should output a quote', () => {
    const output = execSync('node index.js').toString();
    expect(output).toMatch(/Believe in yourself!|Keep going, you're doing great!|Success is the sum of small efforts repeated day in and day out.|Stay positive, work hard, make it happen!/);
  });
});

