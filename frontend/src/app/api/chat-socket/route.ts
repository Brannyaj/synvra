import { NextRequest } from 'next/server';

// Store active chat sessions
const activeSessions = new Map();

export async function GET(request: NextRequest) {
  // Simple endpoint to check if chat service is running
  return new Response(JSON.stringify({ 
    message: 'Chat service is running',
    activeSessions: activeSessions.size
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function POST(request: NextRequest) {
  try {
    const { action, userEmail, userName, message, agentName } = await request.json();
    
    switch (action) {
      case 'join':
        // User joins chat session
        activeSessions.set(userEmail, {
          userName,
          userEmail,
          joinedAt: new Date(),
          messages: [],
          agentJoined: false,
          agentName: null
        });
        
        return new Response(JSON.stringify({ 
          success: true,
          sessionId: userEmail 
        }));
        
      case 'send-message':
        // User sends a message
        const session = activeSessions.get(userEmail);
        if (session) {
          session.messages.push({
            text: message,
            sender: 'user',
            timestamp: new Date()
          });
        }
        
        return new Response(JSON.stringify({ 
          success: true 
        }));
        
      case 'agent-join':
        // Agent joins the chat
        const userSession = activeSessions.get(userEmail);
        if (userSession) {
          userSession.agentName = agentName;
          userSession.agentJoined = true;
          userSession.messages.push({
            text: `Hi! I'm ${agentName} from Synvra. I'm here to help with your project. What can I assist you with?`,
            sender: 'agent',
            agentName,
            timestamp: new Date()
          });
        }
        
        return new Response(JSON.stringify({ 
          success: true 
        }));
        
      case 'agent-message':
        // Agent sends a message
        const chatSession = activeSessions.get(userEmail);
        if (chatSession) {
          chatSession.messages.push({
            text: message,
            sender: 'agent',
            agentName,
            timestamp: new Date()
          });
        }
        
        return new Response(JSON.stringify({ 
          success: true 
        }));
        
      case 'get-messages':
        // Get recent messages for a session
        const currentSession = activeSessions.get(userEmail);
        return new Response(JSON.stringify({ 
          messages: currentSession?.messages || [],
          agentJoined: currentSession?.agentJoined || false,
          agentName: currentSession?.agentName
        }));
        
      case 'list-sessions':
        // List all active sessions (for admin)
        const sessions = Array.from(activeSessions.entries()).map(([email, session]) => ({
          userEmail: email,
          userName: session.userName,
          joinedAt: session.joinedAt,
          agentJoined: session.agentJoined,
          messageCount: session.messages.length
        }));
        
        return new Response(JSON.stringify({ 
          sessions 
        }));
        
      default:
        return new Response(JSON.stringify({ 
          error: 'Invalid action' 
        }), { status: 400 });
    }
    
  } catch (error) {
    console.error('Chat API error:', error);
    return new Response(JSON.stringify({ 
      error: 'Internal server error' 
    }), { status: 500 });
  }
} 