# Usage

Access a terminal, change directories into /mifw/, and install dependencies

    cd mifw
    npm install

Compile code

    npm run dev

# Installation

Add this snippet to footer.php:

    <script src="<?php echo get_stylesheet_directory_uri(); ?>/mifw/dist/main.js"></script>

Update the site url in .env.js

    exports.SITE_URL = "mifw.local"
