(async () => {
  try {
    const res = await fetch('http://localhost:5000/api/send-message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Test User', email: 'test@example.com', subject: 'Test', message: 'Hello from test script' })
    });
    const text = await res.text();
    console.log('Status:', res.status);
    console.log('Response:', text);
  } catch (err) {
    console.error('Request error:', err);
  }
})();
