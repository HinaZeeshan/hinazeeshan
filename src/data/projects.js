const projects = [
  {
    id: 1,
    title: 'Autonomous n8n Multi-Branch RAG Pipeline',
    description: 'Enterprise workflow execution architecture in n8n featuring Intent Classification router, Vector Search, Grounded Answer generation, Order lookup, Lead capture to Airtable, and automated Slack escalation alerts.',
    status: 'Live',
    metrics: { executionTime: '4.75s', successRate: '99.8%', nodesAutomated: '24' },
    tags: ['n8n', 'Vector Search', 'Airtable', 'Slack Webhooks', 'Router'],
    featured: true,
    image: '/images/project-n8n-rag-workflow.png',
    jsonSnippet: `{
  "execution_id": "#409",
  "status": "Succeeded",
  "latency": "4.753s",
  "branches": ["RAG", "Order Lookup", "Lead Capture", "Escalation"]
}`,
  },
  {
    id: 2,
    title: 'WhatsApp AI Customer & Sales Agent',
    description: 'Automated conversational agent on WhatsApp (+1 555-648-8884) powered by Meta Cloud API and webhooks. Handles instant grocery order confirmations, dynamic delivery tracking, return policy validation (7-day rule), and team escalation.',
    status: 'Live',
    metrics: { conversionRate: '34%', leadsProcessed: '8,500+', avgResponse: '800ms' },
    tags: ['WhatsApp API', 'OpenAI', 'Meta Cloud API', 'Order Automation'],
    featured: false,
    image: '/images/project-whatsapp-sales-agent.png',
    jsonSnippet: `{
  "channel": "whatsapp_business",
  "order_status": "confirmed",
  "policy_check": "7_days_return_window",
  "escalation": "team_member_connected"
}`,
  },
  {
    id: 3,
    title: 'AI Voice Appointment Scheduler',
    description: 'Complete n8n workflow handling calendar availability checks, appointment scheduling, cancellation, and updates — all powered by AI agents with Google Calendar and Google Sheets integration.',
    status: 'Live',
    metrics: { appointmentsBooked: '12K+', noShowReduction: '45%', timesSaved: '200hrs/mo' },
    tags: ['n8n', 'VAPI', 'Google Calendar', 'Google Sheets'],
    featured: false,
    image: '/images/project-appointment-scheduler.png',
    jsonSnippet: `{
  "agent": "appointment-scheduler",
  "status": "active",
  "success_rate": "97.3%",
  "avg_call_duration": "2m 34s"
}`,
  },
  {
    id: 4,
    title: 'AI Reel & Poster Generator',
    description: 'Automated content creation pipeline using AI agents, OpenAI, and video generation APIs — generates reels, uploads to YouTube Shorts, and tracks everything in Google Sheets.',
    status: 'Live',
    metrics: { videosGenerated: '5K+', uploadSuccess: '99.2%', timeSaved: '150hrs/mo' },
    tags: ['n8n', 'OpenAI', 'YouTube API', 'AI Agent'],
    featured: false,
    image: '/images/project-ai-reel-generator.png',
    jsonSnippet: `{
  "pipeline": "content-generator",
  "videos_created": 5247,
  "auto_upload": true,
  "platform": "youtube_shorts"
}`,
  },
  {
    id: 5,
    title: 'AI Restaurant Chatbot with RAG',
    description: 'Intelligent chatbot for PC Lahore Restaurant built with Google Gemini, Supabase Vector Store, and RAG — embedded document knowledge with real-time chat interface.',
    status: 'Live',
    metrics: { queriesHandled: '50K+', accuracy: '96.1%', csat: '4.7/5' },
    tags: ['Supabase', 'Google Gemini', 'RAG', 'Vector Store'],
    featured: false,
    image: '/images/project-chatbot.png',
    jsonSnippet: `{
  "chatbot": "restaurant-ai",
  "model": "gemini",
  "vector_store": "supabase",
  "stars": 193342
}`,
  },
];

export default projects;
