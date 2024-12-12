'use client'
import React from 'react';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa'; // Import icons
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import { blue, red, green } from '@mui/material/colors';

const notices = [
  {
    id: 1,
    title: 'Meeting Reminder',
    description: 'Don\'t forget the meeting scheduled for tomorrow at 10 AM. Please be on time.',
    date: '2024-12-11',
  },
  {
    id: 2,
    title: 'System Maintenance',
    description: 'System maintenance will be performed this weekend. Expect some downtime.',
    date: '2024-12-12',
  },
  {
    id: 3,
    title: 'Holiday Announcement',
    description: 'We are closed for the holidays from December 24 to January 2.',
    date: '2024-12-09',
  },
];

const NoticeCard = ({ title, description, date, onEdit, onDelete, onView }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 2,
      backgroundColor: '#f0f4f8',
      transition: 'background-color 0.3s', 
      '&:hover': {
        backgroundColor: '#e0e7ed', // Hover effect color
      },
    }}
  >
    <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="caption" color="text.secondary" mt={1}>
          {date}
        </Typography>
      </Box>
      <Box>
        <IconButton onClick={onView} sx={{ color: green[500], marginLeft: 1 }}>
          <FaEye />
        </IconButton>
        <IconButton onClick={onEdit} sx={{ color: blue[500], marginLeft: 1 }}>
          <FaEdit />
        </IconButton>
        <IconButton onClick={onDelete} sx={{ color: red[500], marginLeft: 1 }}>
          <FaTrash />
        </IconButton>
      </Box>
    </CardContent>
  </Card>
);

const NoticeBoard = () => (
  <Box sx={{ padding: 2 }}>
    <Typography variant="h4" gutterBottom>
      Notice Board
    </Typography>
    {notices.map((notice) => (
      <NoticeCard
        key={notice.id}
        title={notice.title}
        description={notice.description}
        date={notice.date}
        onEdit={() => console.log('Edit', notice.id)}
        onDelete={() => console.log('Delete', notice.id)}
        onView={() => console.log('View', notice.id)}
      />
    ))}
  </Box>
);

export default NoticeBoard;
