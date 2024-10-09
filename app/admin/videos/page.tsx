'use client'

import { useState, type FormEvent, type ChangeEvent } from 'react'
import { Button, TextField, Typography, Box, Snackbar } from '@mui/material'
import { db } from '@/firebase-config'
import { collection, addDoc } from 'firebase/firestore'

type VideoFormData = {
  id: string
  title: string
  videoUrl: string
  thumbnailUrl: string
}

type VideoDocument = VideoFormData & {
  createdAt: Date
}

const AddVideoPage = (): JSX.Element => {
  const [formData, setFormData] = useState<VideoFormData>({
    id: '',
    title: '',
    videoUrl: '',
    thumbnailUrl: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const videoData: VideoDocument = {
        ...formData,
        createdAt: new Date()
      }
      
      await addDoc(collection(db, 'videos'), videoData)
      setSnackbarMessage('Video submitted successfully!')
      setOpenSnackbar(true)
      // Reset form
      setFormData({
        id: '',
        title: '',
        videoUrl: '',
        thumbnailUrl: ''
      })
    } catch (error) {
      console.error("Error adding document: ", error)
      setSnackbarMessage('Error submitting video. Please try again.')
      setOpenSnackbar(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Add New Video
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Video ID"
          name="id"
          value={formData.id}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Video URL"
          name="videoUrl"
          type="url"
          value={formData.videoUrl}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Thumbnail URL"
          name="thumbnailUrl"
          type="url"
          value={formData.thumbnailUrl}
          onChange={handleChange}
          required
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isSubmitting}
          sx={{ mt: 2 }}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Video'}
        </Button>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        message={snackbarMessage}
      />
    </Box>
  )
}

export default AddVideoPage