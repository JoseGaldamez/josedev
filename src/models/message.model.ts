export interface Message {
    id: string;
    user: string;
    message: string;
}

export interface MessageAIChat {
    id: string;
    role: 'user' | 'assistant' | 'system';
    content: string;
}
