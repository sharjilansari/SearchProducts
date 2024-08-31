# searchProduct

searchProduct is a simple web application that allows users to search for products and display them in a responsive grid layout. The application is built with a Node.js backend using Express and MongoDB, and a frontend styled with Tailwind CSS.

## Features

- **Product Search:** Users can search for products by name, and the results are displayed dynamically.
- **Responsive Layout:** The product display grid adjusts to different screen sizes using Tailwind CSS.
- **Backend API:** The backend is built with Express and MongoDB, providing an API to fetch products from the database.
- **Axios for HTTP Requests:** The frontend uses Axios to make API requests to the backend.

## Installation

### Prerequisites

- **Node.js**: Make sure you have Node.js installed on your system.
- **MongoDB**: A running instance of MongoDB.

- **Clone the Repository**

```bash
git clone https://github.com/sharjilansari/SearchProducts.git
cd SearchProducts
```
- **Install Dependencies**
``` bash
npm install
```
This will install both the dependencies and devDependencies listed in package.json.

### Setup Environment Variables
- Create a .env file in the root of the project and add the following environment variables:

``` bash
MONGODB_URI=your_mongodb_connection_string
```
- Run the Application
``` bash
npm start
```
The server will start at http://localhost:3000.

### Usage
- **Run the Server**: Start the backend server using the command mentioned above.
- **Open in Browser**: Open index.html in your browser.
- **Search for Products**: Use the search bar to search for products by name. The results will be displayed dynamically.

### Tailwind CSS
Tailwind CSS is used for styling the frontend. The CSS is compiled and included in output.css. You can customize the styles by modifying the Tailwind configuration or by adding custom styles in the style.css file.

### API Endpoints
- **GET /product**: Fetches products from the database. Optionally, you can pass a productName query parameter to filter the results.

### Development
Running Tailwind in Watch Mode
To watch for changes and automatically build the Tailwind CSS, run:

```bash
npx tailwindcss -i ./input.css -o ./output.css --watch
```