import {
	IExecuteFunctions,
	IHookFunctions,
	JsonObject,
	NodeApiError,
	NodeOperationError,
} from 'n8n-workflow';

type NodeErrorContext = IExecuteFunctions | IHookFunctions;

export function toNodeApiError(
	ctx: NodeErrorContext,
	error: unknown,
	options?: { itemIndex?: number; message?: string },
): NodeApiError {
	if (error instanceof NodeApiError) {
		if (options?.itemIndex !== undefined && error.context) {
			error.context.itemIndex = options.itemIndex;
		}
		return error;
	}

	if (error instanceof NodeOperationError) {
		return error as unknown as NodeApiError;
	}

	return new NodeApiError(ctx.getNode(), error as JsonObject, options);
}
