
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface Message {
  type: 'user' | 'bot';
  content: string;
}

const initialMessages: Message[] = [
  {
    type: 'bot',
    content: "Hi! I'm here to help you with any questions you might have. How can I assist you today?"
  }
];

export const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputMessage, setInputMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      type: 'user',
      content: inputMessage
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simple bot response logic - this can be enhanced with AI integration later
    const botResponses: { [key: string]: string } = {
      'pricing': "Our pricing plans start at $9/month. You can find more details on our pricing page.",
      'contact': "You can reach our support team at support@example.com or through this chat.",
      'features': "We offer a wide range of features including AI-powered analytics, real-time collaboration, and more.",
      'default': "Thank you for your message. Let me help you with that. For specific inquiries, please include keywords like 'pricing', 'features', or 'contact'."
    };

    // Simulate typing delay
    setTimeout(() => {
      const lowercaseInput = inputMessage.toLowerCase();
      let botResponse = botResponses.default;
      
      Object.keys(botResponses).forEach(key => {
        if (lowercaseInput.includes(key)) {
          botResponse = botResponses[key];
        }
      });

      setMessages(prev => [...prev, {
        type: 'bot',
        content: botResponse
      }]);
    }, 1000);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          className="fixed bottom-4 right-4 rounded-full h-12 w-12 p-0"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px] p-0">
        <SheetHeader className="p-4 border-b">
          <div className="flex justify-between items-center">
            <SheetTitle>Support Chat</SheetTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </SheetHeader>
        
        <ScrollArea className="h-[calc(100vh-180px)] p-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`rounded-lg px-4 py-2 max-w-[80%] ${
                    message.type === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="p-4 border-t">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex gap-2"
          >
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button type="submit" size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
};
