import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AKQA Tech Challenge</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src={'images/logo.png'} />
        <h1 className={styles.title}>
          Tech Challenge
        </h1>

        <p className={styles.description}>
          This is a basic Next JS with Typescript setup. Clone this repo and work your way through the tasks below.
          Be mindful to...
        </p>
        <ul className={styles.tasks}>
          <li>use Typescript and React best practices where appropriate</li>
          <li>check the solutions work on mobile and desktop resolutions</li>
        </ul>

        <h1>
          Tasks
        </h1>
        <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <h2>1. Build a component  &rarr;</h2>
            <p>Link through to a new page within this project which showcases a component.
              The component should use the blob svg in the <code className={styles.code}>icons/shapes.tsx</code>
              file as a mask for an image and some text. Text should be centered over the image and the size
              of the svg should respond to the quantity of text. The image, text, and text colour
              should be props.</p>
            {/* 
              Here we are looking to see if the candidate understands component design, Typescript 
              fundamentals, and css techniques.  Will they define the prop types correctly? 
              Can they pass a colour through to the styles? 
              Can they mask an image and have the mask resize to the text contents?
              */}
          </a>
          <a href="/checkout" className={styles.card}>
            <h2>2. Configure a checkout &rarr;</h2>
            <p>The checkout page is currently broken with errors. You should fix these errors and configure some
              mock data for the page. The page should show a list of items a user can add to their basket.
              They should be able to increase and decrease the quantity of each item, with the individual total
              and overall total being calculated. The user should be able to clear the cart of all items,
              with the totals updating. When the user clicks 'Buy' you should simulate an api post with a summary
              of the data. Add some styling to make the page more visually appealing.</p>
            {/* 
              Here we first see if they can fix some missing data errors. Will they defensively code, or just provide some
              data? The map has no index set, and the first element has no key, will they set this? Then general 
              configuration of the checkout.
              */}
          </a>
          <a
            href="/"
            className={styles.card}
          >
            <h2>3. Display the basket  &rarr;</h2>
            <p>
              The checkout information should be displayed somewhere on this page.
              The user should be able to add and remove items with the checkout page,
              and find the quantity and totals updated on this page too.
            </p>
            {/* 
            Here we see how they tackle the storing of data throughout the app. Will they use Redux, 
            or some other solution?
            */}
          </a>
          <a
            href="/"
            className={styles.card}
          >
            <h2>4. Beautify &rarr;</h2>
            <p>Add some animations and styling of your choice to this page.
              The animations should only happen when the element is in the viewport.</p>
            {/* 
              Here we are looking to see some general creativity, but also will they implement a useRef 
              with an intersection observer to know whether the element is in the viewport or not?
              */}
          </a>
        </div>
        <h1>Finished? Next steps...</h1>
        <ul className={styles.tasks}>
          <li>update the readme file with any new relevant information</li>
          <li>deploy the project to a free service of your choice</li>
          <li>when you're ready create a Pull Request </li>
          <li>include a link to the deployed project and your contact details</li>
        </ul>
      </main >

      <footer className={styles.footer}>
      </footer>
    </div >
  )
}
