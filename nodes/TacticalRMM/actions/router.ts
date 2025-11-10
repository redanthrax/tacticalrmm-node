import { IExecuteFunctions } from 'n8n-workflow';

import {
	IDataObject,
	INodeExecutionData,
} from 'n8n-workflow';

import { TacticalRMM } from './Interfaces';

export async function router(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
	const items = this.getInputData();
	const operationResult: INodeExecutionData[] = [];
	let responseData: IDataObject | IDataObject[] = [];

	for (let i = 0; i < items.length; i++) {
		const resource = this.getNodeParameter<TacticalRMM>('resource', i);
		const operation = this.getNodeParameter('operation', i);

		const tacticalrmm = {
			resource,
			operation,
		} as TacticalRMM;

		try {
			let resourceModule;

			switch (tacticalrmm.resource) {
				case 'agent':
					resourceModule = await import('./agent');
					break;
				case 'alert':
					resourceModule = await import('./alert');
					break;
				case 'client':
					resourceModule = await import('./client');
					break;
				case 'site':
					resourceModule = await import('./site');
					break;
				case 'software':
					resourceModule = await import('./software');
					break;
				default:
					break;
			}

			if (resourceModule) {
				responseData = await (resourceModule as any)[tacticalrmm.operation].execute.call(this, i);
			}

			const executionData = this.helpers.returnJsonArray(responseData);
			operationResult.push(...executionData);
		} catch (err) {
			if (this.continueOnFail()) {
				operationResult.push({ json: this.getInputData(i)[0].json, error: err });
			} else {
				if (err.context) err.context.itemIndex = i;
				throw err;
			}
		}
	}

	return [operationResult];
}