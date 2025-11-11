import React, { useState, useCallback, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { GiftedChat, IMessage, Bubble } from 'react-native-gifted-chat';
import AvatarBubble from './AvatarBubble';

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  //simulate user response
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hey! 👋 I’m Freddy!',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Freddy',
          avatar: '',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((newMessages: IMessage[] = []) => {
    setMessages(prev => GiftedChat.append(prev, newMessages));

    //simulate AI response
    setTimeout(() => {
      const aiMessage: IMessage = {
        _id: Math.random().toString(),
        text: "That's interesting! Tell me more 😄",
        createdAt: new Date(),
        user: { _id: 2, name: 'Freddy', avatar: '' },
      };
      setMessages(prev => GiftedChat.append(prev, [aiMessage]));
    }, 1000);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <AvatarBubble mood ="listening"/>
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => onSend(newMessages)}
        user={{ _id: 1 }}
        renderBubble={(props) => (
          <Bubble
            {...props}
            wrapperStyle={{
              right: { backgroundColor: '#007AFF' },
              left: { backgroundColor: '#E5E5EA' },
            }}
            textStyle={{
              right: { color: '#fff' },
              left: { color: '#000' },
            }}
          />
        )}
      />
    </View>
  );
};

export default ChatScreen;
