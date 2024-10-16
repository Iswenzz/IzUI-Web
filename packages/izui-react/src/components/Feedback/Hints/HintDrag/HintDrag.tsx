import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Tooltip, TooltipProps } from "@mui/material";
import dragIcon from "@izui/assets/images/icons/hand-drag.png";

import { Forward, Image } from "@/components";
import { preventDefault } from "@/utils/events";

/**
 * Drag me hint.
 */
const HintDrag: FC<Partial<TooltipProps>> = props => {
	const { t } = useTranslation();

	return (
		<Tooltip
			placement="right"
			title={t("PROJECT_TOOLTIP_DRAG")}
			disableFocusListener
			disableTouchListener
			arrow
			{...props}
		>
			<Forward>
				<Image
					onDragStart={preventDefault}
					alt="drag"
					src={dragIcon}
					width={64}
					height={64}
				/>
			</Forward>
		</Tooltip>
	);
};

export default HintDrag;
