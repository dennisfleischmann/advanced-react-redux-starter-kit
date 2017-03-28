# Synopsis

This project shows a possible solution how application developer and UI developer can work together in a way that the tasks at hand are addressed appropriately.

<p>The user interface developer concentrates on the look and feel of the website and creates new React components.</p>

<p>The application developer concentrates on the business logic and uses the React components, created by the UI developer and adds the business logic by connecting them with Redux.</p>

# Motivation

<p>Many teams and projects using React and/or Redux are mixing UI and application logic. I don't think this is a good idea. Since react and finally redux are born, I think we need a new way to approach UI and Application logic.</p>

<p>This project shows that it is possible to separate the tasks and addresses the responsibilities appropriately.</p>

# Setup / Installation

Clone the project

<pre><code>git clone https://github.com/dennisfleischmann/advanced-react-redux-starter-kit.git
cd advanced-react-redux-starter-kit
</code></pre>

Install Packages

If using yarn (recommended) run

<pre><code>yarn install</code></pre>

If using npm run

<pre><code>npm install</code></pre>

# Usage for UI developer, creating, scratching and styling new React components

<p>UI developer use the well known @kadira/storybook-ui to "scratch" and create awesome reusable React components.

<p>Run the development for creating new React components</p>

<pre><code>npm run storybook
open http://localhost:9001/
</code></pre>

<p>Create new components for the application developer</p>

<code>/src/components/atoms/YOUR_NEW_REACT_ATOM_COMPONENT.jsx</code>

or

<code>/src/components/YOUR_NEW_REACT_COMPONENT.jsx</code>

# Usage for application developer, developing business logic

<p>Run the development server and open the page</p>

<pre><code>npm start
open http://localhost:9000/webpack-dev-server/
</code></pre>

<p>Create new container by using already existing components, created by the UI developer</p>

<code>/src/container/YOUR_NEW_CONTAINER.jsx</code>

# Example

In progress...

PREVIEW

<a href="https://github.com/dennisfleischmann/stocks-watchlist">Stocks Watchlist</a>

# License

MIT
