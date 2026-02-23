import React, { useState } from 'react';
import { Box, IconButton, Fade, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

const AutoBot = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([{ text: '👋 Hi! How can I help you today?', bot: true }]);
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handleSend = () => {
        if (!input.trim()) return;
        setMessages([...messages, { text: input, bot: false }]);
        const response = getBotResponse(input);
        setTimeout(() => setMessages(prev => [...prev, { text: response, bot: true }]), 500);
        setInput('');
    };

    const getBotResponse = (msg) => {
        const lower = msg.toLowerCase();
        if (lower.includes('program')) return '🎓 We offer Barista, Nurse Assistant, Beauty, Mixology & more!';
        if (lower.includes('contact')) return '📞 Call +254732041103 or email tazalin.college@gmail.com';
        if (lower.includes('apply')) return '✨ Click the Apply button to get started!';
        return '💬 Ask about programs, contact info, or how to apply!';
    };

    return (
        <>
            <IconButton
                onClick={() => setOpen(!open)}
                sx={{
                    position: 'fixed',
                    bottom: 90,
                    right: 24,
                    zIndex: 1000,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: '#fff',
                    width: 56,
                    height: 56,
                    boxShadow: '0 4px 20px rgba(102, 126, 234, 0.4)',
                    '&:hover': {
                        transform: 'scale(1.1)',
                        boxShadow: '0 6px 30px rgba(102, 126, 234, 0.6)',
                    },
                }}
            >
                {open ? <CloseIcon /> : <ChatIcon />}
            </IconButton>

            <Fade in={open}>
                <Box
                    sx={{
                        position: 'fixed',
                        bottom: 160,
                        right: 24,
                        width: 320,
                        height: 400,
                        background: '#fff',
                        borderRadius: '16px',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                        zIndex: 999,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Box sx={{ p: 2, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '16px 16px 0 0' }}>
                        <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>Tazalin Assistant</Typography>
                    </Box>
                    <Box sx={{ flex: 1, overflowY: 'auto', p: 2 }}>
                        {messages.map((msg, i) => (
                            <Box key={i} sx={{ mb: 1, textAlign: msg.bot ? 'left' : 'right' }}>
                                <Typography
                                    sx={{
                                        display: 'inline-block',
                                        p: 1.5,
                                        borderRadius: 2,
                                        maxWidth: '80%',
                                        background: msg.bot ? '#f0f0f0' : '#667eea',
                                        color: msg.bot ? '#333' : '#fff',
                                    }}
                                >
                                    {msg.text}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                    <Box sx={{ p: 2, display: 'flex', gap: 1 }}>
                        <TextField
                            size="small"
                            fullWidth
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Type a message..."
                        />
                        <IconButton onClick={handleSend} sx={{ background: '#667eea', color: '#fff', '&:hover': { background: '#764ba2' } }}>
                            <SendIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Fade>
        </>
    );
};

export default AutoBot;
