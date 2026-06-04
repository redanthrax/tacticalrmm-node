import { n8nCommunityNodesPlugin } from '@n8n/eslint-plugin-community-nodes';
import tsParser from '@typescript-eslint/parser';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		ignores: ['**/dist/**', '**/node_modules/**', '**/*.js', 'scripts/**'],
	},
	n8nCommunityNodesPlugin.configs.recommended,
	{
		files: ['**/*.ts'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: './tsconfig.json',
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
	},
	{
		files: ['package.json'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: './tsconfig.json',
				extraFileExtensions: ['.json'],
			},
		},
	},
	{
		files: ['**/actions/customApi/normalizeEndpoint.ts'],
		rules: {
			'@n8n/community-nodes/require-node-api-error': 'off',
		},
	},
];
