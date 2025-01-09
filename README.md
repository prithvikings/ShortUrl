# Short URL Mini Project

This is a simple URL shortener application built using Node.js, Express, and MongoDB. The project generates short, unique URLs for long redirect URLs, tracks the number of clicks, and maintains a visit history with timestamps.

## Features

- Generate short URLs for any long URL.
- Redirect users to the original URL when they use the short URL.
- Track the number of clicks for each short URL.
- Log the timestamp of each visit.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Unique ID Generation**: nanoid

