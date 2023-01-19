import { gql } from 'graphql-request';

export const ONE_CATALOG = gql`
	query catalog($slug: String!, $key: String!) {
		catalog_one(slug: $slug, key: $key) {
			value
			rubric {
				value
				slug
			}
			text {
				value
			}
		}
	}
`;
