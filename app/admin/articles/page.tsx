'use client'

import { useState, FormEvent, ChangeEvent } from 'react'
import { 
  Button, 
  TextField, 
  Typography, 
  Box, 
  Snackbar,
  Container,
  Paper
} from '@mui/material'
import { db } from '@/firebase-config'
import { collection, addDoc } from 'firebase/firestore'

interface FormData {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
}

interface ArticleDocument extends FormData {
  createdAt: Date;
}

const initialFormData: FormData = {
  id: '',
  title: '',
  content: '',
  imageUrl: ''
}

export default function AddArticlePage(): JSX.Element {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false)
  const [snackbarMessage, setSnackbarMessage] = useState<string>('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const articleData: ArticleDocument = {
        ...formData,
        createdAt: new Date()
      }
      
      await addDoc(collection(db, 'articles'), articleData)
      setSnackbarMessage('Article submitted successfully!')
      setOpenSnackbar(true)
      // Reset form
      setFormData(initialFormData)
    } catch (error) {
      console.error("Error adding document: ", error)
      setSnackbarMessage('Error submitting article. Please try again.')
      setOpenSnackbar(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSnackbarClose = (): void => {
    setOpenSnackbar(false)
  }

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Add New Article
        </Typography>
        <Box 
          component="form" 
          onSubmit={handleSubmit} 
          noValidate 
          sx={{ mt: 2 }}
        >
          <TextField
            fullWidth
            label="Article ID"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            margin="normal"
            multiline
            rows={4}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Image URL"
            name="imageUrl"
            type="url"
            value={formData.imageUrl}
            onChange={handleChange}
            required
            margin="normal"
            variant="outlined"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Article'}
          </Button>
        </Box>
      </Paper>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </Container>
  )
}