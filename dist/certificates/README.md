# 📂 How to add your certificate files here

## Step-by-step guide

### 1. Copy your certificate PDFs into THIS folder
Place your files here with these exact names:

```
portfolio2/
└── public/
    └── certificates/
        ├── aws-cloud-practitioner.pdf      ← AWS cert
        ├── nptel-cloud-computing.pdf       ← NPTEL cert
        ├── ibm-java-fullstack.pdf          ← IBM/Coursera cert
        └── simplilearn-ml.pdf              ← Simplilearn cert
```

You can also use image files (.jpg, .png) instead of PDF if needed.

### 2. That's it! No code changes needed.
The `Certificates.jsx` already points to these paths:
- `/certificates/aws-cloud-practitioner.pdf`
- `/certificates/nptel-cloud-computing.pdf`
- `/certificates/ibm-java-fullstack.pdf`
- `/certificates/simplilearn-ml.pdf`

### 3. How it works
- Files in `/public/` are served directly at the root URL by Vite
- When deployed, `https://yoursite.com/certificates/aws-cloud-practitioner.pdf` opens directly
- Clicking "View Certificate" opens the file in a **new browser tab** (full screen on desktop & mobile)

### 4. Want to rename your files?
If your file has a different name (e.g. `AWS_Certificate_2024.pdf`), 
update the `file` field in `Certificates.jsx`:

```js
file: '/certificates/AWS_Certificate_2024.pdf',
```

### 5. Push to GitHub
```bash
git add public/certificates/
git commit -m "Add certificate files"
git push
```
Done! Certificates are now permanent in your site.
