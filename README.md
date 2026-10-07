# Gallery App

A simple JavaScript-based image gallery application where users can view different categories of wallpapers such as Nature, Animals, and Flowers.

## Features

* View wallpapers by category
* Nature, Animals, and Flowers categories
* Fetches image data from JSON files using the Fetch API
* Dynamically displays images using JavaScript
* Active category tracking using `data-*` attributes
* Responsive image grid layout using CSS Grid

## Technologies Used

* HTML
* CSS
* JavaScript
* Fetch API
* JSON

## How It Works

The application has three categories:

* Nature
* Animals
* Flowers

When a category is selected, JavaScript fetches the corresponding JSON file and dynamically renders the images inside the gallery.

For example:

```text
Nature → Nature.json → Fetch data → Display images
Animals → Animals.json → Fetch data → Display images
Flowers → Flowers.json → Fetch data → Display images
```

## Project Structure

```text
Gallery-App/
│
├── index.html
├── style.css
├── script.js
├── Nature.json
├── Animals.json
└── Flowers.json
```

## How to Run

1. Clone the repository.
2. Open the project in VS Code.
3. Run the project using a local server such as Live Server.
4. Select a category to view its wallpapers.

## Purpose

This project was created as part of my JavaScript learning practice to understand:

* DOM manipulation
* Event handling
* Fetch API
* Async/Await
* Working with JSON data
* Dynamic HTML rendering
* CSS Grid
* `data-*` attributes
