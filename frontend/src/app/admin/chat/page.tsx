'use client';

import { useState, useEffect } from 'react';

interface ChatSession {
  userEmail: string;
  userName: string;
  joinedAt: string;
  agentJoined: boolean;
  messageCount: number;
}

interface Message {
  text: string;
  sender: 'user' | 'agent' | 'bot';
  agentName?: string;
  timestamp: string;
}

export default function AdminChatPage() {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [selectedSession, setSelectedSession] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [agentName, setAgentName] = useState('Sarah');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSessions();
    const interval = setInterval(fetchSessions, 5000); // Refresh every 5 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (selectedSession) {
      fetchMessages(selectedSession);
      const interval = setInterval(() => fetchMessages(selectedSession), 3000);
      return () => clearInterval(interval);
    }
  }, [selectedSession]);

  const fetchSessions = async () => {
    try {
      const response = await fetch('/api/chat-socket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'list-sessions' })
      });
      const data = await response.json();
      setSessions(data.sessions || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching sessions:', error);
      setLoading(false);
    }
  };

  const fetchMessages = async (userEmail: string) => {
    try {
      const response = await fetch('/api/chat-socket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'get-messages', userEmail })
      });
      const data = await response.json();
      setMessages(data.messages || []);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const joinChat = async (userEmail: string) => {
    try {
      await fetch('/api/chat-socket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          action: 'agent-join', 
          userEmail, 
          agentName 
        })
      });
      setSelectedSession(userEmail);
      fetchSessions(); // Refresh to show agent joined
    } catch (error) {
      console.error('Error joining chat:', error);
    }
  };

  const sendMessage = async () => {
    if (!newMessage.trim() || !selectedSession) return;

    try {
      await fetch('/api/chat-socket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'agent-message',
          userEmail: selectedSession,
          message: newMessage,
          agentName
        })
      });
      setNewMessage('');
      fetchMessages(selectedSession);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-synvra-blue mx-auto mb-4"></div>
          <p className="text-gray-600">Loading chat sessions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-synvra-blue text-white p-6">
            <h1 className="text-2xl font-bold">Synvra Live Chat Admin</h1>
            <p className="text-blue-100 mt-2">Manage customer chat sessions</p>
          </div>

          <div className="flex h-[600px]">
            {/* Sessions List */}
            <div className="w-1/3 border-r border-gray-200 bg-gray-50">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-semibold text-gray-800">Active Sessions ({sessions.length})</h2>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Your name (Agent)"
                    value={agentName}
                    onChange={(e) => setAgentName(e.target.value)}
                    className="w-full p-2 border rounded text-sm"
                  />
                </div>
              </div>

              <div className="overflow-y-auto h-full">
                {sessions.length === 0 ? (
                  <div className="p-4 text-center text-gray-500">
                    <p>No active chat sessions</p>
                    <p className="text-sm mt-1">Sessions will appear here when users request to speak with an agent</p>
                  </div>
                ) : (
                  sessions.map((session) => (
                    <div
                      key={session.userEmail}
                      className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${
                        selectedSession === session.userEmail ? 'bg-blue-50 border-l-4 border-l-synvra-blue' : ''
                      }`}
                      onClick={() => setSelectedSession(session.userEmail)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-gray-800">{session.userName}</h3>
                          <p className="text-sm text-gray-600">{session.userEmail}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date(session.joinedAt).toLocaleString()}
                          </p>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            session.agentJoined 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {session.agentJoined ? 'Agent Joined' : 'Waiting'}
                          </span>
                          <span className="text-xs text-gray-500 mt-1">
                            {session.messageCount} messages
                          </span>
                        </div>
                      </div>
                      {!session.agentJoined && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            joinChat(session.userEmail);
                          }}
                          className="mt-2 w-full bg-synvra-blue text-white py-1 px-3 rounded text-sm hover:bg-blue-700 transition-colors"
                        >
                          Join Chat
                        </button>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Chat Interface */}
            <div className="flex-1 flex flex-col">
              {selectedSession ? (
                <>
                  <div className="p-4 border-b border-gray-200 bg-white">
                    <h3 className="font-semibold text-gray-800">
                      Chat with {sessions.find(s => s.userEmail === selectedSession)?.userName}
                    </h3>
                    <p className="text-sm text-gray-600">{selectedSession}</p>
                  </div>

                  <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${message.sender === 'agent' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] p-3 rounded-lg text-sm ${
                            message.sender === 'user'
                              ? 'bg-gray-100 text-gray-800'
                              : message.sender === 'agent'
                              ? 'bg-synvra-blue text-white'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {message.agentName && message.sender === 'agent' && (
                            <div className="text-xs opacity-75 mb-1">
                              {message.agentName}
                            </div>
                          )}
                          <div className="whitespace-pre-wrap">{message.text}</div>
                          <div className="text-xs opacity-75 mt-1">
                            {new Date(message.timestamp).toLocaleTimeString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 border-t border-gray-200 bg-white">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-synvra-blue"
                        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      />
                      <button
                        onClick={sendMessage}
                        disabled={!newMessage.trim()}
                        className="bg-synvra-blue text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <p className="text-lg font-medium">Select a chat session</p>
                    <p className="text-sm mt-1">Choose a session from the left to start chatting</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 