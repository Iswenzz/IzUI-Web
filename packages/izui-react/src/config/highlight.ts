import hljs from "highlight.js/lib/core";
import type { LanguageFn } from "highlight.js";

import typescript from "highlight.js/lib/languages/typescript";
import javascript from "highlight.js/lib/languages/javascript";
import java from "highlight.js/lib/languages/java";
import c from "highlight.js/lib/languages/c";
import cpp from "highlight.js/lib/languages/cpp";
import csharp from "highlight.js/lib/languages/csharp";
import json from "highlight.js/lib/languages/json";
import xml from "highlight.js/lib/languages/xml";
import yaml from "highlight.js/lib/languages/yaml";
import python from "highlight.js/lib/languages/python";
import php from "highlight.js/lib/languages/php";
import bash from "highlight.js/lib/languages/bash";
import shell from "highlight.js/lib/languages/shell";
import powershell from "highlight.js/lib/languages/powershell";
import cmake from "highlight.js/lib/languages/cmake";
import makefile from "highlight.js/lib/languages/makefile";
import css from "highlight.js/lib/languages/css";
import scss from "highlight.js/lib/languages/scss";

export const languages: Record<string, LanguageFn> = {
	typescript,
	javascript,
	java,
	c,
	cpp,
	csharp,
	json,
	xml,
	yaml,
	python,
	php,
	bash,
	shell,
	powershell,
	cmake,
	makefile,
	css,
	scss
};

// Register configured languages
Object.entries(languages).forEach(([languageName, language]) =>
	hljs.registerLanguage(languageName, language)
);
