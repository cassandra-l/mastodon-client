# Mastodon client

A web client for the federated social network, Mastodon, to experiment with building a single client that can switch between federated backends to interact with the same federated social network.

Built with React Router as a full-stack framework to provide features like server-side rendering (for the sake of SEO and other benefits) and Tailwind for styling.

👉 Feel free to play around with it and hope you have fun! ✨

## Developing

Install the dependencies:

```bash
npm install
```

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

I'm currently deploying it on a CloudFlare worker because I'm familiar with that platform, but it can also be deployed as a Docker container like so:

```bash
docker build -t mastodon-client .

# Run the container
docker run -p 3000:3000 mastodon-client
```
