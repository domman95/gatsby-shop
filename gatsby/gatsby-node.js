const path = require('path');

async function turnDummiesIntoPages({ graphql, actions } ) {
	const dummyTemplates = path.resolve("./src/templates/Dumy.js");
	const { data } = await graphql(`
		query {
			dumies: allSanityDumy {
				nodes {
					name
					slug {
							current
					}
				}
			}
		}
	`)
	data.dumies.nodes.forEach(item => {
		actions.createPage({
			path: `/${item.slug.current}`,
			component: dummyTemplates,
			context: {
				slug: item.slug.current
			}
		})
	})
}

exports.createPages = async (params) => {
	await turnDummiesIntoPages(params);
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
	actions.setWebpackConfig({
		resolve: {
			modules: [path.resolve(__dirname, 'src'), 'node_modules'],
			alias: {
				'~': path.resolve(__dirname, 'src'),
			},
		},
	})
}