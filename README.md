# Coffee Creations - Find the most popular coffee recipes

## Project Discription
Coffee Creations is a responsive full-stack website where users can explore and recreate their favorite coffee recipes, inspired by popular coffee shops like Starbucks. The platform offers a variety of coffee recipes and detailed instructions for creating delicious coffee drinks. Users can dive into the fascinating journey of coffee from planting to brewing and enjoy a visually engaging experience.

## Links
**Demo**: [Live Site](https://coffee-creations.vercel.app/)

![Homepage](public/Media/Home%20page.png)
![Recipe Page](public/Media/Recipes%20page.png)

## Key Features

1. **Responsive Design**: The website is fully responsive and optimized for both desktop and mobile devices, ensuring a seamless user experience across different platforms.

2. **Interactive Homepage**: The homepage greets users with an animated, visually appealing layout using GSAP for smooth animations and transitions, creating an engaging first impression.

3. **Coffee Journey Section**: Users can explore the complete journey of coffee production, from planting to brewing. The journey section uses scroll-triggered animations to bring this fascinating process to life.

4. **Recipe Discovery**: Users can browse a variety of coffee recipes, each with detailed instructions, ingredients, and preparation times. Each recipe page adapts to the screen size and includes an elegant display of images and information.

5. **Dynamic Data Fetching**: Recipes and coffee data are dynamically fetched from the database, ensuring the most up-to-date content for users. The backend integrates with MongoDB, utilizing a Mongoose schema for data management.

6. **Category and Pagination**: The recipes are categorized, allowing users to filter by type (e.g., iced beverages). Pagination is also implemented to manage large datasets effectively.

7. **API Integration**: The project includes an API for coffee recipes that allows querying by various parameters such as recipe name, category, and pagination options.

8. **Redux Toolkit for State Management**: The project uses Redux Toolkit to handle the global state, making it easier to manage and update the app's state as users interact with different features.

## Unique Aspects

- **GSAP Animations**: The use of GSAP and ScrollTrigger for smooth and professional animations throughout the site enhances the overall user experience.
  
- **Coffee Production Journey**: The detailed journey section is a unique feature that educates users on the coffee production process through visually engaging images and animations.

- **Recipe Schema**: Recipes are stored in MongoDB using a custom Mongoose schema, ensuring structured and validated data. The schema includes instructions, ingredients, preparation time, and more.

- **Custom Components**: Reusable components such as `Button`, `PrepTime`, and `Pagination` make the development process more efficient and help maintain consistency across the site.

## Technologies Used

- **Frontend**: React, Next.js, Tailwind CSS, GSAP, Daisy UI
- **Backend**: MongoDB, Mongoose
- **State Management**: Redux Toolkit


https://github.com/user-attachments/assets/d2c672c4-d1a9-447a-b05a-35b469930296


https://github.com/user-attachments/assets/b98f61f5-bfb0-4649-ac7d-e7b471d4a257


