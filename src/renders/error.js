// Error route function
const error = async (req, res) => {
  try {
    res.render('error', {
      pageInfo: {
        manifest: '../manifest.json',
        style: {
          pageStyle: 'error.css',
        },
        scripts: {
          script: '/js/script.js',
        },
        PageTitle: 'Page Not Found | PhotoPaint',
      },
    })
  } catch (err) {
    console.log(err)
  }
}

// Export route
module.exports = { error }