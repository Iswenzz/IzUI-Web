import { memo, useMemo, FC, Fragment, useState } from "react";
import { Collapse, Divider, Fab, Grid, Tab, Tabs, Tooltip } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import CodeIcon from "@mui/icons-material/Code";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { v4 as uuidv4 } from "uuid";

import { IFrame, Text, Image } from "@/components";

import DemoCode from "./DemoCode/DemoCode";
import scss from "./Demo.module.scss";

/**
 * Showcase a demo component.
 */
const Demo: FC<Props> = ({ demo, children, iframe = false }) => {
	const { previews = [], title = "", description = "", sandboxUrl, additionalComponent } = demo;
	const [codeCollapse, setCodeCollapse] = useState(false);
	const [iframeKey, setIframeKey] = useState(title || uuidv4());
	const [tabIndex, setTabIndex] = useState(0);

	const reloadIframe = () => setIframeKey(uuidv4());

	const handleTabChange = (_: React.SyntheticEvent<Element, Event>, value: number) =>
		setTabIndex(value);

	const View: FC<{ children: React.ReactNode }> = useMemo(
		() =>
			({ children }) =>
				iframe ? (
					<IFrame key={iframeKey} size={{ width: 820, height: 450 }} title={iframeKey}>
						{children}
					</IFrame>
				) : (
					<Fragment>{children}</Fragment>
				),
		[iframe, iframeKey]
	);

	if (!children) return null;

	return (
		<Grid
			container
			component="article"
			justifyContent="flex-start"
			alignItems="center"
			direction="column"
		>
			<Text id={title || uuidv4()} className="poiret-h1" variant="h2">
				{title}
			</Text>
			<Divider className={scss.divider} />
			<Text className={scss.description} variant="subtitle1">
				{description}
			</Text>

			<section className={scss.view}>
				<View>{children}</View>
			</section>

			<Grid container className={scss.buttons} justifyContent="flex-end" alignItems="center">
				<Tooltip title="Code">
					<Fab
						className={scss.fab}
						color="secondary"
						onClick={() => setCodeCollapse(!codeCollapse)}
					>
						<CodeIcon />
					</Fab>
				</Tooltip>
				{sandboxUrl && (
					<Tooltip title="Sandbox">
						<Fab href={sandboxUrl} className={scss.fab} color="secondary">
							<OpenInNewIcon />
						</Fab>
					</Tooltip>
				)}
				{iframe && (
					<Tooltip title="Replay">
						<Fab className={scss.fab} color="secondary" onClick={reloadIframe}>
							<ReplayIcon />
						</Fab>
					</Tooltip>
				)}
			</Grid>

			<Collapse className={scss.collapse} component="section" in={codeCollapse}>
				<Tabs value={tabIndex} onChange={handleTabChange}>
					{previews?.map((preview, index) => (
						<Tooltip
							key={`${preview.label}${index}`}
							title={preview.label}
							placement="top"
						>
							<Tab
								className={scss.tab}
								icon={<Image width={32} height={32} src={preview.icon} />}
							/>
						</Tooltip>
					))}
				</Tabs>
				<DemoCode key={previews[tabIndex].label} preview={previews[tabIndex]} />
			</Collapse>
			{additionalComponent}
		</Grid>
	);
};

type Props = {
	children?: React.ReactElement;
	demo: DemoSource;
	iframe?: boolean;
};

export type DemoPreview = {
	icon: string;
	label: string;
	language: string;
	source: string;
};

export type DemoSource = {
	title?: string;
	description?: string;
	sandboxUrl?: string;
	previews?: DemoPreview[];
	iframe?: boolean;
	render?: React.ReactElement;
	additionalComponent?: React.ReactElement;
};

export type DemoSources = {
	sections?: string[];
	sources: DemoSource[];
};

export default memo(Demo);
