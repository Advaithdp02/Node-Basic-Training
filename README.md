# Node-Basic-Training


This is a simple Node.js script that demonstrates basic MongoDB operations using Mongoose. It connects to a local MongoDB database, inserts a list of student records, and displays them in both unsorted and sorted formats.

## Features

- Connects to MongoDB using Mongoose
- Defines a `Student` schema with fields: `name`, `age`, and `marks`
- Inserts 20 predefined student records
- Displays:
  - All students (unsorted)
  - Students sorted by marks in descending order

## Prerequisites

Before running this script, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (running locally)
- NPM (comes with Node.js)

## Installation & Usage

1. **Clone the repository or download the script**

2. **Navigate to the project directory**

```bash
cd your-folder-name
```
3. Install dependencies

```bash

npm install mongoose

```
```bash

node insertAndDisplayStudents.js
```
Expected Output 

Confirmation of MongoDB connection

Insertion of student data

List of all students (unsorted)

List of all students sorted by marks (highest to lowest)

