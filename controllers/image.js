// controllers/uploadController.mjs

// Handle image upload
export const uploadImage = (req, res) => {
    try {
      if (req.file) {
        res.json({
          message: 'File uploaded successfully!',
          file: req.file.filename,
        });
      } else {
        res.status(400).json({ message: 'No file uploaded!' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to upload image.' });
    }
  };
  