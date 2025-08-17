# Tweeter - React & Vite

This is a Twitter-like application built with React and Vite, featuring user authentication, infinite scrolling, and a simple UI.

## Features

* **User Authentication:** Secure user login and signup functionality using Supabase.
* **Infinite Scrolling:** Efficiently load tweets in chunks as the user scrolls down the page.
* **User Profiles:** A dedicated page to view and change your username.
* **Persistent Data:** Tweets and user data are saved on a Supabase backend.
* **Deployment:** The application is configured for easy deployment to GitHub Pages.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

* Node.js (LTS version recommended)
* npm (comes with Node.js)
* A Supabase project with a `Tweets` table configured with RLS policies.

### Installation

1.  Clone this repository:
    ```bash
    git clone [https://github.com/gabrielab5/Tweeter-2.0.git](https://github.com/gabrielab5/Tweeter-2.0.git)
    cd Tweeter-2.0
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Configuration

Create a file named `.env.local` in the root of your project and add your Supabase credentials:

```env
VITE_SUPABASE_URL="YOUR_SUPABASE_URL"
VITE_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"