import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
	results: Array<{
		id: number;
		price: number;
		title: string;
	}>;
}

export function SearchResults({ results }: SearchResultsProps) {
	const totalPrice = useMemo(() => {
		return results.reduce((total, product) => {
			return total + product.price;
		}, 0);
	}, [results]);

	return (
		<div>
			<h2>{totalPrice}</h2>

			{results.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
		</div>
	);
}

/**
 * Criar uma nova versão do componente
 * Comparar com a versão anterior
 * Se houverem alterações, vai atualizar o que alterou
 */

/**
 * Pure functional components
 * renders too often
 * re-renders with same props
 * medium to big size
 */

/**
 * useMemo / useCallback
 *
 * Cálculos pesados
 * Igualdade referencial (ao repassar a informação para um componente filho)
 */
