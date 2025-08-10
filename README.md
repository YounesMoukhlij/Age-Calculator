# Age Calculator

<div align="center">

[✅ Back to Web Roadmap Projects ✅](https://github.com/YounesMoukhlij/web-roadmap-projects)

![Age Calculator Demo](https://img.shields.io/badge/Status-Complete-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![CSS3](https://img.shields.io/badge/CSS3-Flexbox%20%26%20Grid-blue)
![Luxon](https://img.shields.io/badge/Luxon-Date%20Library-purple)

</div>

A modern, responsive age calculator web application that allows users to input their birthdate through a custom JavaScript datepicker and calculates their exact age using the Luxon library for precise date handling.

## 🚀 Features

### ✨ **Dual Input Methods**
- **Custom Datepicker**: Interactive calendar with month navigation
- **Manual Entry**: Direct typing in DD/MM/YYYY format
- **Input Validation**: Real-time validation for date format and validity

### 🎯 **Precise Calculations**
- **Luxon Integration**: Uses Luxon library for accurate date calculations
- **Real-time Results**: Instant age calculation as you select or type dates
- **Format Display**: Shows age in "X years Y months" format

### 🎨 **Modern UI/UX**
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Clean Interface**: Minimalist design with smooth interactions
- **Visual Feedback**: Hover effects, focus states, and today's date highlighting
- **Font Awesome Icons**: Professional calendar icon integration

### 📱 **Responsive Features**
- Mobile-first design approach
- Touch-friendly interface elements
- Adaptive layout for different screen sizes
- Optimized calendar grid for mobile devices

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Object-oriented programming with classes
- **Luxon**: Advanced date manipulation library
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Poppins font family for typography

## 📦 Dependencies

### External Libraries (CDN)
```html
<!-- Luxon Date Library -->
<script src="https://cdn.jsdelivr.net/npm/luxon@3.4.4/build/global/luxon.min.js"></script>

<!-- Font Awesome Icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- Google Fonts - Poppins -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser with JavaScript enabled
- Internet connection (for CDN resources)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YounesMoukhlij/Age-Calculator.git
   cd Age-Calculator
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   open index.html
   # or
   python -m http.server 8000  # For local server
   ```

## 💡 How to Use

### Method 1: Using the Datepicker
1. Click the calendar icon (📅) next to the input field
2. Navigate through months using the arrow buttons
3. Click on your birth date
4. Age will be calculated automatically

### Method 2: Manual Entry
1. Click in the input field
2. Type your birthdate in DD/MM/YYYY format (e.g., 21/11/1999)
3. Age calculates automatically when format is valid

### Method 3: Calculate Button
1. Enter date using either method above
2. Click the "Calculate" button for manual calculation

## 🏗️ Project Structure

```
Age-Calculator/
├── index.html          # Main HTML structure
├── style.css           # CSS styling and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

### Key Components

#### **HTML Structure**
- Semantic HTML5 markup
- Accessible form elements with proper labels
- Custom calendar dropdown structure

#### **CSS Features**
- CSS Grid for calendar layout (7×6 grid)
- Flexbox for responsive positioning
- CSS custom properties for consistent styling
- Smooth transitions and hover effects
- Mobile-responsive breakpoints

#### **JavaScript Architecture**
- **Class-based Design**: `calendarCalculator` class encapsulates all functionality
- **Event-driven Programming**: Handles clicks, input changes, and keyboard events
- **Date Validation**: Regular expression validation for DD/MM/YYYY format
- **Luxon Integration**: Advanced date calculations with timezone awareness

## ⚙️ Code Highlights

### Date Validation
```javascript
valideDate(date) {
    const formatt = /^\d{2}\/\d{2}\/\d{4}$/;
    return formatt.test(date);
}
```

### Luxon Age Calculation
```javascript
calculate() {
    const [day, month, year] = this.savedDate.split('/');
    const birthday = DateTime.fromObject({
        year: parseInt(year),
        month: parseInt(month),
        day: parseInt(day)
    });
    const now = DateTime.now();
    const diff = now.diff(birthday, ['years', 'months', 'days']);

    this.resultat.textContent =
        `${Math.floor(diff.years)} years ${Math.floor(diff.months % 12)} months`;
}
```

### Responsive Calendar Grid
```css
.calendar-days {
    display: grid;
    grid-template-columns: repeat(7, 3.2rem);
    font-weight: 600;
    cursor: pointer;
}
```

## 🎯 Learning Outcomes

This project demonstrates:

- **External Library Integration**: Using Luxon for professional date handling
- **Custom UI Components**: Building a datepicker from scratch
- **Input Validation**: Implementing robust form validation
- **Responsive Design**: Creating mobile-friendly interfaces
- **Event Handling**: Managing complex user interactions
- **Date Manipulation**: Advanced date calculations and formatting
- **Modern CSS**: Grid, Flexbox, and modern CSS features
- **ES6+ JavaScript**: Classes, arrow functions, and modern syntax

## 🌟 Key Features Implementation

### Custom Calendar
- Dynamic month/year navigation
- Previous/current/next month day display
- Today's date highlighting
- Click-to-select functionality

### Input Flexibility
- Real-time typing validation
- Format enforcement (DD/MM/YYYY)
- Calendar and manual input synchronization

### Professional Styling
- Card-based layout design
- Smooth animations and transitions
- Consistent color scheme
- Typography hierarchy with Poppins font

## 📱 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is part of the [roadmap.sh](https://roadmap.sh) web development learning path.

## 🙏 Acknowledgments

- **Project Inspiration**: [roadmap.sh Age Calculator Project](https://roadmap.sh/projects/age-calculator)
- **Luxon Library**: For reliable date manipulation
- **Font Awesome**: For beautiful icons
- **Google Fonts**: For the Poppins typography

---

<div align="center">

**Built with ❤️ by [Younes Moukhlij](https://github.com/YounesMoukhlij)**

[⭐ Star this repository if you found it helpful!](https://github.com/YounesMoukhlij/Age-Calculator)

</div>
