# Express Timestamp Task

This is a simple Express application that generates a timestamp, saves it to a text file, and provides a basic web interface to view the generated timestamp. Additionally, it exposes an endpoint to retrieve a list of text files saved in a specific directory.

## Getting Started

# Task1 Node.js

Find the code and documentation in the [Task1NodeJs GitHub Repository](https://github.com/Chandruvijayakumar/Task1NodeJs).

1. ## Install Dependencies:
   ```bash
   npm init Yes
   ```

2. ## Run the Server

**To start the server, run the following command in your terminal:**
   ```bash
   npm start
   ```
## Usage

1. **Generate Timestamp**

   Visit the main page at [http://localhost:4000/](http://localhost:4000/) to generate a timestamp. The timestamp will be displayed on the web page, and a corresponding text file will be saved in the "TimeStamp" directory. The file name will be in the format `dd-mm-yyyy HH-mm-ss.txt`.

   **Example:**
   - Web page: [http://localhost:4000/](http://localhost:4000/)
   - Text file: `TimeStamp/01-03-2024 12-30-45.txt`

2. **View Text Files**

   Access the [http://localhost:4000/getTextFiles](http://localhost:4000/getTextFiles) endpoint to retrieve a list of text files saved in the "TimeStamp" directory. The response will be a JSON array containing the names of the text files.

   **Example:**
   ```json
   ["01-03-2024 12-30-45.txt", "28-02-2024 15-20-10.txt", "27-02-2024 09-05-30.txt"]
   ```

   
## Project Structure

- **index.js:** Main file containing the Express server setup and routes.
- **TimeStamp/:** Directory where text files are saved.
- **public/:** Directory for static files (not used in the current implementation).
- **README.md:** Documentation file.

## Dependencies

- **Express:** Fast, unopinionated, minimalist web framework for Node.js.
- **date-fns:** Modern JavaScript date utility library.

## Contributing

Feel free to contribute to the project by opening issues or creating pull requests. Your feedback and contributions are highly appreciated.

## Rendering Deploy

[**Task1 Node.js on Render**](https://task1nodejs.onrender.com)

This link will take you to the deployed version of the project.


## License

This project is licensed under the [MIT License](LICENSE).

## Feedback

If you have any feedback, suggestions, or encounter issues with the project, feel free to open an issue [here](https://github.com/Chandruvijayakumar/Task1NodeJs/issues). Your feedback is valuable, and we appreciate your contributions to make this project better.

Thank you for your support!

