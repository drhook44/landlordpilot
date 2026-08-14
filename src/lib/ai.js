import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function getRentRecommendation(propertyDetails, marketData) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: 'You are a real estate market analyst. Given property details and local market data, recommend an optimal rent price. Respond with JSON: { "recommendedRent": number, "range": { "min": number, "max": number }, "confidence": "low"|"medium"|"high", "reasoning": "string" }',
      },
      {
        role: 'user',
        content: JSON.stringify({ propertyDetails, marketData }),
      },
    ],
    response_format: { type: 'json_object' },
    temperature: 0.3,
  });

  return JSON.parse(response.choices[0].message.content);
}

export async function analyzeMaintenanceUrgency(description) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: 'You are a maintenance expert. Analyze the urgency of a maintenance request. Respond with JSON: { "priority": "low"|"medium"|"high"|"urgent", "estimatedCostRange": { "min": number, "max": number }, "recommendedAction": "string", "shouldEmergencyContact": boolean }',
      },
      {
        role: 'user',
        content: description,
      },
    ],
    response_format: { type: 'json_object' },
    temperature: 0.3,
  });

  return JSON.parse(response.choices[0].message.content);
}

export async function screenTenant(applicationData) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: 'You are a tenant screening specialist. Analyze the applicant data and provide a risk assessment. Respond with JSON: { "riskScore": number (0-100, higher = riskier), "redFlags": string[], "greenFlags": string[], "recommendation": "approve"|"conditional"|"reject", "reasoning": "string" }',
      },
      {
        role: 'user',
        content: JSON.stringify(applicationData),
      },
    ],
    response_format: { type: 'json_object' },
    temperature: 0.2,
  });

  return JSON.parse(response.choices[0].message.content);
}

export async function generateInsights(portfolioData) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: 'You are a property management analyst. Analyze the portfolio data and provide actionable insights. Respond with JSON: { "insights": { "summary": "string", "occupancyTrend": "up"|"down"|"stable", "rentCollectionHealth": "good"|"fair"|"poor", "maintenanceAlerts": string[], "recommendations": string[] } }',
      },
      {
        role: 'user',
        content: JSON.stringify(portfolioData),
      },
    ],
    response_format: { type: 'json_object' },
    temperature: 0.3,
  });

  return JSON.parse(response.choices[0].message.content);
}