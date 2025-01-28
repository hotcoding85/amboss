// pages/api/proxy.js

export default async function handler(req: any, res: any) {
    const response = await fetch('https://api.amboss.space/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any necessary authentication headers here
      },
      body: JSON.stringify(req.body), // Forward the incoming body from the client
    });
  
    const data = await response.json();
    res.status(response.status).json(data); // Return the data from the API response
  }
  