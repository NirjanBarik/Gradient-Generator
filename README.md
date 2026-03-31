# Gradient-Generator


A simple, interactive web application that generates random linear gradient backgrounds. Users can customize the gradient by clicking buttons to generate new hex color codes and easily copy the resulting CSS code to their clipboard.

---

## 🚀 Features

* **Random Color Generation**: Click the primary buttons to generate a random hex color code for either side of the gradient.
* **Real-time Preview**: The background of the page updates instantly as you change the colors.
* **Click-to-Copy**: Click the code display box at the bottom to copy the `background-image` CSS property directly to your clipboard.
* **Responsive Design**: A centered, clean layout that adapts to different screen sizes.

---

## 🛠️ Technologies Used

* **HTML5**: Structure of the application.
* **CSS3**: Styling, including Flexbox for centering and linear gradients for the visual effects.
* **JavaScript (ES6+)**: Logic for generating random hex codes, DOM manipulation, and Clipboard API integration.

---

## 📂 File Structure

* `index.html`: Contains the buttons, the code display area, and links to assets.
* `style.css`: Defines the look and feel, including button hover effects and the initial gradient state.
* `script.js`: Handles the random color logic and the copy-to-clipboard functionality.

---

## 📝 How to Use

1.  **Open the Project**: Open `index.html` in any modern web browser.
2.  **Generate Colors**: 
    * Click the **left button** to change the starting color.
    * Click the **right button** to change the ending color.
3.  **View the Code**: The current CSS linear-gradient code is displayed in the semi-transparent box at the bottom.
4.  **Copy the Code**: Simply click inside the code box. An alert will confirm the text has been copied.

---

## 💡 Code Snippet (Hex Generation)

The core logic uses a simple loop to pick six random characters from a hex string:

```javascript
const hexvalues = () => {
    let myHex = "0123456789abcdef";
    let colors = "#";
    for(let i = 0; i < 6; i++){
        colors = colors + myHex[Math.floor(Math.random() * 16)];
    }
    return colors;
};
```
