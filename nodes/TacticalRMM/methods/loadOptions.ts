import { ILoadOptionsFunctions, INodePropertyOptions } from 'n8n-workflow';
import { getResourcesForGroup } from '../resourceGroups';
import { apiRequest } from '../transport';

export const tacticalRmmLoadOptions = {
	getResources: async function (
		this: ILoadOptionsFunctions,
	): Promise<INodePropertyOptions[]> {
		const resourceGroup = this.getCurrentNodeParameter('resourceGroup') as string;
		return getResourcesForGroup(resourceGroup);
	},

	getClients: async function (this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
		const responseData = await apiRequest.call(this, 'GET', '/clients/', {});

		if (!Array.isArray(responseData)) {
			return [];
		}

		const returnData: INodePropertyOptions[] = [];
		for (const data of responseData) {
			if (data.id && data.name) {
				returnData.push({
					name: data.name as string,
					value: data.id as string | number,
				});
			}
		}

		return returnData.sort((a, b) => String(a.name).localeCompare(String(b.name)));
	},

	getCustomFields: async function (this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
		const resource = this.getCurrentNodeParameter('resource') as string;

		const modelMapping: Record<string, string> = {
			agent: 'agent',
			client: 'client',
			site: 'site',
		};

		const model = modelMapping[resource];
		if (!model) {
			return [];
		}

		try {
			const responseData = await apiRequest.call(this, 'GET', '/core/customfields/', {}, { model });

			if (!Array.isArray(responseData)) {
				return [];
			}

			const returnData: INodePropertyOptions[] = [];
			for (const field of responseData) {
				if (field.id && field.name) {
					returnData.push({
						name: field.name as string,
						value: field.name as string,
						description: (field.type as string) || '',
					});
				}
			}

			return returnData.sort((a, b) => String(a.name).localeCompare(String(b.name)));
		} catch {
			return [];
		}
	},
};
