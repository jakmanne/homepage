# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio/resume website built with React (Create React App). Content is fetched from a separate GitHub repository (`jakmanne/resumecontent`) with local fallback.

## Commands

```bash
npm start      # Development server on http://localhost:3000
npm run build  # Production build to /build folder
npm test       # Run tests in watch mode
```

## Architecture

### Data Flow
- **App.js** is the root component (class-based) that manages state
- On mount, fetches resume data from `https://raw.githubusercontent.com/jakmanne/resumecontent/master/resumeData.json`
- Falls back to local `src/resumeData.json` if fetch fails
- Passes data as props to child components

### Component Structure
All components are class-based and receive data via props from App.js:
- **Header** - Navigation, hero banner, social links
- **About** - Profile picture, bio, contact details
- **Resume** - Work history, education, skills with progress bars
- **Portfolio** - Project/blog cards
- **Footer** - Social links, credits
- **Contact, Testimonials** - Implemented but not currently used in App.js

### Styling
- Main CSS files in `/public/css/` (layout.css, default.css, media-queries.css)
- jQuery plugins in `/public/js/` for animations (flexslider, waypoints, magnific-popup)
- React styles in `src/App.css` and `src/index.css`

### Data Schema (resumeData.json)
```
main: { name, occupation, description, image, bio, email, phone, address, social[] }
resume: { skillmessage, education[], work[], skills[] }
portfolio: { projects[] }
testimonials: { testimonials[] }
```

## Key Patterns
- Conditional rendering: Components check `if(this.props.data)` before rendering
- Google Analytics tracking via react-ga (initialized in App.js)
- Mixed stack: React for UI, legacy jQuery plugins for interactions
