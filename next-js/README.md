Routing
	Pages folder has routes - /pages/home.tsx or /pages/home/index.tsx
	Nested routes - /pages/home/first/index.tsx
	Dynamic routes - /pages/list/[id]/index.js
	Layout - 
		Layout.js
		import Navbar from './navbar'import Footer from './footer' export default function Layout({ children }) {return(<><Navbar /><main>{children}</main><Footer /></>)}
		
		_app.js
		<Layout><Component {...pageProps} /></Layout>
		
	Data fetching - inside layout, we can fetch data on client-side
		Because this file is not a Page, you cannot use getStaticProps or getServerSideProps currently.
	Linking and Navigating -
		import Link from 'next/link'
		function Home() {
      return (<ul><li><Link href="/">Home</Link></li><li><Link href="/about">About Us</Link></li><li><Link href="/blog/hello-world">Blog Post</Link></li></ul>)
    }
		export default Home
		
		<Link href={{pathname: '/blog/[slug]', query: { slug: post.slug }}}>{post.title}</Link>

	Shallow routing -
		Shallow routing allows you to change the URL without running data fetching methods again, that includes getServerSideProps, getStaticProps, and getInitialProps.
	Redirect -
		Router.push(""), router
	To override the default App, create the file pages/_app as shown below:
		import type { AppProps } from 'next/app'
		 
		export default function MyApp({ Component, pageProps }: AppProps) {
		  return <Component {...pageProps} />
		}
		The Component prop is the active page, so whenever you navigate between routes, Component will change to the new page. Therefore, any props you send to Component will be received by the page.
	Custom Document -
		A custom Document can update the <html> and <body> tags used to render a Page. To override the default Document, create the file pages/_document as shown below:
		import { Html, Head, Main, NextScript } from 'next/document'
		 
		export default function Document() {
		  return (
		    <Html lang="en">
		      <Head />
		      <body>
		        <Main />
		        <NextScript />
		      </body>
		    </Html>
		  )
		}
	API Routes - 
		API routes provide a solution to build a public API with Next.js. Any file inside the folder pages/api is mapped to /api/* and will be treated as an API endpoint instead of a page.
		They are server-side only bundles and won't increase your client-side bundle size.
	Rendering -
		By default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.
		Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive (this process is called hydration in React).
	Pre-rendering - 
		Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering. The difference is in when it generates the HTML for a page.
			§ Static Generation: The HTML is generated at build time and will be reused on each request.
			§ Server-side Rendering: The HTML is generated on each request.
	Server-side Rendering (SSR) -
		If a page uses Server-side Rendering, the page HTML is generated on each request.
		To use Server-side Rendering for a page, you need to export an async function called getServerSideProps. This function will be called by the server on every request.
		For example, suppose that your page needs to pre-render frequently updated data (fetched from an external API). You can write getServerSideProps which fetches this data and passes it to Page like below:
		export default function Page({ data }) {
		  // Render data...
		}
		 
		// This gets called on every request
		export async function getServerSideProps() {
		  // Fetch data from external API
		  const res = await fetch(`https://.../data`)
		  const data = await res.json()
		 
		  // Pass data to the page via props
		  return { props: { data } }
		}
	Static Site Generation (SSG) -
		If a page uses Static Generation, the page HTML is generated at build time. That means in production, the page HTML is generated when you run next build. This HTML will then be reused on each request. It can be cached by a CDN.

Server rendering strategies:
	1) Static Rendering - With Static Rendering, routes are rendered at build time, or in the background after data revalidation.
		a. Bundle size of resources sent to user also reduces.
	2) Dynamic rendering - With Dynamic Rendering, routes are rendered for each user at request time.
  3) Streaming - using Suspense component to show loading component


All the components in the app folder are server components.
To make client component add "use client" on the top of the page or for interactivity on the page, localStorage.
revalidatePath from "next/cache".

Export const dynamic = "force-dynamic"
	This option is equivalent to:
		• getServerSideProps() in the pages directory.
		• Setting the option of every fetch() request in a layout or page to { cache: 'no store',next:{ revalidate: 0 } }.
		• Setting the segment config to export const fetchCache = 'force-no-store'

Data cache for fetch requests data.
Full route cache - all the components in the route will be cached as a result
When we need to use hooks or add interactivity in the component then we need to mark "use client"
SSR - Runs updated server component every time
SSG - By default, runs updated and then stores the data/content
ISR - Dynamic content in static sites - { next: {revalidate: 10 } }

Advantages of NextJS
	• Easy crawling & Indexing by SEO for server side rendering
	• It uses in-built file based routing system - App router
	• API routes - serverless functions - route.js
  • Automatic code splitting


