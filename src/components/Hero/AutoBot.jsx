import React, { useState, useEffect } from 'react';
import { Box, Button, Fade, Typography, IconButton, TextField, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

const AutoBot = () => {
    const [visible, setVisible] = useState(true);
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const messageQueue = [
            "👋 Hi there! Welcome to Tazalin College.",
            "✨ Explore our amazing programs and find the right fit for you.",
            "🌟 Check out our Testimonials to see what our students are saying!",
            "📞 Need help? Feel free to contact us anytime.",
            "🎓 Want to apply? Click 'Apply Now' below!"
        ];

        const timer = setInterval(() => {
            if (messageQueue.length > 0) {
                setMessages((prev) => [...prev, messageQueue.shift()]);
            } else {
                clearInterval(timer);
            }
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    const handleNavigation = (path) => {
        navigate(path);
        setVisible(false);
    };

    const handleClose = () => {
        setVisible(false);
    };

    const handleReopen = () => {
        setVisible(true);
        setMessages([]);
        const messageQueue = [
            "👋 Hi there! Welcome back to Tazalin College.",
            "✨ Explore our amazing programs and find the right fit for you.",
            "🌟 Check out our Testimonials to see what our students are saying!",
            "📞 Need help? Feel free to contact us anytime.",
            "🎓 Want to apply? Click 'Apply Now' below!"
        ];
        const timer = setInterval(() => {
            if (messageQueue.length > 0) {
                setMessages((prev) => [...prev, messageQueue.shift()]);
            } else {
                clearInterval(timer);
            }
        }, 3000);
    };

    const handleSendMessage = () => {
        if (userInput.trim() !== '') {
            setMessages((prev) => [...prev, `You: ${userInput}`]);
            setUserInput('');
            setIsTyping(true);
            setTimeout(() => {
                const botResponse = getBotResponse(userInput);
                setMessages((prev) => [...prev, botResponse]);
                setIsTyping(false);
                setShowFeedback(true);
            }, 1000);
        }
    };

    const getBotResponse = (input) => {
        if (input.toLowerCase().includes('programs')) {
            return "We offer various programs including Barista, Nurse Assistant, Beauty, and Mixology!";
        } else if (input.toLowerCase().includes('testimonials')) {
            return "Our students love their experiences here! Check out our Testimonials page.";
        } else if (input.toLowerCase().includes('contact')) {
            return "You can contact us via the Contact Us page or call us directly!";
        } else {
            return "I'm here to help! You can ask about our programs or testimonials.";
        }
    };

    const handleQuickReply = (message) => {
        setUserInput(message);
        handleSendMessage();
    };

    const handleFeedback = (isHelpful) => {
        setShowFeedback(false);
        alert(isHelpful ? 'Thank you for your feedback!' : 'Sorry to hear that! We will improve.');
    };

    return (
        <Fade in={visible} timeout={500}>
            <Box
                sx={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    backgroundColor: '#f5f5f5',
                    boxShadow: 3,
                    borderRadius: '16px',
                    padding: '16px',
                    width: '300px',
                    zIndex: 1000,
                    border: '2px solid #030e73',
                }}
            >
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#030e73' }}>
                        AutoBot
                    </Typography>
                    <IconButton onClick={handleClose}>
                        <CloseIcon sx={{ color: '#030e73' }} />
                    </IconButton>
                </Box>
                <Box sx={{ maxHeight: '200px', overflowY: 'auto', marginBottom: 2 }}>
                    {messages.map((message, index) => (
                        <Typography key={index} variant="body2" sx={{ marginBottom: 1, color: '#333' }}>
                            {message}
                        </Typography>
                    ))}
                    {isTyping && (
                        <Box display="flex" alignItems="center">
                            <CircularProgress size={20} sx={{ marginRight: 1 }} />
                            <Typography variant="body2">...</Typography>
                        </Box>
                    )}
                </Box>
                <TextField
                    variant="outlined"
                    placeholder="Type your message..."
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleSendMessage();
                        }
                    }}
                    sx={{
                        marginBottom: 1,
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#030e73',
                            },
                            '&:hover fieldset': {
                                borderColor: '#030e73',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#030e73',
                            },
                        },
                    }}
                    fullWidth
                />
                <Button
                    variant="contained"
                    sx={{ backgroundColor: '#030e73', '&:hover': { backgroundColor: '#002a5c' } }}
                    onClick={handleSendMessage}
                    fullWidth
                >
                    Send
                </Button>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: '#030e73', '&:hover': { backgroundColor: '#002a5c' } }}
                        size="small"
                        onClick={() => handleQuickReply('What programs do you offer?')}
                    >
                        Programs
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: '#030e73', '&:hover': { backgroundColor: '#002a5c' } }}
                        size="small"
                        onClick={() => handleQuickReply('Show me the testimonials.')}
                    >
                        Testimonials
                    </Button>
                </Box>
                {showFeedback && (
                    <Box sx={{ mt: 1 }}>
                        <Typography variant="body2">Was this helpful?</Typography>
                        <Button variant="contained" sx={{ backgroundColor: '#030e73' }} size="small" onClick={() => handleFeedback(true)}>👍</Button>
                        <Button variant="contained" sx={{ backgroundColor: '#030e73' }} size="small" onClick={() => handleFeedback(false)}>👎</Button>
                    </Box>
                )}
                <Button
                    variant="contained"
                    sx={{ backgroundColor: '#030e73', '&:hover': { backgroundColor: '#002a5c' }, mb: 1 }}
                    onClick={() => handleNavigation('/programs')}
                    fullWidth
                >
                    Explore Programs
                </Button>
                <Button
                    variant="contained"
                    sx={{ backgroundColor: '#030e73', '&:hover': { backgroundColor: '#002a5c' }, mb: 1 }}
                    onClick={() => handleNavigation('/testimonials')}
                    fullWidth
                >
                    View Testimonials
                </Button>
                <Button
                    variant="contained"
                    sx={{ backgroundColor: '#030e73', '&:hover': { backgroundColor: '#002a5c' }, mb: 1 }}
                    onClick={() => handleNavigation('/contact')}
                    fullWidth
                >
                    Contact Us
                </Button>
                <Button
                    variant="outlined"
                    sx={{ borderColor: '#030e73', color: '#030e73', '&:hover': { borderColor: '#002a5c' } }}
                    onClick={handleReopen}
                    fullWidth
                >
                    Reopen Chat
                </Button>
            </Box>
        </Fade>
    );
};

export default AutoBot;
