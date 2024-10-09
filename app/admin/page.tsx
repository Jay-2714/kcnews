'use client'

import React from 'react'
import { Typography, Box, Paper, Grid } from '@mui/material'
import { Article as ArticleIcon, VideoLibrary as VideoIcon } from '@mui/icons-material'
import Link from 'next/link'

export default function AdminDashboard() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Admin Dashboard
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Welcome to the मराठी जनतेचे कलियुग चक्र admin panel. Select an option below to manage content.
      </Typography>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'action.hover',
              },
            }}
            component={Link}
            href="/admin/articles"
          >
            <ArticleIcon sx={{ fontSize: 60, mb: 2, color: 'primary.main' }} />
            <Typography variant="h6">Manage Articles</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'action.hover',
              },
            }}
            component={Link}
            href="/admin/videos"
          >
            <VideoIcon sx={{ fontSize: 60, mb: 2, color: 'primary.main' }} />
            <Typography variant="h6">Manage Videos</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}