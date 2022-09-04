import type { NextPage } from "next";
import { FormEvent, useCallback, useState } from "react";

import { SearchResults } from "../components/SearchResults";

type Product = {
	id: number;
	price: number;
	title: string;
	formattedPrice?: string;
};

type Results = {
	totalPrice: number;
	data: Product[];
};

const Home: NextPage = () => {
	const [search, setSearch] = useState("");
	const [results, setResults] = useState<Results>({
		totalPrice: 0,
		data: [],
	});

	async function handleSearch(event: FormEvent) {
		event.preventDefault();

		if (!search.trim()) {
			return;
		}

		const response = await fetch(
			`http://localhost:3333/products?q=${search}`
		);

		const data = await response.json();

		const formatter = new Intl.NumberFormat("pt-BR", {
			style: "currency",
			currency: "BRL",
		});

		const products = data.map((product: Product) => ({
			...product,
			priceFormatted: formatter.format(product.price),
		}));

		const totalPrice = data.reduce((total, product) => {
			return total + product.price;
		}, 0);

		setResults({ data: products, totalPrice });
	}

	const addToWishList = useCallback((id: number) => {
		console.log(id);
	}, []);

	return (
		<div>
			<h1>Search</h1>

			<form onSubmit={handleSearch}>
				<input
					type="text"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>

				<button type="submit">Buscar</button>
			</form>

			<SearchResults
				results={results.data}
				totalPrice={results.totalPrice}
				onAddToWishList={addToWishList}
			/>
		</div>
	);
};

/**
 * useCallback serve para manter a igualdade referencial nas funções
 * quando são passadas entre os componentes
 * (prop drilling)
 */

export default Home;
