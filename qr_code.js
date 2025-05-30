import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
import { writeFile } from 'fs/promises';

inquirer
  .prompt([
    {
      message: "Enter URL",
      name: "URL"
    },
  ])
  .then(async (answers) => {
    const URL = answers.URL;

    // Create QR code image
    const qr_svg = qr.image(URL);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    // Write URL to text file using promises
    try {
      await writeFile("qr_img.txt", URL);
      console.log("QR code image and text file created successfully.");
    } catch (err) {
      console.error("Error writing to file:", err);
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment.");
    } else {
      console.error("Something went wrong:", error);
    }
  });
