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


### Task 2: Rhombus Shape with Angle Control

- **Route**: `/shape`
- **Components**:
  - `Rhombus`: Displays the rhombus shape.
  - `Slider`: Controls the angle of the rhombus.
- **Features**:
  - Initial shape is a square.
  - Slider changes the angle of the rhombus from 90° to 180°.
  - Opposite sides have the same color, adjacent sides have different colors.
  - Final shape is a straight line when the slider is fully moved.

### Task 3: Disc Management with Drag-and-Drop

- **Route**: `/bin`
- **Components**:
  - `CreateBin`: Creates discs.
  - `DeleteBin`: Deletes discs.
  - `Disc`: Represents a disc that can be dragged and dropped.
- **Features**:
  - Create bin with button to add discs.
  - Delete bin with button to delete discs.
  - Drag-and-drop functionality to transfer discs between bins.
  - Discs change color when transferred to the other bin.
  - Uses the DND Kit for drag-and-drop functionality
  