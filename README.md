## Project Setup

1. Clone the repository
    

2. Install dependencies
    ```
    npm install
    ```

3. Run the development server
    ```
    npm run dev
    ```

4. Open `http://localhost:3000` in your browser to see the application.

## Project Structure

- **pages/**: Contains the main pages for the application.
- **components/**: Contains the reusable components used in the pages.
- **styles/**: Contains the global styles.

## Tasks

### Task 1: Guess the Dog Breed Game

- **Route**: `/dog`
- **Components**:
  - `StartScreenComponent`: User enters their name.
  - `GameScreen`: Displays a dog image and four options for the breed.
- **API**: Uses the Dog CEO API to fetch dog images and breed information.
- **Features**:
  - Start screen for entering the name.
  - Game screen with dog image and breed options.
  - Score counter that increments for correct answers.
  - Result screen when the user selects a wrong answer.
