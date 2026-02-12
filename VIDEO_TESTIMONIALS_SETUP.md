# Video Testimonials Setup Guide

## 📹 Adding Your Video Testimonials

### Step 1: Prepare Your Videos
Place your 2 video testimonial files in the `/public/videos/` folder with these names:
- `testimonial-1.mp4` (or .webm, .mov)
- `testimonial-2.mp4` (or .webm, .mov)

### Step 2: Update Client Information
Edit `/components/Testimonials.tsx` and update the testimonials array (lines 16-37) with actual client details:

```typescript
const testimonials: Testimonial[] = [
    {
        id: "testimonial-1",
        clientName: "Actual Client Name",
        company: "Client Company Name",
        position: "CEO / Managing Director",
        videoUrl: "/videos/testimonial-1.mp4",
        thumbnail: "/images/testimonial-1-thumb.jpg", // Optional
        quote: "Actual testimonial quote from the client"
    },
    {
        id: "testimonial-2",
        clientName: "Second Client Name",
        company: "Second Company Name",
        position: "Project Manager",
        videoUrl: "/videos/testimonial-2.mp4",
        thumbnail: "/images/testimonial-2-thumb.jpg", // Optional
        quote: "Second testimonial quote"
    }
]
```

### Step 3: Optional - Add Video Thumbnails
For better UX, create thumbnail images (screenshots from videos) and place them in `/public/images/`:
- `testimonial-1-thumb.jpg`
- `testimonial-2-thumb.jpg`

### Alternative: YouTube/Vimeo Videos
If your videos are hosted on YouTube or Vimeo, you can use embed URLs instead. Let me know if you need help with this approach.

## 🎨 Features Included
- ✅ Video play/pause controls
- ✅ Responsive 2-column grid layout
- ✅ Client information cards
- ✅ Trust indicators (100+ clients, 500+ projects, 15+ years)
- ✅ Smooth animations and hover effects
- ✅ Mobile-friendly design

## 📝 Next Steps
1. Copy your video files to `/public/videos/`
2. Update client names and quotes in the component
3. Test locally with `npm run dev`
4. Deploy to Vercel
