# मराठी जनतेचे कलियुग चक्र (KC News)

A modern Marathi news website built with Next.js, TypeScript, and Firebase.

## Features

### 🏠 Homepage
- Dynamic news articles fetched from Firebase Firestore
- Latest news vs older news toggle functionality
- Responsive three-column layout with sidebar ads
- YouTube video integration with custom player
- Optimized images using Next.js Image component

### 📱 Navigation
- Responsive navbar with hover effects
- Four main sections: Home, Awards, About, Contact
- Smooth page transitions using Next.js Link

### 🏆 Awards Page
- Showcase of achievements and recognitions
- Statistics and milestones
- Recognition highlights
- Future vision section

### ℹ️ About Page
- Mission and vision
- Website features overview
- Team goals and objectives
- Cultural preservation focus

### 📞 Contact Page
- Contact form with validation
- Social media links
- Contact information
- Additional service information

### 🎨 Design Features
- Custom Marathi fonts (Khand, Laila)
- Red and yellow color scheme
- Responsive design for all devices
- Smooth animations with Framer Motion
- Material-UI components integration

## Tech Stack

- **Framework**: Next.js 14.2.14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Firebase Firestore
- **Icons**: React Icons, Tabler Icons, Lucide React
- **Animations**: Framer Motion
- **Video**: React YouTube
- **UI Components**: Material-UI

## Installation and Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kcnews
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Firebase Configuration**
   - The Firebase configuration is already set up in `firebase-config.js`
   - Database: `kaliyug-chakra` Firestore project
   - Collection: `articles`

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## Project Structure

```
kcnews/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── awards/
│   │   └── page.tsx          # Awards page  
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── fonts/                # Custom fonts
│   ├── favicon.ico
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── components/
│   ├── ui/
│   │   └── floating-dock.tsx # Floating dock component
│   ├── footer.tsx            # Footer component
│   ├── navbar.tsx            # Navigation bar
│   ├── NewsArticle.tsx       # News article component
│   ├── sidebar.tsx           # Sidebar component
│   └── VideoPlayer.tsx       # Video player component
├── lib/
│   └── utils.ts              # Utility functions
├── firebase-config.js        # Firebase configuration
├── next.config.mjs           # Next.js configuration
├── package.json              # Dependencies
├── tailwind.config.ts        # Tailwind CSS config
└── tsconfig.json             # TypeScript config
```

## Firebase Data Structure

The application expects articles in Firestore with the following structure:

```javascript
{
  id: string,
  title: string,
  content: string,
  imageUrl: string,
  date: string, // Format: "YYYY-MM-DD"
  videoUrl: string, // YouTube URL
  thumbnailUrl?: string, // Optional
  createdAt: Timestamp // For sorting
}
```

## Features Completed

✅ **Homepage with News Feed**
- Dynamic article loading from Firebase
- Latest/Older news toggle
- Responsive layout with ads
- YouTube video integration
- Image optimization

✅ **Navigation System**
- Functional navbar with proper routing
- All page links working
- Smooth transitions

✅ **About Page**
- Mission and vision
- Features overview
- Goals and objectives

✅ **Awards Page**
- Achievement showcase
- Statistics display
- Recognition highlights

✅ **Contact Page**
- Contact form with validation
- Contact information
- Social media links

✅ **Technical Optimizations**
- ESLint errors resolved
- Next.js Image optimization
- Build warnings minimized
- Remote image patterns configured
- TypeScript type safety

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

The application supports all modern browsers and is fully responsive for:
- Desktop computers
- Tablets
- Mobile phones

## Contributing

This project follows standard Git workflows. Please ensure all builds pass before submitting changes.

## License

© 2024 मराठी जनतेचे कलियुग चक्र. All Rights Reserved.