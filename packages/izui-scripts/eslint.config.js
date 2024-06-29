import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	prettier,
	{
		rules: {
			"eol-last": "error",
			"no-trailing-spaces": "error",
			"no-empty": "off",
			"@typescript-eslint/explicit-function-return-type": "off",
			"@typescript-eslint/no-unused-vars": "warn",
			"@typescript-eslint/no-var-requires": "off",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/ban-types": "off",
			"@typescript-eslint/quotes": ["error", "double"],
			"@typescript-eslint/semi": ["error", "always"]
		}
	}
);
