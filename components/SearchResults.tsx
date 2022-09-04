import { ReactNode, useMemo } from "react";
import { List, ListRowRenderer } from "react-virtualized";

import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
	totalPrice: number;
	results: Array<{
		id: number;
		price: number;
		priceFormatted: string;
		title: string;
	}>;
	onAddToWishList: (id: number) => void;
}

export function SearchResults({
	totalPrice,
	results,
	onAddToWishList,
}: SearchResultsProps) {
	const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
		if (!results[index]) {
			return <div />;
		}

		return (
			<div key={key} style={style}>
				<ProductItem
					product={results[index]}
					onAddToWishList={onAddToWishList}
				/>
			</div>
		);
	};

	return (
		<div>
			<h2>{totalPrice}</h2>

			<List
				height={300}
				rowHeight={30}
				width={900}
				overscanRowCount={5}
				rowCount={results.length}
				rowRenderer={rowRenderer}
			/>
		</div>
	);
}

/**
 * Poderia usar o AutoSizer para ter um tamanho dinâmico
 */

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
