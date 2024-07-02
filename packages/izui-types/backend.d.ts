import { DocumentNode } from "graphql";
import { Request, Response } from "express";

declare global {
	export type Context = {
		req: Request;
		res: Response;
	};
}

declare module "*.graphql" {
	const content: DocumentNode;
	export default content;
}
