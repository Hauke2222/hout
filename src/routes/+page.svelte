<main>
	<nav>
		<a href="">winkel</a>
		<span> | </span>
		<a href="mailto:hauke222222@gmail.com">e-mail</a>
	</nav>
	<h1>Hout</h1>
	<h2>Houtsnijwerk</h2>
	<div class="grid-container">
		<img src="IMG_7939.jpeg" alt="houten paard" />
		<img src="IMG_7938.jpeg" alt="houten paard" />
		<img src="IMG_7940.jpeg" alt="houten eland" />
		<img src="IMG_7942.jpeg" alt="houten eland" />
		<img src="IMG_7944.jpeg" alt="houten judo techniek" />

		<img src="/darktable_exported/IMG_2633.jpg" alt="houten eekhoorn" />
	</div>
	<h2>Overig</h2>
	<div class="grid-container">
		<img src="/darktable_exported/IMG_2635.jpg" alt="houten hamer" />
		<img src="/darktable_exported/IMG_2638.jpg" alt="houten krukje" />
	</div>
</main>

<style>
	nav {
		font-size: 1rem;
		margin: 2rem 0 0;
	}
	img {
		padding: 6px;
		margin: auto 0;
		width: 250px;
		height: 250px;
		object-fit: contain;
	}
	.grid-container {
		/* gap: 10px; */
		display: grid;
		justify-items: center;
		grid-template-columns: repeat(2, 1fr); /* creates 2 columns with equal width */
	}

	html {
		background-color: #fffff8;
		font-size: 16px;
	}

	main {
		margin: 0 auto;
		max-width: 45rem;
		padding: 0 6px;
		font-family: Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif;
		color: #111;
	}

	a,
	a:visited {
		color: #a00;
		text-decoration: underline 1px;
		text-underline-offset: 2px;
	}

	h1,
	h2,
	h3 {
		font-weight: 400;
		line-height: 1;
	}

	h1 {
		margin-top: 4rem;
		margin-bottom: 1.5rem;
		font-size: 3.2rem;
	}

	h2 {
		font-style: italic;
		margin-top: 2.1rem;
		margin-bottom: 1rem;
		font-size: 2.2rem;
	}

	h3 {
		font-style: italic;
		font-size: 1.7rem;
		margin-top: 2rem;
		margin-bottom: 1.4rem;
	}

	p {
		font-size: 1.4rem;
		line-height: 2rem;
		margin-top: 1.4rem;
		margin-bottom: 1.4rem;
	}
</style>
