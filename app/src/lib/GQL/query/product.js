import { gql } from 'graphql-request';

export const ONE_PRODUCT = gql`
	query product($slug: String!, $key: String!) {
		product_one(slug: $slug, key: $key) {
			id
			value
			price {
				value
			}
			unit {
				value
			}
			text {
				value
			}
			image {
				hash
				alt
			}
			parent: parentable {
				... on Category {
					value
					slug
				}
			}
		}
	}
`;

export const ALL_PRODUCTS = gql`
	query all_product {
		product {
			id
			value
			slug
			price {
				id
				value
			}
			unit {
				value
			}
		}
	}
`;
